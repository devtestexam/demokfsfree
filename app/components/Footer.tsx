import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Loan Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
];

const services = [
  'Personal Loan',
  'Business Loan',
  'Home Loan',
  'Loan Against Property',
  'Mortgage Loan',
  'Working Capital Loan',
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050e1f 0%, #0a1628 50%, #050e1f 100%)' }}
    >
      {/* Top divider */}
      <div className="w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #e8c76a, #c9a84c, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top CTA banner */}
        <div
          className="rounded-2xl p-8 mb-14 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(26,58,107,0.3))', border: '1px solid rgba(201,168,76,0.3)' }}
        >
          <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(ellipse at center, #c9a84c, transparent 70%)' }} />
          <h3 className="text-white font-black text-2xl mb-3 relative z-10">
            🚀 Ready to Get Your Loan Approved?
          </h3>
          <p className="text-gray-400 mb-5 relative z-10 text-sm">
            Join 5,000+ happy clients. Apply now or WhatsApp us for instant response.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a
              href="#contact"
              className="px-7 py-3 rounded-xl text-[#0a1628] font-bold text-sm transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c76a)' }}
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
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c76a)' }}
              >
                <span className="text-[#0a1628] font-black text-sm">KFS</span>
              </div>
              <div>
                <div className="text-white font-black text-base">KFS</div>
                <div className="text-[#c9a84c] text-xs">Kian Financial Services</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted DSA partner for all loan needs. Fast approvals, expert guidance, and transparent service across India.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: 'FB', href: '#' },
                { label: 'IG', href: '#' },
                { label: 'LI', href: '#' },
                { label: 'YT', href: '#' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#c9a84c',
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#c9a84c]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] opacity-60" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#c9a84c]" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] opacity-60" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#c9a84c]" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <Phone size={14} className="text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-0.5">Phone / WhatsApp</div>
                  <div className="text-white text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">+91 98765 43210</div>
                </div>
              </a>

              <a
                href="mailto:info@kianfinancial.in"
                className="flex items-start gap-3 group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <Mail size={14} className="text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-0.5">Email</div>
                  <div className="text-white text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">info@kianfinancial.in</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <MapPin size={14} className="text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-0.5">Office Address</div>
                  <div className="text-white text-sm leading-relaxed">
                    123, Finance Tower, Business District,<br />
                    Mumbai, Maharashtra – 400001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2024 KFS – Kian Financial Services. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs">
            KFS is a registered DSA | IRDAI Compliant | All loans subject to bank approval
          </p>
        </div>
      </div>
    </footer>
  );
}
