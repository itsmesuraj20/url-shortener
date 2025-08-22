import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

async function main() {
    const email = "demo@example.com";
    const password = await argon2.hash("password123");
    const user = await prisma.user.upsert({
        where: { email },
        update: {},
        create: { email, name: "Demo", password },
    });

    await prisma.link.upsert({
        where: { slug: "hello" },
        update: {},
        create: { userId: user.id, slug: "hello", targetUrl: "https://example.com" },
    });
    await prisma.link.upsert({
        where: { slug: "next" },
        update: {},
        create: { userId: user.id, slug: "next", targetUrl: "https://nextjs.org" },
    });
}

main().finally(async () => {
    await prisma.$disconnect();
});


