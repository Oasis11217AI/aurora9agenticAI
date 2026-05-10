"use client";

import { useState } from "react";
import Script from "next/script";

const faqs = [
  {
    category: "General",
    question: "What is AURORA9?",
    answer:
      "AURORA9 is the world's first interconnected AI workforce, designed as a foundational nervous system for global trade. It orchestrates the A-Z lifecycle of 1P and 3P commerce across the Amazon ecosystem and beyond.",
  },
  {
    category: "Infrastructure",
    question: "What is the Omni-Synergy Engine™?",
    answer:
      "The Omni-Synergy Engine™ is our proprietary foundation that breaks down the data silos between Seller Central (3P) and Vendor Central (1P), allowing agents to synchronize inventory and pricing decisions in real-time.",
  },
  {
    category: "Cost Optimization",
    question: "How does AURORA9 mitigate Amazon SP-API usage fees?",
    answer:
      "Our ACRE™ (Adaptive Cognitive Recalibration Engine) optimizes polling frequencies and prioritizes event-driven webhooks. This reduces the operational overhead and API usage fees associated with high-volume scaling.",
  },
  {
    category: "Governance",
    question: "What are Explainable \"Why Cards\"?",
    answer:
      "Powered by the PON™ (Probabilistic Outcome Navigator) engine, Why Cards provide a transparent audit trail for every autonomous action, detailing the reasoning and probability of success for each strategic shift.",
  },
  {
    category: "Governance",
    question: "What is \"Governed Autonomy\"?",
    answer:
      "Governed Autonomy is our trust framework that allows brands to toggle between Progressive (Read-only), Semi-Autonomous (Human-in-the-loop), and Fully Autonomous workforce modes.",
  },
  {
    category: "1P Operations",
    question: "How does AURORA9 handle 1P Shortage Claims?",
    answer:
      "The Quantum Inventory Master agent maintains a continuous historical ledger of inbound shipments to autonomously identify and mitigate shortage penalties before they impact Vendor margins.",
  },
  {
    category: "Pricing & Compliance",
    question: "Does AURORA9 protect MAP compliance for Vendors?",
    answer:
      "Yes. The Nexus Pricing Strategist monitors the market for Minimum Advertised Price (MAP) violations, ensuring that autonomous 3P repricing does not erode 1P brand equity.",
  },
  {
    category: "Security",
    question: "How is enterprise data secured?",
    answer:
      "All operations are hosted on AWS-native infrastructure with bank-grade encryption. Each brand's data is isolated within secure instances to ensure absolute sovereignty.",
  },
  {
    category: "Scalability",
    question: "Can AURORA9 scale across global regions?",
    answer:
      "Yes. The workforce is designed for global orchestration, allowing brands to expand across marketplaces (Walmart, Shopify, eBay) while maintaining a single, unified nervous system.",
  },
  {
    category: "Reporting",
    question: "What type of technical reporting is available?",
    answer:
      "Users receive real-time task logs, verified ROI summaries, and PON™ decision justifications, all exportable via secure API endpoints or enterprise CRM integrations.",
  },
];

const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
        {/* Hero Section */}
        <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--gradient-cosmic)', color: 'white' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
          <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '8rem 1.5rem 5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ 
                fontSize: '3.5rem', 
                fontWeight: '300', 
                marginBottom: '1.5rem',
                color: 'white',
                position: 'relative',
                zIndex: 1
              }}>
                Technical Knowledge Base
              </h1>
              <p style={{ 
                fontSize: '1.25rem', 
                opacity: 0.9, 
                maxWidth: '42rem', 
                margin: '0 auto',
                fontWeight: '300',
                color: 'white'
              }}>
                Deep-dive insights into the foundational nervous system of AURORA9
              </p>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
          {/* Search and Filter Section */}
          <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search the infrastructure..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3.5rem',
                  border: '1px solid rgba(203, 213, 225, 0.3)',
                  borderRadius: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  color: '#cbd5e1',
                  fontSize: '1rem',
                  fontWeight: '300',
                  outline: 'none'
                }}
              />
              <div style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.25rem' }}>🔍</div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '300',
                    border: selectedCategory === category ? 'none' : '1px solid rgba(203, 213, 225, 0.3)',
                    background: selectedCategory === category 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  border: '1px solid rgba(203, 213, 225, 0.15)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#cbd5e1'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.7rem', color: '#4facfe', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>
                      {faq.category}
                    </div>
                    <h3 style={{ fontWeight: '300', fontSize: '1.125rem', color: 'white' }}>
                      {faq.question}
                    </h3>
                  </div>
                  <div style={{ 
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', 
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontSize: '1.5rem',
                    color: '#94a3b8'
                  }}>
                    ⌄
                  </div>
                </button>
                
                <div style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  <div style={{ padding: '0 1.75rem 1.75rem' }}>
                    <div style={{ borderLeft: '2px solid #8b5cf6', paddingLeft: '1.25rem', color: '#cbd5e1', fontWeight: '300', lineHeight: '1.8' }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Footer */}
          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <div style={{ 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '1.5rem', 
              padding: '4rem 2rem', 
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '300', color: 'white', marginBottom: '1rem' }}>
                Further Architectural Inquiries?
              </h2>
              <p style={{ color: '#cbd5e1', fontWeight: '300', marginBottom: '2.5rem', maxWidth: '32rem', margin: '0 auto 2.5rem' }}>
                Connect with our technical team to discuss the governance and security of your workforce.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <a href="/contact-us" style={{ background: 'white', color: '#0f172a', padding: '1rem 2.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '600' }}>Contact Support</a>
                <a href="/how-it-works" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '1rem 2.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '300' }}>View Architecture</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}