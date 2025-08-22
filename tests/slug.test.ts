import { describe, it, expect } from "vitest";
import { generateSlug } from "@/lib/slug";

describe("generateSlug", () => {
    it("generates correct length and charset", () => {
        const s = generateSlug(8);
        expect(s).toHaveLength(8);
        expect(/^[a-zA-Z0-9]+$/.test(s)).toBe(true);
    });
});


