import { getServerAuthSession } from "@/lib/auth";
import { LinksClient } from "./links-client";
import { AnalyticsClient } from "./analytics-client";

export default async function DashboardPage() {
    const session = await getServerAuthSession();
    if (!session?.user) {
        return (
            <main className="max-w-5xl mx-auto p-6">
                <h1 className="text-2xl font-semibold mb-4">Please sign in</h1>
                <p>
                    You must be signed in to view the dashboard. <a className="underline" href="/sign-in">Sign in</a>
                </p>
            </main>
        );
    }

    return (
        <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            <p className="mb-6">Welcome, {session.user.name ?? session.user.email}!</p>
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold mb-2">Your links</h2>
                    <LinksClient />
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">Analytics</h2>
                    <AnalyticsClient />
                </section>
            </div>
        </main>
    );
}
