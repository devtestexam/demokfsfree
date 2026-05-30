'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Loan Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a1628]/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(10,22,40,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#e8c76a] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-[#0a1628] font-black text-sm">KFS</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-base leading-tight">KFS</div>
              <div className="text-[#c9a84c] text-[10px] font-medium leading-tight tracking-wide">Kian Financial Services</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-[#c9a84c] px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="hidden md:flex items-center gap-2 text-[#c9a84c] text-sm font-semibold hover:text-[#e8c76a] transition-colors"
            >
              <Phone size={15} />
              +91 98765 43210
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg text-[#0a1628] text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_20px_rgba(201,168,76,0.4)]"
              style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c76a 50%, #c9a84c 100%)' }}
            >
              Apply Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(10,22,40,0.98)', backdropFilter: 'blur(20px)' }}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-[#c9a84c] py-3 px-3 text-sm font-medium rounded-md hover:bg-white/5 transition-colors border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center py-3 rounded-lg text-[#0a1628] font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c76a)' }}
          >
            Apply Now — Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
