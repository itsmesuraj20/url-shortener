import { prisma } from "@/lib/db";
import QRCode from "qrcode";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const link = await prisma.link.findUnique({ where: { id } });
    if (!link) return new Response("not_found", { status: 404 });
    const { searchParams } = new URL(req.url);
    const format = searchParams.get("format") === "svg" ? "svg" : "png";
    const url = `${process.env.NEXTAUTH_URL ?? "http://localhost:3000"}/${link.slug}`;
    if (format === "svg") {
        const svg = await QRCode.toString(url, { type: "svg", width: 512 });
        return new Response(svg, { headers: { "content-type": "image/svg+xml" } });
    }
    const png = await QRCode.toBuffer(url, { type: "png", width: 512 });
    return new Response(new Uint8Array(png), { headers: { "content-type": "image/png" } });
}


