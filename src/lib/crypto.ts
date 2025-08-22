import { sha256 } from "js-sha256";

export function hashIp(ip: string, ua: string): string {
    const salt = process.env.HASH_SALT || "changeme";
    return sha256(ip + ua + salt);
}


