import { Redis } from "@upstash/redis";

let redis: Redis | null = null;
if (process.env.REDIS_URL && process.env.REDIS_TOKEN) {
    redis = new Redis({ url: process.env.REDIS_URL, token: process.env.REDIS_TOKEN });
}

export async function cacheGet<T>(key: string): Promise<T | null> {
    if (!redis) return null;
    try {
        return (await redis.get<T>(key)) ?? null;
    } catch {
        return null;
    }
}

export async function cacheSet(key: string, value: unknown, ttlSeconds: number): Promise<void> {
    if (!redis) return;
    try {
        await redis.set(key, value, { ex: ttlSeconds });
    } catch {
        // ignore
    }
}

export async function cacheDel(key: string): Promise<void> {
    if (!redis) return;
    try {
        await redis.del(key);
    } catch {
        // ignore
    }
}

export const hasRedis = () => Boolean(redis);


