'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SiteIndex() {
  const blueprint = [
    {
      category: "I. Core Identity & Vision",
      links: [
        { name: "Executive Summary", href: "/about", desc: "The foundational mission and origin of the AURORA9 workforce." },
        { name: "Strategic Vision", href: "/about/vision", desc: "Our long-term roadmap for global commerce orchestration." },
        { name: "Mission Protocol", href: "/about/mission", desc: "The core values and ethical guardrails of governed autonomy." }
      ]
    },
    {
      category: "II. Proprietary Infrastructure",
      links: [
        { name: "How It Works", href: "/how-it-works", desc: "Technical deep-dive into the ACRE™, PON™, and Omni-Synergy™ engines." },
        { name: "Technical FAQ", href: "/faq", desc: "Knowledge base for 1P/3P architectural and operational inquiries." },
        { name: "Site Architecture", href: "/site-index", desc: "This comprehensive technical index of the AURORA9 ecosystem." }
      ]
    },
    {
      category: "III. Commercial & Governance",
      links: [
        { name: "Governed Pricing", href: "/pricing", desc: "Tiered workforce deployment models and projected ROI frameworks." },
        { name: "Investor Relations", href: "/investors", desc: "The infrastructure play for institutional partners and stakeholders." },
        { name: "Privacy & Sovereignty", href: "/privacy-policy", desc: "Our zero-knowledge framework for 1P/3P data protection." },
        { name: "Terms of Service", href: "/terms", desc: "Legal framework governing autonomous workforce orchestration." }
      ]
    },
    {
      category: "IV. External Ecosystem",
      links: [
        { name: "Press Center", href: "/press", desc: "Official announcements regarding the unification of global trade." },
        { name: "Careers", href: "/careers", desc: "Opportunities for architects to build the future of autonomy." },
        { name: "Contact Hub", href: "/contact-us", desc: "The primary handshake for enterprise-level inquiries and support." }
      ]
    }
  ];

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)', color: 'white' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
        <div style={{ position: 'relative', maxWidth: '80rem', margin: '0 auto', padding: '8rem 1.5rem 5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
              fontWeight: '300', 
              marginBottom: '1.5rem',
              color: 'white',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}>
              Platform Architecture Index
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              fontWeight: '300',
              color: '#cbd5e1',
              maxWidth: '40rem', 
              margin: '0 auto 3rem',
              lineHeight: '1.6',
            }}>
              {"A comprehensive technical blueprint of the AURORA9 autonomous ecosystem and its interconnected resources."}
            </p>
            
            <Link 
              href="/"
              style={{
                display: 'inline-flex',
                padding: '0.75rem 2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '400',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
            >
              ← Return to Nexus
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Blueprint Grid */}
      <div style={{ maxWidth: '85rem', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          {blueprint.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h2 style={{ 
                fontSize: '0.8rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.25em', 
                color: '#4facfe', 
                marginBottom: '2.5rem', 
                borderBottom: '1px solid rgba(255,255,255,0.1)', 
                paddingBottom: '0.75rem' 
              }}>
                {section.category}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {section.links.map((link, lIdx) => (
                  <Link key={lIdx} href={link.href} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(8px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                      <h3 style={{ 
                        color: 'white', 
                        fontSize: '1.25rem', 
                        fontWeight: '400', 
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        {link.name}
                        <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>↗</span>
                      </h3>
                      <p style={{ 
                        color: '#94a3b8', 
                        fontSize: '0.95rem', 
                        fontWeight: '300', 
                        lineHeight: '1.6',
                        maxWidth: '22rem'
                      }}>
                        {link.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Footer */}
      <div style={{ textAlign: 'center', padding: '6rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ color: '#475569', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: '400' }}>
          CORE SYSTEM VERSION 2.0.26 | STACK: AWS-NATIVE · NEXT.JS · AGENTIC ENGINE
        </p>
      </div>
    </main>
  );
}