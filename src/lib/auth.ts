import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { prisma } from "@/lib/db";
import { z } from "zod";
import argon2 from "argon2";

const credentialsSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            authorize: async (raw) => {
                const parsed = credentialsSchema.safeParse(raw);
                if (!parsed.success) return null;
                const { email, password } = parsed.data;
                const user = await prisma.user.findUnique({ where: { email } });
                if (!user?.password) return null;
                const ok = await argon2.verify(user.password, password);
                if (!ok) return null;
                return { id: user.id, name: user.name, email: user.email, image: user.image, role: user.role } as any;
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = (user as any).id;
                token.role = (user as any).role;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (session.user) {
                (session.user as any).id = token.id;
                (session.user as any).role = token.role;
            }
            return session;
        },
    },
    pages: {
        signIn: "/sign-in",
    },
};

// Conditionally add Google provider only if env present
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    (authOptions.providers as any).unshift(
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    );
}
export const getServerAuthSession = () => getServerSession(authOptions);


