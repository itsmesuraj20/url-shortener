import { describe, it, expect } from "vitest";
import { aggregateEvents } from "@/lib/analytics";

describe("aggregateEvents", () => {
    it("aggregates counts and uniques", () => {
        const now = new Date();
        const events = [
            { ts: now, ipHash: "a", referrer: "x", country: "US" },
            { ts: now, ipHash: "b", referrer: "x", country: "US" },
            { ts: now, ipHash: "a", referrer: "y", country: "FR" },
        ] as any;
        const agg = aggregateEvents(events);
        expect(agg.total).toBe(3);
        expect(agg.uniqueVisitors).toBe(2);
        expect(agg.referrers.find(r => r.name === "x")?.count).toBe(2);
    });
});


