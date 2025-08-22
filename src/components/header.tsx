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
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/20 dark:bg-black/20 border-b border-white/30 dark:border-white/10">
            <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
                <Link href="/" className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Url Shorter
                </Link>
                <div className="flex items-center gap-3">
                    <button
                        className="backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-xl px-4 py-2 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300"
                        onClick={() => setTheme((resolvedTheme ?? "system") === "dark" ? "light" : "dark")}
                    >
                        {mounted ? ((resolvedTheme ?? "light") === "dark" ? "☀️ Light" : "🌙 Dark") : "Theme"}
                    </button>
                    {session?.user ? (
                        <>
                            <Link 
                                href="/dashboard" 
                                className="backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-xl px-4 py-2 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300"
                            >
                                Dashboard
                            </Link>
                            <button 
                                onClick={() => signOut({ callbackUrl: "/" })} 
                                className="backdrop-blur-md bg-red-500/20 border border-red-300/30 text-red-700 dark:text-red-300 rounded-xl px-4 py-2 hover:bg-red-500/30 transition-all duration-300"
                            >
                                Sign out
                            </button>
                        </>
                    ) : (
                        <Link 
                            href="/sign-in" 
                            className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-300/30 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 rounded-xl px-6 py-2 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300"
                        >
                            Sign in
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}


