import { prisma } from "@/lib/db";
import { getServerAuthSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { aggregateEvents } from "@/lib/analytics";

function startDate(range: string | null): Date {
    const now = new Date();
    const d = new Date(now);
    if (range === "90d") d.setDate(d.getDate() - 90);
    else d.setDate(d.getDate() - 30);
    return d;
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerAuthSession();
    if (!session?.user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    const link = await prisma.link.findUnique({ where: { id: params.id } });
    if (!link) return NextResponse.json({ error: "not_found" }, { status: 404 });
    if (link.userId && link.userId !== (session.user.id as string))
        return NextResponse.json({ error: "forbidden" }, { status: 403 });

    const { searchParams } = new URL(req.url);
    const range = searchParams.get("range");
    const from = startDate(range);

    const events = await prisma.event.findMany({ where: { linkId: link.id, ts: { gte: from } } });
    return NextResponse.json(aggregateEvents(events));
}


