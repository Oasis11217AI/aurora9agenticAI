"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '5rem 1.5rem' }}>
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
              About AURORA9
            </h1>
            <p style={{ 
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', 
              fontWeight: '300',
              color: 'white',
              maxWidth: '64rem', 
              margin: '0 auto',
              lineHeight: '1.6',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              position: 'relative',
              zIndex: 1
            }}>
              The foundational nervous system for 1P and 3P commerce, powered by an interconnected workforce mitigating Amazon API overhead.
            </p>
          </motion.div>
        </div>
        {/* Floating particles preserved for layout fidelity */}
        <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '5rem', height: '5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', width: '8rem', height: '8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '10%', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '4rem', height: '4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
      </div>

      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2.5rem',
            marginBottom: '3rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
          <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
          
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '300', 
            marginBottom: '1.5rem', 
            color: '#cbd5e1',
            position: 'relative',
            zIndex: 1
          }}>
            Orchestrating the Future of 1P and 3P Trade
          </h2>
          <p style={{ 
            color: '#cbd5e1',
            fontSize: '1rem',
            fontWeight: '300',
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}>
            AURORA9 is the world’s first interconnected AI workforce designed to orchestrate the full lifecycle of Seller and Vendor Central. We provide a self-healing ecosystem where specialized agents for Marketing, Inventory, and Customer Experience work in total synergy to eliminate shortage penalties and optimize Amazon SP-API usage fees.
          </p>
          <p style={{ 
            color: '#cbd5e1',
            fontSize: '1rem',
            fontWeight: '300',
            lineHeight: '1.7',
            position: 'relative',
            zIndex: 1
          }}>
            With Progressive, Semi-Autonomous, and Fully Autonomous modes, AURORA9 provides the infrastructure for infinite operational elasticity. Our workforce handles the complex A-Z operations in real-time, governed by safety protocols that ensure every decision protects your brand equity and account health.
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(203, 213, 225, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '300' }}>Interconnected 1P/3P Orchestration</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.875rem', fontWeight: '300', lineHeight: '1.6' }}>
              Our agents synchronize data across Seller and Vendor Central. The Inventory Agent monitors stock levels and shortage claims to autonomously inform the Marketing Agent&apos;s ad spend strategy.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(203, 213, 225, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '300' }}>API Cost Optimization</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.875rem', fontWeight: '300', lineHeight: '1.6' }}>
              Built for the 2026 Amazon ecosystem, AURORA9 utilizes event-driven architectures to mitigate usage-based SP-API fees, ensuring high-frequency operations remain economically superior.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(203, 213, 225, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '300' }}>Governed Autonomy</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.875rem', fontWeight: '300', lineHeight: '1.6' }}>
              Select your level of oversight. Our workforce supports three modes of autonomy, allowing you to approve every action or hand over the tactical A-Z within hard-coded safety guardrails.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '1.5rem', color: '#cbd5e1' }}>Ready to Orchestrate the Future of Your Brand?</h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.125rem', fontWeight: '300', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              Transition from an operational manager to a strategic architect. Deploy your interconnected AI workforce and master the complexities of 1P and 3P commerce from A to Z.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a 
                href="/pricing"
                style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                Get Started
              </a>
              <a 
                href="/contact-us"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(203, 213, 225, 0.3)'
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}