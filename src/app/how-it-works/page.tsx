"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Interactive Framework Card Component
interface FrameworkSection {
  heading: string;
  content?: string;
  items?: string[];
}

interface FrameworkComponent {
  icon: string;
  title: string;
  sections: FrameworkSection[];
}

interface InteractiveFrameworkCardProps {
  component: FrameworkComponent;
}

function InteractiveFrameworkCard({ component }: InteractiveFrameworkCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="relative group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div className="relative p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-b border-blue-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-4" style={{ color: '#60a5fa' }}>{component.icon}</span>
              <h3 className="text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300" style={{ fontWeight: '300' }}>
                {component.title}
              </h3>
            </div>
            <motion.span 
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
              style={{ color: '#60a5fa' }}
            >
              +
            </motion.span>
          </div>
        </div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="p-6 space-y-4" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
            {component.sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-base mb-2" style={{ color: '#60a5fa', fontWeight: '300' }}>
                  {section.heading}
                </h4>
                {section.content && (
                  <p className="mb-3 leading-relaxed" style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: '300' }}>
                    {section.content}
                  </p>
                )}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1" style={{ fontSize: '0.8rem' }}>→</span>
                        <span style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: '300' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HowItWorksPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen pt-20" style={{ background: 'var(--background)' }}>
      <div className="container mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontWeight: '300' }}>The Architecture of Autonomy</h1>
          <p className="max-w-4xl mx-auto leading-relaxed" style={{ color: '#cbd5e1', fontSize: '1.125rem', fontWeight: '300' }}>
            {"AURORA9 deploys an interconnected AI workforce to automate and optimize the A-Z lifecycle of 1P and 3P commerce — governed by proprietary AWS-native engines."}
          </p>
        </motion.section>

        {/* 6-Step Orchestration Process */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
        >
          {[
            { title: "1. Unified Integration", desc: "Establish a secure handshake with Seller & Vendor Central to ingest real-time 1P/3P data streams." },
            { title: "2. Initialize Workforce", desc: "Deploy specialized agents into your brand's foundational nervous system." },
            { title: "3. Orchestrate A-Z", desc: "Agents begin autonomous data-sharing via the Omni-Synergy Engine™ to synchronize ads, pricing, and stock." },
            { title: "4. Fee-Aware Optimization", desc: "Active mitigation of Amazon SP-API usage fees and shortage penalties through event-driven modeling." },
            { title: "5. Select Governance", desc: "Configure your level of control: choose between Progressive, Semi-Autonomous, or Fully Autonomous modes." },
            { title: "6. Strategic Sovereignty", desc: "Focus on innovation and brand growth while the workforce self-heals operational friction 24/7." },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg rounded-2xl"
            >
              <h3 className="text-2xl mb-3 text-white font-light">{step.title}</h3>
              <p style={{ color: '#cbd5e1', fontWeight: '300' }}>{step.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Central Flow Diagram: Omni-Synergy Engine™ */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-white mb-4">The Omni-Synergy Engine™</h2>
          <p className="text-blue-400 font-light">{"Breaking data silos to unify global commerce."}</p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-24 relative max-w-6xl mx-auto">
          <div className="p-6 bg-gray-900/60 border border-blue-500/20 rounded-2xl min-w-[200px] text-center">
            <div className="text-4xl mb-2">👤</div>
            <h3 className="text-white font-light">Global Brand</h3>
            <p className="text-xs text-gray-400">Sets Strategic Goals</p>
          </div>
          <div className="hidden lg:block w-16 h-0.5 bg-blue-500/40"></div>
          <div className="p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/40 rounded-3xl min-w-[280px] text-center shadow-2xl backdrop-blur-xl">
            <div className="text-4xl mb-2">⚙️</div>
            <h3 className="text-white font-light text-xl">Omni-Synergy Engine™</h3>
            <p className="text-xs text-blue-300">Interconnected Agent Core</p>
          </div>
          <div className="hidden lg:block w-16 h-0.5 bg-purple-500/40"></div>
          <div className="p-6 bg-gray-900/60 border border-purple-500/20 rounded-2xl min-w-[200px] text-center">
            <div className="text-4xl mb-2">🛒</div>
            <h3 className="text-white font-light">Amazon Ecosystem</h3>
            <p className="text-xs text-gray-400">1P & 3P Endpoints</p>
          </div>
        </div>

        {/* Proprietary Technical Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-24">
          {[
            {
              icon: "👁️",
              title: "ACRE™ (Adaptive Perception)",
              sections: [
                { heading: "Purpose", content: "The Adaptive Cognitive Recalibration Engine detects market and algorithmic \"regime shifts\" in real-time." },
                { heading: "Data Flow", items: ["Kinesis Data Streams for 1P/3P ingestion", "AWS Glue for automated schema discovery", "Real-time Amazon SP-API webhook listening"] }
              ]
            },
            {
              icon: "🧠",
              title: "Fee-Aware Memory Modeling",
              sections: [
                { heading: "Purpose", content: "Maintains a historical ledger of operational costs to minimize Amazon overhead." },
                { heading: "Short-Term", content: "Bedrock context windows for multi-agent negotiation." },
                { heading: "Long-Term", content: "OpenSearch Vector Engine for shortage claim prevention and MAP compliance history." }
              ]
            },
            {
              icon: "⚡",
              title: "PON™ (Reasoning Engine)",
              sections: [
                { heading: "Purpose", content: "The Probabilistic Outcome Navigator determines optimal actions with explainable logic." },
                { heading: "Output", items: ["Explainable \"Why Cards\" for every decision", "Amazon Nova Pro task specialization", "SageMaker predictive outcome mapping"] }
              ]
            },
            {
              icon: "🎼",
              title: "Multi-Agent Orchestration",
              sections: [
                { heading: "Master Control", content: "AWS Step Functions coordinate the A-Z lifecycle across all specialized agents." },
                { heading: "Specialized Agents", items: ["Quantum Inventory: 1P Shortage Mitigation", "Nexus Pricing: 3P Buy Box / 1P MAP Guardrails", "Horizon Advertising: Contribution Margin PPC"] }
              ]
            }
          ].map((component, index) => (
            <InteractiveFrameworkCard key={index} component={component} />
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.section className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-12">
          <h2 className="text-3xl text-white font-light mb-4">Ready to Orchestrate Your Future?</h2>
          <p className="mb-8 text-gray-400 font-light">
            {"Join the waitlist to deploy the world's first interconnected AI workforce."}
          </p>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white" 
              />
              <button type="submit" disabled={isSubmitting} className="w-full bg-white text-blue-900 font-bold py-4 rounded-xl hover:scale-105 transition-transform">
                {isSubmitting ? 'Joining...' : 'Deploy Now'}
              </button>
            </form>
          ) : (
            <div className="text-green-400">{"Welcome to the future of global commerce. 🎉"}</div>
          )}
        </motion.section>
      </div>
    </main>
  );
}