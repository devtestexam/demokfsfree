'use client';
import { ClipboardList, MessageCircle, FileSearch, BadgeCheck } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Submit Inquiry',
    desc: 'Fill out our simple online form or WhatsApp us with your loan requirement.',
    color: '#3b82f6',
  },
  {
    icon: MessageCircle,
    number: '02',
    title: 'Free Consultation',
    desc: 'Our expert advisor will call you within 2 hours for a detailed consultation.',
    color: '#c9a84c',
  },
  {
    icon: FileSearch,
    number: '03',
    title: 'Document Verification',
    desc: 'Submit minimal documents. We handle all paperwork and bank coordination.',
    color: '#8b5cf6',
  },
  {
    icon: BadgeCheck,
    number: '04',
    title: 'Loan Disbursement',
    desc: 'Approved! Funds are credited directly to your account within 24–72 hours.',
    color: '#10b981',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0a1628 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wider uppercase"
            style={{ background: 'rgba(10,22,40,0.06)', color: '#0a1628' }}
          >
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] mb-4 section-title-line">
            Get Your Loan in{' '}
            <span className="gold-text">4 Simple Steps</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-6">
            Our streamlined process ensures you get your loan approved with minimum effort and maximum speed.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 hidden lg:block pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #c9a84c, #8b5cf6, #10b981)' }}
          />

          {steps.map(({ icon: Icon, number, title, desc, color }) => (
            <div
              key={number}
              className="group flex flex-col items-center text-center relative"
            >
              {/* Step icon circle */}
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] z-10 bg-white"
                style={{ border: `3px solid ${color}`, boxShadow: `0 4px 20px ${color}30` }}
              >
                <Icon size={30} style={{ color }} />
                {/* Step number badge */}
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black"
                  style={{ background: color }}
                >
                  {number.replace('0', '')}
                </div>
              </div>

              <h3 className="text-[#0a1628] font-bold text-lg mb-3 group-hover:text-[#1a3a6b] transition-colors">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

              {/* Bottom pill */}
              <div
                className="mt-4 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: `${color}12`, color }}
              >
                Step {number}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div
          className="mt-16 rounded-2xl p-8 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f2147 100%)', border: '1px solid rgba(201,168,76,0.3)' }}
        >
          <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(ellipse at center, #c9a84c, transparent 70%)' }} />
          <p className="text-[#e8c76a] font-black text-xl mb-2 relative z-10">
            🚀 Start your journey in under 5 minutes
          </p>
          <p className="text-gray-400 text-sm mb-6 relative z-10">
            No credit score impact for inquiry. 100% confidential & secure process.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-[#0a1628] font-bold transition-all duration-300 hover:scale-105 relative z-10"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c76a)' }}
          >
            Apply Now — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
