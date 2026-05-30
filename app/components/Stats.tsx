'use client';
import { useEffect, useRef, useState } from 'react';
import { Users, IndianRupee, Building, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'Happy Clients', desc: 'Loans disbursed successfully', color: '#3b82f6' },
  { icon: IndianRupee, value: 100, suffix: 'Cr+', label: 'Loans Processed', desc: 'Total loan value managed', color: '#8B1A1A' },
  { icon: Building, value: 50, suffix: '+', label: 'Banking Partners', desc: 'Across India', color: '#10b981' },
  { icon: ThumbsUp, value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Based on client feedback', color: '#8b5cf6' },
];

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return <span>{count.toLocaleString('en-IN')}{suffix}</span>;
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #b52020 60%, #8B1A1A 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, white, transparent)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Our Numbers <span style={{ color: '#ffd5d0' }}>Speak Louder</span>
          </h2>
          <p className="text-white/80">Trusted by thousands of Indians for their financial journey</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, suffix, label, desc, color }) => (
            <div
              key={label}
              className="group rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 card-shine bg-white"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform group-hover:scale-110"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}
              >
                <Icon size={28} style={{ color }} />
              </div>
              <div className="text-4xl font-black mb-2" style={{ color }}>
                <Counter target={value} suffix={suffix} active={active} />
              </div>
              <div className="text-gray-800 font-bold text-base mb-1">{label}</div>
              <div className="text-gray-400 text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
