/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Calendar, MapPin, Phone, Mail, BookOpen, 
  Clock, Send, CheckCircle, X, ShieldCheck, Sparkles 
} from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AdmissionModal({ isOpen, onClose, onSuccess }: AdmissionModalProps) {
  const { t, language } = useLanguage();

  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [timing, setTiming] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const COURSE_KEYS = [
    'course.quranTajweed',
    'course.nazraTajweed',
    'course.nooraniQaida',
    'course.hifz',
    'course.tafseer',
    'course.tarjuma',
    'course.hadith',
    'course.fiqh',
    'course.seerat',
    'course.sahaba',
    'course.other'
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const submissionPayload = {
      studentName,
      parentName,
      age,
      country,
      city,
      whatsapp,
      email,
      selectedCourse: selectedCourse || t(COURSE_KEYS[0]),
      timing,
      message
    };

    try {
      // Frontend-only submission to Google Apps Script.
      // Replace this placeholder with your actual Google Apps Script Web App URL.
      const GOOGLE_SCRIPT_URL = "https://SCRIPT_URL";

      if (GOOGLE_SCRIPT_URL === "https://SCRIPT_URL") {
        console.warn("Using placeholder Google Apps Script URL. Simulating successful form submission.");
        // Reset form fields
        setStudentName('');
        setParentName('');
        setAge('');
        setCountry('');
        setCity('');
        setWhatsapp('');
        setEmail('');
        setSelectedCourse('');
        setTiming('');
        setMessage('');
        
        onSuccess();
        onClose();
        return;
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionPayload)
      });

      if (response.ok) {
        // Reset form fields
        setStudentName('');
        setParentName('');
        setAge('');
        setCountry('');
        setCity('');
        setWhatsapp('');
        setEmail('');
        setSelectedCourse('');
        setTiming('');
        setMessage('');
        
        onSuccess();
        onClose();
      } else {
        throw new Error('Submission failed');
      }
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || 'Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isRtl = language === 'ur';

  // Animation variants for staggered form fields
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 140,
        damping: 15
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          id="admission-modal-portal" 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.12 }}
            className={`relative w-full max-w-2xl bg-white rounded-3xl border border-neutral-100 shadow-2xl overflow-hidden z-10 my-8 ${isRtl ? 'rtl text-right' : 'text-left'}`}
          >
            {/* Majestic Top Gold Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-deep via-gold-metallic to-gold-deep"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors z-20 cursor-pointer`}
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Admission Form */}
            <div className="max-h-[85vh] overflow-y-auto">
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
                
                {/* Modal Header */}
                <div className="text-center space-y-2 pb-4 border-b border-neutral-100">
                  <span className="inline-flex items-center gap-1 text-[10px] font-serif font-bold tracking-widest text-gold-deep uppercase bg-gold-light px-2.5 py-1 rounded-full border border-gold-soft/20 mx-auto">
                    <Sparkles className="h-3 w-3 text-gold-deep" />
                    <span>{t('admission.badge')}</span>
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                    {t('admission.title')}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-neutral-500 font-light max-w-md mx-auto">
                    {t('admission.desc')}
                  </p>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {/* Form Section: Personal Info */}
                  <div className="space-y-4">
                    <motion.div 
                      variants={itemVariants}
                      className={`flex items-center space-x-2 pb-1 border-b border-neutral-100 ${isRtl ? 'space-x-reverse' : ''}`}
                    >
                      <div className="h-4 w-1 rounded-full bg-emerald-medium"></div>
                      <h3 className="font-serif text-xs font-bold text-neutral-800 uppercase tracking-wide">
                        {isRtl ? 'ذاتی معلومات' : 'Personal Information'}
                      </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Student Full Name */}
                      <motion.div variants={itemVariants} className="space-y-1">
                        <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                          <User className="h-3 w-3 text-gold-deep" />
                          <span>{t('admission.studentName')}</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder={isRtl ? "مثال: فاطمہ الزہراء" : "e.g. Fatima Az-Zahra"}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                        />
                      </motion.div>

                      {/* Parent/Guardian Name */}
                      <motion.div variants={itemVariants} className="space-y-1">
                        <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                          <User className="h-3 w-3 text-gold-deep" />
                          <span>{t('admission.parentName')}</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          placeholder={isRtl ? "مثال: محمد الیاس" : "e.g. Muhammad Ilyas"}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {/* Age */}
                      <motion.div variants={itemVariants} className="space-y-1">
                        <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-gold-deep" />
                          <span>{t('admission.age')}</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          placeholder={isRtl ? "مثال: 19 سال" : "e.g. 19 years / Adult"}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                        />
                      </motion.div>

                      {/* Country */}
                      <motion.div variants={itemVariants} className="space-y-1">
                        <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-gold-deep" />
                          <span>{t('admission.country')}</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder={isRtl ? "مثال: پاکستان" : "e.g. Pakistan"}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                        />
                      </motion.div>

                      {/* City */}
                      <motion.div variants={itemVariants} className="space-y-1">
                        <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-gold-deep" />
                          <span>{t('admission.city')}</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder={isRtl ? "مثال: کراچی" : "e.g. Karachi"}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Form Section: Contact Info */}
                  <div className="space-y-4">
                    <motion.div 
                      variants={itemVariants}
                      className={`flex items-center space-x-2 pb-1 border-b border-neutral-100 ${isRtl ? 'space-x-reverse' : ''}`}
                    >
                      <div className="h-4 w-1 rounded-full bg-emerald-medium"></div>
                      <h3 className="font-serif text-xs font-bold text-neutral-800 uppercase tracking-wide">
                        {isRtl ? 'رابطہ اور مواصلات' : 'Contact & Communications'}
                      </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* WhatsApp Number */}
                      <motion.div variants={itemVariants} className="space-y-1">
                        <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                          <Phone className="h-3 w-3 text-gold-deep" />
                          <span>{t('admission.whatsapp')}</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="e.g. +92 300 1234567"
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                        />
                      </motion.div>

                      {/* Email Address */}
                      <motion.div variants={itemVariants} className="space-y-1">
                        <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                          <Mail className="h-3 w-3 text-gold-deep" />
                          <span>{t('admission.email')}</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. student@example.com"
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Form Section: Course Preferences */}
                  <div className="space-y-4">
                    <motion.div 
                      variants={itemVariants}
                      className={`flex items-center space-x-2 pb-1 border-b border-neutral-100 ${isRtl ? 'space-x-reverse' : ''}`}
                    >
                      <div className="h-4 w-1 rounded-full bg-emerald-medium"></div>
                      <h3 className="font-serif text-xs font-bold text-neutral-800 uppercase tracking-wide">
                        {isRtl ? 'کورس اور تدریسی ترجیحات' : 'Course & Timing Preferences'}
                      </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Selected Course */}
                      <motion.div variants={itemVariants} className="space-y-1">
                        <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                          <BookOpen className="h-3 w-3 text-gold-deep" />
                          <span>{t('admission.selectCourse')}</span>
                        </label>
                        <select
                          required
                          value={selectedCourse}
                          onChange={(e) => setSelectedCourse(e.target.value)}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="">{isRtl ? '-- کورس منتخب کریں --' : '-- Choose a Course --'}</option>
                          {COURSE_KEYS.map((key) => (
                            <option key={key} value={t(key)}>
                              {t(key)}
                            </option>
                          ))}
                        </select>
                      </motion.div>

                      {/* Preferred Class Timing */}
                      <motion.div variants={itemVariants} className="space-y-1">
                        <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gold-deep" />
                          <span>{t('admission.timing')}</span>
                        </label>
                        <select
                          required
                          value={timing}
                          onChange={(e) => setTiming(e.target.value)}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="">{isRtl ? '-- پسندیدہ وقت منتخب کریں --' : '-- Choose preferred timing --'}</option>
                          <option value="Morning">{isRtl ? 'صبح (8:00 AM - 12:00 PM)' : 'Morning (8:00 AM - 12:00 PM PKT)'}</option>
                          <option value="Afternoon">{isRtl ? 'دوپہر (12:00 PM - 4:00 PM)' : 'Afternoon (12:00 PM - 4:00 PM PKT)'}</option>
                          <option value="Evening">{isRtl ? 'شام (4:00 PM - 8:00 PM)' : 'Evening (4:00 PM - 8:00 PM PKT)'}</option>
                          <option value="Night">{isRtl ? 'رات (8:00 PM - 11:00 PM)' : 'Night (8:00 PM - 11:00 PM PKT)'}</option>
                          <option value="Flexible">{isRtl ? 'غیر متعین / واٹس ایپ پر طے ہوگا' : 'Flexible / Discuss on WhatsApp'}</option>
                        </select>
                      </motion.div>
                    </div>

                    {/* Message */}
                    <motion.div variants={itemVariants} className="space-y-1">
                      <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                        <BookOpen className="h-3 w-3 text-gold-deep" />
                        <span>{t('admission.message')}</span>
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={isRtl ? "کسی خاص ضرورت، فیس رعایت یا استاد کے لیے کوئی دوسرا پیغام یہاں تحریر کریں..." : "Share any special requests, questions about fee concessions, or other notes..."}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 placeholder-neutral-400 focus:border-emerald-medium focus:bg-white focus:outline-none transition-all resize-none"
                      />
                    </motion.div>
                  </div>

                  {/* Error block if any */}
                  {submitError && (
                    <motion.div 
                      variants={itemVariants}
                      className="p-3 bg-red-50 border border-red-200 text-red-700 text-[11px] rounded-xl font-medium"
                    >
                      {submitError}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.div variants={itemVariants} className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-deep via-emerald-medium to-emerald-deep text-white font-bold tracking-wider uppercase py-3 rounded-xl shadow-lg hover:scale-[1.01] transition-transform disabled:opacity-50 cursor-pointer border border-gold-soft/20 text-xs"
                    >
                      <Send className={`h-3.5 w-3.5 text-gold-soft animate-pulse ${isRtl ? 'rotate-180 mr-1.5' : 'ml-1.5'}`} />
                      <span>{isSubmitting ? t('admission.submitting') : t('admission.submit')}</span>
                    </button>
                  </motion.div>
                </motion.div>

              </form>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
