/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ActivePage } from '../types';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';
import logoUrl from '../assets/images/academy_logo_1783500105618.jpg';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export default function Header({ activePage, setActivePage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Courses' },
    { id: 'principal', label: 'Our Teacher' },
    { id: 'activities', label: 'Achievements' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setIsOpen(false);
    // Smooth scroll to top when changing page views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="header-root" className="sticky top-0 z-50 w-full border-b border-gold-metallic/20 bg-emerald-deep/95 backdrop-blur-md text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo and Brand Name */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex cursor-pointer items-center space-x-3 transition-opacity hover:opacity-90"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold-soft bg-white p-0.5 gold-glow">
            <img 
              src={logoUrl} 
              alt="Tafheem-ul-Islam Academy Logo" 
              className="h-full w-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="font-serif text-sm font-bold tracking-wider text-gold-soft md:text-base leading-none">
              TAFHEEM-UL-ISLAM
            </h1>
            <p className="font-sans text-[10px] tracking-widest text-white/80 uppercase mt-1">
              Academy Lil Banat
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-all duration-200 ${
                activePage === item.id
                  ? 'text-gold-soft bg-emerald-medium/50 border-b-2 border-gold-metallic'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/923232358394?text=Assalamu%20Alaikum.%20I%20would%20like%20to%20join%20Tafheem-ul-Islam%20Academy%20Lil%20Banat."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 bg-gradient-to-r from-gold-deep via-gold-metallic to-gold-deep px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-emerald-deep uppercase shadow-lg transition-transform hover:scale-[1.03] duration-200 cursor-pointer"
          >
            <GraduationCap className="h-4 w-4 animate-pulse text-gold-soft" />
            <span>Join on WhatsApp</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gold-soft hover:text-white hover:bg-emerald-medium focus:outline-none"
            aria-expanded="false"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden animate-fade-in bg-emerald-deep border-t border-gold-metallic/10">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md ${
                  activePage === item.id
                    ? 'text-gold-soft bg-emerald-medium border-l-4 border-gold-metallic'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-gold-metallic/10 px-4">
              <a
                href="https://wa.me/923232358394?text=Assalamu%20Alaikum.%20I%20would%20like%20to%20join%20Tafheem-ul-Islam%20Academy%20Lil%20Banat."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-deep via-gold-metallic to-gold-deep py-3 rounded-full text-sm font-semibold tracking-wider text-emerald-deep uppercase shadow-lg"
              >
                <GraduationCap className="h-4 w-4" />
                <span>Join on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
