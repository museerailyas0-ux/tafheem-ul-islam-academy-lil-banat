/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLanguage } from '../LanguageContext';
import { ActivePage } from '../types';
import { ArrowRight, Star, Heart, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import logoUrl from '../assets/images/official_logo.jpg';

interface HeroProps {
  setActivePage: (page: ActivePage) => void;
  openAdmissionModal: () => void;
}

export default function Hero({ setActivePage, openAdmissionModal }: HeroProps) {
  const { t, language } = useLanguage();

  return (
    <section id="hero-section" className="relative overflow-hidden bg-emerald-deep pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Decorative Islamic Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full border-[10px] border-gold-soft rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-[15px] border-gold-soft rotate-12"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#dfca9f_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Hero text block */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Arabic Quranic Calligraphy Accent */}
            <div className="inline-flex flex-col items-center lg:items-start space-y-2">
              <span className="font-arabic text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide text-gold-soft leading-loose">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
              <span className="font-arabic text-lg sm:text-xl text-white/90 leading-loose">
                قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ ۗ
              </span>
              <span className="text-[11px] sm:text-xs text-gold-soft/80 italic font-medium">
                "Say, Are those who know equal to those who do not know?" (Quran 39:9)
              </span>
            </div>

            <div className="space-y-4">
              <span className="inline-flex items-center space-x-1.5 bg-emerald-medium/60 border border-gold-metallic/30 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider text-gold-soft uppercase">
                <Star className="h-3 w-3 fill-gold-soft text-gold-soft" />
                <span>{t('hero.badge')}</span>
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {language === 'en' ? (
                  <>
                    Connecting Every Heart to the{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-soft via-gold-metallic to-gold-soft">
                      Light of the Holy Qur'an.
                    </span>
                  </>
                ) : (
                  t('hero.title')
                )}
              </h1>
              <p className="mx-auto lg:mx-0 max-w-2xl text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Bullet points summarizing key features */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-md mx-auto lg:mx-0 ${language === 'ur' ? 'rtl font-medium' : ''}`}>
              {[
                t('hero.feat1'),
                t('hero.feat2'),
                t('hero.feat3'),
                language === 'en' ? 'Comprehensive Arabic & Islamic Lifestyle' : 'جامع عربی اور اسلامی طرزِ زندگی'
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-white/95 text-xs sm:text-sm">
                  <CheckCircle2 className="h-4.5 w-4.5 text-gold-metallic shrink-0 mr-1" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={openAdmissionModal}
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-deep via-gold-metallic to-gold-deep text-emerald-deep font-semibold text-xs sm:text-sm tracking-wider uppercase hover:scale-[1.03] transition-transform shadow-lg shadow-gold-deep/10 cursor-pointer"
              >
                {language === 'en' ? 'Apply for Admission' : 'فوری داخلہ فارم'}
              </button>
              
              <button
                onClick={() => {
                  setActivePage('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-transparent border border-white/30 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-white/5 hover:border-gold-soft transition-colors cursor-pointer"
              >
                {t('hero.btnCourses')}
              </button>
            </div>
          </div>

          {/* Hero Visual Block */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative p-2 bg-gradient-to-tr from-gold-deep via-gold-soft to-gold-deep rounded-2xl shadow-2xl shadow-black/30 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 max-w-full">
              <div className="absolute -top-4 -left-4 bg-emerald-medium border border-gold-soft text-gold-soft text-xs font-serif font-semibold py-1.5 px-3 rounded-md shadow-lg rotate-[-6deg] flex items-center space-x-1">
                <Award className="h-4 w-4" />
                <span>{language === 'en' ? 'Consistently Ranked Wifaq Position Holder' : 'وفاق پاکستان کی سطح پر مستقل پوزیشنز'}</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold-metallic text-emerald-deep text-xs font-semibold py-1.5 px-3.5 rounded-full shadow-lg flex items-center space-x-1 font-sans">
                <ShieldCheck className="h-4 w-4 text-emerald-deep" />
                <span>{language === 'en' ? '100% Safe Online Space' : '100% محفوظ ماحول'}</span>
              </div>
              
              {/* Inner container with logo */}
              <div className="h-full w-full rounded-xl bg-white overflow-hidden p-6 flex flex-col items-center justify-center space-y-4">
                <img 
                  src={logoUrl} 
                  alt="Tafheem-ul-Islam Logo" 
                  className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 object-contain rounded-full shadow-md hover:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center space-y-1">
                  <p className="font-serif text-sm font-bold text-emerald-deep tracking-wider">
                    {t('brandName')}
                  </p>
                  <p className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                    {t('brandSub')}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Trust Highlights Banner */}
        <div className="mt-16 sm:mt-20 border-t border-white/10 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-in">
          {[
            { 
              label: language === 'en' ? 'Academic Rigor' : 'علمی پختگی', 
              val: language === 'en' ? 'Wifaq-ul-Madaris Al-Arabia Top-Ranked Teacher & Alimahs' : 'وفاق المدارس العربیہ کی ممتاز فاضلہ و معلمات' 
            },
            { 
              label: language === 'en' ? 'Sisters Sanctuary' : 'پاکیزہ ماحول', 
              val: language === 'en' ? '100% Secure, Online, Private and Comforting Space' : 'خواتین کے لیے 100% محفوظ اور نجی آن لائن کلاسز' 
            },
            { 
              label: language === 'en' ? 'Tarbiyah Focus' : 'اخلاقی تربیت', 
              val: language === 'en' ? 'Integrated Islamic Character Building & Lifestyle Rules' : 'کردار سازی، مسنون آداب اور اخلاقی تربیت پر خصوصی توجہ' 
            },
            { 
              label: language === 'en' ? 'Welfare-Oriented' : 'فلاحی مقصد', 
              val: language === 'en' ? 'Deserving Students Access Free & Subsidized Studies' : 'مستحق اور پرعزم طالبات کے لیے بلا معاوضہ تعلیم' 
            }
          ].map((item, idx) => (
            <div key={idx} className="space-y-1 bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
              <p className="text-xs font-serif font-bold text-gold-soft tracking-wider uppercase">{item.label}</p>
              <p className="text-[11px] sm:text-xs text-neutral-200 font-light leading-relaxed">{item.val}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
