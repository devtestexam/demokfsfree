import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Loan Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
];

const services = ['Personal Loan', 'Business Loan', 'Home Loan', 'Loan Against Property', 'Mortgage Loan', 'Working Capital Loan'];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white" style={{ borderTop: '1px solid #fca5a5' }}>
      {/* Top red bar */}
      <div className="w-full h-1" style={{ background: 'linear-gradient(90deg, #8B1A1A, #b52020, #8B1A1A)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top CTA banner */}
        <div
          className="rounded-2xl p-8 mb-14 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #b52020 100%)', boxShadow: '0 10px 40px rgba(139,26,26,0.25)' }}
        >
          <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(ellipse at center, white, transparent 70%)' }} />
          <h3 className="text-white font-black text-2xl mb-3 relative z-10">🚀 Ready to Get Your Loan Approved?</h3>
          <p className="text-white/80 mb-5 relative z-10 text-sm">Join 5,000+ happy clients. Apply now or WhatsApp us for instant response.</p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a
              href="https://wa.me/919876543210?text=Hello%20KFS%2C%20I%20need%20a%20free%20loan%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-xl text-[#8B1A1A] font-bold text-sm transition-all hover:scale-105 bg-white"
            >
              Apply Now
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-xl text-white font-bold text-sm transition-all hover:scale-105 flex items-center gap-2"
              style={{ background: '#25D366' }}
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8B1A1A, #b52020)' }}>
                <span className="text-white font-black text-sm">KFS</span>
              </div>
              <div>
                <div className="text-gray-900 font-black text-base">KFS</div>
                <div className="text-[#8B1A1A] text-xs">Kian Financial Services</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your trusted DSA partner for all loan needs. Fast approvals, expert guidance, and transparent service across India.
            </p>
            <div className="flex gap-3">
              {[{ label: 'FB', href: '#' }, { label: 'IG', href: '#' }, { label: 'LI', href: '#' }, { label: 'YT', href: '#' }].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-110 hover:bg-[#8B1A1A] hover:text-white"
                  style={{ background: '#fdf2f2', color: '#8B1A1A', border: '1px solid #fca5a5' }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#8B1A1A]" />Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-gray-500 hover:text-[#8B1A1A] text-sm transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B1A1A] opacity-50" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#8B1A1A]" />Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-gray-500 hover:text-[#8B1A1A] text-sm transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B1A1A] opacity-50" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#8B1A1A]" />Contact Us
            </h4>
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Phone / WhatsApp', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: Mail, label: 'Email', value: 'info@kianfinancial.in', href: 'mailto:info@kianfinancial.in' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#fdf2f2', border: '1px solid #fca5a5' }}>
                    <Icon size={14} className="text-[#8B1A1A]" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">{label}</div>
                    <div className="text-gray-800 text-sm font-semibold group-hover:text-[#8B1A1A] transition-colors">{value}</div>
                  </div>
                </a>
              ))}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#fdf2f2', border: '1px solid #fca5a5' }}>
                  <MapPin size={14} className="text-[#8B1A1A]" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-0.5">Office Address</div>
                  <div className="text-gray-800 text-sm leading-relaxed">123, Finance Tower, Business District,<br />Mumbai, Maharashtra – 400001</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">© 2024 KFS – Kian Financial Services. All Rights Reserved.</p>
          <p className="text-gray-300 text-xs">KFS is a registered DSA | IRDAI Compliant | All loans subject to bank approval</p>
        </div>
      </div>
    </footer>
  );
}
