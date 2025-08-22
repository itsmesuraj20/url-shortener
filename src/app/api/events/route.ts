import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

const bodySchema = {
    parse: (b: any) => {
        if (!b || typeof b !== "object") throw new Error("bad body");
        if (typeof b.linkId !== "string" || typeof b.ipHash !== "string") throw new Error("bad body");
        return b as {
            linkId: string;
            ipHash: string;
            country?: string;
            referrer?: string;
            ua?: string;
            device?: string;
            os?: string;
            browser?: string;
        };
    },
};

export async function POST(req: Request) {
    try {
        const data = bodySchema.parse(await req.json());
        await prisma.event.create({
            data: {
                linkId: data.linkId,
                ipHash: data.ipHash,
                country: data.country,
                referrer: data.referrer,
                ua: data.ua,
                device: data.device,
                os: data.os,
                browser: data.browser,
            },
        });
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ ok: false }, { status: 400 });
    }
}


