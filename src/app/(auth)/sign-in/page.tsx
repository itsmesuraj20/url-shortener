"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-sm space-y-4">
                <h1 className="text-2xl font-semibold">Sign in</h1>
                <button
                    className="w-full border rounded px-4 py-2"
                    onClick={() => signIn("google")}
                >
                    Continue with Google
                </button>
                <div className="h-px bg-gray-200 dark:bg-gray-800" />
                <form
                    className="space-y-3"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        await signIn("credentials", {
                            email,
                            password,
                            redirect: true,
                            callbackUrl: "/dashboard",
                        });
                    }}
                >
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded px-3 py-2 bg-transparent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded px-3 py-2 bg-transparent"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="w-full bg-black text-white dark:bg-white dark:text-black rounded px-4 py-2">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}


