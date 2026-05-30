'use client';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Salaried Professional, Mumbai',
    rating: 5,
    text: 'Very smooth process and quick loan approval. KFS team was incredibly helpful throughout. Got my personal loan of ₹5 lakh approved within 48 hours. Highly recommended!',
    loan: 'Personal Loan – ₹5,00,000',
    avatar: 'RK',
    color: '#3b82f6',
  },
  {
    name: 'Priya Sharma',
    role: 'Business Owner, Pune',
    rating: 5,
    text: 'Excellent support and professional guidance from the KFS team. They helped me get the best interest rate for my business loan. The process was completely transparent.',
    loan: 'Business Loan – ₹25,00,000',
    avatar: 'PS',
    color: '#c9a84c',
  },
  {
    name: 'Amit Patel',
    role: 'Self-Employed, Ahmedabad',
    rating: 5,
    text: 'Got my business loan approved faster than expected! The KFS team guided me through every step. Minimum documentation and maximum support — truly a 5-star experience.',
    loan: 'Working Capital – ₹15,00,000',
    avatar: 'AP',
    color: '#10b981',
  },
  {
    name: 'Sunita Verma',
    role: 'Doctor, Delhi',
    rating: 5,
    text: 'I needed a home loan urgently and KFS delivered beyond expectations. They compared rates across 20+ banks and got me the best deal. Professional, fast, and trustworthy.',
    loan: 'Home Loan – ₹60,00,000',
    avatar: 'SV',
    color: '#8b5cf6',
  },
  {
    name: 'Vikram Singh',
    role: 'IT Professional, Bangalore',
    rating: 5,
    text: 'KFS made my loan against property process super easy. Their team knows exactly what lenders want and helped me prepare the perfect application. Fantastic service!',
    loan: 'Loan Against Property – ₹40,00,000',
    avatar: 'VS',
    color: '#ef4444',
  },
  {
    name: 'Meera Nair',
    role: 'Entrepreneur, Chennai',
    rating: 5,
    text: 'From inquiry to disbursement in just 5 days! The KFS team is responsive, knowledgeable, and genuinely cares about getting you the best deal. Amazing experience overall.',
    loan: 'Business Loan – ₹10,00,000',
    avatar: 'MN',
    color: '#ec4899',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0a1628 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wider uppercase"
            style={{ background: 'rgba(10,22,40,0.06)', color: '#0a1628' }}
          >
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] mb-4 section-title-line">
            What Our <span className="gold-text">Clients Say</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-6">
            Over 5,000 happy clients across India trust KFS for their financial needs.
          </p>
        </div>

        {/* Rating summary */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-14 p-6 rounded-2xl"
          style={{ background: 'linear-gradient(135deg, #0a1628, #0f2147)', maxWidth: '600px', margin: '0 auto 56px' }}
        >
          <div className="text-center">
            <div className="text-5xl font-black text-white mb-1">4.9</div>
            <div className="flex gap-1 justify-center mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#c9a84c] text-[#c9a84c]" />)}
            </div>
            <div className="text-gray-400 text-xs">Overall Rating</div>
          </div>
          <div className="h-12 w-px bg-white/10 hidden sm:block" />
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Total Reviews', value: '2,400+' },
              { label: 'Satisfaction', value: '98%' },
              { label: 'Recommend Us', value: '99%' },
              { label: 'Repeat Clients', value: '72%' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-[#c9a84c] font-black text-lg">{value}</div>
                <div className="text-gray-400 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, rating, text, loan, avatar, color }) => (
            <div
              key={name}
              className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(10,22,40,0.1)] relative"
              style={{ background: '#fff', border: '1px solid #e2e8f0' }}
            >
              {/* Quote icon */}
              <div
                className="absolute top-5 right-5 w-8 h-8 rounded-lg flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ background: color }}
              >
                <Quote size={14} className="text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#c9a84c] text-[#c9a84c]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{text}&rdquo;</p>

              {/* Loan tag */}
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: `${color}12`, color }}
              >
                {loan}
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
                >
                  {avatar}
                </div>
                <div>
                  <div className="text-[#0a1628] font-bold text-sm">{name}</div>
                  <div className="text-gray-400 text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
