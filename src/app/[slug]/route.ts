export const runtime = "edge";

import { NextResponse, type NextRequest } from "next/server";
import { UAParser } from "ua-parser-js";
import { hashIp } from "@/lib/crypto";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    if (!slug) return NextResponse.next();

    const resolveRes = await fetch(new URL(`/api/resolve?slug=${encodeURIComponent(slug)}`, req.url));
    if (resolveRes.status !== 200) return NextResponse.rewrite(new URL("/_not-found", req.url));
    const meta = (await resolveRes.json()) as { id: string; targetUrl: string; hasPassword: boolean };

    if (meta.hasPassword) {
        const unlocked = req.cookies.get(`unlock_${meta.id}`)?.value;
        if (unlocked !== "1") {
            const lockUrl = new URL(`/lock/${slug}`, req.url);
            return NextResponse.redirect(lockUrl);
        }
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "0.0.0.0";
    const ua = req.headers.get("user-agent") ?? "";
    const ref = req.headers.get("referer") ?? undefined;
    const country = req.headers.get("x-vercel-ip-country") ?? undefined;
    const ipHash = hashIp(ip, ua);

    try {
        const parser = new UAParser(ua);
        const result = parser.getResult();
        fetch(new URL("/api/events", req.url), {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                linkId: meta.id,
                ipHash,
                country,
                referrer: ref,
                ua,
                device: result.device.type ?? undefined,
                os: result.os.name ?? undefined,
                browser: result.browser.name ?? undefined,
            }),
        }).catch(() => { });
    } catch { }

    return NextResponse.redirect(meta.targetUrl, 301);
}


