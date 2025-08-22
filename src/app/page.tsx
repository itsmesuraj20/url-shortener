export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-4">
        <h1 className="text-4xl font-bold">Shorten URLs with analytics</h1>
        <p className="text-gray-600 dark:text-gray-300">Create short links with password, expiry, and analytics.</p>
        <a href="/dashboard" className="inline-block bg-black text-white dark:bg-white dark:text-black rounded px-4 py-2">Go to Dashboard</a>
      </div>
    </main>
  );
}
