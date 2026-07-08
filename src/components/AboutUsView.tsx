/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Target, Eye, Sparkles, Shield, Lock, Users, Award } from 'lucide-react';

export default function AboutUsView() {
  const values = [
    {
      title: "Spiritual Taqwa (Piety)",
      desc: "Our primary objective is to nurture sincerity (Ikhlas) and God-consciousness (Taqwa) in our students, ensuring knowledge leads to practical obedience to Allah.",
      icon: Eye
    },
    {
      title: "Uncompromising Modesty (Haya)",
      desc: "An atmosphere built strictly around the Islamic codes of modesty. Supported exclusively by female teachers, with privacy-focused live digital classrooms.",
      icon: Lock
    },
    {
      title: "Academic Excellence",
      desc: "We follow the highest educational standards of Wifaq-ul-Madaris Al-Arabia, utilizing highly detailed syllabi, structured testing, and interactive presentations.",
      icon: Award
    },
    {
      title: "Global Accessibility",
      desc: "Our non-profit model keeps education affordable and flexible across major timezones (US, UK, Middle East, Pakistan) so no sister is left behind.",
      icon: Users
    }
  ];

  return (
    <div id="about-us-view" className="bg-neutral-50 py-12 sm:py-16 space-y-20">
      
      {/* Intro Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-serif font-bold tracking-widest text-gold-deep uppercase bg-gold-light px-3 py-1.5 rounded-full border border-gold-soft/30">
            Learn Our Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Nurturing Pure Minds with
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-deep via-emerald-medium to-emerald-light">
              Prophetic Guidance & Light
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Tafheem-ul-Islam Academy Lil Banat was founded with a single, clear vision: to create an online sanctuary where women and girls can learn classical, authentic Islamic sciences with extreme confidence, respect, and academic structure.
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
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">Our Noble Mission</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Our mission is to empower Muslim women and young girls globally by providing structured, accessible, and high-quality classical Islamic education. We aim to clarify common jurisprudence issues, teach pristine Qur'anic recitation (Tajweed), and guide sisters toward self-rectification (Tazkiyah) and a peaceful, confident Islamic lifestyle, completely free from cultural innovations.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl border border-neutral-100 p-8 sm:p-10 shadow-sm space-y-6 relative overflow-hidden group hover:border-gold-soft/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gold-metallic"></div>
            <div className="inline-flex p-3 bg-gold-light text-gold-deep rounded-xl">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">Our Divine Vision</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              We envision a world where every Muslimah stands as a confident beacon of light and piety in her home and society. By understanding the direct translation and exegesis (Tafseer) of the Qur'an and the blessed traditions (Sunnah) of our Beloved Prophet Muhammad ﷺ, we hope to raise a generation of mothers, daughters, and teachers who preserve classical theology with sincere devotion and wisdom.
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
            <span className="text-xs font-serif font-bold text-gold-soft uppercase tracking-widest">The Pillars of our Creed</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">Our Core Spiritual Values</h3>
            <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
              At Tafheem-ul-Islam Academy, our operations, curriculum, and interactions are bound by sacred principles that ensure spiritual barakah (blessings).
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
                100% Secure Sisters Haven
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                Pioneering Female Digital Privacy Protocols
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                We understand that privacy is the absolute priority for sisters studying online. Tafheem-ul-Islam Academy has developed strict digital protocols to ensure complete peace of mind:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "No Class Video Sharing", desc: "No live recordings containing student visual screens or student audio are ever shared publicly or exported." },
                { title: "Camera Privacy Safeguards", desc: "Cameras are kept completely optional and are restricted strictly to direct female instructors when necessary for Tajweed assessments." },
                { title: "Female-Only Student Pool", desc: "Admission registration is strictly vetted. No male students or administrators have access to any sister portals." },
                { title: "Confidential Counselling", desc: "Personal Fiqh questions or Tarbiyah counselling sessions are handled entirely on secure, encrypted private channels." }
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
