import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import argon2 from "argon2";

export async function POST(req: Request) {
    const { slug, password } = await req.json().catch(() => ({}));
    if (!slug || !password) return NextResponse.json({ error: "bad_request" }, { status: 400 });
    const link = await prisma.link.findUnique({ where: { slug } });
    if (!link || !link.passwordHash) return NextResponse.json({ error: "not_found" }, { status: 404 });
    const ok = await argon2.verify(link.passwordHash, password);
    if (!ok) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    const res = NextResponse.json({ ok: true });
    res.cookies.set(`unlock_${link.id}`, "1", { httpOnly: true, path: "/", maxAge: 3600 });
    return res;
}


