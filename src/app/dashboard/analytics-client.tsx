"use client";
import { useEffect, useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

type Link = { id: string; slug: string; targetUrl: string };
type Analytics = {
    total: number;
    uniqueVisitors: number;
    series: { date: string; count: number }[];
    referrers: { name: string; count: number }[];
    countries: { name: string; count: number }[];
    devices: { name: string; count: number }[];
    os: { name: string; count: number }[];
    browsers: { name: string; count: number }[];
    lastAccessed: string | null;
};

export function AnalyticsClient() {
    const [links, setLinks] = useState<Link[]>([]);
    const [linkId, setLinkId] = useState<string>("");
    const [range, setRange] = useState<string>("30d");
    const [data, setData] = useState<Analytics | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await fetch("/api/links");
            if (res.ok) {
                const ls: Link[] = await res.json();
                setLinks(ls);
                if (ls[0]) setLinkId(ls[0].id);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (!linkId) return;
            setLoading(true);
            const res = await fetch(`/api/links/${linkId}/analytics?range=${range}`);
            setLoading(false);
            if (res.ok) setData(await res.json());
        })();
    }, [linkId, range]);

    const series = useMemo(() => data?.series ?? [], [data]);

    return (
        <div className="space-y-6">
            <div className="flex gap-2 items-center">
                <select className="border rounded px-3 py-2 bg-transparent" value={linkId} onChange={(e) => setLinkId(e.target.value)}>
                    {links.map((l) => (
                        <option key={l.id} value={l.id}>{l.slug}</option>
                    ))}
                </select>
                <select className="border rounded px-3 py-2 bg-transparent" value={range} onChange={(e) => setRange(e.target.value)}>
                    <option value="30d">Last 30d</option>
                    <option value="90d">Last 90d</option>
                </select>
            </div>

            {loading && <p>Loading…</p>}

            {data && (
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="border rounded p-3"><div className="text-xs text-gray-500">Total clicks</div><div className="text-xl font-semibold">{data.total}</div></div>
                        <div className="border rounded p-3"><div className="text-xs text-gray-500">Unique visitors</div><div className="text-xl font-semibold">{data.uniqueVisitors}</div></div>
                        <div className="border rounded p-3"><div className="text-xs text-gray-500">Last accessed</div><div className="text-sm">{data.lastAccessed ? new Date(data.lastAccessed).toLocaleString() : '-'}</div></div>
                    </div>

                    <div className="h-80 border rounded p-3">
                        <div className="text-sm mb-2">Clicks over time</div>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={series} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </>
            )}
        </div>
    );
}


