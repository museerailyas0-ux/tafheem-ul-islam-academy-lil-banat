/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { Course } from '../types';
import * as Icons from 'lucide-react';
import { Sparkles, Clock, Calendar, Shield, ArrowRight, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CoursesProps {
  onEnrollClick: () => void;
}

export default function Courses({ onEnrollClick }: CoursesProps) {
  const { t, courses } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Quran' | 'Islamic Studies' | 'Lifestyle'>('All');
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  // Dynamic Lucide Icon picker
  const renderIcon = (iconName: string, className: string = "h-6 w-6 text-emerald-medium") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.BookOpen className={className} />;
  };

  return (
    <section id="courses-root" className="bg-neutral-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-serif font-bold tracking-widest text-gold-deep uppercase bg-gold-light px-3 py-1.5 rounded-full border border-gold-soft/30">
            {t('courses.badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            {t('courses.title')}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            {t('courses.desc')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5 sm:gap-4">
          {[
            { key: 'All', labelKey: 'courses.catAll' },
            { key: 'Quran', labelKey: 'courses.catQuran' },
            { key: 'Islamic Studies', labelKey: 'courses.catIslamic' },
            { key: 'Lifestyle', labelKey: 'courses.catLifestyle' }
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key as any)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 ${
                selectedCategory === cat.key
                  ? 'bg-emerald-medium text-white border-emerald-medium shadow-md'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:text-emerald-medium'
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* Courses Grid with Layout and Staggered Animations */}
        <motion.div 
          layout
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          initial="hidden"
          animate="show"
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredCourses.map((course) => (
            <motion.div
              layout
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 16 } }
              }}
              key={course.id}
              className="group relative flex flex-col justify-between bg-white rounded-2xl border border-neutral-100 hover:border-gold-metallic/30 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Category Indicator Tag */}
              <div className="absolute top-6 right-6 flex items-center space-x-1">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  course.category === 'Quran' 
                    ? 'bg-emerald-bg text-emerald-medium' 
                    : course.category === 'Islamic Studies' 
                    ? 'bg-blue-50 text-blue-800' 
                    : 'bg-amber-50 text-amber-800'
                }`}>
                  {course.category === 'Quran' 
                    ? t('courses.catQuran') 
                    : course.category === 'Islamic Studies' 
                    ? t('courses.catIslamic') 
                    : t('courses.catLifestyle')}
                </span>
              </div>

              {/* Course Icon & Details */}
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-xl bg-gold-light border border-gold-soft/30">
                  {renderIcon(course.iconName)}
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-emerald-medium transition-colors">
                    {course.title}
                  </h3>
                  {course.arabicTitle && (
                    <p className="font-arabic text-base text-gold-deep font-semibold">
                      {course.arabicTitle}
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                  {course.shortDesc}
                </p>

                {/* Micro Meta Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <div className="flex items-center space-x-1 text-[11px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                    <Clock className="h-3 w-3" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[11px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                    <Shield className="h-3 w-3" />
                    <span>{course.level}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400 font-light italic">
                  {course.frequency}
                </span>
                <button
                  onClick={() => setActiveCourse(course)}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-wider uppercase text-emerald-medium group-hover:text-gold-deep transition-colors cursor-pointer"
                >
                  <span>{t('featCourses.viewSyllabus')}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {activeCourse && (
          <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              {/* Background overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActiveCourse(null)}
                className="fixed inset-0 bg-neutral-900/70 backdrop-blur-sm transition-opacity" 
                aria-hidden="true"
              ></motion.div>

              {/* Trick browser to center modal */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

              {/* Modal Panel */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-gold-soft/30"
              >
                {/* Header Decorative Arch */}
                <div className="bg-emerald-deep px-6 py-6 text-white relative">
                  <button
                    onClick={() => setActiveCourse(null)}
                    className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 rounded-full p-1.5 focus:outline-none cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="flex items-center space-x-4">
                    <div className="inline-flex p-3 bg-gold-metallic/20 border border-gold-soft/30 rounded-xl">
                      {renderIcon(activeCourse.iconName, "h-7 w-7 text-gold-soft")}
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-soft bg-emerald-medium/60 px-2 py-0.5 rounded border border-gold-soft/20">
                        {activeCourse.category === 'Quran' 
                          ? t('courses.catQuran') 
                          : activeCourse.category === 'Islamic Studies' 
                          ? t('courses.catIslamic') 
                          : t('courses.catLifestyle')}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-white">
                        {activeCourse.title}
                      </h3>
                      {activeCourse.arabicTitle && (
                        <p className="font-arabic text-lg text-gold-soft mt-0.5">
                          {activeCourse.arabicTitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="px-6 py-6 space-y-6 max-h-[60vh] overflow-y-auto bg-neutral-50">
                  
                  {/* Long Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-serif font-bold text-neutral-400 uppercase tracking-widest">
                      {t('courses.pathwayHeading')}
                    </h4>
                    <p className="text-sm text-neutral-600 font-light leading-relaxed">
                      {activeCourse.longDesc}
                    </p>
                  </div>

                  {/* Key Schedule Metadata */}
                  <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-neutral-100">
                    <div className="space-y-1">
                      <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider flex items-center gap-1">
                        <Clock className="h-3 w-3 text-gold-deep" />
                        <span>{t('courses.durationLabel')}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-800 font-medium">{activeCourse.duration}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-gold-deep" />
                        <span>{t('courses.freqLabel')}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-800 font-medium">{activeCourse.frequency}</p>
                    </div>
                  </div>

                  {/* Features & Benefits */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-serif font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-gold-deep" />
                      <span>{t('courses.featHeading')}</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeCourse.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-neutral-600 leading-normal">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-medium mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step by step syllabus */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-serif font-bold text-neutral-400 uppercase tracking-widest">
                      {t('courses.syllabusHeading')}
                    </h4>
                    <div className="space-y-2.5">
                      {activeCourse.syllabus.map((step, idx) => (
                        <div key={idx} className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-neutral-100">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-bg text-emerald-medium text-xs font-bold font-serif border border-emerald-medium/10">
                            0{idx + 1}
                          </span>
                          <p className="text-xs sm:text-sm text-neutral-700 font-light">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Actions */}
                <div className="bg-white px-6 py-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-neutral-400 italic">
                    * 100% Female Scholars, Private and Flexible *
                  </p>
                  <button
                    onClick={() => {
                      setActiveCourse(null);
                      onEnrollClick();
                    }}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-deep via-gold-metallic to-gold-deep text-emerald-deep px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md hover:scale-[1.03] transition-transform cursor-pointer"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>{t('courses.enrollBtn')}</span>
                  </button>
                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
