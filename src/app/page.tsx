"use client"

import Link from "next/link";
import { FileText, Shield, BarChart3, Zap, Globe, Lock, ArrowRight, Play, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
              <span className="text-xl font-bold">LinkForge</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#docs" className="text-gray-400 hover:text-white transition-colors">Docs</a>
              <Link href="/sign-in" className="text-gray-400 hover:text-white transition-colors">Sign In</Link>
              <Link href="/dashboard" className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Start Building
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slow opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-medium opacity-25" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-fast opacity-20" style={{animationDelay: '4s'}}></div>
        
        {/* Moving Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-line-vertical-1" style={{left: '10%'}}></div>
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-line-vertical-2" style={{left: '25%', animationDelay: '1.5s'}}></div>
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-line-vertical-3" style={{left: '75%', animationDelay: '3s'}}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-line-horizontal-1" style={{top: '20%'}}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent animate-line-horizontal-2" style={{top: '60%', animationDelay: '2.5s'}}></div>
        </div>
        
        {/* Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full animate-particle opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(0px) translateX(20px) rotate(180deg); }
          75% { transform: translateY(20px) translateX(10px) rotate(270deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-30px) translateX(-15px) rotate(120deg); }
          66% { transform: translateY(15px) translateX(25px) rotate(240deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          20% { transform: translateY(-25px) translateX(15px) rotate(72deg); }
          40% { transform: translateY(-10px) translateX(-20px) rotate(144deg); }
          60% { transform: translateY(20px) translateX(10px) rotate(216deg); }
          80% { transform: translateY(5px) translateX(-15px) rotate(288deg); }
        }
        
        @keyframes line-vertical-1 {
          0% { transform: translateY(-100vh) scaleY(0); }
          50% { transform: translateY(0vh) scaleY(1); }
          100% { transform: translateY(100vh) scaleY(0); }
        }
        
        @keyframes line-vertical-2 {
          0% { transform: translateY(-100vh) scaleY(0); }
          50% { transform: translateY(0vh) scaleY(1); }
          100% { transform: translateY(100vh) scaleY(0); }
        }
        
        @keyframes line-vertical-3 {
          0% { transform: translateY(-100vh) scaleY(0); }
          50% { transform: translateY(0vh) scaleY(1); }
          100% { transform: translateY(100vh) scaleY(0); }
        }
        
        @keyframes line-horizontal-1 {
          0% { transform: translateX(-100vw) scaleX(0); }
          50% { transform: translateX(0vw) scaleX(1); }
          100% { transform: translateX(100vw) scaleX(0); }
        }
        
        @keyframes line-horizontal-2 {
          0% { transform: translateX(-100vw) scaleX(0); }
          50% { transform: translateX(0vw) scaleX(1); }
          100% { transform: translateX(100vw) scaleX(0); }
        }
        
        @keyframes particle {
          0% { 
            transform: translateY(0px) translateX(0px) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
            transform: scale(1);
          }
          90% {
            opacity: 0.2;
          }
          100% { 
            transform: translateY(-100px) translateX(50px) scale(0);
            opacity: 0;
          }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 12s ease-in-out infinite;
        }
        
        .animate-line-vertical-1 {
          animation: line-vertical-1 8s linear infinite;
        }
        
        .animate-line-vertical-2 {
          animation: line-vertical-2 10s linear infinite;
        }
        
        .animate-line-vertical-3 {
          animation: line-vertical-3 12s linear infinite;
        }
        
        .animate-line-horizontal-1 {
          animation: line-horizontal-1 14s linear infinite;
        }
        
        .animate-line-horizontal-2 {
          animation: line-horizontal-2 16s linear infinite;
        }
        
        .animate-particle {
          animation: particle linear infinite;
        }
      `}</style>


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Trusted by 10,000+ developers
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
            Deploy your
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              short links
            </span>
            <br />
            instantly
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Built for modern teams. Create, manage, and analyze short links with enterprise-grade security, 
            real-time analytics, and lightning-fast global CDN.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/dashboard"
              className="group bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
            >
              Start for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Original URL</span>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                  <div className="text-white font-mono">https://example.com/very-long-url...</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Short URL</span>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 text-sm">42.1k clicks</span>
                      <button className="text-gray-400 hover:text-white">Copy</button>
                    </div>
                  </div>
                  <div className="text-purple-400 font-mono">linkforge.co/abc123</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything you need to scale
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade infrastructure with developer-friendly tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Global CDN ensures your short links redirect in milliseconds worldwide",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Password protection, expiry controls, and advanced access management",
                color: "from-green-400 to-teal-500"
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Track performance with detailed insights on clicks, geography, and devices",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: Globe,
                title: "Global Infrastructure",
                description: "99.99% uptime with servers in 20+ regions for optimal performance",
                color: "from-blue-400 to-cyan-500"
              },
              {
                icon: Lock,
                title: "Access Control",
                description: "Granular permissions, team management, and audit logs for compliance",
                color: "from-red-400 to-pink-500"
              },
              {
                icon: FileText,
                title: "Developer API",
                description: "RESTful API with comprehensive documentation and SDKs for all platforms",
                color: "from-indigo-400 to-purple-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10M+", label: "Links Created" },
                { number: "500M+", label: "Clicks Tracked" },
                { number: "99.99%", label: "Uptime" },
                { number: "20ms", label: "Avg Response" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by industry leaders</h2>
            <p className="text-gray-400 text-lg">See what our customers are saying</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "LinkForge transformed how we manage our marketing campaigns. The analytics are incredible.",
                author: "Sarah Chen",
                role: "Head of Marketing at TechCorp",
                rating: 5
              },
              {
                quote: "The API is so clean and well-documented. Integration took us less than 30 minutes.",
                author: "Mike Rodriguez",
                role: "Lead Developer at StartupXYZ",
                rating: 5
              },
              {
                quote: "Finally, a URL shortener that doesn't compromise on security or performance.",
                author: "Alex Johnson",
                role: "DevOps Engineer at ScaleInc",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to ship faster?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who trust LinkForge to power their applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="group bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Building Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
                <span className="text-xl font-bold">LinkForge</span>
              </div>
              <p className="text-gray-400">The modern URL shortener for developers</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>Features</div>
                <div>Pricing</div>
                <div>API</div>
                <div>Status</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-gray-400">
                <div>Documentation</div>
                <div>Support</div>
                <div>Privacy</div>
                <div>Terms</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">© 2025 LinkForge. All rights reserved.</div>
            <div className="flex items-center gap-6 text-gray-400">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}