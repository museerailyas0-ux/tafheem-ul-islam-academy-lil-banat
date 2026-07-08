/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ActivePage } from './types';
import { TESTIMONIALS_DATA, COURSES_DATA, ACTIVITIES_DATA } from './data';

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

// Lucide Icons
import { 
  Sparkles, Star, Shield, Award, Users, BookOpen, Clock, Heart, 
  CheckCircle, ChevronRight, GraduationCap, Quote, HelpCircle 
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  // Quick enroll button handler to scroll to form
  const handleEnrollScroll = () => {
    setActivePage('contact');
    setTimeout(() => {
      const contactSec = document.getElementById('contact-form');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 selection:bg-emerald-deep/10 selection:text-emerald-deep font-sans">
      {/* Sticky Header */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Main Page View Router */}
      <main className="flex-grow">
        
        {/* VIEW 1: HOME PAGE */}
        {activePage === 'home' && (
          <div className="animate-fade-in space-y-20 pb-16">
            
            {/* Majestic Hero Banner */}
            <Hero setActivePage={setActivePage} />

            {/* SECTION: Brief Vision & Welcome Message */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl border border-neutral-100 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs font-serif font-bold tracking-widest text-emerald-medium uppercase bg-emerald-bg px-2.5 py-1 rounded-full border border-emerald-medium/10">
                      Our Divine Foundation
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                      A Pure Online Haven Built for the
                      <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-gold-deep via-gold-metallic to-gold-deep">
                        Daughters, Wives & Mothers of Islam
                      </span>
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    Tafheem-ul-Islam Academy Lil Banat is a community-supported, online educational mission. We offer structured classes in pristine Quranic recitation (Tajweed), Hifz, classical Tafseer, Fiqh, and Tarbiyah to girls and women around the globe, ensuring high scholarly authority, deep spiritual nurturing, and complete digital privacy.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => {
                        setActivePage('about');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-wider text-emerald-medium uppercase hover:text-gold-deep transition-colors cursor-pointer"
                    >
                      <span>Read Our Vision & Mission</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-emerald-bg p-6 rounded-2xl border border-emerald-medium/10 space-y-4">
                  <div className="flex items-center space-x-2 text-emerald-medium">
                    <Shield className="h-5 w-5 text-gold-metallic" />
                    <h4 className="font-serif text-sm font-bold tracking-wider">100% Female Environment</h4>
                  </div>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    All class administrators, supervisors, and instructors are qualified female scholars. Live screens, Zoom environments, and communication corridors are structured strictly to ensure maximum modesty and comfort.
                  </p>
                </div>

              </div>
            </section>

            {/* SECTION: Why Choose Us (Academic Advantages) */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-xs font-serif font-bold tracking-widest text-gold-deep uppercase bg-gold-light px-3 py-1 rounded-full border border-gold-soft/30">
                  The Tafheem Standards
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                  Why Sisters Choose Our Academy
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  We bridge the gap between classical, authoritative theology and the flexibility of modern digital classes, providing a peaceful, comforting, and rigorous pathway.
                </p>
              </div>

              {/* Bento Grid layout */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Qualified Alimah Teachers",
                    desc: "Our female scholars hold formal scholarly degrees (Dars-e-Nizami) from verified institutions, offering direct, authentic lineage of recitation.",
                    icon: Award
                  },
                  {
                    title: "Flexible 1-on-1 Timings",
                    desc: "Classes are customized for children, students, and mothers with busy schedules, offering multiple morning and evening timezones.",
                    icon: Clock
                  },
                  {
                    title: "Structured Tarbiyah Focus",
                    desc: "We focus heavily on grooming our characters, teaching daily sunnah manners, etiquette, and confidence in implementing Islamic lifestyle rules.",
                    icon: Heart
                  },
                  {
                    title: "Student Active Competitions",
                    desc: "We motivate students through interactive quiz contests, beautiful recitation contests, shields of honor, and certificate awards.",
                    icon: Sparkles
                  },
                  {
                    title: "Non-Profit Integrity",
                    desc: "An educational mission, not a commercial business. We provide free access to deserving, passionate students under financial duress.",
                    icon: Users
                  },
                  {
                    title: "Strict Privacy Safeguards",
                    desc: "High digital safety parameters where student audio, personal chats, and student camera lines are strictly private and unshared.",
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
            </section>

            {/* SECTION: Academy Milestones & Achievements */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-xs font-serif font-bold tracking-widest text-emerald-medium uppercase bg-emerald-bg px-3 py-1 rounded-full border border-emerald-medium/10">
                  Glorious Milestones
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                  Our Blessed Achievements & Journey
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  Through the grace of Allah, our online classes continue to spark spiritual growth, dedication, and academic brilliance across generations of sisters.
                </p>
              </div>

              {/* Achievements Animated-Feel Cards */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  {
                    val: "8+ Years",
                    label: "Continuous Tafseer Program",
                    desc: "An ongoing journey of studying, understanding, and implementing the word of Allah.",
                    icon: Clock,
                    color: "border-emerald-medium/20 hover:border-emerald-medium"
                  },
                  {
                    val: "24+ Juz",
                    label: "Successfully Completed",
                    desc: "Sisters successfully completed the word-by-word Tafseer and translation of the Holy Quran.",
                    icon: BookOpen,
                    color: "border-gold-deep/20 hover:border-gold-deep"
                  },
                  {
                    val: "Many Students",
                    label: "Have Successfully Completed Hifz-ul-Qur'an",
                    desc: "Dedicated sisters who have memorized the entire Quran with beautiful and flawless Tajweed.",
                    icon: GraduationCap,
                    color: "border-emerald-medium/20 hover:border-emerald-medium"
                  },
                  {
                    val: "25+ Courses",
                    label: "Conducted",
                    desc: "Extensive Islamic courses ranging from Fiqh, Hadith, to Tarbiyah and character building.",
                    icon: Award,
                    color: "border-gold-deep/20 hover:border-gold-deep"
                  },
                  {
                    val: "Global Students",
                    label: "Online Learning",
                    desc: "Connecting sisters from multiple international time zones, cities, and countries.",
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
            </section>

            {/* SECTION: Featured Courses Preview */}
            <section className="bg-gold-light/20 py-16">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-3">
                    <span className="text-xs font-serif font-bold tracking-widest text-emerald-medium uppercase bg-emerald-bg px-3 py-1 rounded-full border border-emerald-medium/10">
                      Beautify Your Recitation
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight leading-none">
                      Featured Course Pathways
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
                      <span>View All Courses</span>
                      <ChevronRight className="h-4 w-4 text-gold-soft" />
                    </button>
                  </div>
                </div>

                {/* Courses Row Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {COURSES_DATA.slice(0, 3).map((course) => (
                    <div 
                      key={course.id}
                      className="bg-white rounded-2xl border border-neutral-100 p-6 flex flex-col justify-between space-y-6 shadow-sm hover:border-gold-soft/30 transition-all hover:-translate-y-1"
                    >
                      <div className="space-y-3">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-medium bg-emerald-bg px-2 py-0.5 rounded">
                          {course.category}
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
                          View Syllabus
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION: Our Teacher Introductory Preview */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-emerald-deep text-white rounded-3xl p-8 sm:p-12 border border-gold-soft/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full border border-white/5 -mr-10 -mt-10"></div>
                
                <div className="lg:col-span-8 space-y-6 relative z-10">
                  <div className="space-y-3">
                    <span className="text-xs font-serif font-bold text-gold-soft uppercase tracking-widest">Scholarly Guidance</span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold">About Our Teacher</h3>
                    <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                      Our honored and beloved teacher, <strong>Ustadha Habiba Ilyas</strong>, is a prestigious graduate of the renowned <strong>Wifaq-ul-Madaris Al-Arabia</strong> who achieved the extraordinary milestone of <strong>First Position (Top Rank) in the entire Sindh region</strong> in the centralized board examinations. Under her structured, dedicated academic direction, Tafheem-ul-Islam Academy delivers theological lessons directly linked to classical, authentic Prophetic traditions.
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
                      <span>Read Her Full Credentials & Bio</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white/5 border border-white/5 p-6 rounded-2xl relative z-10 text-center space-y-2">
                  <div className="h-16 w-16 mx-auto bg-gold-metallic/20 text-gold-soft border border-gold-soft/20 rounded-xl flex items-center justify-center">
                    <Award className="h-8 w-8" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-gold-soft">1st Position (Sindh)</h4>
                  <p className="text-[10px] text-neutral-300 leading-normal font-light">
                    Securing the highest rank in the entire Sindh region examinations of Wifaq-ul-Madaris Al-Arabia.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION: Student Testimonials */}
            <section className="bg-neutral-50 py-16 sm:py-20 space-y-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
                <span className="text-xs font-serif font-bold tracking-widest text-gold-deep uppercase bg-gold-light px-3 py-1 rounded-full border border-gold-soft/30">
                  Voice of the Sisterhood
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                  Trusted by Sisters & Mothers Worldwide
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  Real reflections of our current and former students, showing their path to Tajweed mastery and spiritual barakah.
                </p>
              </div>

              {/* Testimonials Grid */}
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TESTIMONIALS_DATA.map((item) => (
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
            </section>

            {/* SECTION: Quick FAQ previews accordion */}
            <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-3">
                <span className="text-xs font-serif font-bold text-gold-deep uppercase tracking-widest bg-gold-light px-3 py-1 rounded-full border border-gold-soft/30">
                  Quick Answers
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">Got a quick question?</h3>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm space-y-4 text-center">
                <p className="text-xs sm:text-sm text-neutral-600 font-light">
                  Find rapid answers regarding class setups, 1-on-1 private tuition, zoom guidelines, certified female scholars, and non-profit admissions.
                </p>
                <button
                  onClick={() => {
                    setActivePage('faq');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-1.5 bg-emerald-medium text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-emerald-deep transition-all cursor-pointer"
                >
                  <HelpCircle className="h-4 w-4 text-gold-soft" />
                  <span>Browse Full FAQs Page</span>
                </button>
              </div>
            </section>

            {/* SECTION: Enrollment Admission Form at Bottom of Home */}
            <ContactForm />

          </div>
        )}

        {/* VIEW 2: ABOUT US PAGE */}
        {activePage === 'about' && (
          <div className="animate-fade-in">
            <AboutUsView />
            <ContactForm />
          </div>
        )}

        {/* VIEW 3: COURSES PAGE */}
        {activePage === 'courses' && (
          <div className="animate-fade-in">
            <Courses onEnrollClick={handleEnrollScroll} />
            <ContactForm />
          </div>
        )}

        {/* VIEW 4: THE PRINCIPAL BIOGRAPHY */}
        {activePage === 'principal' && (
          <div className="animate-fade-in">
            <AboutPrincipal />
            <ContactForm />
          </div>
        )}

        {/* VIEW 5: ACTIVITIES & ACHIEVEMENTS */}
        {activePage === 'activities' && (
          <div className="animate-fade-in">
            <ActivitiesView />
            <ContactForm />
          </div>
        )}

        {/* VIEW 6: FAQ ACCORDION PAGE */}
        {activePage === 'faq' && (
          <div className="animate-fade-in">
            <FaqView />
          </div>
        )}

        {/* VIEW 7: CONTACT FORM PAGE */}
        {activePage === 'contact' && (
          <div className="animate-fade-in">
            <ContactForm />
          </div>
        )}

      </main>

      {/* Floating Assistive WhatsApp Support widget */}
      <FloatingWhatsApp />

      {/* Luxury Footer component */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
