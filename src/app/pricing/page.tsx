"use client";

import Link from "next/link";
import { Check, Zap, Shield, BarChart3, Globe, ArrowRight, Star, Crown } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Hobby",
      price: "Free",
      description: "Perfect for personal projects and experimentation",
      features: [
        "1,000 links per month",
        "Basic analytics",
        "Custom slugs",
        "Standard support",
        "7-day link history"
      ],
      cta: "Get Started",
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      description: "For growing businesses and professional use",
      features: [
        "25,000 links per month",
        "Advanced analytics & insights",
        "Password protection",
        "Custom domains",
        "Team collaboration (5 members)",
        "Priority support",
        "90-day link history",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited links",
        "Advanced security controls",
        "Custom integrations",
        "Dedicated support manager",
        "99.99% SLA guarantee",
        "SAML/SSO authentication",
        "Unlimited team members",
        "Custom reporting",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated."
    },
    {
      question: "What happens if I exceed my link limit?",
      answer: "We'll notify you as you approach your limit. You can upgrade your plan or purchase additional links as needed."
    },
    {
      question: "Do you offer annual discounts?",
      answer: "Yes! Annual plans receive a 20% discount. Contact our sales team for enterprise annual pricing."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "All paid plans include a 14-day free trial. No credit card required to start your trial."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and can arrange invoicing for enterprise customers."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
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
              <span className="text-white font-medium">Pricing</span>
              <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</Link>
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slow opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-medium opacity-25" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-fast opacity-20" style={{animationDelay: '4s'}}></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-line-vertical-1" style={{left: '15%'}}></div>
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-line-vertical-2" style={{left: '85%', animationDelay: '3s'}}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-line-horizontal-1" style={{top: '30%'}}></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 mb-8">
            <Star className="w-4 h-4 text-yellow-400" />
            14-day free trial on all paid plans
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
            Simple,
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              transparent
            </span>
            <br />
            pricing
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Choose the perfect plan for your needs. Start free, upgrade when you're ready. 
            No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="relative group">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Crown className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`relative bg-gray-900/50 backdrop-blur-xl border ${plan.popular ? 'border-purple-500/50' : 'border-white/10'} rounded-3xl p-8 h-full transition-all duration-300 group-hover:border-white/20`}>
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
                  )}
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
                    </div>
                    <p className="text-gray-400 mb-8">{plan.description}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full ${plan.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 border border-white/20 hover:bg-white/20'} py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2`}>
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Compare all features</h2>
          
          <div className="bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 font-semibold">Features</th>
                    <th className="text-center p-6 font-semibold">Hobby</th>
                    <th className="text-center p-6 font-semibold bg-purple-500/10">Pro</th>
                    <th className="text-center p-6 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {[
                    ['Monthly links', '1,000', '25,000', 'Unlimited'],
                    ['Custom domains', '✗', '✓', '✓'],
                    ['Password protection', '✗', '✓', '✓'],
                    ['Team members', '1', '5', 'Unlimited'],
                    ['API access', '✗', '✓', '✓'],
                    ['Advanced analytics', '✗', '✓', '✓'],
                    ['Priority support', '✗', '✓', '✓'],
                    ['SAML/SSO', '✗', '✗', '✓'],
                    ['White-label', '✗', '✗', '✓']
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="p-6 font-medium">{row[0]}</td>
                      <td className="text-center p-6">{row[1]}</td>
                      <td className="text-center p-6 bg-purple-500/5">{row[2]}</td>
                      <td className="text-center p-6">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of developers building with LinkForge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="group bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

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
        
        @keyframes line-horizontal-1 {
          0% { transform: translateX(-100vw) scaleX(0); }
          50% { transform: translateX(0vw) scaleX(1); }
          100% { transform: translateX(100vw) scaleX(0); }
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
        
        .animate-line-horizontal-1 {
          animation: line-horizontal-1 14s linear infinite;
        }
      `}</style>
    </main>
  );
}