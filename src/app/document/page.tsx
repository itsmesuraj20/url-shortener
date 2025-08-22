"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Book, Code, Search, Copy, ExternalLink,
  Hash, Terminal, FileText
} from "lucide-react";

export default function Docs() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"curl" | "javascript" | "python">("curl");

  const navigation = [
    {
      title: "Getting Started",
      items: [
        { id: "introduction", title: "Introduction", href: "#introduction" },
        { id: "quick-start", title: "Quick Start", href: "#quick-start" },
        { id: "authentication", title: "Authentication", href: "#authentication" },
      ],
    },
    {
      title: "API Reference",
      items: [
        { id: "create-link", title: "Create Short Link", href: "#create-link" },
        { id: "get-link", title: "Get Link Details", href: "#get-link" },
        { id: "update-link", title: "Update Link", href: "#update-link" },
        { id: "delete-link", title: "Delete Link", href: "#delete-link" },
        { id: "analytics", title: "Analytics", href: "#analytics" },
      ],
    },
    {
      title: "SDKs & Libraries",
      items: [
        { id: "javascript", title: "JavaScript/Node.js", href: "#javascript" },
        { id: "python", title: "Python", href: "#python" },
        { id: "php", title: "PHP", href: "#php" },
        { id: "go", title: "Go", href: "#go" },
      ],
    },
    {
      title: "Guides",
      items: [
        { id: "custom-domains", title: "Custom Domains", href: "#custom-domains" },
        { id: "webhooks", title: "Webhooks", href: "#webhooks" },
        { id: "rate-limits", title: "Rate Limits", href: "#rate-limits" },
      ],
    },
  ];

  const codeExamples = {
    curl: `curl -X POST https://api.linkforge.co/v1/links \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/very-long-url",
    "slug": "custom-slug",
    "password": "secret123",
    "expires_at": "2024-12-31T23:59:59Z"
  }'`,
    javascript: `const response = await fetch('https://api.linkforge.co/v1/links', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://example.com/very-long-url',
    slug: 'custom-slug',
    password: 'secret123',
    expires_at: '2024-12-31T23:59:59Z'
  })
});

const data = await response.json();
console.log(data.short_url);`,
    python: `import requests

response = requests.post('https://api.linkforge.co/v1/links', 
  headers={
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  json={
    'url': 'https://example.com/very-long-url',
    'slug': 'custom-slug',
    'password': 'secret123',
    'expires_at': '2024-12-31T23:59:59Z'
  }
)

data = response.json()
print(data['short_url'])`,
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
              <span className="text-xl font-bold">LinkForge</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
              <span className="text-white font-medium">Docs</span>
              <Link href="/sign-in" className="text-gray-400 hover:text-white transition-colors">Sign In</Link>
              <Link href="/dashboard" className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Start Building
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Wrapper */}
      <div className="relative pt-20">
        <div className="max-w-7xl mx-auto flex">
          {/* Sidebar */}
          <aside className="w-80 min-h-screen bg-gray-900/30 backdrop-blur-xl border-r border-white/10 p-6 sticky top-20">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-purple-500/50"
              />
            </div>
            {/* Sidebar Navigation */}
            <nav className="space-y-6">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          onClick={() => setActiveSection(item.id)}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            activeSection === item.id
                              ? "bg-purple-500/20 text-purple-300 border-l-2 border-purple-500"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-12 py-12">
            {/* ✅ Keep your content sections here (Quick Start, API Endpoints, SDKs, etc.) */}
          </main>
        </div>
      </div>
    </div>
  );
}