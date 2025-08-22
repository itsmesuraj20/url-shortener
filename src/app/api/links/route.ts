import { prisma } from "@/lib/db";
import { getServerAuthSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { createLinkSchema } from "@/lib/validation";
import { generateSlug } from "@/lib/slug";
import argon2 from "argon2";
import { hit } from "@/lib/ratelimit";

export async function POST(req: Request) {
    const session = await getServerAuthSession();
    const isGuest = !session?.user;
    const body = await req.json().catch(() => null);
    const parse = createLinkSchema.safeParse(body);
    if (!parse.success) {
        return NextResponse.json({ error: parse.error.flatten() }, { status: 400 });
    }
    const { targetUrl, slug, expiresAt, password, tags } = parse.data;

    if (isGuest) {
        const ip = (req.headers.get("x-forwarded-for") ?? "guest").split(",")[0];
        const res = await hit(`create:${ip}`, 5, 86400);
        if (!res.success) return NextResponse.json({ error: "rate_limited" }, { status: 429 });
    }

    let finalSlug = slug ?? generateSlug();
    let attempts = 0;
    while (attempts < 5) {
        const exists = await prisma.link.findUnique({ where: { slug: finalSlug } });
        if (!exists) break;
        finalSlug = generateSlug();
        attempts++;
    }
    if (attempts >= 5) {
        return NextResponse.json({ error: "Could not generate unique slug" }, { status: 500 });
    }

    const link = await prisma.link.create({
        data: {
            userId: session?.user?.id as string | undefined,
            slug: finalSlug,
            targetUrl,
            expiresAt: expiresAt ? new Date(expiresAt) : null,
            passwordHash: password ? await argon2.hash(password) : null,
            tags: tags ? (tags as any) : undefined,
        },
    });

    return NextResponse.json(link, { status: 201 });
}

export async function GET() {
    const session = await getServerAuthSession();
    if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const links = await prisma.link.findMany({ where: { userId: session.user.id as string } });
    return NextResponse.json(links);
}


