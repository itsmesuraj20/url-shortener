import { NextResponse, type NextRequest } from "next/server";
import { UAParser } from "ua-parser-js";
import { hashIp } from "@/lib/crypto";
import { hit } from "@/lib/ratelimit";

export const config = {
    matcher: ["/((?!api|_next|favicon.ico|sign-in|lock).*)"],
};

export async function middleware(req: NextRequest) {
    const url = req.nextUrl;
    // Only handle top-level slugs (no slash)
    const pathname = url.pathname.replace(/^\/+/, "");
    if (!pathname || pathname.includes("/")) return NextResponse.next();

    // Resolve slug
    const resolveRes = await fetch(new URL(`/api/resolve?slug=${encodeURIComponent(pathname)}`, req.url), {
        headers: { "x-internal": "1" },
    });
    if (resolveRes.status !== 200) return NextResponse.next();
    const meta = (await resolveRes.json()) as { id: string; targetUrl: string; hasPassword: boolean };

    // Password protection: redirect to lock page if missing cookie
    if (meta.hasPassword) {
        const unlocked = req.cookies.get(`unlock_${meta.id}`)?.value;
        if (unlocked !== "1") {
            const lockUrl = req.nextUrl.clone();
            lockUrl.pathname = `/lock/${pathname}`;
            return NextResponse.redirect(lockUrl);
        }
    }

    // De-dupe and dispatch event
    const ip = req.ip ?? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "0.0.0.0";
    const ua = req.headers.get("user-agent") ?? "";
    const ref = req.headers.get("referer") ?? undefined;
    const country = req.geo?.country ?? req.headers.get("x-vercel-ip-country") ?? undefined;
    const ipHash = hashIp(ip, ua);

    const dedupeKey = `hit:${pathname}:${ipHash}`;
    const ok = await hit(dedupeKey, 1, 10);
    if (ok.success) {
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
    }

    return NextResponse.redirect(meta.targetUrl, 301);
}


