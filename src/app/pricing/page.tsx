'use client';

import { motion } from 'framer-motion';

export default function PricingPage() {
  const pricingPlans = [
    {
      title: "PILOT",
      price: "$0",
      period: "",
      description: "Essential 1P & 3P audit capabilities for brand visibility.",
      variableFee: "Variable Fee: $0",
      highlighted: false,
      features: [
        { text: "Progressive Autonomy (Read-Only)", check: true },
        { text: "Daily 1P & 3P Policy Audit", check: true },
        { text: "Max 10 ASIN/SKU Monitoring", check: true },
        { text: "Margin Protection Alerts", check: true },
        { text: "Semi-Autonomous Execution", check: false },
        { text: "SP-API Fee Mitigation Engine", check: false }
      ],
      buttonText: "Start Free Audit"
    },
    {
      title: "MANAGER",
      price: "$499",
      period: "/mo",
      description: "Core automation for scaling 1P & 3P brands.",
      variableFee: "Variable Fee: $0",
      highlighted: true,
      features: [
        { text: "Semi-Autonomous Orchestration", check: true },
        { text: "5 Specialized Agents", check: true },
        { text: "PON™ Explainable \"Why Cards\"", check: true },
        { text: "Shortage Claim Prevention", check: true },
        { text: "Up to 500 SKUs", check: true },
        { text: "Omni-Synergy™ Integration", check: false }
      ],
      buttonText: "Upgrade & Launch"
    },
    {
      title: "DIRECTOR",
      price: "$1,999",
      period: "/mo",
      description: "Full workforce orchestration for enterprise scale.",
      variableFee: "Service Fee: 3% of Verified ROI",
      highlighted: false,
      features: [
        { text: "Fully Autonomous Governance", check: true },
        { text: "Full Interconnected Workforce", check: true },
        { text: "Omni-Synergy Engine™", check: true },
        { text: "SP-API Fee Mitigation Engine", check: true },
        { text: "ACRE™ Adaptive Recalibration", check: true },
        { text: "Unlimited Global SKUs", check: true }
      ],
      buttonText: "Upgrade & Launch"
    },
    {
      title: "BESPOKE",
      price: "Custom",
      period: "",
      description: "Tailored infrastructure for Aggregators.",
      variableFee: "Negotiated Service Fee",
      highlighted: false,
      features: [
        { text: "Custom Agent Development", check: true },
        { text: "Dedicated AWS Compute", check: true },
        { text: "White-Glove 1P/3P Onboarding", check: true },
        { text: "Multi-Entity Management", check: true },
        { text: "Probabilistic Risk Modeling", check: true }
      ],
      buttonText: "Contact Sales"
    }
  ];

  const faqItems = [
    { 
      q: "How are Amazon SP-API fees mitigated?", 
      a: "Our higher tiers include a proprietary mitigation engine that optimizes polling frequencies and prioritizes event-driven webhooks. This significantly reduces the operational overhead and API usage fees typically associated with high-volume scaling." 
    },
    { 
      q: "Can I manage 1P and 3P accounts simultaneously?", 
      a: "Yes. Our Director and Bespoke tiers utilize the Omni-Synergy™ engine to unify Seller and Vendor Central data into a single, interconnected nervous system, allowing for seamless global orchestration." 
    },
    { 
      q: "What are Explainable \"Why Cards\"?", 
      a: "Powered by our PON™ engine, \"Why Cards\" provide transparent, probability-based reasoning for every autonomous action. This ensures you always understand the logic behind the workforce's decisions, maintaining full Governed Autonomy." 
    },
    { 
      q: "Is 1P shortage claim prevention included?", 
      a: "Shortage claim monitoring is a core feature of the Manager and Director tiers. We utilize historical ledger data and real-time inventory modeling to protect your 1P margins and prevent Amazon shortage penalties." 
    }
  ];

  return (
    <>
      <style jsx>{`
        .faq-grid, .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
          gap: 2rem;
          position: relative;
          z-index: 1;
        }
        
        .pricing-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
           gap: 2rem;
           margin-bottom: 4rem;
        }

        @media (max-width: 768px) {
          .faq-grid, .pillars-grid, .pricing-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
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
              AURORA9 Governed Pricing
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
                Aligning your operational costs with verified autonomous performance across the global supply chain.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '2rem',
                border: plan.highlighted ? '1px solid rgba(79, 172, 254, 0.5)' : '1px solid rgba(203, 213, 225, 0.3)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ scale: 1.02 }}
            >
              {plan.highlighted && (
                <div style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', zIndex: 2 }}>
                  Enterprise Favorite
                </div>
              )}

              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '0.5rem' }}>{plan.title}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: '300', color: '#fff', marginBottom: '0.5rem' }}>
                  {plan.price}<span style={{fontSize: '1rem', color: '#94a3b8'}}>{plan.period}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
                  {plan.description}
                </p>
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', fontSize: '0.875rem', color: '#4facfe' }}>
                  {plan.variableFee}
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                {plan.features.map((item, i) => (
                  <li key={i} style={{ color: item.check ? '#cbd5e1' : '#64748b', fontWeight: '300', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: item.check ? '#4facfe' : '#ef4444', marginRight: '0.75rem' }}>{item.check ? '✓' : '✕'}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <a href="/pricing" style={{ 
                display: 'block', 
                width: '100%', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                fontWeight: '600', 
                textAlign: 'center', 
                background: plan.highlighted ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' : 'rgba(255,255,255,0.1)', 
                color: 'white', 
                textDecoration: 'none', 
                border: plan.highlighted ? 'none' : '1px solid rgba(255,255,255,0.2)' 
              }}>
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>

        {/* The Hybrid Alignment Section */}
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2.5rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '2.5rem', textAlign: 'center' }}>
              The Hybrid Alignment Model
            </h2>
            <div className="pillars-grid">
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                     <span style={{ width: '4px', height: '1.5rem', background: '#4facfe', marginRight: '1rem', borderRadius: '4px' }}></span>
                     Infrastructure Subscription
                  </h3>
                  <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
                    The base rate ensures 24/7 account health monitoring and the foundational nervous system uptime required for event-driven 1P/3P orchestration.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                     <span style={{ width: '4px', height: '1.5rem', background: '#00f2fe', marginRight: '1rem', borderRadius: '4px' }}></span>
                     Performance Service Fee
                  </h3>
                  <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
                    Our model aligns directly with your success. Variable fees are only applied to verified ROI generated through autonomous agent actions.
                  </p>
                </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2.5rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
          }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '2.5rem', textAlign: 'center' }}>
              Strategic FAQ
            </h2>
            <div className="faq-grid">
              {faqItems.map((faq, i) => (
                <div className="faq-item" key={i} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(203, 213, 225, 0.2)',
                }}>
                  <h3 className="faq-title" style={{ fontSize: '1.25rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '1rem' }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1.5rem',
            padding: '4rem 2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
          }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '1.5rem' }}>
              Ready to Orchestrate Your Future?
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '2.5rem', maxWidth: '42rem', margin: '0 auto 2.5rem' }}>
              Join the elite group of brands transforming global commerce through interconnected AI workforce governance.
            </p>
            <a href="/pricing" style={{
              display: 'inline-block',
              padding: '1.25rem 3rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              Join the Waitlist Today
            </a>
          </div>
        </motion.div>
      </div>
    </main>
    </>
  );
}