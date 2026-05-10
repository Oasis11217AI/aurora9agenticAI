"use client";

import { motion } from "framer-motion";
import { FileText, Shield, Scale, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "Workforce Infrastructure",
      icon: <FileText className="w-6 h-6" />,
      content: [
        "AURORA9 provides an interconnected AI workforce infrastructure.",
        "Our platform orchestrates the A-Z lifecycle of 1P and 3P commerce.",
        "Services are deployed via proprietary engines (Omni-Synergy™, ACRE™, PON™).",
        "We maintain a foundational nervous system for global trade operations.",
        "Deployment tiers (Pilot, Manager, Director) dictate autonomy levels."
      ]
    },
    {
      title: "Governed Autonomy",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Users serve as the 'Strategic Governor' of the AI workforce.",
        "Guardrails must be configured by the user to define agent limits.",
        "Fully Autonomous mode operates strictly within user-set parameters.",
        "Semi-Autonomous actions require human-in-the-loop verification.",
        "PON™ 'Why Cards' provide the audit trail for all agentic decisions."
      ]
    },
    {
      title: "Amazon Ecosystem & Fees",
      icon: <Scale className="w-6 h-6" />,
      content: [
        "Users must maintain valid SP-API and Vendor Central handshakes.",
        "ACRE™ optimizes polling to mitigate Amazon usage and throttling fees.",
        "AURORA9 is not responsible for changes in Amazon's third-party policies.",
        "Shortage claim prevention requires accurate historical shipping data.",
        "Repricing actions comply with user-defined MAP and margin floors."
      ]
    },
    {
      title: "Liability & Disclaimers",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        "Infrastructure is provided 'as is' for autonomous orchestration.",
        "We are not liable for outcomes derived from user-configured guardrails.",
        "Verified ROI calculations are based on real-time ecosystem data signals.",
        "Proprietary engine IP remains the sole property of AURORA9.",
        "Service uptime is prioritized for 24/7 event-driven task execution."
      ]
    }
  ];

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '8rem 1.5rem 5rem' }}>
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
              Architectural Terms of Service
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
              {"These terms govern the relationship between human strategic governors and the AURORA9 autonomous workforce. By initializing a handshake, you agree to our framework of Governed Autonomy."}
            </p>
            <div style={{ 
              marginTop: '2rem', 
              color: 'rgba(255,255,255,0.8)',
              position: 'relative',
              zIndex: 1
            }}>
              <p style={{ fontWeight: '300' }}>{"Last updated: May 10, 2026"}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* Agreement Notice */}
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
            padding: '3rem 2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <Scale style={{ width: '3rem', height: '3rem', color: '#4facfe', margin: '0 auto 1.5rem' }} />
            <h2 style={{ fontSize: '2.25rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '1.5rem' }}>
              The Governance Handshake
            </h2>
            <p style={{ fontSize: '1.125rem', fontWeight: '300', color: '#cbd5e1', maxWidth: '50rem', margin: '0 auto', lineHeight: '1.8' }}>
              {"By deploying AURORA9 agents, you acknowledge that while the workforce is autonomous, the strategic accountability rests with the Governor. You maintain absolute control over the guardrails and decision-pathways generated by our PON™ engine."}
            </p>
          </div>
        </motion.div>

        {/* Main Terms Sections */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '1rem',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ color: '#4facfe', marginRight: '1rem' }}>
                  {section.icon}
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '400', color: 'white' }}>
                  {section.title}
                </h2>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '1rem', display: 'flex' }}>
                    <span style={{ color: '#4facfe', marginRight: '0.75rem' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1.5rem',
            padding: '4rem 2rem',
            border: '1px solid rgba(203, 213, 225, 0.2)',
            textAlign: 'center'
          }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '1.5rem' }}>
            Legal & Compliance Briefing
          </h2>
          <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', maxWidth: '40rem', margin: '0 auto 2.5rem' }}>
            {"For enterprise-tier brands requiring a full legal review of our 'Governed Autonomy' framework or SOC 2 documentation, please contact our compliance division."}
          </p>
          <a 
            href="/contact-us"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              fontWeight: '600',
              padding: '1rem 3rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          >
            Contact Legal Team
          </a>
        </motion.div>
      </div>
    </main>
  );
}