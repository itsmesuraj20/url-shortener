import { describe, it, expect } from "vitest";
import { createLinkSchema } from "@/lib/validation";

describe("createLinkSchema", () => {
    it("accepts valid http/https url", () => {
        const res = createLinkSchema.safeParse({ targetUrl: "https://example.com" });
        expect(res.success).toBe(true);
    });
    it("rejects non-http url", () => {
        const res = createLinkSchema.safeParse({ targetUrl: "javascript:alert(1)" });
        expect(res.success).toBe(false);
    });
});


