"use client";

import { motion } from "framer-motion";

export default function VisionPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white' 
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
        <div style={{ 
          position: 'relative', 
          maxWidth: '64rem', 
          margin: '0 auto', 
          padding: '5rem 1.5rem' 
        }}>
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
              Our Vision
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
              Architecting the foundational nervous system for a self-healing, global trade infrastructure.
            </p>
          </motion.div>
        </div>
        {/* Floating particles */}
        <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '5rem', height: '5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', width: '8rem', height: '8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '10%', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '4rem', height: '4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
      </div>

      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Core Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            fontSize: '2.5rem', 
            fontWeight: '300', 
            marginBottom: '1.5rem', 
            color: '#cbd5e1',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            The 2030 Roadmap: Beyond Marketplace Management
          </h2>
          <p style={{ 
            color: '#cbd5e1',
            fontSize: '1.125rem',
            fontWeight: '300',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            AURORA9 envisions a world where global commerce operates with the fluidity of a biological system. Our vision extends past marketplace management into the orchestration of the entire supply chain—creating an autonomous infrastructure that anticipates disruptions and resolves them in real-time.
          </p>
          <p style={{ 
            color: '#cbd5e1',
            fontSize: '1.125rem',
            fontWeight: '300',
            lineHeight: '1.6',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            We see a future where interconnected AI agents unify 1P and 3P operations into a single, high-velocity stream. By optimizing every touchpoint from manufacturing to the last mile, we are building the backbone of intelligent commerce that empowers brands to grow without friction.
          </p>
        </motion.div>

        {/* Vision Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Pillar 1 */}
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
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{
              width: '3rem', height: '3rem', borderRadius: '0.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '1rem' }}>Global Supply Orchestration</h3>
            <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
              We envision a future where advanced logistics and 1P/3P operational intelligence are accessible to every brand, democratizing the power of enterprise-grade global trade infrastructure.
            </p>
          </motion.div>

          {/* Pillar 2 */}
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
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              width: '3rem', height: '3rem', borderRadius: '0.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '1rem' }}>Predictive Self-Healing</h3>
            <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
              Our vision includes AI ecosystems that don&apos;t just respond to disruptions but predict them—autonomously anticipating stockouts, shortage claims, and market shifts before they impact the bottom line.
            </p>
          </motion.div>

          {/* Pillar 3 */}
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
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              width: '3rem', height: '3rem', borderRadius: '0.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '1rem' }}>Interconnected Infrastructure</h3>
            <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
              We see a future where AI agents unify Seller and Vendor Central ecosystems with real-time API efficiency, creating a single source of truth across every touchpoint of the global digital economy.
            </p>
          </motion.div>
        </div>

        {/* Future Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2.5rem',
            marginBottom: '3rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <h2 style={{ 
            fontSize: '2.5rem', fontWeight: '300', marginBottom: '1.5rem', color: '#cbd5e1', textAlign: 'center' 
          }}>
            The AURORA9 Impact
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '300', color: '#4facfe', marginBottom: '0.5rem' }}>100%</div>
              <p style={{ color: '#cbd5e1', fontWeight: '300' }}>Unification of Seller & Vendor operations</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '300', color: '#8b5cf6', marginBottom: '0.5rem' }}>95%</div>
              <p style={{ color: '#cbd5e1', fontWeight: '300' }}>Mitigation of manual supply chain friction</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '300', color: '#ec4899', marginBottom: '0.5rem' }}>24/7</div>
              <p style={{ color: '#cbd5e1', fontWeight: '300' }}>Autonomous Governance & SP-API Optimization</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '1.5rem', color: '#cbd5e1' }}>Shape the Future with Us</h2>
            <p style={{ 
              color: '#cbd5e1', fontSize: '1.125rem', fontWeight: '300', lineHeight: '1.6', 
              marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' 
            }}>
              Join us in creating a world where interconnected AI workforce masters the A-Z of 1P and 3P commerce—transforming global trade into an intelligent, self-healing nervous system.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a 
                href="/pricing"
                style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  color: 'white', fontWeight: '600', padding: '0.75rem 1.5rem', borderRadius: '0.5rem',
                  textDecoration: 'none', display: 'inline-block'
                }}
              >
                Be Part of the Future
              </a>
              <a 
                href="/about/mission"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1', fontWeight: '600', padding: '0.75rem 1.5rem', borderRadius: '0.5rem',
                  textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(203, 213, 225, 0.3)'
                }}
              >
                Our Mission
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}