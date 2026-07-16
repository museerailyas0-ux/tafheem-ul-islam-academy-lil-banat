/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ActivePage } from './types';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

// Import Custom Subcomponents
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import AboutPrincipal from './components/AboutPrincipal';
import ContactForm from './components/ContactForm';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

// Import Custom Pages/Views
import AboutUsView from './components/AboutUsView';
import ActivitiesView from './components/ActivitiesView';
import FaqView from './components/FaqView';
import AdmissionModal from './components/AdmissionModal';

// Lucide Icons
import { 
  Sparkles, Star, Shield, Award, Users, BookOpen, Clock, Heart, 
  ChevronRight, GraduationCap, Quote, HelpCircle, CheckCircle, X
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const { t, courses, testimonials, language } = useLanguage();

  // Quick enroll button handler to open the admission modal
  const handleEnrollScroll = () => {
    setIsAdmissionModalOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 selection:bg-emerald-deep/10 selection:text-emerald-deep font-sans">
      {/* Sticky Header */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        openAdmissionModal={() => setIsAdmissionModalOpen(true)} 
      />

      {/* Main Page View Router */}
      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* VIEW 1: HOME PAGE */}
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-20 pb-16"
            >
              
              {/* Majestic Hero Banner */}
              <Hero 
                setActivePage={setActivePage} 
                openAdmissionModal={() => setIsAdmissionModalOpen(true)} 
              />

              {/* SECTION: Brief Vision & Welcome Message */}
              <motion.section 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
              >
                <div className="bg-white rounded-3xl border border-neutral-100 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-8 space-y-6">
                    <div className="space-y-3">
                      <span className="text-xs font-serif font-bold tracking-widest text-emerald-medium uppercase bg-emerald-bg px-2.5 py-1 rounded-full border border-emerald-medium/10">
                        {t('vision.badge')}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                        {t('vision.title')}{' '}
                        <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-gold-deep via-gold-metallic to-gold-deep">
                          {t('vision.titleHighlight')}
                        </span>
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {t('vision.desc')}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => {
                          setActivePage('about');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-wider text-emerald-medium uppercase hover:text-gold-deep transition-colors cursor-pointer"
                      >
                        <span>{t('vision.btn')}</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-emerald-bg p-6 rounded-2xl border border-emerald-medium/10 space-y-4">
                    <div className="flex items-center space-x-2 text-emerald-medium">
                      <Shield className="h-5 w-5 text-gold-metallic" />
                      <h4 className="font-serif text-sm font-bold tracking-wider">{t('vision.sidebarTitle')}</h4>
                    </div>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {t('vision.sidebarDesc')}
                    </p>
                  </div>

                </div>
              </motion.section>

              {/* SECTION: Why Choose Us (Academic Advantages) */}
              <motion.section 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12"
              >
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <span className="text-xs font-serif font-bold tracking-widest text-gold-deep uppercase bg-gold-light px-3 py-1 rounded-full border border-gold-soft/30">
                    {t('why.badge')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                    {t('why.title')}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {t('why.desc')}
                  </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: t('why.feat1.title'),
                      desc: t('why.feat1.desc'),
                      icon: Award
                    },
                    {
                      title: t('why.feat2.title'),
                      desc: t('why.feat2.desc'),
                      icon: Clock
                    },
                    {
                      title: t('why.feat3.title'),
                      desc: t('why.feat3.desc'),
                      icon: Heart
                    },
                    {
                      title: t('why.feat4.title'),
                      desc: t('why.feat4.desc'),
                      icon: Sparkles
                    },
                    {
                      title: t('why.feat5.title'),
                      desc: t('why.feat5.desc'),
                      icon: Users
                    },
                    {
                      title: t('why.feat6.title'),
                      desc: t('why.feat6.desc'),
                      icon: Shield
                    }
                  ].map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="bg-white p-6 rounded-2xl border border-neutral-100 hover:border-gold-soft/30 shadow-sm space-y-4 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="inline-flex p-3 bg-emerald-bg text-emerald-medium rounded-xl">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-900 tracking-wide">{item.title}</h4>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.section>

              {/* SECTION: Academy Milestones & Achievements */}
              <motion.section 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12"
              >
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <span className="text-xs font-serif font-bold tracking-widest text-emerald-medium uppercase bg-emerald-bg px-3 py-1 rounded-full border border-emerald-medium/10">
                    {t('ach.badge')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                    {t('ach.title')}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {t('ach.desc')}
                  </p>
                </div>

                {/* Achievements Animated-Feel Cards */}
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
                        className={`bg-white p-6 rounded-2xl border ${item.color} shadow-sm space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
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
              </motion.section>

              {/* SECTION: Featured Courses Preview */}
              <motion.section 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-gold-light/20 py-16"
              >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div className="space-y-3">
                      <span className="text-xs font-serif font-bold tracking-widest text-emerald-medium uppercase bg-emerald-bg px-3 py-1 rounded-full border border-emerald-medium/10">
                        {t('featCourses.badge')}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight leading-none">
                        {t('featCourses.title')}
                      </h3>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          setActivePage('courses');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center space-x-2 bg-emerald-medium hover:bg-emerald-deep text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md transition-all cursor-pointer"
                      >
                        <span>{t('featCourses.btnAll')}</span>
                        <ChevronRight className="h-4 w-4 text-gold-soft" />
                      </button>
                    </div>
                  </div>

                  {/* Courses Row Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {courses.slice(0, 3).map((course) => (
                      <div 
                        key={course.id}
                        className="bg-white rounded-2xl border border-neutral-100 p-6 flex flex-col justify-between space-y-6 shadow-sm hover:border-gold-soft/30 transition-all hover:-translate-y-1"
                      >
                        <div className="space-y-3">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-medium bg-emerald-bg px-2 py-0.5 rounded">
                            {course.category === 'Quran' ? t('courses.catQuran') : course.category === 'Islamic Studies' ? t('courses.catIslamic') : t('courses.catLifestyle')}
                          </span>
                          <h4 className="font-serif text-base sm:text-lg font-bold text-neutral-900">{course.title}</h4>
                          <p className="text-xs text-neutral-500 font-light leading-relaxed line-clamp-3">{course.shortDesc}</p>
                        </div>
                        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                          <span className="text-[10px] text-neutral-400 font-medium italic">{course.duration}</span>
                          <button
                            onClick={() => {
                              setActivePage('courses');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="text-xs font-bold text-emerald-medium hover:text-gold-deep transition-colors"
                          >
                            {t('featCourses.viewSyllabus')}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* SECTION: Our Teacher Introductory Preview */}
              <motion.section 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
              >
                <div className="bg-emerald-deep text-white rounded-3xl p-8 sm:p-12 border border-gold-soft/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full border border-white/5 -mr-10 -mt-10"></div>
                  
                  <div className="lg:col-span-8 space-y-6 relative z-10">
                    <div className="space-y-3">
                      <span className="text-xs font-serif font-bold text-gold-soft uppercase tracking-widest">{t('teacherHome.badge')}</span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold">{t('teacherHome.title')}</h3>
                      <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                        {t('teacherHome.desc')}
                      </p>
                    </div>

                    <div>
                      <button
                        onClick={() => {
                          setActivePage('principal');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gold-soft hover:text-white transition-colors cursor-pointer"
                      >
                        <span>{t('teacherHome.btnBio')}</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-white/5 border border-white/5 p-6 rounded-2xl relative z-10 text-center space-y-2">
                    <div className="h-16 w-16 mx-auto bg-gold-metallic/20 text-gold-soft border border-gold-soft/20 rounded-xl flex items-center justify-center">
                      <Award className="h-8 w-8" />
                    </div>
                    <h4 className="font-serif text-sm font-bold text-gold-soft">{t('teacherHome.sidebarTitle')}</h4>
                    <p className="text-[10px] text-neutral-300 leading-normal font-light">
                      {t('teacherHome.sidebarDesc')}
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* SECTION: Student Testimonials */}
              <motion.section 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-neutral-50 py-16 sm:py-20 space-y-12"
              >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
                  <span className="text-xs font-serif font-bold tracking-widest text-gold-deep uppercase bg-gold-light px-3 py-1 rounded-full border border-gold-soft/30">
                    {t('test.badge')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                    {t('test.title')}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {t('test.desc')}
                  </p>
                </div>

                {/* Testimonials Grid */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {testimonials.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-white rounded-2xl border border-neutral-100 p-6 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-0.5 text-gold-metallic">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-gold-metallic text-gold-metallic" />
                          ))}
                        </div>
                        <p className="text-xs text-neutral-600 font-light leading-relaxed italic">
                          "{item.quote}"
                        </p>
                      </div>

                      <div className="pt-4 border-t border-neutral-100 flex items-start space-x-3">
                        <div className="p-2 bg-emerald-bg text-emerald-medium rounded-lg">
                          <Quote className="h-4 w-4 text-emerald-medium" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-neutral-800 leading-none">{item.name}</h4>
                          <p className="text-[10px] text-neutral-400 mt-1 font-medium">{item.role}</p>
                          <p className="text-[9px] text-gold-deep font-bold uppercase tracking-wider mt-0.5">{item.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* SECTION: Quick FAQ previews accordion */}
              <motion.section 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8"
              >
                <div className="text-center space-y-3">
                  <span className="text-xs font-serif font-bold text-gold-deep uppercase tracking-widest bg-gold-light px-3 py-1 rounded-full border border-gold-soft/30">
                    {t('faqHome.badge')}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">{t('faqHome.title')}</h3>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm space-y-4 text-center">
                  <p className="text-xs sm:text-sm text-neutral-600 font-light">
                    {t('faqHome.desc')}
                  </p>
                  <button
                    onClick={() => {
                      setActivePage('faq');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-1.5 bg-emerald-medium text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-emerald-deep transition-all cursor-pointer"
                  >
                    <HelpCircle className="h-4 w-4 text-gold-soft" />
                    <span>{t('faqHome.btnAll')}</span>
                  </button>
                </div>
              </motion.section>

              {/* SECTION: Enrollment Admission Form at Bottom of Home */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ContactForm />
              </motion.div>

            </motion.div>
          )}

          {/* VIEW 2: ABOUT US PAGE */}
          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <AboutUsView />
              <ContactForm />
            </motion.div>
          )}

          {/* VIEW 3: COURSES PAGE */}
          {activePage === 'courses' && (
            <motion.div
              key="courses"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Courses onEnrollClick={handleEnrollScroll} />
              <ContactForm />
            </motion.div>
          )}

          {/* VIEW 4: THE PRINCIPAL BIOGRAPHY */}
          {activePage === 'principal' && (
            <motion.div
              key="principal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <AboutPrincipal />
              <ContactForm />
            </motion.div>
          )}

          {/* VIEW 5: ACTIVITIES & ACHIEVEMENTS */}
          {activePage === 'activities' && (
            <motion.div
              key="activities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ActivitiesView />
              <ContactForm />
            </motion.div>
          )}

          {/* VIEW 6: FAQ ACCORDION PAGE */}
          {activePage === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <FaqView />
            </motion.div>
          )}

          {/* VIEW 7: CONTACT FORM PAGE */}
          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Floating Assistive WhatsApp Support widget */}
      <FloatingWhatsApp />

      {/* Luxury Footer component */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Footer 
          setActivePage={setActivePage} 
          openAdmissionModal={() => setIsAdmissionModalOpen(true)} 
        />
      </motion.div>

      {/* Premium Admission Modal Popup */}
      <AdmissionModal 
        isOpen={isAdmissionModalOpen} 
        onClose={() => setIsAdmissionModalOpen(false)} 
        onSuccess={() => {
          setShowSuccessToast(true);
          // Auto close toast after 8 seconds
          setTimeout(() => {
            setShowSuccessToast(false);
          }, 8000);
        }}
      />

      {/* Floating Success Notification Toast */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="fixed top-6 left-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border-2 border-emerald-medium/30 shadow-2xl p-4 flex items-start gap-4 text-left relative overflow-hidden">
              {/* Decorative background accent bar */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gold-deep via-emerald-medium to-emerald-deep"></div>
              
              {/* Animated Check icon */}
              <div className="p-2 bg-emerald-bg text-emerald-medium rounded-full border border-emerald-medium/15 shadow-inner shrink-0">
                <CheckCircle className="h-6 w-6 text-emerald-medium animate-pulse" />
              </div>
              
              {/* Text Details */}
              <div className="space-y-1 pr-6 flex-grow">
                <h4 className="font-serif text-sm font-bold text-neutral-900 tracking-tight">
                  {language === 'en' ? 'Admission Request Submitted!' : 'داخلہ کی درخواست کامیابی سے موصول ہو گئی!'}
                </h4>
                <p className="text-[11px] text-neutral-600 font-light leading-relaxed">
                  {language === 'en' 
                    ? 'JazakAllahu Khairan. Our administrative female scholar will contact you on WhatsApp within 24 hours to schedule your free trial session.' 
                    : 'جزاک اللہ خیرا۔ ہماری انتظامی معلمہ اگلی آزمائشی کلاس شیڈول کرنے کے لیے اگلے 24 گھنٹوں میں آپ کے فراہم کردہ واٹس ایپ نمبر پر رابطہ کریں گی۔'}
                </p>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setShowSuccessToast(false)}
                className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-700 p-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

