/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, BookOpen, CheckCircle, GraduationCap, Heart } from 'lucide-react';
import logoUrl from '../assets/images/official_logo.jpg';
import { useLanguage } from '../LanguageContext';

export default function AboutPrincipal() {
  const { t } = useLanguage();

  const credentials = [
    {
      title: t('credentials.cred1.title'),
      desc: t('credentials.cred1.desc')
    },
    {
      title: t('credentials.cred2.title'),
      desc: t('credentials.cred2.desc')
    },
    {
      title: t('credentials.cred3.title'),
      desc: t('credentials.cred3.desc')
    },
    {
      title: t('credentials.cred4.title'),
      desc: t('credentials.cred4.desc')
    }
  ];

  return (
    <section id="principal-root" className="bg-gold-light/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center lg:gap-8">
          
          {/* Column 1: Aesthetic Crest and Portrait illustration */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative p-1 bg-gradient-to-br from-gold-deep via-gold-soft to-gold-deep rounded-3xl shadow-xl max-w-sm w-full">
              
              {/* Luxury gold floral ornament overlay */}
              <div className="absolute inset-0 m-2 border border-gold-soft/50 rounded-2xl pointer-events-none"></div>

              <div className="bg-emerald-deep text-white p-8 rounded-2xl space-y-6 text-center">
                <div className="relative h-24 w-24 mx-auto overflow-hidden rounded-full border-2 border-gold-soft bg-white p-1 shadow-lg">
                  <img 
                    src={logoUrl} 
                    alt="Official Crest" 
                    className="h-full w-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <span className="text-[10px] tracking-widest font-semibold uppercase text-gold-soft bg-emerald-medium/60 px-2.5 py-1 rounded">
                    {t('teacher.sidebarTitle')}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
                    {t('teacher.name')}
                  </h3>
                  <p className="text-xs text-neutral-200 font-light italic">
                    {t('teacher.sub')}
                  </p>
                </div>

                <div className="border-t border-gold-soft/20 pt-4 space-y-3 text-left">
                  <div className="flex items-center space-x-2 text-xs text-neutral-200">
                    <GraduationCap className="h-4 w-4 text-gold-soft shrink-0" />
                    <span>{t('teacher.sidebarBullet1')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-neutral-200">
                    <BookOpen className="h-4 w-4 text-gold-soft shrink-0" />
                    <span>{t('teacher.sidebarBullet2')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-neutral-200">
                    <Heart className="h-4 w-4 text-gold-soft shrink-0" />
                    <span>{t('teacher.sidebarBullet3')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote of Our Teacher */}
            <div className="mt-6 max-w-sm text-center">
              <p className="text-xs sm:text-sm text-neutral-600 font-light italic leading-relaxed">
                "{t('teacher.quote')}"
              </p>
              <span className="block mt-2 text-xs font-semibold text-emerald-medium">— {t('teacher.name')}</span>
            </div>
          </div>

          {/* Column 2: Biographical details and credentials */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-serif font-bold tracking-widest text-emerald-medium uppercase bg-emerald-bg px-3 py-1 rounded-full border border-emerald-medium/10">
                {t('teacher.badge')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                {t('teacher.title')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-deep via-gold-metallic to-gold-deep">
                  {t('teacher.name')}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                {t('teacher.bioParagraph1')}
              </p>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                {t('teacher.bioParagraph2')}
              </p>
            </div>

            {/* List of credentials */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {credentials.map((cred, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-medium">
                    <CheckCircle className="h-4.5 w-4.5 text-gold-metallic shrink-0" />
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-neutral-900 tracking-wide">
                      {cred.title}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-500 font-light leading-relaxed">
                    {cred.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Special Trust Note */}
            <div className="bg-emerald-bg border-l-4 border-emerald-medium p-4 rounded-r-xl flex items-start space-x-3">
              <Award className="h-5 w-5 text-emerald-medium mt-0.5 shrink-0" />
              <div className="space-y-1">
                <h5 className="text-xs sm:text-sm font-bold text-emerald-deep">{t('teacher.trustTitle')}</h5>
                <p className="text-[11px] sm:text-xs text-neutral-600 font-light leading-normal">
                  {t('teacher.trustDesc')}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

