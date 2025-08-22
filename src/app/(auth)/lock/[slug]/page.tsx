"use client";
import React, { useState } from "react";

export default function LockPage({ params }: { params: { slug: string } }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    return (
        <main className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-sm space-y-4">
                <h1 className="text-2xl font-semibold">Protected link</h1>
                <form
                    className="space-y-3"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        setError(null);
                        const res = await fetch(`/api/unlock`, {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify({ slug: params.slug, password }),
                        });
                        if (res.ok) {
                            window.location.href = `/${params.slug}`;
                        } else {
                            setError("Incorrect password");
                        }
                    }}
                >
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full border rounded px-3 py-2 bg-transparent"
                        required
                    />
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <button type="submit" className="w-full bg-black text-white dark:bg-white dark:text-black rounded px-4 py-2">
                        Unlock
                    </button>
                </form>
            </div>
        </main>
    );
}


