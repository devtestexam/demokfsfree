'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'How fast can I get loan approval?', a: 'At KFS, we process most loan applications within 24–48 hours. In urgent cases, we can expedite the process. Once approved by the bank, funds are typically disbursed within 3–7 business days depending on the loan type.' },
  { q: 'What documents are required for a loan?', a: 'Documents required vary by loan type but generally include: PAN Card, Aadhaar Card, last 3 months salary slips or 2 years ITR (for self-employed), bank statements (last 6 months), and proof of address. Our team guides you on exact requirements for your specific loan.' },
  { q: 'Is there any consultation fee charged by KFS?', a: 'No! Our consultation is completely free. We earn through bank partnerships, not from you. There are absolutely no hidden charges for our advisory services. You only pay standard bank processing fees which apply directly.' },
  { q: 'Which loan types are available through KFS?', a: 'We offer a comprehensive range: Personal Loans, Business Loans, Home Loans, Loan Against Property, Mortgage Loans, Credit Cards, Balance Transfer, and Working Capital Loans. We partner with 50+ banks to find the best match for your needs.' },
  { q: 'Will applying affect my credit score?', a: 'Simply submitting an inquiry with KFS does NOT affect your credit score. A hard credit inquiry only happens when a bank formally processes your application, which we do only after your explicit consent and choosing the right lender.' },
  { q: 'What if my loan application gets rejected?', a: 'We assess your profile before applying to avoid rejections. Our team analyzes your eligibility across multiple banks and recommends the best-fit lenders. If a rejection happens, we help you understand the reasons and plan the next steps effectively.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wider uppercase" style={{ background: '#fdf2f2', color: '#8B1A1A' }}>
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 section-title-line">
            Frequently Asked <span className="red-text">Questions</span>
          </h2>
          <p className="text-gray-500 mt-6">Everything you need to know about our loan services.</p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border: open === idx ? '1.5px solid #fca5a5' : '1.5px solid #e5e7eb',
                background: '#fff',
                boxShadow: open === idx ? '0 4px 20px rgba(139,26,26,0.08)' : 'none',
              }}
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left gap-4"
              >
                <span className="font-semibold text-sm md:text-base transition-colors" style={{ color: open === idx ? '#8B1A1A' : '#374151' }}>
                  {q}
                </span>
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: open === idx ? 'linear-gradient(135deg, #8B1A1A, #b52020)' : '#f3f4f6',
                    color: open === idx ? '#fff' : '#6b7280',
                  }}
                >
                  {open === idx ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === idx ? '300px' : '0' }}>
                <div className="px-5 pb-5">
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">Still have questions? We&apos;re here to help.</p>
          <a
            href="https://wa.me/919876543210?text=Hello%20KFS%2C%20I%20have%20a%20question%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold transition-all hover:scale-105"
            style={{ background: '#25D366' }}
          >
            💬 Chat with Our Expert
          </a>
        </div>
      </div>
    </section>
  );
}
