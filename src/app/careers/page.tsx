"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { jobs, Job } from "./jobs";

export default function CareersPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
        color: 'white' 
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
        <div style={{ 
          position: 'relative', 
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: '8rem 1.5rem 6rem' 
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              fontWeight: '300', 
              marginBottom: '2rem',
              color: 'white',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              position: 'relative',
              zIndex: 1
            }}>
              {"Orchestrate the Future of Autonomy"}
            </h1>
            <p style={{ 
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', 
              fontWeight: '300',
              color: 'white',
              maxWidth: '56rem', 
              margin: '0 auto',
              lineHeight: '1.6',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              position: 'relative',
              zIndex: 1
            }}>
              {"AURORA9 is recruiting the architects of the world's first interconnected AI workforce. Join us in building the foundational nervous system that governs 1P and 3P global commerce."}
            </p>

            {/* Architectural Trust Signals */}
            <div style={{ 
              marginTop: '3rem', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem', 
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 1 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#4facfe' }}>⚡</span>
                <span style={{ fontWeight: '300', fontSize: '0.9rem', color: '#cbd5e1' }}>AWS-Native Scale</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#8b5cf6' }}>🧠</span>
                <span style={{ fontWeight: '300', fontSize: '0.9rem', color: '#cbd5e1' }}>Agentic Governance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#00f2fe' }}>🌐</span>
                <span style={{ fontWeight: '300', fontSize: '0.9rem', color: '#cbd5e1' }}>Global Trade Impact</span>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Floating particles */}
        <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '5rem', height: '5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', width: '8rem', height: '8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '10%', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '4rem', height: '4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
      </div>

      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {jobs.map((job: Job, index: number) => (
            <motion.div
              key={job.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgba(203, 213, 225, 0.1)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                justifyContent: 'space-between', 
                position: 'relative', 
                zIndex: 1,
                gap: '1rem'
              }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ 
                    fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', 
                    fontWeight: '300', 
                    color: 'white',
                    margin: 0
                  }}>
                    {job.title}
                  </h2>
                </div>
                <Link href={`/careers/${job.slug}`}>
                  <button 
                    style={{
                      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                      color: 'white',
                      fontWeight: '600',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.5rem',
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      flexShrink: 0
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    {"Apply for Role"}
                  </button>
                </Link>
              </div>
              <p style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                marginTop: '0.75rem', 
                lineHeight: '1.6',
                position: 'relative',
                zIndex: 1
              }}>
                {job.shortDescription}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}