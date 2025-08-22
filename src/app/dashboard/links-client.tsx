"use client";
import { useEffect, useState } from "react";

type Link = {
    id: string;
    slug: string;
    targetUrl: string;
    active: boolean;
};

export function LinksClient() {
    const [links, setLinks] = useState<Link[]>([]);
    const [targetUrl, setTargetUrl] = useState("");
    const [slug, setSlug] = useState("");
    const [loading, setLoading] = useState(false);
    const base = process.env.NEXT_PUBLIC_SHORT_DOMAIN || "http://localhost:3000";

    async function load() {
        const res = await fetch("/api/links");
        if (res.ok) setLinks(await res.json());
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <div className="space-y-6">
            <form
                className="flex flex-col sm:flex-row gap-2"
                onSubmit={async (e) => {
                    e.preventDefault();
                    setLoading(true);
                    const res = await fetch("/api/links", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify({ targetUrl, slug: slug || undefined }),
                    });
                    setLoading(false);
                    if (res.ok) {
                        setTargetUrl("");
                        setSlug("");
                        await load();
                    }
                }}
            >
                <input
                    className="flex-1 border rounded px-3 py-2 bg-transparent"
                    placeholder="https://example.com"
                    value={targetUrl}
                    onChange={(e) => setTargetUrl(e.target.value)}
                    required
                />
                <input
                    className="sm:w-48 border rounded px-3 py-2 bg-transparent"
                    placeholder="custom-slug (optional)"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                />
                <button disabled={loading} className="sm:w-32 bg-black text-white dark:bg-white dark:text-black rounded px-4 py-2">
                    {loading ? "Creating..." : "Shorten"}
                </button>
            </form>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2">Short URL</th>
                            <th className="py-2">Target</th>
                            <th className="py-2">Active</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {links.map((l) => (
                            <tr key={l.id} className="border-b">
                                <td className="py-2">
                                    <a className="underline" href={`/${l.slug}`} target="_blank" rel="noreferrer">
                                        {base.replace(/\/$/, "")}/{l.slug}
                                    </a>
                                </td>
                                <td className="py-2 truncate max-w-[320px]">{l.targetUrl}</td>
                                <td className="py-2">{l.active ? "Yes" : "No"}</td>
                                <td className="py-2 flex gap-2">
                                    <button
                                        className="rounded border px-2 py-1"
                                        onClick={async () => {
                                            await navigator.clipboard.writeText(`${base.replace(/\/$/, "")}/${l.slug}`);
                                        }}
                                    >
                                        Copy
                                    </button>
                                    <a className="rounded border px-2 py-1" href={`/${l.slug}`} target="_blank" rel="noreferrer">Open</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


