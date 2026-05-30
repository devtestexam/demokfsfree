'use client';
import { useState } from 'react';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';

const loanTypes = [
  'Personal Loan',
  'Business Loan',
  'Home Loan',
  'Loan Against Property',
  'Mortgage Loan',
  'Credit Card',
  'Balance Transfer',
  'Working Capital Loan',
];

const incomeRanges = [
  'Below ₹20,000',
  '₹20,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹3,00,000',
  'Above ₹3,00,000',
];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '', mobile: '', loanType: '', income: '', city: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  const waMsg = `Hello KFS! I'm ${form.name || 'interested'}. I need a ${form.loanType || 'loan'} consultation. My income is ${form.income || 'N/A'} and I'm from ${form.city || 'N/A'}.`;

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle, #c9a84c, transparent)', transform: 'translate(-50%, -50%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle, #0a1628, transparent)', transform: 'translate(50%, 50%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Info */}
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 tracking-wider uppercase"
              style={{ background: 'rgba(10,22,40,0.07)', color: '#0a1628' }}
            >
              Free Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] mb-6">
              Get a Free Loan{' '}
              <span className="gold-text">Consultation</span>
            </h2>
            <p className="text-gray-500 text-base mb-8 leading-relaxed">
              Fill in your details and our expert financial advisor will contact you within 2 hours. No obligation, completely free.
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {[
                '✅ Free expert consultation — no charges',
                '✅ Check eligibility in 60 seconds',
                '✅ Compare offers from 50+ banks',
                '✅ Dedicated relationship manager assigned',
                '✅ 100% confidential & secure',
              ].map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm text-gray-700 font-medium">{b}</div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
              style={{ background: 'linear-gradient(135deg, #128c7e, #25D366)' }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp — Instant Response
            </a>
          </div>

          {/* Right — Form */}
          <div
            className="rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(10,22,40,0.1)]"
            style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(16,185,129,0.12)' }}>
                  <CheckCircle size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-[#0a1628] font-black text-2xl mb-3">Thank You, {form.name}!</h3>
                <p className="text-gray-500 mb-6">
                  Your inquiry has been received. Our expert will call you within <strong>2 hours</strong>.
                </p>
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold"
                  style={{ background: '#25D366' }}
                >
                  <MessageCircle size={16} />
                  Also WhatsApp Us
                </a>
              </div>
            ) : (
              <>
                <h3 className="text-[#0a1628] font-black text-xl mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c76a)' }}>
                    <Send size={15} className="text-[#0a1628]" />
                  </span>
                  Check Your Loan Eligibility
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        className="w-full px-4 py-3 rounded-xl text-sm text-gray-800 placeholder-gray-400 transition-all"
                        style={{ border: '1.5px solid #e2e8f0', background: '#f8fafc' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl text-sm text-gray-800 placeholder-gray-400 transition-all"
                        style={{ border: '1.5px solid #e2e8f0', background: '#f8fafc' }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Loan Type *</label>
                      <select
                        name="loanType"
                        required
                        value={form.loanType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm text-gray-800 transition-all"
                        style={{ border: '1.5px solid #e2e8f0', background: '#f8fafc' }}
                      >
                        <option value="">Select Loan Type</option>
                        {loanTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Monthly Income *</label>
                      <select
                        name="income"
                        required
                        value={form.income}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm text-gray-800 transition-all"
                        style={{ border: '1.5px solid #e2e8f0', background: '#f8fafc' }}
                      >
                        <option value="">Select Income Range</option>
                        {incomeRanges.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your City"
                      className="w-full px-4 py-3 rounded-xl text-sm text-gray-800 placeholder-gray-400 transition-all"
                      style={{ border: '1.5px solid #e2e8f0', background: '#f8fafc' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your loan requirement..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-gray-800 placeholder-gray-400 transition-all resize-none"
                      style={{ border: '1.5px solid #e2e8f0', background: '#f8fafc' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-[#0a1628] font-black text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c76a 50%, #c9a84c 100%)' }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0a1628]/30 border-t-[#0a1628] rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      '✓ Check Eligibility — It\'s Free'
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-2">
                    🔒 Your data is 100% secure & confidential. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
