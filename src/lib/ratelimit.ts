import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let limiter: Ratelimit | null = null;
let memoryMap: Map<string, number> = new Map();

if (process.env.REDIS_URL && process.env.REDIS_TOKEN) {
    const redis = new Redis({ url: process.env.REDIS_URL, token: process.env.REDIS_TOKEN });
    limiter = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(10, "10 s") });
}

export async function hit(key: string, limit = 10, intervalSec = 10) {
    if (limiter) {
        const res = await limiter.limit(key);
        return { success: res.success };
    }
    const now = Date.now();
    const expires = now + intervalSec * 1000;
    const count = (memoryMap.get(key) ?? 0) + 1;
    memoryMap.set(key, count);
    setTimeout(() => memoryMap.delete(key), intervalSec * 1000);
    return { success: count <= limit };
}


