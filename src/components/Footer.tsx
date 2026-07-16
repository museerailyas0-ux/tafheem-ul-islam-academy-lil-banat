/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLanguage } from '../LanguageContext';
import { ActivePage } from '../types';
import { Mail, Phone, Clock, ShieldCheck, Heart } from 'lucide-react';
import logoUrl from '../assets/images/official_logo.jpg';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  openAdmissionModal: () => void;
}

export default function Footer({ setActivePage, openAdmissionModal }: FooterProps) {
  const { t } = useLanguage();

  const handleNavClick = (pageId: ActivePage) => {
    if (pageId === 'admission') {
      openAdmissionModal();
      return;
    }
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-root" className="bg-emerald-deep text-white border-t border-gold-metallic/30 relative overflow-hidden">
      
      {/* Subtle background luxury texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-4 border-gold-soft rotate-45"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#dfca9f_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid structure */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-14 w-14 overflow-hidden rounded-full border border-gold-soft bg-white p-0.5">
                <img 
                  src={logoUrl} 
                  alt="Tafheem-ul-Islam Logo" 
                  className="h-full w-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold tracking-wider text-gold-soft leading-none">
                  {t('brandName')}
                </h3>
                <p className="font-sans text-[10px] tracking-widest text-white/80 uppercase mt-1">
                  {t('brandSub')}
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              {t('footer.tagline')}
            </p>

            <div className="flex items-center space-x-2 bg-emerald-medium/40 border border-gold-soft/20 p-3 rounded-lg max-w-xs">
              <ShieldCheck className="h-5 w-5 text-gold-soft shrink-0" />
              <div className="space-y-0.5">
                <h5 className="text-[10px] font-bold text-gold-soft uppercase tracking-wider">{t('footer.privacyTitle')}</h5>
                <p className="text-[10px] text-neutral-200 leading-normal font-light">
                  {t('footer.privacyDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-serif font-bold text-gold-soft tracking-widest uppercase">{t('footer.academicLinks')}</h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', labelKey: 'nav.home' },
                { id: 'about', labelKey: 'nav.about' },
                { id: 'courses', labelKey: 'nav.courses' },
                { id: 'admission', labelKey: 'nav.admission' },
                { id: 'principal', labelKey: 'nav.principal' },
                { id: 'activities', labelKey: 'nav.activities' },
                { id: 'faq', labelKey: 'nav.faq' },
                { id: 'contact', labelKey: 'nav.contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id as ActivePage)}
                    className="text-neutral-300 hover:text-gold-soft transition-colors cursor-pointer text-left"
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Classes Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-serif font-bold text-gold-soft tracking-widest uppercase">{t('nav.courses')}</h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>• {t('courses.course1.title')}</li>
              <li>• {t('courses.course2.title')}</li>
              <li>• {t('courses.course3.title')}</li>
              <li>• {t('courses.course4.title')}</li>
              <li>• {t('courses.course5.title')}</li>
              <li>• {t('courses.course6.title')}</li>
              <li>• {t('courses.course7.title')}</li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-serif font-bold text-gold-soft tracking-widest uppercase">{t('nav.contact')}</h4>
            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold-soft shrink-0" />
                <a href="mailto:umesemaal@gmail.com" className="hover:text-gold-soft hover:underline transition-colors">
                  umesemaal@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold-soft shrink-0" />
                <a href="tel:+923232358394" className="hover:text-gold-soft hover:underline transition-colors">
                  +92 323 2358394
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gold-soft shrink-0" />
                <span>{t('contact.hoursTitle')}</span>
              </li>
              <li className="flex items-center space-x-2 text-gold-soft font-semibold">
                <Heart className="h-4 w-4 fill-gold-soft text-gold-soft animate-pulse shrink-0" />
                <span>{t('contact.badge')}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Golden Horizontal Border */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gold-soft to-transparent opacity-30"></div>

        {/* Footer Bottom Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
          </div>
          <div className="flex items-center space-x-3 text-gold-soft/80 font-arabic text-sm tracking-wide">
            <span>وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
