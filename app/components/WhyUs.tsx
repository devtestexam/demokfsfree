'use client';
import { Zap, FileCheck, BookOpen, Handshake, TrendingUp, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Quick Loan Approval',
    desc: 'Get your loan approved within 24–48 hours with our streamlined process and bank network.',
    color: '#f59e0b',
  },
  {
    icon: FileCheck,
    title: 'Minimum Documentation',
    desc: 'We require only the essential documents, making your loan journey hassle-free.',
    color: '#3b82f6',
  },
  {
    icon: BookOpen,
    title: 'Expert Financial Guidance',
    desc: 'Our experienced team helps you choose the best loan product for your specific needs.',
    color: '#8b5cf6',
  },
  {
    icon: Handshake,
    title: 'Multiple Bank Partnerships',
    desc: 'Access 50+ banking partners to find the most competitive rates and terms for you.',
    color: '#10b981',
  },
  {
    icon: TrendingUp,
    title: 'High Approval Rate',
    desc: '98% client satisfaction with our dedicated relationship management approach.',
    color: '#ef4444',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Support',
    desc: 'Dedicated loan manager for each client — we stay with you from inquiry to disbursement.',
    color: '#ec4899',
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f2147 50%, #0a1628 100%)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ background: 'radial-gradient(ellipse at right top, #c9a84c, transparent 60%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/3 h-2/3 opacity-5"
          style={{ background: 'radial-gradient(ellipse at left bottom, #1a3a6b, transparent 60%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wider uppercase"
            style={{ background: 'rgba(201,168,76,0.15)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.3)' }}
          >
            Why KFS?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 section-title-line">
            Why Thousands Trust <span className="gold-text">KFS?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-6 text-base">
            We are not just loan agents — we are your trusted financial partners committed to your success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc, color }, idx) => (
            <div
              key={title}
              className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 card-shine"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: 'rgba(201,168,76,0.2)', color: '#c9a84c' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>

              {/* Hover bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl text-[#0a1628] font-black text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(201,168,76,0.4)] pulse-glow"
            style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c76a 50%, #c9a84c 100%)' }}
          >
            Start Your Loan Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
