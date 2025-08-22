import Link from "next/link";
import { FileText, Shield, BarChart3, Zap, Globe, Lock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background with animated gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Glass badge */}
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              <Zap className="w-4 h-4" />
              Lightning Fast URL Shortening
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Shorten URLs with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Analytics</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Create powerful short links with password protection, expiry dates, and detailed analytics.
              Track clicks, geography, and user behavior in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/dashboard"
                className="group inline-flex items-center gap-2 backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-black/30 font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <BarChart3 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Get Started Free
              </Link>
              <Link
                href="/sign-in"
                className="group inline-flex items-center gap-2 backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/20 font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need for powerful link management
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
              Professional URL shortening with enterprise-grade features and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-3xl p-8 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 backdrop-blur-md bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Create short links instantly with our optimized platform. No waiting, no delays.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-3xl p-8 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 backdrop-blur-md bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Password Protected
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Secure your links with custom passwords. Control who can access your content.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-3xl p-8 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 backdrop-blur-md bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Detailed Analytics
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Track clicks, geography, devices, and user behavior with comprehensive insights.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-3xl p-8 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 backdrop-blur-md bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-7 h-7 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Expiry Control
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Set expiration dates for your links. Automatically disable old or outdated content.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-3xl p-8 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 backdrop-blur-md bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Custom Slugs
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Create memorable, branded short URLs that are easy to remember and share.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-3xl p-8 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 backdrop-blur-md bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Global Access
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Access your dashboard from anywhere. Manage links on desktop, tablet, or mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/30 dark:border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to transform your link management?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
              Join thousands of users who trust our platform for their URL shortening needs.
            </p>
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2 backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-black/30 font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <BarChart3 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Start Creating Links
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
