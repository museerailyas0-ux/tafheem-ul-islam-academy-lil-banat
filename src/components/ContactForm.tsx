/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function ContactForm() {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'tajweed-quran',
    ageGroup: '18-above',
    country: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '103fec67-d1fb-4418-8c21-8a99396b66e6',
          ...formData
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: 'tajweed-quran',
          ageGroup: '18-above',
          country: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || 'Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="bg-neutral-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Column 1: Contact Details & Integrity Indicators */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-serif font-bold tracking-widest text-emerald-medium uppercase bg-emerald-bg px-3 py-1 rounded-full border border-emerald-medium/10">
                {t('contact.badge')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-none">
                {t('contact.title')}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                {t('contact.desc')}
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              
              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                <div className="p-3 bg-emerald-bg text-emerald-medium rounded-lg shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{t('contact.emailCard')}</h4>
                  <p>
                    <a href="mailto:umesemaal@gmail.com" className="text-xs sm:text-sm text-neutral-800 font-semibold hover:text-emerald-medium hover:underline transition-colors">
                      umesemaal@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                <div className="p-3 bg-emerald-bg text-emerald-medium rounded-lg shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{t('contact.phoneCard')}</h4>
                  <p>
                    <a href="tel:+923232358394" className="text-xs sm:text-sm text-neutral-800 font-semibold hover:text-emerald-medium hover:underline transition-colors">
                      +92 323 2358394
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                <div className="p-3 bg-emerald-bg text-emerald-medium rounded-lg shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-2 w-full">
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{t('contact.onlineCard')}</h4>
                  <p className="text-xs sm:text-sm text-neutral-800 font-semibold leading-relaxed">
                    {t('contact.onlinePlatforms')}
                  </p>
                  
                  {/* Modern icons for WhatsApp, Zoom, Google Meet */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2 border-t border-neutral-100">
                    <a 
                      href="https://wa.me/923232358394?text=Assalamu%20Alaikum.%20I%20would%20like%20to%20join%20Tafheem-ul-Islam%20Academy%20Lil%20Banat."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-emerald-medium hover:text-emerald-deep font-semibold text-[11px] transition-colors"
                    >
                      <svg className="h-4 w-4 fill-current text-emerald-medium" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.885-6.974C16.526 1.909 14.058.882 11.433.882c-5.437 0-9.863 4.42-9.868 9.858-.001 1.802.483 3.51 1.402 5.07L1.933 21.847l6.184-1.623zM16.92 14.1c-.287-.143-1.697-.838-1.959-.933-.263-.096-.454-.143-.646.143-.192.287-.743.933-.91 1.124-.167.192-.335.215-.622.072-.287-.143-1.21-.447-2.305-1.424-.853-.76-1.428-1.7-1.595-1.987-.167-.287-.018-.442.125-.584.13-.127.287-.335.43-.502.144-.167.192-.287.287-.478.096-.191.048-.36-.024-.502-.072-.143-.646-1.555-.885-2.129-.233-.561-.47-.484-.646-.493-.167-.008-.36-.01-.55-.01s-.502.072-.765.36c-.263.287-1.005.981-1.005 2.39s1.028 2.774 1.171 2.965c.143.192 2.023 3.09 4.9 4.336.685.296 1.22.474 1.637.607.688.219 1.314.188 1.808.115.552-.082 1.697-.694 1.937-1.362.24-.668.24-1.243.167-1.362-.072-.12-.263-.215-.55-.358z"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                    
                    <span className="text-neutral-200">|</span>
                    
                    <div className="flex items-center space-x-1 text-blue-600 font-semibold text-[11px]">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 4l-7 4.5L5 8V6l7 4.5L19 6v2z"/>
                      </svg>
                      <span>Zoom</span>
                    </div>
                    
                    <span className="text-neutral-300">|</span>
                    
                    <div className="flex items-center space-x-1 text-emerald-light font-semibold text-[11px]">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                      </svg>
                      <span>Google Meet</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Support timing notes */}
            <div className="bg-gold-light/40 border border-gold-soft/30 p-5 rounded-2xl space-y-2">
              <h5 className="text-xs font-serif font-bold text-gold-deep uppercase tracking-widest flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{t('contact.hoursTitle')}</span>
              </h5>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                {t('contact.hoursDesc')}
              </p>
            </div>

          </div>

          {/* Column 2: Elegant Form container */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-neutral-100 p-6 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-deep via-gold-soft to-gold-deep"></div>
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="inline-flex p-4 bg-emerald-bg text-emerald-medium rounded-full border border-emerald-medium/10 animate-bounce">
                    <CheckCircle className="h-12 w-12" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                      {language === 'ur' ? 'جزاک اللہ!' : 'JazakAllah!'}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
                      {language === 'ur' 
                        ? 'آپ کا رجسٹریشن کامیابی سے جمع ہو گیا ہے۔ ہم جلد ہی آپ سے رابطہ کریں گے، ان شاء اللہ۔' 
                        : 'Your registration has been submitted successfully. We will contact you soon, In Sha Allah.'}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center space-x-2 px-6 py-2.5 bg-emerald-medium text-white rounded-full text-xs font-bold tracking-wider uppercase shadow-md hover:bg-emerald-deep transition-colors"
                  >
                    <span>{t('contact.btnAnother')}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value="103fec67-d1fb-4418-8c21-8a99396b66e6" />
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{t('contact.lblLabelName')}</label>
                      <input
                        type="text"
                        required
                        placeholder={t('contact.placeholderName')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{t('contact.lblLabelEmail')}</label>
                      <input
                        type="email"
                        required
                        placeholder={t('contact.placeholderEmail')}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Phone/WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{t('contact.lblLabelPhone')}</label>
                      <input
                        type="tel"
                        required
                        placeholder={t('contact.placeholderPhone')}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{t('contact.lblLabelCountry')}</label>
                      <input
                        type="text"
                        required
                        placeholder={t('contact.placeholderCountry')}
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Course selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{t('contact.lblLabelCourse')}</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs sm:text-sm text-neutral-800 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="tajweed-quran">{t('courses.course1.title')}</option>
                        <option value="nazra-quran">{t('courses.course8.title')}</option>
                        <option value="hifz-quran">{t('courses.course2.title')}</option>
                        <option value="tafseer-quran">{t('courses.course3.title')}</option>
                        <option value="hadith-studies">{t('courses.course4.title')}</option>
                        <option value="fiqh-studies">{t('courses.course5.title')}</option>
                        <option value="seerah-studies">{t('courses.course6.title')}</option>
                        <option value="islamic-lifestyle">{t('courses.course7.title')}</option>
                      </select>
                    </div>

                    {/* Age Group */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{t('contact.lblLabelAge')}</label>
                      <select
                        value={formData.ageGroup}
                        onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs sm:text-sm text-neutral-800 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="under-12">{t('contact.ageUnder12')}</option>
                        <option value="12-18">{t('contact.age12to18')}</option>
                        <option value="18-above">{t('contact.age18above')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message/Questions */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{t('contact.lblLabelMessage')}</label>
                    <textarea
                      rows={4}
                      placeholder={t('contact.placeholderMessage')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-deep to-emerald-medium text-white font-bold tracking-wider uppercase py-4 rounded-xl shadow-md hover:scale-[1.01] transition-transform disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="h-4 w-4 text-gold-soft" />
                      <span>{isSubmitting ? t('contact.btnSubmitting') : t('contact.btnSubmit')}</span>
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

