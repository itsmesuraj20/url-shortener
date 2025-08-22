import { z } from "zod";

export const createLinkSchema = z.object({
    targetUrl: z.string().url().refine((u) => /^https?:\/\//i.test(u), {
        message: "Only http/https URLs allowed",
    }),
    slug: z.string().min(3).max(64).regex(/^[a-zA-Z0-9-_]+$/).optional(),
    expiresAt: z.string().datetime().optional(),
    password: z.string().min(6).max(128).optional(),
    tags: z.array(z.string()).optional(),
});

export type CreateLinkInput = z.infer<typeof createLinkSchema>;


