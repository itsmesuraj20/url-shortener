import { prisma } from "@/lib/db";
import { getServerAuthSession } from "@/lib/auth";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const session = await getServerAuthSession();
    if (!session?.user) return new Response("unauthorized", { status: 401 });
    const link = await prisma.link.findUnique({ where: { id } });
    if (!link) return new Response("not_found", { status: 404 });
    if (link.userId && link.userId !== (session.user.id as string))
        return new Response("forbidden", { status: 403 });
    const events = await prisma.event.findMany({ where: { linkId: link.id } });
    let csv = "ts,ipHash,country,referrer,ua,device,os,browser\n";
    for (const e of events) {
        csv += `${e.ts.toISOString()},${e.ipHash},${e.country ?? ""},${e.referrer ?? ""},${(e.ua ?? "").replace(/,/g, " ")},${e.device ?? ""},${e.os ?? ""},${e.browser ?? ""}\n`;
    }
    return new Response(csv, { headers: { "content-type": "text/csv" } });
}


