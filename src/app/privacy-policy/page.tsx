'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '8rem 1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
              fontWeight: '300', 
              marginBottom: '2rem',
              color: 'white',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              position: 'relative',
              zIndex: 1
            }}>
              Autonomous Workforce Privacy & Sovereignty
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              fontWeight: '300',
              color: 'white',
              maxWidth: '64rem', 
              margin: '0 auto',
              lineHeight: '1.6',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              position: 'relative',
              zIndex: 1
            }}>
              {"AURORA9 is committed to absolute data sovereignty. This framework explains how our autonomous agents interact with your 1P and 3P commerce data within our AWS-native secure infrastructure."}
            </p>
            <div style={{ 
              marginTop: '2rem', 
              color: 'rgba(255,255,255,0.8)',
              position: 'relative',
              zIndex: 1
            }}>
              <p style={{ fontWeight: '300' }}>Last updated: May 10, 2026</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        
        {/* Agentic AI Sovereignty Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2.5rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '2.5rem', textAlign: 'center' }}>
              The Sovereignty Framework
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '400', color: 'white', marginBottom: '0.5rem' }}>Zero-Knowledge Agents</h3>
                <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>{"Our agents operate in private AWS instances. We never use your brand's data to train global LLM models."}</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📜</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '400', color: 'white', marginBottom: '0.5rem' }}>Decision Transparency</h3>
                <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>{"Every autonomous action is logged in an immutable ledger via the PON™ engine for full compliance auditing."}</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔒</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '400', color: 'white', marginBottom: '0.5rem' }}>SP-API Handshake</h3>
                <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>{"We utilize encrypted event-driven webhooks to minimize data exposure and optimize Amazon API usage."}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          {/* Information Collection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '1rem',
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h2 style={{ fontSize: '1.75rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '1.5rem' }}>
              Architectural Data Ingestion
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                "1P/3P Credential Handshakes: Secure SP-API and Vendor Central keys.",
                "Omni-Synergy™ Data Streams: Real-time inventory and pricing signals.",
                "Agent Task Logs: Historical decision pathways for workforce optimization.",
                "Market Sentiment Data: Anonymized competitive landscape signals.",
                "Compliance Records: Automated audit trails for Amazon policy adherence."
              ].map((item, i) => (
                <li key={i} style={{ color: '#cbd5e1', fontWeight: '300', marginBottom: '1rem', display: 'flex' }}>
                  <span style={{ color: '#4facfe', marginRight: '0.75rem' }}>→</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Data Usage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '1rem',
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h2 style={{ fontSize: '1.75rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '1.5rem' }}>
              Autonomous Processing Purpose
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                "Workforce Orchestration: Enabling agents to synchronize 1P/3P global operations.",
                "Reasoning Generation: Powering the PON™ engine to provide explainable decision logic.",
                "API Optimization: Utilizing ACRE™ to mitigate Amazon usage fees.",
                "Margin Defense: Identifying and preventing shortage claim penalties.",
                "Governed Autonomy: Ensuring agent actions remain within your defined guardrails."
              ].map((item, i) => (
                <li key={i} style={{ color: '#cbd5e1', fontWeight: '300', marginBottom: '1rem', display: 'flex' }}>
                  <span style={{ color: '#8b5cf6', marginRight: '0.75rem' }}>→</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Rights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1.5rem',
            padding: '3rem',
            border: '1px solid rgba(203, 213, 225, 0.2)',
            textAlign: 'center'
          }}
        >
          <h2 style={{ fontSize: '2.25rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '1.5rem' }}>
            Brand Sovereignty Rights
          </h2>
          <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.8', maxWidth: '50rem', margin: '0 auto 2rem' }}>
            {"As the governor of your autonomous workforce, you maintain absolute control over your data environment. You have the right to audit all PON™ decision trails, purge agent memory windows, and revoke 1P/3P access handshakes at any time."}
          </p>
          <a 
            href="/contact-us"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              fontWeight: '600',
              padding: '1rem 2.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          >
            Contact Privacy Governance
          </a>
        </motion.div>
      </div>
    </main>
  );
}