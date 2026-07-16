/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLanguage } from '../LanguageContext';
import { Award, Trophy, Star, BookOpen, Presentation, Sparkles, Clock, GraduationCap, Users } from 'lucide-react';

export default function ActivitiesView() {
  const { t, activities } = useLanguage();
  
  // Categorize activities for clear display
  const competitions = activities.filter(a => a.category === 'Competition');
  const achievements = activities.filter(a => a.category === 'Achievement');
  const otherActivities = activities.filter(a => a.category !== 'Competition' && a.category !== 'Achievement');

  return (
    <div id="activities-view" className="bg-neutral-50 py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-serif font-bold tracking-widest text-gold-deep uppercase bg-gold-light px-3 py-1.5 rounded-full border border-gold-soft/30">
            {t('activities.badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            {t('activities.title')}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            {t('activities.desc')}
          </p>
        </div>
      </div>

      {/* Academy Milestones Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              val: t('ach.item1.val'),
              label: t('ach.item1.label'),
              desc: t('ach.item1.desc'),
              icon: Clock,
              color: "border-emerald-medium/20 hover:border-emerald-medium"
            },
            {
              val: t('ach.item2.val'),
              label: t('ach.item2.label'),
              desc: t('ach.item2.desc'),
              icon: BookOpen,
              color: "border-gold-deep/20 hover:border-gold-deep"
            },
            {
              val: t('ach.item3.val'),
              label: t('ach.item3.label'),
              desc: t('ach.item3.desc'),
              icon: GraduationCap,
              color: "border-emerald-medium/20 hover:border-emerald-medium"
            },
            {
              val: t('ach.item4.val'),
              label: t('ach.item4.label'),
              desc: t('ach.item4.desc'),
              icon: Award,
              color: "border-gold-deep/20 hover:border-gold-deep"
            },
            {
              val: t('ach.item5.val'),
              label: t('ach.item5.label'),
              desc: t('ach.item5.desc'),
              icon: Users,
              color: "border-emerald-medium/20 hover:border-emerald-medium"
            }
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className={`bg-white p-6 rounded-2xl border ${item.color} shadow-sm space-y-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3 bg-emerald-bg text-emerald-medium rounded-xl">
                    <IconComp className="h-5 w-5 text-emerald-medium" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-2xl sm:text-3xl font-serif font-extrabold text-neutral-900 tracking-tight">{item.val}</h4>
                    <p className="font-serif text-xs font-bold text-emerald-medium tracking-wide leading-tight">{item.label}</p>
                  </div>
                  <p className="text-[11px] text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 1: Scholarly Achievements */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-neutral-200 pb-3">
            <Trophy className="h-6 w-6 text-gold-deep shrink-0" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
              {t('activities.btnAchievements')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-6 rounded-2xl border border-neutral-100 hover:border-gold-soft/30 shadow-sm relative overflow-hidden group transition-all duration-300"
              >
                {item.badge && (
                  <span className="absolute top-6 right-6 text-[10px] font-bold bg-gold-light text-gold-deep uppercase px-2.5 py-1 rounded-full border border-gold-soft/20">
                    {item.badge}
                  </span>
                )}
                <div className="space-y-4">
                  <div className="inline-flex p-3 bg-gold-light text-gold-deep rounded-xl">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-neutral-900 group-hover:text-emerald-medium transition-colors">
                      {item.title}
                    </h4>
                    {item.date && (
                      <p className="text-[10px] text-neutral-400 font-semibold">{item.date}</p>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Healthy Competitions */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-neutral-200 pb-3">
            <Star className="h-6 w-6 text-emerald-medium shrink-0" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
              {t('activities.btnCompetitions')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitions.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-6 rounded-2xl border border-neutral-100 hover:border-emerald-light/20 shadow-sm relative overflow-hidden group transition-all duration-300"
              >
                {item.badge && (
                  <span className="absolute top-6 right-6 text-[10px] font-bold bg-emerald-bg text-emerald-medium uppercase px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                <div className="space-y-4">
                  <div className="inline-flex p-3 bg-emerald-bg text-emerald-medium rounded-xl">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-neutral-900 group-hover:text-emerald-medium transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Webinars & Tarbiyah Events */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-neutral-200 pb-3">
            <Presentation className="h-6 w-6 text-emerald-medium shrink-0" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
              {t('activities.btnWebinars')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherActivities.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-5 rounded-xl border border-neutral-100 shadow-sm space-y-3 hover:border-neutral-200 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold bg-neutral-100 text-neutral-600 px-2.5 py-0.5 rounded uppercase">
                    {item.category === 'Webinar' ? t('activities.btnWebinars') : t('activities.btnOther')}
                  </span>
                  {item.badge && (
                    <span className="text-[9px] font-bold text-gold-deep uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-900">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-neutral-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
