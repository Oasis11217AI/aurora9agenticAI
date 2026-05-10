"use client";

import React from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

export default function Home() {
  return (
    <>
      <DarkModeToggle />
      <main style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--foreground)' }}>
        
        {/* Hero Section */}
        <section className="relative text-center py-32 px-6 text-white overflow-hidden min-h-screen flex items-center" style={{ background: 'var(--gradient-cosmic)' }}>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ background: 'var(--primary)' }}></div>
            <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ background: 'var(--accent)', animationDelay: '2s' }}></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto relative z-10"
          >
            <h1 className="text-display mb-6 leading-tight">
              <span className="gradient-text" style={{ fontWeight: '300' }}>
                {"The Foundational Nervous System for 1P and 3P Global Commerce"}
              </span>
            </h1>
            
            <p className="text-body-large mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: '#cbd5e1', fontWeight: '300' }}>
              {"Deploy an interconnected AI workforce powered by "} 
              <span className="font-semibold" style={{ color: 'var(--accent)' }}>Proprietary Synergy Engines</span> 
              {" to orchestrate Marketing, Inventory, and CX from A to Z while mitigating Amazon SP-API fees."}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--accent)' }}>100%</div>
                <div className="text-small" style={{ color: '#cbd5e1', fontWeight: '300' }}>1P/3P Unification</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--accent)' }}>95%</div>
                <div className="text-small" style={{ color: '#cbd5e1', fontWeight: '300' }}>Shortage Mitigation</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--accent)' }}>24/7</div>
                <div className="text-small" style={{ color: '#cbd5e1', fontWeight: '300' }}>Governed Autonomy</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--accent)' }}>AWS</div>
                <div className="text-small" style={{ color: '#cbd5e1', fontWeight: '300' }}>Native Architecture</div>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <a href="#waitlist-section" style={{ background: 'white', color: '#764ba2', fontWeight: '600', padding: '1rem 2rem', borderRadius: '0.5rem', textDecoration: 'none' }}>
                Join the Waitlist
              </a>
              {/* UPDATED: Redirected to Platform Architecture Index */}
              <a href="/site-index" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', fontWeight: '600', padding: '1rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', border: '1px solid white' }}>
                Our Architecture
              </a>
            </div>
          </motion.div>
        </section>

        {/* Specialized Agent Intelligence Section */}
        <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '5rem 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300', color: '#cbd5e1' }}>Specialized Agent Intelligence</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginTop: '1rem', fontWeight: '300' }}>
              {"Proprietary AWS-native engines designed for the 2026 Amazon ecosystem."}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Omni-Synergy Engine™ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '2.5rem',
                border: '1px solid rgba(203, 213, 225, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ color: '#4facfe', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>Proprietary Engine</div>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '300', marginBottom: '1rem' }}>Omni-Synergy Engine™</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontWeight: '300', fontSize: '0.9375rem' }}>
                {"The infrastructure that breaks down data silos, synchronizing ads, SEO, and pricing decisions across Seller and Vendor Central in real-time."}
              </p>
            </motion.div>

            {/* Quantum Inventory Master */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '2.5rem',
                border: '1px solid rgba(203, 213, 225, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ color: '#8b5cf6', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>Specialized Agent</div>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '300', marginBottom: '1rem' }}>Quantum Inventory Master</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontWeight: '300', fontSize: '0.9375rem' }}>
                {"Fee-aware modeling that autonomously manages inbound optimization and prevents shortage claims while mitigating Amazon SP-API usage fees."}
              </p>
            </motion.div>

            {/* Probabilistic Outcome Navigator™ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '2.5rem',
                border: '1px solid rgba(203, 213, 225, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ color: '#06b6d4', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>Governance Engine</div>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '300', marginBottom: '1rem' }}>Probabilistic Outcome Navigator™</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontWeight: '300', fontSize: '0.9375rem' }}>
                {"Ensures Governed Autonomy by providing explainable \"Why Cards\" for every action, detailing the probability-based outcome of strategic shifts."}
              </p>
            </motion.div>

          </div>
        </div>

        {/* Waitlist Section */}
        <motion.section
          id="waitlist-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24 px-6 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}
        >
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-light mb-6">
              {"Be First to Access the Future"}
              <span className="block" style={{ color: 'var(--accent)' }}>{"of 1P and 3P Automation"}</span>
            </h2>
            
            <div className="flex justify-center mb-12">
              <div className="w-full max-w-2xl bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                <form 
                  action="https://assets.mailerlite.com/jsonp/1561600/forms/155870684527986630/subscribe" 
                  method="post" 
                  target="_blank"
                  className="flex flex-col md:flex-row gap-4"
                >
                  <input 
                    type="email" 
                    name="fields[email]" 
                    placeholder="Enter your email address" 
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400"
                    required 
                  />
                  <button type="submit" className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl px-8 py-4 font-bold hover:scale-105 transition-transform">
                    Join Waitlist
                  </button>
                </form>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center opacity-80">
              <div>
                <div className="text-2xl font-bold text-cyan-300">Free</div>
                <div className="text-purple-200 text-sm">Early Access</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">50%</div>
                <div className="text-purple-200 text-sm">Launch Discount</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">24h</div>
                <div className="text-purple-200 text-sm">Priority Support</div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Script 
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024" 
        strategy="lazyOnload"
      />
    </>
  );
}