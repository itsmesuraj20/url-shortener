import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { cacheGet, cacheSet } from "@/lib/cache";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });
    const cacheKey = `slug:${slug}`;
    const cached = await cacheGet<any>(cacheKey);
    if (cached) return NextResponse.json(cached);
    const link = await prisma.link.findUnique({ where: { slug } });
    if (!link || !link.active || (link.expiresAt && link.expiresAt < new Date()))
        return NextResponse.json({ error: "not_found" }, { status: 404 });
    const payload = {
        id: link.id,
        slug: link.slug,
        targetUrl: link.targetUrl,
        hasPassword: Boolean(link.passwordHash),
    };
    await cacheSet(cacheKey, payload, 60);
    return NextResponse.json(payload);
}


