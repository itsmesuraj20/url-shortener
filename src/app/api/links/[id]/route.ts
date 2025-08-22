import { prisma } from "@/lib/db";
import { getServerAuthSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { z } from "zod";
import argon2 from "argon2";
import { cacheDel } from "@/lib/cache";

const updateSchema = z.object({
    targetUrl: z.string().url().optional(),
    slug: z.string().min(3).max(64).regex(/^[a-zA-Z0-9-_]+$/).optional(),
    expiresAt: z.string().datetime().optional(),
    password: z.string().min(6).max(128).nullable().optional(),
    active: z.boolean().optional(),
});

export async function PATCH(_req: Request, { params }: { params: { id: string } }) {
    const session = await getServerAuthSession();
    if (!session?.user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    const body = await _req.json().catch(() => null);
    const parsed = updateSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    const link = await prisma.link.findUnique({ where: { id: params.id } });
    if (!link) return NextResponse.json({ error: "not_found" }, { status: 404 });
    if (link.userId && link.userId !== (session.user.id as string))
        return NextResponse.json({ error: "forbidden" }, { status: 403 });

    const data: any = {};
    if (parsed.data.targetUrl) data.targetUrl = parsed.data.targetUrl;
    if (parsed.data.expiresAt) data.expiresAt = new Date(parsed.data.expiresAt);
    if (typeof parsed.data.active === "boolean") data.active = parsed.data.active;
    if (parsed.data.password !== undefined) {
        data.passwordHash = parsed.data.password ? await argon2.hash(parsed.data.password) : null;
    }
    if (parsed.data.slug && parsed.data.slug !== link.slug) {
        // ensure unique
        const exists = await prisma.link.findUnique({ where: { slug: parsed.data.slug } });
        if (exists) return NextResponse.json({ error: "slug_exists" }, { status: 409 });
        data.slug = parsed.data.slug;
    }

    const updated = await prisma.link.update({ where: { id: params.id }, data });
    await cacheDel(`slug:${link.slug}`);
    if (data.slug) await cacheDel(`slug:${data.slug}`);
    return NextResponse.json(updated);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    const session = await getServerAuthSession();
    if (!session?.user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    const link = await prisma.link.findUnique({ where: { id: params.id } });
    if (!link) return NextResponse.json({ error: "not_found" }, { status: 404 });
    if (link.userId && link.userId !== (session.user.id as string))
        return NextResponse.json({ error: "forbidden" }, { status: 403 });
    const deleted = await prisma.link.update({ where: { id: params.id }, data: { active: false } });
    await cacheDel(`slug:${link.slug}`);
    return NextResponse.json(deleted);
}


