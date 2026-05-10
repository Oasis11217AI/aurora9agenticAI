"use client";

import React from "react";
import { motion } from "framer-motion";
import InvestorForm from '@/components/forms/InvestorForm';

export default function InvestorsPage() {
  const roadmapPhases = [
    {
      title: "Phase I: Foundation & Protocol Refinement",
      timeline: "Months 0-18",
      milestone: "100 High-Value Enterprise Nodes",
      focus: [
        "Finalize ACRE™ and PON™ engine benchmarks.",
        "Deep-tissue integration with Top-Tier 1P/3P hybrid brands.",
        "Refinement of governed autonomy safety protocols."
      ]
    },
    {
      title: "Phase II: Operational Acceleration",
      timeline: "Months 18-36",
      milestone: "1,000 Orchestrated Units",
      focus: [
        "Expansion into the mid-market aggregator ecosystem.",
        "Launch of the Bespoke Agent Development API.",
        "Optimization of SP-API fee mitigation at scale."
      ]
    },
    {
      title: "Phase III: Global Ecosystem Leadership",
      timeline: "Year 5",
      milestone: "3,000 Autonomous Nodes",
      focus: [
        "AURORA9 becomes the standard nervous system for global trade.",
        "Total unification of 1P/3P logistics and marketing orchestration.",
        "Dominant market position in autonomous brand governance."
      ]
    }
  ];

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)', color: 'white' }}>
      
      {/* Hero Section */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--gradient-cosmic)', padding: '8rem 1.5rem 5rem' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }}></div>
        <div style={{ position: 'relative', maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
              fontWeight: '300', 
              marginBottom: '1.5rem',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
          >
            {"The Infrastructure of Global Trade"}
          </motion.h1>
          <p style={{ 
            maxWidth: '45rem', 
            margin: '0 auto', 
            color: '#cbd5e1', 
            fontWeight: '300', 
            fontSize: '1.25rem', 
            lineHeight: '1.6' 
          }}>
            {"AURORA9 is architecting the foundational nervous system for 1P and 3P commerce. We are building the defensible infrastructure that unifies global supply chains into a single, self-healing ecosystem."}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '5rem 1.5rem' }}>
        
        {/* Scaling Roadmap Section */}
        <section style={{ marginBottom: '8rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '300', color: '#4facfe' }}>
              {"Scaling Roadmap: The 3,000 Node Vision"}
            </h2>
            <p style={{ color: '#94a3b8', marginTop: '1rem', fontWeight: '300' }}>
              {"A phased approach to institutional-grade autonomous orchestration."}
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {roadmapPhases.map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  padding: '3rem 2rem',
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ fontSize: '0.85rem', color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem', fontWeight: '600' }}>
                  {phase.timeline}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '400', marginBottom: '1.5rem', color: 'white' }}>{phase.title}</h3>
                <div style={{ fontSize: '1.75rem', fontWeight: '300', marginBottom: '2rem', color: '#fff', borderLeft: '3px solid #4facfe', paddingLeft: '1rem' }}>
                  {phase.milestone}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', fontWeight: '300' }}>
                  {phase.focus.map((item, i) => (
                    <li key={i} style={{ marginBottom: '1.25rem', display: 'flex', gap: '0.75rem' }}>
                      <span style={{ color: '#4facfe', fontWeight: 'bold' }}>{"•"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Investment Pillars */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '5rem', 
          marginBottom: '8rem',
          padding: '4rem',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '2rem',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: '300', marginBottom: '1.5rem', color: '#cbd5e1' }}>{"Unification of Global Trade"}</h2>
            <p style={{ color: '#94a3b8', fontWeight: '300', lineHeight: '1.8', fontSize: '1.1rem' }}>
              {"AURORA9 leverages over 15 years of marketplace architecture to solve the systemic fragmentation of Amazon operations. By unifying Seller and Vendor Central under a single autonomous nervous system, we create an impenetrable defensive moat around enterprise brand margins."}
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: '300', marginBottom: '1.5rem', color: '#cbd5e1' }}>{"AWS-Native Scalability"}</h2>
            <p style={{ color: '#94a3b8', fontWeight: '300', lineHeight: '1.8', fontSize: '1.1rem' }}>
              {"Built on a robust, event-driven framework, AURORA9 is designed to survive Amazon regime shifts while scaling to handle 3,000 autonomous units. Our ACRE™ and PON™ engines provide the technical sovereignty required for the 2026 trade ecosystem."}
            </p>
          </div>
        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '2rem',
            padding: '4rem 2rem',
            border: '1px solid rgba(203, 213, 225, 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            maxWidth: '60rem',
            margin: '0 auto'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300', color: '#fff', marginBottom: '1.5rem' }}>
              {"Initialize Institutional Handshake"}
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.125rem', maxWidth: '38rem', margin: '0 auto', fontWeight: '300', lineHeight: '1.6' }}>
              {"Accredited partners may request access to the AURORA9 technical whitepaper and the 5-year roadmap briefing below."}
            </p>
          </div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <InvestorForm />
          </div>
        </motion.div>
      </div>
    </main>
  );
}