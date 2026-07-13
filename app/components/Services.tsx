'use client';
import { Home, Briefcase, User, Building2, Key, CreditCard, RefreshCw, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  { icon: User, title: 'Personal Loan', desc: 'Quick funds for any personal need — travel, medical, education, or wedding.', color: '#3b82f6' },
  { icon: Briefcase, title: 'Business Loan', desc: 'Fuel your business growth with fast working capital solutions.', color: '#8b5cf6' },
  { icon: Home, title: 'Home Loan', desc: 'Affordable home loans with lowest interest rates and easy EMI options.', color: '#10b981' },
  { icon: Building2, title: 'Loan Against Property', desc: 'Unlock the value of your property with competitive LAP rates.', color: '#f59e0b' },
  { icon: Key, title: 'Mortgage Loan', desc: 'Flexible mortgage solutions tailored to your financial goals.', color: '#8B1A1A' },
  { icon: CreditCard, title: 'Credit Card', desc: 'Premium credit cards with rewards, cashback & zero joining fee.', color: '#ec4899' },
  { icon: RefreshCw, title: 'Balance Transfer', desc: 'Transfer your high-interest loans to lower rate options seamlessly.', color: '#06b6d4' },
  { icon: BarChart3, title: 'Working Capital', desc: 'Ensure smooth business operations with flexible working capital finance.', color: '#84cc16' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #8B1A1A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wider uppercase" style={{ background: '#fdf2f2', color: '#8B1A1A' }}>
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 section-title-line">
            Comprehensive Loan Solutions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-6 text-base">
            From personal needs to business growth — KFS offers end-to-end financial solutions with expert guidance at every step.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 transition-all duration-300 card-shine cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(139,26,26,0.1)] relative"
              style={{ border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}15`, border: `1.5px solid ${color}30` }}
              >
                <Icon size={26} style={{ color }} />
              </div>

              <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-[#8B1A1A] transition-colors">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>

              <a
                href={`https://wa.me/919876543210?text=Hello%20KFS%2C%20I%20want%20to%20apply%20for%20a%20${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B1A1A] transition-all duration-200"
              >
                Apply Now
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>

              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${color}, #8B1A1A)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
