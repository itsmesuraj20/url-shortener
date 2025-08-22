export type EventLike = {
    ts: Date;
    ipHash: string;
    country?: string | null;
    referrer?: string | null;
    ua?: string | null;
    device?: string | null;
    os?: string | null;
    browser?: string | null;
};

export function aggregateEvents(events: EventLike[]) {
    const total = events.length;
    const uniqueVisitors = new Set(events.map((e) => e.ipHash)).size;
    const byDay = new Map<string, number>();
    for (const e of events) {
        const key = e.ts.toISOString().slice(0, 10);
        byDay.set(key, (byDay.get(key) ?? 0) + 1);
    }
    const makeAgg = () => new Map<string, number>();
    const referrers = makeAgg();
    const countries = makeAgg();
    const devices = makeAgg();
    const os = makeAgg();
    const browsers = makeAgg();
    for (const e of events) {
        if (e.referrer) referrers.set(e.referrer, (referrers.get(e.referrer) ?? 0) + 1);
        if (e.country) countries.set(e.country, (countries.get(e.country) ?? 0) + 1);
        if (e.device) devices.set(e.device, (devices.get(e.device) ?? 0) + 1);
        if (e.os) os.set(e.os, (os.get(e.os) ?? 0) + 1);
        if (e.browser) browsers.set(e.browser, (browsers.get(e.browser) ?? 0) + 1);
    }
    return {
        total,
        uniqueVisitors,
        series: Array.from(byDay, ([date, count]) => ({ date, count })).sort((a, b) => a.date.localeCompare(b.date)),
        referrers: Array.from(referrers, ([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count),
        countries: Array.from(countries, ([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count),
        devices: Array.from(devices, ([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count),
        os: Array.from(os, ([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count),
        browsers: Array.from(browsers, ([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count),
        lastAccessed: events.sort((a, b) => b.ts.getTime() - a.ts.getTime())[0]?.ts ?? null,
    };
}


