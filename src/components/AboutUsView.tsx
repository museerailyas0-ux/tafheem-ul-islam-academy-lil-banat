/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Target, Eye, Sparkles, Shield, Lock, Users, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function AboutUsView() {
  const { t } = useLanguage();

  const values = [
    {
      title: t('values.val1.title'),
      desc: t('values.val1.desc'),
      icon: Eye
    },
    {
      title: t('values.val2.title'),
      desc: t('values.val2.desc'),
      icon: Lock
    },
    {
      title: t('values.val3.title'),
      desc: t('values.val3.desc'),
      icon: Award
    },
    {
      title: t('values.val4.title'),
      desc: t('values.val4.desc'),
      icon: Users
    }
  ];

  return (
    <div id="about-us-view" className="bg-neutral-50 py-12 sm:py-16 space-y-20">
      
      {/* Intro Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-serif font-bold tracking-widest text-gold-deep uppercase bg-gold-light px-3 py-1.5 rounded-full border border-gold-soft/30">
            {t('aboutUs.badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            {t('aboutUs.title')}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-deep via-emerald-medium to-emerald-light">
              {t('aboutUs.titleHighlight')}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            {t('aboutUs.desc')}
          </p>
        </div>
      </div>

      {/* Vision & Mission Bento Cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white rounded-3xl border border-neutral-100 p-8 sm:p-10 shadow-sm space-y-6 relative overflow-hidden group hover:border-gold-soft/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-medium"></div>
            <div className="inline-flex p-3 bg-emerald-bg text-emerald-medium rounded-xl">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">{t('aboutUs.mission')}</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              {t('aboutUs.missionDesc')}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl border border-neutral-100 p-8 sm:p-10 shadow-sm space-y-6 relative overflow-hidden group hover:border-gold-soft/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gold-metallic"></div>
            <div className="inline-flex p-3 bg-gold-light text-gold-deep rounded-xl">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">{t('aboutUs.vision')}</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              {t('aboutUs.visionDesc')}
            </p>
          </div>

        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-emerald-deep py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#dfca9f_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-serif font-bold text-gold-soft uppercase tracking-widest">{t('values.badge')}</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">{t('values.title')}</h3>
            <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
              {t('values.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/5 hover:bg-white/10 p-6 rounded-2xl space-y-4 transition-colors">
                  <div className="inline-flex p-3 bg-gold-metallic/20 rounded-xl text-gold-soft border border-gold-soft/20">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-gold-soft tracking-wide">{val.title}</h4>
                  <p className="text-[11px] sm:text-xs text-neutral-200 font-light leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Secure Online Environment Highlight */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-neutral-100 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 flex justify-center">
            <div className="inline-flex p-6 bg-emerald-bg text-emerald-medium rounded-full border-4 border-emerald-medium/10">
              <Shield className="h-20 w-20 text-emerald-medium" />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-medium bg-emerald-bg px-2.5 py-1 rounded">
                {t('secure.badge')}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                {t('secure.title')}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {t('secure.desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: t('secure.feat1.title'), desc: t('secure.feat1.desc') },
                { title: t('secure.feat2.title'), desc: t('secure.feat2.desc') },
                { title: t('secure.feat3.title'), desc: t('secure.feat3.desc') },
                { title: t('secure.feat4.title'), desc: t('secure.feat4.desc') }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-xs font-serif font-bold text-neutral-900">{item.title}</h4>
                  <p className="text-[11px] text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

