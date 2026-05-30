'use client';
import { Shield, Zap, TrendingDown, Award, ArrowRight, CheckCircle } from 'lucide-react';

const badges = [
  { icon: Zap, label: 'Fast Approval' },
  { icon: TrendingDown, label: 'Low Interest Options' },
  { icon: Shield, label: '100% Assistance' },
  { icon: Award, label: 'Trusted Partner' },
];

const features = [
  'No Hidden Charges',
  'Expert Guidance',
  'Multiple Bank Partners',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #050e1f 0%, #0a1628 40%, #0f2147 70%, #0a1628 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #1a3a6b 0%, transparent 70%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-[#c9a84c] opacity-40 float-anim" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-[#e8c76a] opacity-30 float-anim" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/5 w-4 h-4 rounded-full bg-[#c9a84c] opacity-20 float-anim" style={{ animationDelay: '2s' }} />
      </div>

      {/* Urgency Banner */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ marginTop: '64px', background: 'rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
        <div className="marquee-track py-2">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-6 px-8 text-[#e8c76a] text-xs font-semibold whitespace-nowrap">
              <Zap size={12} className="flex-shrink-0" />
              🔥 Limited-Time Fast Approval Assistance Available — Apply Today!
              <span className="text-[#c9a84c] mx-4">•</span>
              ✅ Minimum Documentation Required
              <span className="text-[#c9a84c] mx-4">•</span>
              💰 Best Interest Rates Across 50+ Banks
              <span className="text-[#c9a84c] mx-4">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', color: '#e8c76a' }}
            >
              <span className="w-2 h-2 bg-[#c9a84c] rounded-full animate-pulse" />
              India&apos;s Trusted DSA Financial Partner
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
              Fast, Easy &{' '}
              <span className="gold-text">Trusted Loan</span>
              {' '}Solutions
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Get <strong className="text-[#c9a84c]">Personal Loans</strong>, Business Loans, Home Loans & More with KFS – Kian Financial Services.{' '}
              <span className="text-white font-semibold">Quick Approval</span> | Minimum Documentation | Trusted Support
            </p>

            {/* Feature list */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle size={15} className="text-[#c9a84c] flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[#0a1628] font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(201,168,76,0.5)] pulse-glow"
                style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c76a 50%, #c9a84c 100%)' }}
              >
                Apply Now
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/919876543210?text=Hello%20KFS%2C%20I%20need%20a%20free%20loan%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-base transition-all duration-300 hover:scale-105"
                style={{ border: '2px solid rgba(201,168,76,0.5)', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}
              >
                Get Free Consultation
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl text-center"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(201,168,76,0.15)' }}
                  >
                    <Icon size={17} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white text-xs font-semibold leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Finance Illustration */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-full max-w-md float-anim">
              {/* Main card */}
              <div
                className="rounded-3xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(26,58,107,0.9) 0%, rgba(15,33,71,0.95) 100%)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Bank card visual */}
                <div
                  className="rounded-2xl p-6 mb-6 relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c76a 40%, #a07830 100%)', aspectRatio: '16/9' }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, white, transparent)', transform: 'translate(30%, -30%)' }} />
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-[#0a1628] text-xs font-medium opacity-70">KFS Credit</p>
                      <p className="text-[#0a1628] font-black text-lg">KIAN FINANCIAL</p>
                    </div>
                    <div className="w-10 h-7 rounded border-2 border-[#0a1628]/30 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 bg-[#0a1628]/20 rounded-l" />
                        <div className="w-1/2 bg-[#0a1628]/10 rounded-r" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {['****', '****', '****', '4521'].map((g, i) => (
                      <span key={i} className="text-[#0a1628] font-mono font-bold text-sm tracking-widest">{g}</span>
                    ))}
                  </div>
                </div>

                {/* Stats in card */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Happy Clients', value: '5000+' },
                    { label: 'Loans Processed', value: '₹100Cr+' },
                    { label: 'Bank Partners', value: '50+' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-[#c9a84c] font-black text-lg">{s.value}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Loan types row */}
                <div className="flex flex-wrap gap-2">
                  {['Personal Loan', 'Home Loan', 'Business Loan', 'LAP'].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[#c9a84c] text-xs font-semibold"
                      style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating notification card */}
              <div
                className="absolute -bottom-6 -right-6 rounded-2xl px-5 py-4 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #0f2147, #1a3a6b)',
                  border: '1px solid rgba(201,168,76,0.4)',
                  minWidth: '180px',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Loan Approved!</p>
                    <p className="text-[#c9a84c] text-xs">₹5,00,000 — Personal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
