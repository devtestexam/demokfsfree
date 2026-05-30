'use client';
import { Zap, FileCheck, BookOpen, Handshake, TrendingUp, HeartHandshake } from 'lucide-react';

const reasons = [
  { icon: Zap, title: 'Quick Loan Approval', desc: 'Get your loan approved within 24–48 hours with our streamlined process and bank network.', color: '#f59e0b' },
  { icon: FileCheck, title: 'Minimum Documentation', desc: 'We require only the essential documents, making your loan journey hassle-free.', color: '#3b82f6' },
  { icon: BookOpen, title: 'Expert Financial Guidance', desc: 'Our experienced team helps you choose the best loan product for your specific needs.', color: '#8b5cf6' },
  { icon: Handshake, title: 'Multiple Bank Partnerships', desc: 'Access 50+ banking partners to find the most competitive rates and terms for you.', color: '#10b981' },
  { icon: TrendingUp, title: 'High Approval Rate', desc: '98% client satisfaction with our dedicated relationship management approach.', color: '#8B1A1A' },
  { icon: HeartHandshake, title: 'Personalized Support', desc: 'Dedicated loan manager for each client — we stay with you from inquiry to disbursement.', color: '#ec4899' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#fdf2f2] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #8B1A1A, transparent)' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #b52020, transparent)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wider uppercase" style={{ background: '#fce8e8', color: '#8B1A1A', border: '1px solid #fca5a5' }}>
            Why KFS?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 section-title-line">
            Why Thousands Trust <span className="red-text">KFS?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-6 text-base">
            We are not just loan agents — we are your trusted financial partners committed to your success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc, color }, idx) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(139,26,26,0.12)] card-shine relative"
              style={{ border: '1px solid #e5e7eb' }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black" style={{ background: '#fdf2f2', color: '#8B1A1A' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-[#8B1A1A] transition-colors">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl text-white font-black text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(139,26,26,0.4)] pulse-glow"
            style={{ background: 'linear-gradient(135deg, #8B1A1A, #b52020)' }}
          >
            Start Your Loan Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
