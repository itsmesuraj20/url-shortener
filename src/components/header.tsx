"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
    const { data: session } = useSession();
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <header className="w-full border-b border-black/10 dark:border-white/10">
            <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
                <Link href="/" className="font-semibold">Url Shorter</Link>
                <div className="flex items-center gap-2">
                    <button
                        className="rounded border px-3 py-1"
                        onClick={() => setTheme((resolvedTheme ?? "system") === "dark" ? "light" : "dark")}
                    >
                        {mounted ? ((resolvedTheme ?? "light") === "dark" ? "Light" : "Dark") : "Theme"}
                    </button>
                    {session?.user ? (
                        <>
                            <Link href="/dashboard" className="rounded border px-3 py-1">Dashboard</Link>
                            <button onClick={() => signOut({ callbackUrl: "/" })} className="rounded bg-black text-white dark:bg-white dark:text-black px-3 py-1">Sign out</button>
                        </>
                    ) : (
                        <Link href="/sign-in" className="rounded bg-black text-white dark:bg-white dark:text-black px-3 py-1">Sign in</Link>
                    )}
                </div>
            </div>
        </header>
    );
}


