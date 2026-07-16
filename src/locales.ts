/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course, Testimonial, FAQItem, Activity } from './types';

// English Data Copies (re-exporting or duplicating to keep context self-contained)
export const COURSES_EN = [
  {
    id: 'tajweed-quran',
    title: 'Qur\'an Reading with Tajweed',
    arabicTitle: 'تجويد القرآن الكريم',
    shortDesc: 'The Tajweed program starts from Basic level and continues up to Advanced level, guiding students from alphabets to fluent recitation.',
    longDesc: 'This Tajweed program starts from the Basic level and continues up to the Advanced level, beautifully designed for sisters of all ages who wish to recite the Holy Qur\'an with flawless pronunciation. Starting from Noorani Qaida, our certified female teachers (Muallimat) guide students patiently through articulation points (Makharij) and characteristics of Arabic letters, leading to standard, fluent recitation of the Book of Allah. Classes are conducted live through audio calls via Zoom and WhatsApp Groups.',
    duration: '6 Months',
    frequency: '3 days a week (30-45 min sessions)',
    level: 'Beginner' as const,
    category: 'Quran' as const,
    features: [
      'Correct articulation points (Makharij)',
      'Rules of Noon Sakin and Meem Sakin',
      'Rules of elongation (Madd) and pronunciation levels',
      'Personalized feedback and recitation corrections',
      'Memorization of daily Supplications (Adhkar) and last 10 Surahs'
    ],
    syllabus: [
      'Introduction to Arabic letters and phonetic points',
      'Vowel signs (Harakat) and connection of words',
      'Core Tajweed rules (Ghunnah, Qalqalah, Izhar, Idgham)',
      'Fluent reading practice from the Mus\'haf',
      'Interactive evaluation and Tajweed certification'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'nazra-tajweed',
    title: 'Nazra Quran with Tajweed',
    arabicTitle: 'ناظرة القرآن الكريم مع التجويد',
    shortDesc: 'We also offer Nazra Quran with Tajweed classes, helping students recite the Holy Quran with correct pronunciation, proper Tajweed rules, confidence, and fluency under qualified female teachers.',
    longDesc: 'We offer specialized Nazra Quran with Tajweed classes designed to help students of all ages recite the Holy Quran with correct pronunciation, proper Tajweed rules, confidence, and fluency. Under the personal guidance of qualified female teachers, students will practice fluent recitation of the Book of Allah directly from the Mus\'haf, developing a beautiful connection with the words of Allah. Classes are conducted live through audio calls via Zoom and WhatsApp Groups.',
    duration: '6 Months',
    frequency: '3 days a week (30-45 min sessions)',
    level: 'Beginner' as const,
    category: 'Quran' as const,
    features: [
      'Recitation of the Holy Quran with correct pronunciation',
      'Practical implementation of basic and core Tajweed rules',
      'Gaining confidence and fluency in recitation',
      'Personalized guidance under qualified female teachers',
      'Memorization of daily Supplications (Adhkar) and short Surahs'
    ],
    syllabus: [
      'Basic phonetic articulation and fluency exercises',
      'Guided reading of selected parts of the Quran',
      'Practical application of rules of elongation and stopping',
      'Fluent reading practice directly from the Mus\'haf',
      'Final assessment and certification of recitation fluency'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'hifz-quran',
    title: 'Hifz-ul-Qur\'an (Memorization)',
    arabicTitle: 'حفظ القرآن الكريم',
    shortDesc: 'A dedicated, structured program for memorizing the Holy Qur\'an with precise revision.',
    longDesc: 'A specialized memorization track for girls and women who aspire to preserve the Book of Allah in their hearts. Under the direct supervision of qualified Huffadh (female teachers), this program features highly customized individual goals, rigorous daily revision (Manzil/Sabaq/Sabqi), and spiritual counseling to maintain consistency. Classes are conducted live through audio calls via Zoom or WhatsApp.',
    duration: 'Flexible (Self-Paced / 2-4 Years)',
    frequency: 'Daily (Monday to Friday)',
    level: 'Intermediate' as const,
    category: 'Quran' as const,
    features: [
      'Individually customized memorization plans (Sabaq)',
      'Rigorous daily revision systems (Sabqi & Manzil)',
      'Beautiful vocal training (Tarteel)',
      'Monthly assessment of memorization and Tajweed quality',
      'Special certificates upon completion of individual Juz and the entire Qur\'an'
    ],
    syllabus: [
      'Initial evaluation and custom planning',
      'Memorization of Surah Al-Baqarah and chosen Juz',
      'Daily Sabaq recitation and feedback',
      'Weekly review of memorized portions',
      'Comprehensive final examination for Sanad (Memorization License)'
    ],
    iconName: 'Heart'
  },
  {
    id: 'tafseer-quran',
    title: 'Tafseer & Translation of Qur\'an',
    arabicTitle: 'تفسير وترجمة القرآن الكريم',
    shortDesc: 'Successfully continuing in its 8th year, this program helps sisters understand the divine message of the Qur\'an through translation and exegesis.',
    longDesc: 'Successfully continuing in its 8th year, this program is an enriching journey into the meanings of the Holy Qur\'an. It translates divine words literally and contextually, combined with authentic classical Tafseer (such as Ibn Kathir and Ma\'ariful Qur\'an). Learn the reasons for revelation (Asbab-un-Nuzool) and practical, everyday lessons to implement Allah\'s guidance in our modern lives. Classes are conducted live through audio calls via Zoom and WhatsApp Groups.',
    duration: '1 Year (Modular)',
    frequency: '2 days a week',
    level: 'All Levels' as const,
    category: 'Quran' as const,
    features: [
      'Word-by-word translation and vocabulary building',
      'Comprehensive Tafseer of selected Surahs',
      'Focus on Asbab-un-Nuzool (reasons for revelation)',
      'Exploration of core Islamic beliefs and ethical lessons',
      'Open discussion and Q&A sessions on contemporary topics'
    ],
    syllabus: [
      'Foundations of Tafseer science (Usool-ut-Tafseer)',
      'Detailed translation of Juz \'Amma (30th Juz)',
      'Translation and study of Surah Al-Kahf, Surah Yaseen, and Surah Al-Hujurat',
      'Exegesis of family and societal law verses',
      'Final thematic assignment and certification'
    ],
    iconName: 'Compass'
  },
  {
    id: 'hadith-studies',
    title: 'Hadith Studies (Sayings of the Prophet ﷺ)',
    arabicTitle: 'دراسة الحديث النبوي',
    shortDesc: 'Study classical compilations of Hadith, focusing on moral grooming and prophetic character.',
    longDesc: 'Delve into the blessed traditions and sayings of our Beloved Prophet Muhammad ﷺ. This course introduces students to classical Hadith compilations, including Riyadh-us-Saliheen and Forty Hadith of Imam Al-Nawawi. Focus is placed on prophetic ethics, character building (Akhlaq), and understanding the chain of narrators (Isnad) and practical application of Sunnah.',
    duration: '6 Months',
    frequency: '2 days a week',
    level: 'Intermediate' as const,
    category: 'Islamic Studies' as const,
    features: [
      'Study of Riyadh-us-Saliheen and Al-Nawawi\'s Forty Hadith',
      'Focus on practical morals (Akhlaq) and manners (Adab)',
      'Introduction to the science of Hadith verification (Usool-ul-Hadith)',
      'Memorization of key short prophetic supplications',
      'Interactive lessons connecting Hadith to contemporary lifestyle challenges'
    ],
    syllabus: [
      'Introduction to Sunnah and its authority in Islam',
      'Detailed study of Hadith of Intentions, Pillars of Islam, and Ihsan',
      'Hadith on parents\' rights, honesty, and family ties',
      'Hadith on sisterhood, community welfare, and tongue preservation',
      'Final presentation on propagating Prophetic teachings'
    ],
    iconName: 'Award'
  },
  {
    id: 'fiqh-studies',
    title: 'Fiqh & Masail (Islamic Jurisprudence)',
    arabicTitle: 'الفقه الإسلامي والمسائل',
    shortDesc: 'Learn the practical rulings of worship, purity, and female-specific Islamic jurisprudence.',
    longDesc: 'A highly essential course designed exclusively for women, covering the rulings of Islamic Jurisprudence (Fiqh). Acquire precise knowledge regarding ritual purity (Taharah), salah, fasting, zakat, and female-specific matters (Haydh/Nifas/Istihadhah) in a private, respectful, and scholarly environment under the guidance of Ustadha Habiba Ilyas.',
    duration: '4 Months',
    frequency: '2 days a week',
    level: 'All Levels' as const,
    category: 'Islamic Studies' as const,
    features: [
      'Comprehensive study of ritual purity (Taharah) for women',
      'Practical step-by-step guidance on Salah and Fasting',
      'Solutions to complex female-specific Islamic medical and physiological issues',
      'Rulings of family contracts, modesty (Hijab), and financial transactions',
      'Highly private, respectful, and safe Q&A channel for personal queries'
    ],
    syllabus: [
      'Foundations of Fiqh (Usool-ul-Fiqh)',
      'The Book of Purification (Taharah): Wudu, Ghusl, and detailed female matters',
      'The Book of Prayer (Salah): Conditions, pillars, and common errors',
      'The Book of Fasting (Sawm) & Zakat regulations',
      'Contemporary lifestyle issues and ethical solutions in jurisprudence'
    ],
    iconName: 'Scale'
  },
  {
    id: 'seerah-studies',
    title: 'Seerah-tun-Nabi ﷺ (Prophetic Biography)',
    arabicTitle: 'السيرة النبوية العطرة',
    shortDesc: 'Immerse in the life and struggle of Prophet Muhammad ﷺ to ignite true love and devotion.',
    longDesc: 'An inspiring exploration of the life of the Prophet Muhammad ﷺ from his blessed birth to his passing. Learn about his noble character, beautiful dealings, patience through trials, leadership, and the immense sacrifices made to deliver the light of Islam. This course nurtures authentic love for the Prophet ﷺ and inspires sisters to mirror his qualities.',
    duration: '4 Months',
    frequency: '1 day a week',
    level: 'All Levels' as const,
    category: 'Islamic Studies' as const,
    features: [
      'Study of the Prophet\'s life based on authentic historical texts',
      'Focus on the Prophet\'s interactions with his family, wives, and companions',
      'Reflections on patience, mercy, and wisdom during the Makkan and Madinan eras',
      'Interactive maps and timeline of major events (Ghazawat, treaties)',
      'Inspiring quizzes and reflection journals'
    ],
    syllabus: [
      'Pre-Islamic Arabia and the lineage/birth of the Prophet ﷺ',
      'The dawn of Prophethood and early Makkan struggles',
      'The historic Migration (Hijrah) to Madinah',
      'The social and legislative construction of the Islamic state',
      'The Farewell Pilgrimage and the eternal legacy of Muhammad ﷺ'
    ],
    iconName: 'Bookmark'
  },
  {
    id: 'islamic-lifestyle',
    title: 'Islamic Lifestyle & Tarbiyah',
    arabicTitle: 'التربية ونمط الحياة الإسلامية',
    shortDesc: 'Nurture your soul with character development, daily supplications, and parenting advice.',
    longDesc: 'A holistic course crafted to groom the modern Muslimah. This curriculum addresses spiritual self-rectification (Tazkiyah), psychological resilience, mindful living, halal relationships, Islamic parenting, and maintaining an elegant, balanced Islamic identity in a digitally distracted world.',
    duration: '3 Months',
    frequency: '1 day a week',
    level: 'All Levels' as const,
    category: 'Lifestyle' as const,
    features: [
      'Spiritual heart purification (Tazkiyah-tun-Nafs)',
      'Islamic etiquettes of social media, digital well-being, and screen time',
      'Halal family dynamics: fulfilling roles as daughters, wives, and mothers',
      'Interactive modules on mental health, self-care, and confidence in Hijab',
      'Practical daily goal trackers and spiritual mentorship circles'
    ],
    syllabus: [
      'Understanding the spiritual anatomy of the heart and soul',
      'Daily Sunnah routines, morning/evening Adhkar, and barakah habits',
      'Building strong relationships, dealing with peer pressure, and boundaries',
      'Islamic parenting: nurturing children with Taqwa and love',
      'Developing confidence, resilience, and elegant Islamic representation'
    ],
    iconName: 'UserCheck'
  },
  {
    id: 'sahabah-lives',
    title: 'Lives of the Noble Companions (Sahabah رضي الله عنهم)',
    arabicTitle: 'سير الصحابة الكرام رضي الله عنهم',
    shortDesc: 'Discover the inspiring lives, sacrifices, faith, and character of the Noble Companions of the Prophet ﷺ through authentic Islamic sources.',
    longDesc: 'This beautiful and faith-kindling course teaches the inspiring lives, sacrifices, faith, character, and outstanding contributions of the Noble Companions (Sahabah رضي الله عنهم) through authentic Islamic sources. Students will study their unwavering devotion, companionship with the Prophet ﷺ, and their role in propagating the light of Islam, drawing invaluable life lessons for today\'s Muslimah.',
    duration: '4 Months',
    frequency: '1 day a week',
    level: 'All Levels' as const,
    category: 'Islamic Studies' as const,
    features: [
      'In-depth study of the lives of the Companions رضي الله عنهم',
      'Lessons on sacrifice, patience, and true brotherhood/sisterhood',
      'Extracting practical character-building gems (Akhlaq) for modern times',
      'Focus on female companions (Sahabiyat رضي الله عنهن) and mothers of the believers',
      'Authentic references from classical Islamic history'
    ],
    syllabus: [
      'Virtues of the Sahabah in the Qur\'an and Sunnah',
      'The Khulafa-e-Rashideen (The Rightly Guided Caliphs) and their legacies',
      'The Ashara Mubashara (Ten Promised Paradise) and their stories',
      'Inspiring biographies of prominent Sahabiyat (Female Companions)',
      'Practical implementation of their faith and values in our everyday lives'
    ],
    iconName: 'Users'
  }
];

export const TESTIMONIALS_EN = [
  {
    id: 't1',
    name: 'Aisha Mahmood',
    role: 'Tafseer Student & Mother',
    location: 'United Kingdom',
    quote: 'Joining Tafheem-ul-Islam Academy has been the best decision of my life. The teachers are incredibly patient, and studying under Ustadha Habiba Ilyas has opened my heart to the Quran like never before. The online format is so respectful, safe, and flexible for a busy mother.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Dr. Fatima Rizwan',
    role: 'Fiqh Class Alumna',
    location: 'United States',
    quote: 'As a medical professional, I struggled to find deep, academically rigorous Islamic classes that fit my schedule. The Fiqh & Masail course provided me with clear, well-sourced Hanfi rulings on complex modern subjects. It is highly structured, elegant, and peaceful.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Zainab Tariq',
    role: 'Hifz Student',
    location: 'Pakistan',
    quote: 'The personalized Quran memorization plan here is spectacular. My teacher listens to my sabaq with full attention, correcting my tajweed with gentle care. The regular monthly tests have helped me solidify my dhor. Alhamdulillah for this non-profit blessing!',
    rating: 5
  },
  {
    id: 't4',
    name: 'Mariam Al-Ghamdi',
    role: 'Student (Islamic Lifestyle)',
    location: 'Saudi Arabia',
    quote: 'Tarbiyah is what sets Tafheem-ul-Islam apart. It is not just about dry facts; it is about grooming our characters to be true Muslimahs. The competitions, quizzes, and digital lifestyle modules are highly engaging and deeply transformative.',
    rating: 5
  }
];

export const FAQS_EN = [
  {
    id: 'faq1',
    question: 'Is this academy exclusively for women and girls?',
    answer: 'Yes, Tafheem-ul-Islam Academy Lil Banat is strictly dedicated to women and girls. All of our administrators, supervisors, and teachers are certified, highly qualified female scholars (Alimahs & Huffadh) providing a comfortable and safe learning environment.',
    category: 'Academy' as const
  },
  {
    id: 'faq2',
    question: 'How do the online classes take place?',
    answer: 'Classes are conducted live online through interactive audio calls. We deliver our lessons using Zoom and WhatsApp Groups. High-speed internet, a smartphone/laptop, and a quiet learning space are all that you need to join.',
    category: 'Classes' as const
  },
  {
    id: 'faq3',
    question: 'What are the qualifications of Ustadha Habiba Ilyas?',
    answer: 'Our beloved teacher, Ustadha Habiba Ilyas, is a qualified Islamic scholar, Dars-e-Nizami certified, and a distinguished graduate of Wifaq-ul-Madaris Al-Arabia. Our respected teacher has consistently earned distinguished positions at the Pakistan level and continues to receive national-level positions in Wifaq examinations for three consecutive years. She brings years of classical teaching experience specializing in Tajweed, Tafseer, and Fiqh, guiding students internationally with sincerity, authenticity, and excellence.',
    category: 'Academy' as const
  },
  {
    id: 'faq4',
    question: 'Is there a fee for these courses?',
    answer: 'Tafheem-ul-Islam Academy is a welfare-oriented and educational institute. Some of our courses are completely free, and group classes also remain free where applicable. However, individual (One-to-One / Infiraadi) classes are paid, and some specialized courses are also paid. Individual classes are conducted with a fee to provide personalized learning. All classes are live audio calls conducted via Zoom and WhatsApp Groups.',
    category: 'Fees' as const
  },
  {
    id: 'faq5',
    question: 'Are there flexible class timings available?',
    answer: 'Yes! Weekly classes are conducted according to a planned schedule. We offer highly flexible timings from morning till evening to perfectly accommodate busy mothers, female students, and working women across various time zones (US, UK, Middle East, Pakistan).',
    category: 'Classes' as const
  },
  {
    id: 'faq6',
    question: 'Do you award certificates upon completion of a course?',
    answer: 'Absolutely. Upon successful completion of a course, maintaining 85% attendance, and passing the final assessments (both oral and written), students are awarded official completion certificates signed by the Academy administration and Ustadha Habiba Ilyas.',
    category: 'Admission' as const
  }
];

export const ACTIVITIES_EN = [
  {
    id: 'act1',
    title: 'Annual Husn-e-Qira\'at Competition',
    desc: 'An inspiring academy-wide Quran recitation competition celebrating beautiful Tajweed. Evaluated by international female Huffadh, with golden shields and cash awards distributed to the top reciters.',
    category: 'Competition' as const,
    badge: 'Ramadan Special'
  },
  {
    id: 'act2',
    title: 'Wifaq-ul-Madaris Annual Exam Excellence',
    desc: 'Our advanced students achieved outstanding, top-tier results in the central examinations of Wifaq-ul-Madaris Al-Arabia, demonstrating academic rigor and deep theological mastery.',
    category: 'Achievement' as const,
    badge: '100% Pass Rate'
  },
  {
    id: 'act3',
    title: 'Prophetic Character (Seerah) Quiz Challenge',
    desc: 'An interactive, high-tech online quiz competition focusing on the life of Prophet Muhammad ﷺ to encourage students to read classical biography books and adapt the Sunnah.',
    category: 'Competition' as const,
    badge: 'Youth Special'
  },
  {
    id: 'act4',
    title: 'Weekly Tarbiyah Webinars',
    desc: 'Interactive weekend seminars hosted by guest female scholars addressing mental health, contemporary digital distractions, hijab confidence, and managing modern family dynamics.',
    category: 'Webinar' as const,
    badge: 'Free Public Event'
  },
  {
    id: 'act5',
    title: 'Islamic Calligraphy & Design Exhibition',
    desc: 'Encouraging female artistic talent by hosting a digital exhibition for Arabic calligraphy, digital painting, and Quranic verse illustration submissions.',
    category: 'Activity' as const,
    badge: 'Creative Arts'
  }
];

// Urdu Translated Copies (Beautiful, Scholarly, Fluent script)
export const COURSES_UR: Course[] = [
  {
    id: 'tajweed-quran',
    title: 'تجوید کے ساتھ قرآن مجید پڑھنا',
    arabicTitle: 'تجويد القرآن الكريم',
    shortDesc: 'تجوید پروگرام کا آغاز بنیادی لیول (Basic) سے ہوتا ہے اور یہ ایڈوانس لیول (Advanced) تک جاری رہتا ہے، جس سے بہترین تلاوت ممکن ہوتی ہے۔',
    longDesc: 'تجوید کا یہ کورس ہر عمر کی خواتین کے لیے خوبصورتی سے ترتیب دیا گیا ہے۔ یہ تجوید پروگرام بنیادی لیول (Basic) سے شروع ہو کر ایڈوانس لیول (Advanced) تک جاری رہتا ہے۔ نورانی قاعدہ سے آغاز کرتے ہوئے ہماری معزز معلمات طالبات کی مخرج اور صفات سکھانے میں بہترین رہنمائی کرتی ہیں۔ ہماری تمام لائیو کلاسز زوم اور واٹس ایپ گروپس پر آڈیو کالز کے ذریعے منعقد ہوتی ہے۔',
    duration: '6 ماہ',
    frequency: 'ہفتے میں 3 دن (30 سے 45 منٹ کے سیشن)',
    level: 'Beginner', // Keep original tags for internal filtering logic
    category: 'Quran',
    features: [
      'حروف کے درست مخارج کی ادائیگی (مخارج)',
      'نونِ ساکن اور میمِ ساکن کے قواعد',
      'مدود اور تلفظ کے دیگر درجات و قواعد',
      'انفرادی اصلاحِ تلاوت اور فیڈ بیک',
      'روزمرہ کی دعائیں (اذکار) اور آخری 10 سورتیں زبانی یاد کرنا'
    ],
    syllabus: [
      'عربی حروفِ تہجی اور ان کی آوازوں کا تعارف',
      'حرکات اور الفاظ کو جوڑنے کی مشق',
      'بنیادی قواعدِ تجوید (غنّہ، قلقلہ، اظہار، ادغام)',
      'مصحف سے روانی کے ساتھ تلاوت کی مشق',
      'حسنِ قرأت کی جانچ اور تجوید کی سند'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'nazra-tajweed',
    title: 'تجوید کے ساتھ ناظرہ قرآن',
    arabicTitle: 'ناظرة القرآن الكريم مع التجويد',
    shortDesc: 'ہم تجوید کے ساتھ ناظرہ قرآن کی کلاسز بھی پیش کرتے ہیں، جس سے طالبات مستند معلمات کی زیرِ نگرانی درست مخارج، تجوید کے قواعد، خود اعتمادی اور روانی کے ساتھ تلاوتِ قرآن سیکھتی ہیں۔',
    longDesc: 'ہم تجوید کے ساتھ ناظرہ قرآن کی خصوصی کلاسز پیش کرتے ہیں جو ہر عمر کی طالبات کو درست تلفظ، تجوید کے قواعد، خود اعتمادی اور روانی کے ساتھ تلاوتِ قرآن کرنے میں مدد دیتی ہیں۔ مستند اور تجربہ کار معلمات کی رہنمائی میں، طالبات مصحف سے براہِ راست تلاوت کی مشق کرتی ہیں اور قرآن پاک کے ساتھ ایک گہرا قلبی تعلق قائم کرتی ہیں۔ ہماری تمام لائیو کلاسز زوم اور واٹس ایپ گروپس پر آڈیو کالز کے ذریعے منعقد ہوتی ہے۔',
    duration: '6 ماہ',
    frequency: 'ہفتے میں 3 دن (30 سے 45 منٹ کے سیشن)',
    level: 'Beginner',
    category: 'Quran',
    features: [
      'درست تلفظ اور مخارج کے ساتھ قرآن پاک کی تلاوت',
      'بنیادی اور اہم قواعدِ تجوید کا عملی اطلاق',
      'تلاوت میں روانی اور خود اعتمادی حاصل کرنا',
      'مستند معلمات کی نگرانی میں انفرادی رہنمائی',
      'روزمرہ کی مسنون دعائیں اور سورتیں زبانی یاد کرنا'
    ],
    syllabus: [
      'حروف کی درست آوازوں اور تلفظ کی مشق',
      'قرآن پاک کے منتخب حصوں کی رہنمائی کے ساتھ تلاوت',
      'وقف اور مد کے قواعد کی عملی مشق',
      'براہِ راست مصحف سے روانی کے ساتھ پڑھنے کی تلاوت',
      'آخری ٹیسٹ اور تلاوتِ قرآن کی سند'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'hifz-quran',
    title: 'حفظ القرآن الکریم (تحفیظ)',
    arabicTitle: 'حفظ القرآن الكريم',
    shortDesc: 'درست تجوید اور باقاعدہ دہرائی کے ساتھ قرآن مجید حفظ کرنے کا ایک منظم پروگرام۔',
    longDesc: 'قرآن پاک کو اپنے سینوں میں محفوظ کرنے کی خواہشمند خواتین اور بچیوں کے لیے ایک خصوصی پروگرام۔ ہماری تجربہ کار اور مستند معلمات (حفاظ) کی براہِ راست نگرانی میں، یہ پروگرام طالبات کو انفرادی رفتار کے مطابق روزانہ کا سبق، سبقی اور منزل کی باقاعدہ دہرائی کے ساتھ حفظ مکمل کرنے میں مدد دیتا ہے۔ تمام کلاسیں لائیو آڈیو کالز کے ذریعے زوم اور واٹس ایپ پر منعقد کی جاتی ہیں۔',
    duration: 'لچکدار (طالبہ کی رفتار کے مطابق / 2 سے 4 سال)',
    frequency: 'روزانہ (پیر سے جمعہ)',
    level: 'Intermediate',
    category: 'Quran',
    features: [
      'طالبہ کی ضرورت کے مطابق انفرادی حفظ پلان (سبق)',
      'روزانہ دہرائی کا منظم نظام (سبقی اور منزل)',
      'ترتیل اور خوبصورت آواز کے ساتھ تلاوت کی تربیت',
      'حفظ اور تجوید کی کوالٹی کا ماہانہ ٹیسٹ',
      'ہر پارے کی تکمیل اور مکمل حفظ پر خصوصی اسناد'
    ],
    syllabus: [
      'ابتدائی ٹیسٹ اور انفرادی حفظ کا خاکہ',
      'سورہ بقرہ اور دیگر منتخب پاروں کا حفظ',
      'روزانہ نئے سبق کی تلاوت اور اصلاح',
      'حفظ شدہ حصوں کا ہفتہ وار اعادہ',
      'مستند سندِ حفظ کے لیے جامع آخری امتحان'
    ],
    iconName: 'Heart'
  },
  {
    id: 'tafseer-quran',
    title: 'ترجمہ و تفسیرِ قرآن مجید',
    arabicTitle: 'تفسير وترجمة القرآن الكريم',
    shortDesc: 'الحمد للہ، تفسیر کا یہ پروگرام اپنے کامیابی کے 8ویں سال میں جاری ہے، جس میں قرآن پاک کا ترجمہ و تفسیر سکھایا جاتا ہے۔',
    longDesc: 'الحمد للہ، تفسیر کا یہ پروگرام اپنے کامیابی کے 8ویں سال میں جاری ہے اور یہ قرآنِ مجید کے گہرے مفاہیم کو سمجھنے کا ایک خوبصورت علمی سفر ہے۔ اس میں الٰہی کلام کا لفظی اور با محاورہ ترجمہ، اور معتبر تفاسیر (جیسے ابنِ کثیر اور معارف القرآن) کی روشنی میں آسان تشریح سکھائی جاتی ہے تاکہ روزمرہ زندگی میں اس پر عمل ممکن ہو۔ تمام لائیو کلاسز خصوصی طور پر آڈیو کالز کے ذریعے زوم اور واٹس ایپ پر ہوتی ہیں۔',
    duration: '1 سال (مختلف حصوں میں تقسیم)',
    frequency: 'ہفتے میں 2 دن',
    level: 'All Levels',
    category: 'Quran',
    features: [
      'لفظ بہ لفظ ترجمہ اور عربی ذخیرۂ الفاظ میں اضافہ',
      'منتخب سورتوں کی تفصیلی تفسیر',
      'نزول کی وجوہات (اسبابِ نزول) پر خصوصی توجہ',
      'بنیادی اسلامی عقائد اور اخلاقی اسباق',
      'جدید مسائل پر سوال و جواب اور مباحثہ کے سیشنز'
    ],
    syllabus: [
      'علومِ قرآن اور اصولِ تفسیر کی بنیادیں',
      'تیسویں پارے (عمّ پارہ) کا تفصیلی ترجمہ',
      'سورہ کہف، سورہ یٰسین اور سورہ حجرات کا مطالعہ و ترجمہ',
      'خاندانی اور معاشرتی احکام پر مشتمل آیات کی تفسیر',
      'آخری تھیماتی اسائنمنٹ اور سند کا حصول'
    ],
    iconName: 'Compass'
  },
  {
    id: 'hadith-studies',
    title: 'مطالعۂ حدیثِ نبوی ﷺ',
    arabicTitle: 'دراسة الحديث النبوي',
    shortDesc: 'اخلاق و کردار کی پختگی کے لیے احادیث کے معتبر مجموعوں کا مطالعہ کریں۔',
    longDesc: 'ہمارے پیارے نبی حضرت محمد مصطفیٰ ﷺ کے مبارک ارشادات اور روایات کا گہرا مطالعہ۔ اس کورس میں طالبات کو احادیث کے معتبر مجموعوں، جیسے ریاض الصالحین اور امام نووی کی اربعین (چالیس احادیث) سے منتخب اسباق پڑھائے جاتے ہیں، جن کا مقصد اخلاقِ حسنہ کی تعمیر اور سنتِ نبوی پر عمل ہے۔',
    duration: '6 ماہ',
    frequency: 'ہفتے میں 2 دن',
    level: 'Intermediate',
    category: 'Islamic Studies',
    features: [
      'ریاض الصالحین اور اربعینِ نووی کا تفصیلی مطالعہ',
      'عملی اخلاق، آدابِ زندگی اور تربیت پر توجہ',
      'علمِ حدیث اور اصولِ حدیث کا بنیادی تعارف',
      'اہم اور مختصر مسنون دعاؤں کا حفظ',
      'جدید دور کے مسائل کا احادیث کی روشنی میں حل'
    ],
    syllabus: [
      'سنتِ نبوی اور اسلام میں اس کی حجیت کا تعارف',
      'حدیثِ نیت، ارکانِ اسلام اور احسان کا تفصیلی مطالعہ',
      'والدین کے حقوق، سچائی اور صلہ رحمی کے بارے میں احادیث',
      'اسلامی اخوت، زبان کی حفاظت اور معاشرتی حقوق کی احادیث',
      'سیرت و احادیثِ نبوی کی ترویج پر آخری پریزنٹیشن'
    ],
    iconName: 'Award'
  },
  {
    id: 'fiqh-studies',
    title: 'فقہ اور مسائلِ زندگی',
    arabicTitle: 'الفقه الإسلامي والمسائل',
    shortDesc: 'عبادات، طہارت اور خاص خواتین کے مسائل کے بارے میں فقہی احکام سیکھیں۔',
    longDesc: 'خواتین کے لیے انتہائی ضروری کورس جو اسلامی فقہ (حنفی) کے عملی احکام پر مشتمل ہے۔ استاذہ حبیبہ الیاس کی براہِ راست نگرانی میں ایک نہایت پروقار، نجی اور معتبر ماحول میں طہارت، نماز، روزہ، زکوٰۃ اور خواتین کے مخصوص مسائل (حیض، نفاس، استحاضہ) کے احکام سیکھیں۔',
    duration: '4 ماہ',
    frequency: 'ہفتے میں 2 دن',
    level: 'All Levels',
    category: 'Islamic Studies',
    features: [
      'خواتین کے لیے طہارت (طہارتِ کبریٰ و صغریٰ) کے تفصیلی احکام',
      'نماز اور روزے کے متعلق عملی اور فقہی رہنمائی',
      'خواتین کے مخصوص اور پیچیدہ طبی و فقہی مسائل کا حل',
      'پردہ و حجاب، خاندانی احکام اور بنیادی مالیاتی معاملات کے شرعی اصول',
      'ذاتی اور پرائیویٹ سوالات کے لیے مکمل رازداری پر مبنی سوال و جواب کا نظام'
    ],
    syllabus: [
      'اصولِ فقہ اور شرعی احکام کی بنیادیں',
      'کتاب الطہارت: وضو، غسل اور خواتین کے مخصوص احکام کی تفصیل',
      'کتاب الصلوٰۃ: شرائط، ارکان اور نماز کی عام غلطیوں کی اصلاح',
      'کتاب الصوم (روزہ) اور زکوٰۃ کے شرعی مسائل',
      'جدید دور کے مسائل اور شرعی اصولوں کی روشنی میں ان کے حل'
    ],
    iconName: 'Scale'
  },
  {
    id: 'seerah-studies',
    title: 'سیرت النبی ﷺ',
    arabicTitle: 'السيرة النبوية العطرة',
    shortDesc: 'نبی اکرم ﷺ کی حیاتِ طیبہ اور جدوجہد کا مطالعہ کر کے دلوں میں سچی محبت پیدا کریں۔',
    longDesc: 'نبی کریم حضرت محمد مصطفیٰ ﷺ کی ولادتِ با سعادت سے لے کر وصال تک کے مبارک حالات کا روح پرور مطالعہ۔ ان کے بلند اخلاق، پیاری عادات، امتحانات پر صبر، اور اسلام کی شمع روشن کرنے کے لیے عظیم قربانیوں کا تذکرہ۔ یہ کورس طالبات کے دلوں میں سچی محبت پیدا کرتا ہے اور سنت پر چلنے کا جذبہ ابھارتا ہے۔',
    duration: '4 ماہ',
    frequency: 'ہفتے میں 1 دن',
    level: 'All Levels',
    category: 'Islamic Studies',
    features: [
      'معتبر تاریخی کتب کی روشنی میں رسول اللہ ﷺ کی سیرت کا مطالعہ',
      'ازواجِ مطہرات، اہل بیت اور صحابہ کرام کے ساتھ حسنِ سلوک کا تذکرہ',
      'مکی اور مدنی زندگی میں صبر، رحمت اور حکمت کے اسباق',
      'غزوات، معاہدات اور بڑے واقعات کا نقشہ اور ٹائم لائن',
      'تربیتی کوئز اور سیرتِ پاک سے اخذ کردہ اسباق کی ڈائری'
    ],
    syllabus: [
      'ظہورِ اسلام سے پہلے کا عرب اور ولادتِ با سعادت',
      'اعلانِ نبوت اور مکہ مکرمہ کی ابتدائی جدوجہد و صبر',
      'تاریخی ہجرتِ مدینہ منورہ اور اس کے اسباق',
      'مدینہ منورہ میں اسلامی معاشرے اور ریاست کی تشکیل',
      'حجۃ الوداع اور آپ ﷺ کا آخری پیغام و ابدی میراث'
    ],
    iconName: 'Bookmark'
  },
  {
    id: 'islamic-lifestyle',
    title: 'اسلامی طرزِ زندگی اور تربیت',
    arabicTitle: 'التربية ونمط الحياة الإسلامية',
    shortDesc: 'اخلاق و کردار کی پختگی، مسنون دعاؤں اور بچوں کی اسلامی تربیت سے اپنی روح کو نکھاریں۔',
    longDesc: 'جدید دور کی مسلم خاتون کی ہمہ جہت کردار سازی کے لیے ایک جامع تربیتی کورس۔ یہ نصاب روحانی صفائی (تزکیۂ نفس)، نفسیاتی مضبوطی، مسنون معمولات، گھریلو رشتے، اسلامی طریقے سے بچوں کی تربیت اور آج کے ڈیجیٹل دور میں ایک باوقار اسلامی شناخت برقرار رکھنے کی رہنمائی فراہم کرتا ہے۔',
    duration: '3 ماہ',
    frequency: 'ہفتے میں 1 دن',
    level: 'All Levels',
    category: 'Lifestyle',
    features: [
      'روحانی تربیت اور تزکیۂ نفس (دل کی صفائی)',
      'سوشل میڈیا کے آداب، ڈیجیٹل صحت اور اسکرین ٹائم کا اعتدال',
      'مثالی خاندانی کردار: بطور بیٹی، بیوی اور ماں اپنی ذمہ داریوں کی ادائیگی',
      'خواتین کی ذہنی صحت، ذاتی دیکھ بھال اور حجاب پر فخر و اعتماد',
      'روزمرہ معمولات کا ٹریکر اور اصلاحی مجالس'
    ],
    syllabus: [
      'انسان کی روحانی حقیقت اور دل کی بیماریاں و ان کا علاج',
      'روزمرہ کی سنتیں، صبح و شام کے مسنون اذکار اور بابرکت عادات',
      'خاندانی تعلقات کی مضبوطی اور نامناسب معاشرتی دباؤ سے بچنے کے طریقے',
      'بچوں کی اسلامی تربیت: ان میں تقویٰ اور محبتِ الٰہی پیدا کرنا',
      'حجاب اور اسلامی اقدار پر فخر، خود اعتمادی اور باوقار نمائندگی'
    ],
    iconName: 'UserCheck'
  },
  {
    id: 'sahabah-lives',
    title: 'سیرتِ صحابہ کرام رضي الله عنهم',
    arabicTitle: 'سير الصحابة الكرام رضي الله عنهم',
    shortDesc: 'معتبر اسلامی ذرائع سے صحابہ کرام کی زندگیوں، قربانیوں، ایمان اور بلند اخلاق کا مطالعہ کریں۔',
    longDesc: 'صحابہ کرام رضي الله عنهم کی مثالی زندگیوں، عظیم قربانیوں، پختہ ایمان، شاندار کردار اور اسلام کی اشاعت میں ان کے لازوال کردار کا ایمان افروز مطالعہ۔ یہ کورس طالبات کو صحابہ کرام کی نبی اکرم ﷺ سے سچی محبت اور وفاداری سکھاتا ہے، اور آج کی مسلمہ کے لیے مشعلِ راہ فراہم کرتا ہے۔',
    duration: '4 ماہ',
    frequency: 'ہفتے میں 1 دن',
    level: 'All Levels',
    category: 'Islamic Studies',
    features: [
      'صحابہ کرام رضي الله عنهم کی مبارک زندگیوں کا تفصیلی مطالعہ',
      'ایثار و قربانی، صبر و استقامت اور حقیقی اخوت کے اسباق',
      'کردار سازی (اخلاق) اور اسوۂ صحابہ سے موجودہ دور کے لیے رہنمائی',
      'صحابیات رضي الله عنهن اور امہات المؤمنین کی زندگیوں پر خصوصی توجہ',
      'مستند تاریخی اور اسلامی روایات سے حوالے'
    ],
    syllabus: [
      'قرآن و سنت کی روشنی میں صحابہ کرام کے فضائل و مناقب',
      'خلفائے راشدین کی زندگیاں اور ان کے عظیم کارنامے',
      'عشرہ مبشرہ (جنتی صحابہ) اور ان کے ایمان افروز حالات',
      'نامور صحابیات اور امہات المؤمنین کی ایمان پرور سوانح حیات',
      'روزمرہ زندگی میں صحابہ کے طرزِ عمل اور اقدار کو اپنانے کا طریقہ'
    ],
    iconName: 'Users'
  }
];

export const TESTIMONIALS_UR: Testimonial[] = [
  {
    id: 't1',
    name: 'عائشہ محمود',
    role: 'طالبہ تفسیر اور گھریلو خاتون',
    location: 'برطانیہ',
    quote: 'تفہیم الاسلام اکیڈمی میں شامل ہونا میری زندگی کا بہترین فیصلہ تھا۔ معلمات انتہائی شفیق اور صابر ہیں، اور استاذہ حبیبہ الیاس کے زیرِ سایہ مطالعۂ قرآن نے میرا دل بدل دیا۔ آن لائن کلاسز مصروف ماؤں کے لیے نہایت باعزت، محفوظ اور آسان ہیں۔',
    rating: 5
  },
  {
    id: 't2',
    name: 'ڈاکٹر فاطمہ رضوان',
    role: 'سابقہ طالبہ کورسِ فقہ',
    location: 'امریکہ',
    quote: 'بطور ڈاکٹر، مجھے اپنے مصروف شیڈول کے مطابق علمی گہرائی رکھنے والی اسلامی کلاسز تلاش کرنے میں مشکل پیش آ رہی تھی۔ فقہ اور مسائل کورس نے مجھے جدید اور پیچیدہ معاملات میں حنفی فقہ کے مطابق واضح دلائل فراہم کیے۔ یہ اکیڈمی نہایت منظم، باوقار اور پرسکون ہے۔',
    rating: 5
  },
  {
    id: 't3',
    name: 'زینب طارق',
    role: 'طالبۂ حفظ',
    location: 'پاکستان',
    quote: 'یہاں حفظِ قرآن کا انفرادی طریقہ کار شاندار ہے۔ میری معلمہ پورے دھیان سے میرا سبق سنتی ہیں اور نرمی کے ساتھ میری تجوید کی اصلاح کرتی ہیں۔ ماہانہ ٹیسٹ کی وجہ سے میرا دور بہت پختہ ہو گیا ہے۔ الحمد للہ اس علمی نعمت پر!',
    rating: 5
  },
  {
    id: 't4',
    name: 'مریم الغامدی',
    role: 'طالبہ (اسلامی طرزِ زندگی)',
    location: 'سعودی عرب',
    quote: 'تربیت وہ خاص چیز ہے جو تفہیم الاسلام کو دوسروں سے ممتاز کرتی ہے۔ یہاں صرف معلومات حاصل نہیں ہوتیں بلکہ اخلاق کی تراش خراب کی جاتی ہے۔ مقابلے، کوئز اور اسلامی طرزِ زندگی کی کلاسز میرے لیے گہری تبدیلی کا باعث بنیں۔',
    rating: 5
  }
];

export const FAQS_UR: FAQItem[] = [
  {
    id: 'faq1',
    question: 'کیا یہ اکیڈمی صرف خواتین اور بچیوں کے لیے مخصوص ہے؟',
    answer: 'جی ہاں، تفہیم الاسلام اکیڈمی للبنات مکمل طور پر اور خاص طور پر صرف خواتین اور بچیوں کے لیے وقف ہے۔ ہمارا پورا انتظامیہ، نگران اور معلمات تصدیق شدہ اور انتہائی قابل خواتین عالمات و حفاظ پر مشتمل ہیں، جو ایک پروقار اور محفوظ تعلیمی ماحول فراہم کرتی ہیں۔',
    category: 'Academy'
  },
  {
    id: 'faq2',
    question: 'آن لائن کلاسز کا طریقہ کار کیا ہے اور یہ کیسے ہوتی ہیں؟',
    answer: 'ہماری کلاسز لائیو آن لائن آڈیو کالز کے ذریعے منعقد کی جاتی ہیں۔ یہ کلاسز زوم (Zoom) اور واٹس ایپ گروپس (WhatsApp Groups) پر لائیو آڈیو کالز کی مدد سے لی جاتی ہیں۔ کلاس میں شامل ہونے کے لیے آپ کو صرف تیز رفتار انٹرنیٹ، موبائل فون یا لیپ ٹاپ اور ایک پرسکون جگہ کی ضرورت ہوگی۔',
    category: 'Classes'
  },
  {
    id: 'faq3',
    question: 'استاذہ حبیبہ الیاس کی تعلیمی اسناد اور قابلیت کیا ہے؟',
    answer: 'ہماری قابلِ احترام معلمہ استاذہ حبیبہ الیاس پاکستان کے سب سے بڑے اور معتبر تعلیمی بورڈ وفاق المدارس العربیہ کی ممتاز فاضلہ (عالمہ) اور درسِ نظامی سے تصدیق شدہ اسکالر ہیں۔ ہماری محترم معلمہ نے مستقل طور پر پاکستان کی سطح پر ممتاز پوزیشنز حاصل کی ہیں اور وفاق کے امتحانات میں مسلسل تین سالوں سے ملکی سطح پر پوزیشنز حاصل کر رہی ہیں۔ وہ سالہا سال سے بین الاقوامی سطح پر دنیا بھر کی خواتین اور بچیوں کی علمی و اخلاقی رہنمائی خلوص، معتبریت اور تعلیمی عمدگی کے ساتھ فرما رہی ہیں۔',
    category: 'Academy'
  },
  {
    id: 'faq4',
    question: 'کیا ان کورسز کی کوئی فیس ہے؟',
    answer: 'تفہیم الاسلام اکیڈمی ایک فلاحی اور تربیتی تعلیمی ادارہ ہے۔ ہمارے کچھ کورسز مکمل طور پر بالکل مفت ہیں، اور جہاں ضرورت ہو وہاں گروپ کلاسز بھی بلا معاوضہ فراہم کی جاتی ہیں۔ تاہم، انفرادی (ون ٹو ون / انفرادی) کلاسز پیڈ (Paid) ہیں، اور کچھ خصوصی کورسز کی بھی فیس لی جاتی ہے۔ انفرادی کلاسز فیس کے ساتھ منعقد کی جاتی ہیں تاکہ طالبہ کو مکمل توجہ اور انفرادی رہنمائی فراہم کی جا سکے۔ ہماری تمام لائیو کلاسز زوم اور واٹس ایپ گروپس پر آڈیو کالز کے ذریعے منعقد کی جاتی ہیں۔',
    category: 'Fees'
  },
  {
    id: 'faq5',
    question: 'کیا کلاسز کے اوقات میں لچک اور مختلف ٹائمز دستیاب ہیں؟',
    answer: 'جی ہاں! ہفتہ وار کلاسز ایک طے شدہ شیڈول کے مطابق منعقد کی جاتی ہیں۔ مصروف ماؤں، طالبات اور ملازمت پیشہ خواتین کی سہولت کے لیے صبح سے لے کر شام تک لچکدار اوقات دستیاب ہیں تاکہ وہ اپنے وقت کے مطابق آسانی سے آن لائن آڈیو کلاسز حاصل کر سکیں۔',
    category: 'Classes'
  },
  {
    id: 'faq6',
    question: 'کیا کورس مکمل ہونے پر سرٹیفکیٹ یا اسناد دی جاتی ہیں؟',
    answer: 'جی بالکل۔ کورس کامیابی سے مکمل کرنے، کم از کم 85 فیصد حاضری برقرار رکھنے اور آخری ٹیسٹ (زبانی اور تحریری) پاس کرنے پر طالبات کو تفہیم الاسلام اکیڈمی اور استاذہ حبیبہ الیاس کے دستخط شدہ آفیشل سرٹیفکیٹس دیے جاتے ہیں۔',
    category: 'Admission'
  }
];

export const ACTIVITIES_UR: Activity[] = [
  {
    id: 'act1',
    title: 'سالانہ مقابلۂ حسنِ قرأت',
    desc: 'اکیڈمی کے سطح پر تجوید و ترتیل کا ایک خوبصورت اور روح پرور مقابلہ۔ بین الاقوامی معلمات (حفاظ) اس کی جج ہوتی ہیں اور نمایاں پوزیشن حاصل کرنے والی طالبات میں سنہری شیلڈز اور انعامات تقسیم کیے جاتے ہیں۔',
    category: 'Competition',
    badge: 'رمضان اسپیشل'
  },
  {
    id: 'act2',
    title: 'وفاق المدارس امتحانات میں شاندار کامیابی',
    desc: 'ہماری قابلِ فخر طالبات نے وفاق المدارس العربیہ کے مرکزی امتحانات میں شاندار نمبروں کے ساتھ اعلیٰ ترین پوزیشنز حاصل کیں، جو ان کی علمی پختگی اور گہری محنت کی دلیل ہے۔',
    category: 'Achievement',
    badge: '100% کامیابی'
  },
  {
    id: 'act3',
    title: 'سیرت النبی ﷺ کوئز چیلنج',
    desc: 'حیاتِ طیبہ پر مبنی ایک جدید ترین اور دلچسپ آن لائن کوئز مقابلہ، جس کا مقصد طالبات میں مستند کتبِ سیرت کا مطالعہ کرنے اور سنتِ رسول پر عمل کرنے کا جذبہ پیدا کرنا ہے۔',
    category: 'Competition',
    badge: 'یوتھ اسپیشل'
  },
  {
    id: 'act4',
    title: 'ہفتہ وار تربیتی ویبنارز',
    desc: 'مہمان معلمات کے زیرِ صدارت ہفتہ وار سیمینارز جن میں جدید معاشرتی چیلنجز، ذہنی صحت، سوشل میڈیا کے نقصانات، حجاب کے اعتماد اور خاندانی سکون کے طریقوں پر رہنمائی کی جاتی ہے۔',
    category: 'Webinar',
    badge: 'عوام کے لیے مفت'
  },
  {
    id: 'act5',
    title: 'اسلامی خطاطی اور ڈیزائن کی نمائش',
    desc: 'خواتین کے اندرونی فنکارانہ صلاحیتوں کی حوصلہ افزائی کے لیے عربی خطاطی اور قرآنی آیات کی تصویر کشی پر مشتمل ایک خوبصورت ڈیجیٹل آرٹ نمائش کا انعقاد۔',
    category: 'Activity',
    badge: 'تخلیقی آرٹ'
  }
];

// Flat localization dictionary for static strings
export const DICTIONARY = {
  en: {
    // Brand & Header
    brandName: 'TAFHEEM-UL-ISLAM',
    brandSub: 'Academy Lil Banat',
    joinWhatsApp: 'Join on WhatsApp',
    
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.courses': 'Courses',
    'nav.principal': 'Our Teacher',
    'nav.activities': 'Achievements',
    'nav.faq': 'FAQs',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.badge': 'Sisters Online Islamic Seminary',
    'hero.title': 'Sacred Islamic Knowledge Tailored for Sisters',
    'hero.subtitle': 'Authentic Online Qur\'an and Islamic Education for Women & Girls Worldwide under the supervision of Ustadha Habiba Ilyas. Tajweed and Hifz classes are conducted under the supervision of certified Dars-e-Nizami qualified female teachers (Muallimat), while One-to-One classes are supervised by qualified and certified Islamic scholars.',
    'hero.btnCourses': 'Explore Our Courses',
    'hero.btnEnroll': 'Quick Enrollment',
    'hero.feat1': 'Verified Female Scholars',
    'hero.feat2': 'Under the supervision of Ustadha Habiba Ilyas (Consistent Wifaq Ranker)',
    'hero.feat3': '100% Private Zoom Classrooms for Women',

    // Vision Block
    'vision.badge': 'Our Divine Foundation',
    'vision.title': 'A Pure Online Haven Built for the',
    'vision.titleHighlight': 'Daughters, Wives & Mothers of Islam',
    'vision.desc': 'Tafheem-ul-Islam Academy Lil Banat is a welfare-oriented (Falahi) and educational (Tarbiyati) institute dedicated to providing authentic Islamic education for women and girls. We offer structured, live online classes in pristine Quranic recitation (Tajweed), Hifz, classical Tafseer, Fiqh, and Tarbiyah to girls and women around the globe, ensuring high scholarly authority, deep spiritual nurturing, and complete digital privacy.',
    'vision.btn': 'Read Our Vision & Mission',
    'vision.sidebarTitle': '100% Female Environment',
    'vision.sidebarDesc': 'All class administrators, supervisors, and instructors are qualified female scholars. Live screens, Zoom environments, and communication corridors are structured strictly to ensure maximum modesty and comfort.',

    // Why Choose Us
    'why.badge': 'The Tafheem Standards',
    'why.title': 'Why Sisters Choose Our Academy',
    'why.desc': 'We bridge the gap between classical, authoritative theology and the flexibility of modern digital classes, providing a peaceful, comforting, and rigorous pathway.',

    'why.feat1.title': 'Qualified Alimah Teachers',
    'why.feat1.desc': 'Our female scholars hold formal scholarly degrees (Dars-e-Nizami) from verified institutions, offering direct, authentic lineage of recitation.',
    'why.feat2.title': 'Planned & Flexible Schedules',
    'why.feat2.desc': 'Weekly classes are conducted according to a planned schedule. Flexible timings are available from morning till evening for busy mothers, female students, and working women.',
    'why.feat3.title': 'Structured Tarbiyah Focus',
    'why.feat3.desc': 'We focus heavily on grooming our characters, teaching daily sunnah manners, etiquette, and confidence in implementing Islamic lifestyle rules.',
    'why.feat4.title': 'Student Active Competitions',
    'why.feat4.desc': 'We motivate students through interactive quiz contests, beautiful recitation contests, shields of honor, and certificate awards.',
    'why.feat5.title': 'Welfare-Oriented & Sincere',
    'why.feat5.desc': 'A welfare-oriented educational mission, not a commercial business. We provide free access to deserving, passionate students under financial duress.',
    'why.feat6.title': 'Strict Privacy Safeguards',
    'why.feat6.desc': 'High digital safety parameters where student audio, personal chats, and student camera lines are strictly private and unshared.',

    // Achievements Block
    'ach.badge': 'Glorious Milestones',
    'ach.title': 'Our Blessed Achievements & Journey',
    'ach.desc': 'Through the grace of Allah, our online classes continue to spark spiritual growth, dedication, and academic brilliance across generations of sisters.',
    'ach.item1.val': '8+ Years',
    'ach.item1.label': 'Continuous Tafseer Program',
    'ach.item1.desc': 'An ongoing journey of studying, understanding, and implementing the word of Allah.',
    'ach.item2.val': '24+ Juz',
    'ach.item2.label': 'Successfully Completed',
    'ach.item2.desc': 'Sisters successfully completed the word-by-word Tafseer and translation of the Holy Quran.',
    'ach.item3.val': 'Many Students',
    'ach.item3.label': 'Have Successfully Completed Hifz-ul-Qur\'an',
    'ach.item3.desc': 'Dedicated sisters who have memorized the entire Quran with beautiful and flawless Tajweed.',
    'ach.item4.val': '25+ Courses',
    'ach.item4.label': 'Conducted',
    'ach.item4.desc': 'Extensive Islamic courses ranging from Fiqh, Hadith, to Tarbiyah and character building.',
    'ach.item5.val': 'Global Students',
    'ach.item5.label': 'Online Learning',
    'ach.item5.desc': 'Connecting sisters from multiple international time zones, cities, and countries.',

    // Featured Courses Preview
    'featCourses.badge': 'Beautify Your Recitation',
    'featCourses.title': 'Featured Course Pathways',
    'featCourses.btnAll': 'View All Courses',
    'featCourses.viewSyllabus': 'View Syllabus',

    // About Our Teacher Home
    'teacherHome.badge': 'Scholarly Guidance',
    'teacherHome.title': 'About Our Teacher',
    'teacherHome.desc': 'Our honored and beloved teacher, Ustadha Habiba Ilyas, is a highly qualified Islamic scholar (Alimah), Dars-e-Nizami certified, and a distinguished graduate of Wifaq-ul-Madaris Al-Arabia. Our respected teacher has consistently earned distinguished positions at the Pakistan level and continues to receive national-level positions in Wifaq examinations for three consecutive years. She has been teaching women and girls internationally, guiding students with sincere devotion, authenticity, and academic excellence. Through live online classes, she successfully helps dedicated students worldwide learn the Holy Qur\'an, word-by-word Tafseer, precise Tajweed rules, and authentic, verified Islamic knowledge.',
    'teacherHome.btnBio': 'Read Her Full Credentials & Bio',
    'teacherHome.sidebarTitle': 'National-Level Achievements',
    'teacherHome.sidebarDesc': 'Our respected teacher has consistently earned distinguished positions at the Pakistan level and continues to receive national-level positions in Wifaq examinations for three consecutive years.',

    // Testimonials Home
    'test.badge': 'Voice of the Sisterhood',
    'test.title': 'Trusted by Sisters & Mothers Worldwide',
    'test.desc': 'Real reflections of our current and former students, showing their path to Tajweed mastery and spiritual barakah.',

    // Quick FAQ Home
    'faqHome.badge': 'Quick Answers',
    'faqHome.title': 'Got a quick question?',
    'faqHome.desc': 'Find rapid answers regarding class setups, 1-on-1 private tuition, zoom guidelines, certified female scholars, and admissions.',
    'faqHome.btnAll': 'Browse Full FAQs Page',

    // About Us View page
    'aboutUs.badge': 'Learn Our Heritage',
    'aboutUs.title': 'Nurturing Pure Minds with',
    'aboutUs.titleHighlight': 'Prophetic Guidance & Light',
    'aboutUs.desc': 'Tafheem-ul-Islam Academy Lil Banat was founded to create an online sanctuary where women and girls can learn classical, authentic Islamic sciences with complete confidence, respect, and academic structure. All Tajweed and Hifz classes are conducted under the supervision of certified Dars-e-Nizami qualified female teachers (Muallimat), and our One-to-One classes are also conducted under the supervision of qualified and certified Islamic scholars.',
    'aboutUs.mission': 'Our Noble Mission',
    'aboutUs.missionDesc': 'Our mission is to spread authentic Islamic knowledge among women and girls with sincerity, wisdom, and excellence. The academy focuses on Quran, Tajweed, Hifz, Tafseer, Islamic Tarbiyah, and Character Building, helping sisters around the globe build a deep, meaningful connection with Allah\'s words in their daily lives.',
    'aboutUs.vision': 'Our Divine Vision',
    'aboutUs.visionDesc': 'We envision a world where every Muslimah stands as a confident beacon of light and piety in her home and society. By understanding the direct translation and exegesis (Tafseer) of the Qur\'an and the blessed traditions (Sunnah) of our Beloved Prophet Muhammad ﷺ, we hope to raise a generation of mothers, daughters, and teachers who preserve classical theology with sincere devotion and wisdom.',
    
    // Core Values
    'values.badge': 'The Pillars of our Creed',
    'values.title': 'Our Core Spiritual Values',
    'values.desc': 'At Tafheem-ul-Islam Academy, our operations, curriculum, and interactions are bound by sacred principles that ensure spiritual barakah (blessings).',
    'values.val1.title': 'Spiritual Taqwa (Piety)',
    'values.val1.desc': 'Our primary objective is to nurture sincerity (Ikhlas) and God-consciousness (Taqwa) in our students, ensuring knowledge leads to practical obedience to Allah.',
    'values.val2.title': 'Uncompromising Modesty (Haya)',
    'values.val2.desc': 'An atmosphere built strictly around the Islamic codes of modesty. Supported exclusively by female teachers, with privacy-focused live digital classrooms.',
    'values.val3.title': 'Academic Excellence',
    'values.val3.desc': 'We follow the highest educational standards of Wifaq-ul-Madaris Al-Arabia, utilizing highly detailed syllabi, structured testing, and interactive presentations.',
    'values.val4.title': 'Global Accessibility',
    'values.val4.desc': 'Our welfare-oriented model keeps education affordable and flexible across major timezones (US, UK, Middle East, Pakistan) so no sister is left behind.',

    // Secure Online HighLight page
    'secure.badge': '100% Secure Sisters Haven',
    'secure.title': 'Pioneering Female Digital Privacy Protocols',
    'secure.desc': 'We understand that privacy is the absolute priority for sisters studying online. Tafheem-ul-Islam Academy has developed strict digital protocols to ensure complete peace of mind:',
    'secure.feat1.title': 'Strict Audio Call Privacy',
    'secure.feat1.desc': 'No live recordings of classes or student audio are ever shared publicly or exported, preserving absolute privacy.',
    'secure.feat2.title': 'Strict Privacy Safeguards',
    'secure.feat2.desc': 'All live classes are conducted strictly through audio calls only. There are no video requirements, ensuring perfect modesty and privacy for our sisters.',
    'secure.feat3.title': 'Female-Only Student Pool',
    'secure.feat3.desc': 'Admission registration is strictly vetted. No male students or administrators have access to any sister classes or groups.',
    'secure.feat4.title': 'Confidential Counselling',
    'secure.feat4.desc': 'Personal Fiqh questions or Tarbiyah counselling sessions are handled entirely on secure, encrypted private channels.',

    // About Principal page
    'principal.badge': 'Scholarly Excellence',
    'principal.title': 'About Our Teacher:',
    'principal.titleHighlight': 'Ustadha Habiba Ilyas',
    'principal.intro1': 'Ustadha Habiba Ilyas is an eminent Islamic scholar (Alimah), Dars-e-Nizami certified, specializing in comprehensive female Islamic education. She is a distinguished graduate of Wifaq-ul-Madaris Al-Arabia, the largest and most prestigious Islamic seminary board in Pakistan. Our respected teacher has consistently earned distinguished positions at the Pakistan level and continues to receive national-level positions in Wifaq examinations for three consecutive years.',
    'principal.intro2': 'With a profound commitment to spreading sacred guidance, she has been teaching women and girls internationally, guiding students with sincerity, authenticity, and excellence. Through her structured live online classes, students from different countries worldwide have been empowered to learn the Holy Qur\'an, word-by-word Tafseer, precise Tajweed rules, Prophetic Hadith, and authentic Islamic knowledge in a warm, comforting, and highly professional environment.',
    'principal.quote': '"Our mission is to make sacred Islamic knowledge accessible, gentle, and practical for every daughter of Islam, creating a comforting space where she can beautify her soul and mind."',
    'principal.teacherBadge': 'OUR BELOVED TEACHER',
    'principal.teacherTitle': 'Ustadha Habiba Ilyas',
    'principal.teacherSubtitle': 'National-Level Positions • Dars-e-Nizami Certified • Wifaq-ul-Madaris Al-Arabia Graduate',
    'principal.deg1': 'Degree in classical Shari\'ah Studies',
    'principal.deg2': 'Specialized in Tafseer & Tajweed',
    'principal.deg3': 'Dedicated to welfare-oriented sisters\' education',
    'principal.sanadTitle': 'Authentic and Verified Sanad',
    'principal.sanadDesc': 'Wifaq-ul-Madaris Al-Arabia degree verification is widely regarded as the ultimate hallmark of Islamic scholarship across South Asia and the diaspora, ensuring that your daughters are studying under absolute, certified authority.',

    // Principal credentials
    'principal.cred1.title': 'National-Level Wifaq Positions',
    'principal.cred1.desc': 'Our respected teacher has consistently earned distinguished positions at the Pakistan level and continues to receive national-level positions in Wifaq examinations for three consecutive years.',
    'principal.cred2.title': 'Specialist in Female Jurisprudence (Fiqh-un-Nisa)',
    'principal.cred2.desc': 'Years of specialized research in resolving delicate, physiological, and personal Islamic rulings for sisters in complete confidentiality.',
    'principal.cred3.title': 'Certified Tajweed & Qira\'at Instructor',
    'principal.cred3.desc': 'Holding traditional licenses (Sanad) of narration, ensuring her recitation methods are directly linked to the classical Prophetic traditions.',
    'principal.cred4.title': 'Pioneering Spiritual Mentor (Tarbiyah)',
    'principal.cred4.desc': 'Dedicated her life to helping young girls and women navigate modern identity challenges while maintaining authentic piety and confidence in Hijab.',

    // Courses page
    'courses.badge': 'Select Your Path',
    'courses.title': 'Beautify Your Soul & Recitation',
    'courses.desc': 'Explore our structured theological curricula designed exclusively for Muslim women. From beginner level Tajweed to classical exegesis, we provide a peaceful and thorough educational sanctuary.',
    'courses.searchPlaceholder': 'Search courses (e.g. Fiqh, Quran, Tajweed)...',
    'courses.catAll': 'All Categories',
    'courses.catQuran': 'Quran',
    'courses.catIslamic': 'Islamic Studies',
    'courses.catLifestyle': 'Lifestyle',
    'courses.enrollBtn': 'Enroll in Course',
    'courses.pathwayHeading': 'Program Pathway & Highlights',
    'courses.featHeading': 'Key Features of this Course',
    'courses.syllabusHeading': 'Syllabus & Weekly Lessons',
    'courses.durationLabel': 'Course Duration:',
    'courses.freqLabel': 'Weekly Frequency:',
    'courses.levelLabel': 'Study Level:',
    'courses.catLabel': 'Department:',

    // English Chronicles & Achievements (ActivitiesView)
    'activities.badge': 'Our Chronicles',
    'activities.title': 'Our Activities & Achievements',
    'activities.desc': 'Beyond daily classes, Tafheem-ul-Islam Academy hosts vibrant Quran recitation contests, theological quiz challenges, and celebrates board exam achievements.',
    'activities.btnAll': 'All Records',
    'activities.btnCompetitions': 'Competitions',
    'activities.btnAchievements': 'Achievements',
    'activities.btnWebinars': 'Webinars & Seminars',
    'activities.btnOther': 'Other Activities',

    // FAQ Page (FaqView)
    'faq.badge': 'Frequently Asked Questions',
    'faq.desc': 'Everything you need to know about our virtual classrooms, female scholars, class timings, certificate tracks, and welfare-oriented admissions.',
    'faq.searchPlaceholder': 'Type your question here (e.g. fees, zoom, timings)...',
    'faq.stillQuestion': 'Still have a specific question?',
    'faq.stillQuestionDesc': 'Assalamu Alaikum. If you have any personal questions about class timings, child placement, or need assistance, chat with our sister coordinators on WhatsApp.',
    'faq.btnAdmissions': 'Message Admissions Desk',
    'faq.noFaq': 'No questions match your filter query. Try searching for something else.',

    // Contact Form & Registration (ContactForm)
    'contact.badge': 'Join our Global Sisterhood',
    'contact.title': 'Get In Touch & Request Enrollment',
    'contact.desc': 'Applying is completely free and takes less than two minutes. Once we receive your request, our admissions sister will reach out to you via WhatsApp or Email to schedule your free diagnostic assessment.',
    'contact.emailCard': 'Email Address',
    'contact.phoneCard': 'Phone / WhatsApp',
    'contact.onlineCard': 'Online Classes',
    'contact.onlinePlatforms': 'Via WhatsApp, Zoom and Google Meet',
    'contact.hoursTitle': 'Admissions Support Hours',
    'contact.hoursDesc': 'Our admissions team operates Monday to Saturday from 9:00 AM to 6:00 PM (GMT+5). Since we receive requests from over 20+ countries, please allow up to 24 hours for a personalized response.',
    'contact.success': 'Jazakillahu Khairan!',
    'contact.successDesc': 'Your inquiry has been successfully received by Tafheem-ul-Islam Academy. An admissions sister will contact you shortly on WhatsApp to coordinate your placement interview.',
    'contact.btnAnother': 'Submit another request',
    'contact.lblLabelName': 'Student Name *',
    'contact.lblLabelEmail': 'Email Address *',
    'contact.lblLabelPhone': 'WhatsApp Phone Number *',
    'contact.lblLabelCountry': 'Country of Residence *',
    'contact.lblLabelCourse': 'Desired Course *',
    'contact.lblLabelAge': 'Student Age Group *',
    'contact.lblLabelMessage': 'Message & Prior Quranic Background',
    'contact.placeholderName': 'e.g. Aisha Siddiqua',
    'contact.placeholderEmail': 'e.g. student@example.com',
    'contact.placeholderPhone': 'e.g. +44 7123 456789',
    'contact.placeholderCountry': 'e.g. United Kingdom',
    'contact.placeholderMessage': 'Share any details about your current Quran reading proficiency or questions you may have.',
    'contact.btnSubmit': 'Send Admission Request',
    'contact.btnSubmitting': 'Submitting Request...',
    'contact.ageUnder12': 'Girl (Under 12 years)',
    'contact.age12to18': 'Teen Girl (12 - 18 years)',
    'contact.age18above': 'Woman (18+ years)',

    // WhatsApp widget
    'whatsapp.coordinator': 'Tafheem Coordinator',
    'whatsapp.online': 'Online & Supportive',
    'whatsapp.hello': 'Assalamu Alaikum, Sister! 👋How can we help you learn the Holy Qur\'an & beautiful Tajweed today?',
    'whatsapp.btn': 'Start Live Chat',

    // Footer
    'footer.tagline': 'A sacred, welfare-oriented virtual seminary providing authentic, female-supervised classical Qur\'an and Islamic Jurisprudence studies to daughters, wives, and mothers of Islam worldwide.',
    'footer.academicLinks': 'Academic Links',
    'footer.privacyTitle': 'Modesty & Privacy Guaranty',
    'footer.privacyDesc': 'Tafheem-ul-Islam Academy Lil Banat strictly ensures no visual/audio records of female students are shared, establishing pristine modesty in compliance with the Shari\'ah.',
    'footer.copyright': 'Tafheem-ul-Islam Academy Lil Banat. All rights reserved. A welfare-oriented educational seminary.',

    // Teacher / Principal Profile (English)
    'TEACHER.NAME': 'Ustadha Habiba Ilyas',
    'TEACHER.TITLE': 'Founder & Principal',
    'teacher.name': 'Ustadha Habiba Ilyas',
    'teacher.title': 'Founder & Principal',
    'teacher.sub': 'Founder & Principal',
    'teacher.sidebarTitle': 'OUR BELOVED TEACHER',
    'teacher.sidebarSubtitle': 'Founder & Principal',
    'teacher.badge': 'Scholarly Excellence',
    'teacher.bioParagraph1': 'Ustadha Habiba Ilyas is a highly qualified Islamic scholar (Alimah), Dars-e-Nizami certified, specializing in comprehensive female Islamic education. She is a distinguished graduate of Wifaq-ul-Madaris Al-Arabia, the largest and most prestigious Islamic seminary board in Pakistan. Our respected teacher has consistently earned distinguished positions at the Pakistan level and continues to receive national-level positions in Wifaq examinations for three consecutive years.',
    'teacher.bioParagraph2': 'She teaches Quran, Tajweed, Hifz, Tafseer, Hadith, Fiqh and Islamic Studies to women and girls worldwide through online classes with dedication, sincerity and excellence.',
    'teacher.sidebarBullet1': 'Wifaq-ul-Madaris Graduate',
    'teacher.sidebarBullet2': 'Consistent Pakistan-Level Positions',
    'teacher.sidebarBullet3': 'International Online Islamic Educator',
    'teacher.quote': 'Our mission is to make sacred Islamic knowledge accessible, gentle, and practical for every daughter of Islam, creating a comforting space where she can beautify her soul and mind.',
    'teacher.trustTitle': 'Authentic and Verified Sanad',
    'teacher.trustDesc': 'Wifaq-ul-Madaris Al-Arabia degree verification is widely regarded as the ultimate hallmark of Islamic scholarship across South Asia and the diaspora, ensuring that your daughters are studying under absolute, certified authority.',

    // Credentials
    'credentials.cred1.title': 'Wifaq-ul-Madaris Graduate',
    'credentials.cred1.desc': 'Achieved master\'s equivalency (Alimah) in Islamic & Shariah Studies with highest honors.',
    'credentials.cred2.title': 'National-Level Wifaq Positions',
    'credentials.cred2.desc': 'Our respected teacher has consistently earned distinguished positions at the Pakistan level and continues to receive national-level positions in Wifaq examinations for three consecutive years.',
    'credentials.cred3.title': 'International Online Islamic Educator',
    'credentials.cred3.desc': 'Years of expertise in teaching Arabic, Tajweed, and classical Islamic texts through live virtual portals.',
    'credentials.cred4.title': 'Teaching Women & Girls Worldwide',
    'credentials.cred4.desc': 'Grooming student characters (Tarbiyah) and resolving personal Islamic jurisprudence in complete confidentiality.',

    // Admission Form Page (English)
    'nav.admission': 'Apply Now',
    'admission.badge': 'Online Admissions',
    'admission.title': 'Apply for Admission',
    'admission.desc': 'Start your spiritual & intellectual journey today. Complete this form to secure your seat. Our coordinator will contact you via WhatsApp or Email.',
    'admission.studentName': 'Student Full Name *',
    'admission.parentName': 'Parent/Guardian Name *',
    'admission.age': 'Age *',
    'admission.country': 'Country *',
    'admission.city': 'City *',
    'admission.whatsapp': 'WhatsApp Number *',
    'admission.email': 'Email Address *',
    'admission.selectCourse': 'Select Course *',
    'admission.timing': 'Preferred Class Timing *',
    'admission.message': 'Additional Message (Optional)',
    'admission.submit': 'Submit Admission Request',
    'admission.submitting': 'Submitting Application...',
    'admission.successTitle': 'JazakAllahu Khair!',
    'admission.successMessage': 'JazakAllahu Khair! Your admission request has been received successfully. We will contact you soon via WhatsApp or Email, In Sha Allah.',

    // Course List
    'course.quranTajweed': 'Qur\'an Reading with Tajweed',
    'course.nazraTajweed': 'Nazra Quran with Tajweed',
    'course.nooraniQaida': 'Noorani Qaida',
    'course.hifz': 'Hifz-ul-Qur\'an (Memorization)',
    'course.tafseer': 'Tafseer & Translation of Qur\'an',
    'course.tarjuma': 'Translation of Qur\'an',
    'course.hadith': 'Hadith Studies (Sayings of the Prophet ﷺ)',
    'course.fiqh': 'Fiqh & Masail (Islamic Jurisprudence)',
    'course.seerat': 'Seerah-tun-Nabi ﷺ (Prophetic Biography)',
    'course.sahaba': 'Lives of the Noble Companions (Sahabah رضي الله عنهم)',
    'course.other': 'Other',

    'courses.course1.title': 'Qur\'an Reading with Tajweed',
    'courses.course2.title': 'Hifz-ul-Qur\'an (Memorization)',
    'courses.course3.title': 'Tafseer & Translation of Qur\'an',
    'courses.course4.title': 'Hadith Studies',
    'courses.course5.title': 'Fiqh & Masail (Jurisprudence)',
    'courses.course6.title': 'Seerah-tun-Nabi ﷺ',
    'courses.course7.title': 'Islamic Lifestyle & Tarbiyah',
    'courses.course8.title': 'Nazra Quran with Tajweed'
  },
  ur: {
    // Brand & Header
    brandName: 'تفہیم الاسلام',
    brandSub: 'اکیڈمی للبنات',
    joinWhatsApp: 'واٹس ایپ پر شامل ہوں',
    
    // Navigation
    'nav.home': 'ہوم',
    'nav.about': 'ہمارے بارے میں',
    'nav.courses': 'کورسز',
    'nav.principal': 'ہماری معلمہ',
    'nav.activities': 'اعزازات',
    'nav.faq': 'سوالات',
    'nav.contact': 'رابطہ',

    // Hero Section
    'hero.badge': 'خواتین کا آن لائن علمی مرکز',
    'hero.title': 'خواتین اور بچیوں کے لیے مستند دینی علوم',
    'hero.subtitle': 'استاذہ حبیبہ الیاس کے زیرِ نگرانی دنیا بھر کی خواتین اور بچیوں کے لیے آن لائن لائیو کلاسز۔ تجوید اور حفظ کلاسز مستند اور درسِ نظامی عالمہ معلمات کی زیرِ نگرانی آڈیو کالز پر، جبکہ انفرادی ون ٹو ون کلاسز مستند اساتذہ کی زیرِ نگرانی ہوتی ہیں۔',
    'hero.btnCourses': 'ہمارے کورسز دیکھیے',
    'hero.btnEnroll': 'فوری داخلہ',
    'hero.feat1': 'مستند خواتین معلمات',
    'hero.feat2': 'استاذہ حبیبہ الیاس (مستقل پوزیشن ہولڈر) کی زیرِ نگرانی',
    'hero.feat3': 'خواتین کے لیے 100% پرائیویٹ زوم کلاس رومز',

    // Vision Block
    'vision.badge': 'ہماری دینی اساس',
    'vision.title': 'اسلام کی بیٹیوں، ماؤں اور بہنوں کے لیے',
    'vision.titleHighlight': 'ایک پاکیزہ آن لائن علمی پناہ گاہ',
    'vision.desc': 'تفہیم الاسلام اکیڈمی للبنات ایک فلاحی اور تعلیمی و تربیتی مشن ہے۔ ہم دنیا بھر کی خواتین اور بچیوں کے لیے تجوید القرآن، حفظ، تفسیر، فقہ اور تربیتی کلاسز کا اہتمام کرتے ہیں، جس میں علمی معیار، روحانی تربیت اور مکمل رازداری کو یقینی بنایا جاتا ہے۔',
    'vision.btn': 'ہمارا وژن اور مشن پڑھیے',
    'vision.sidebarTitle': '100% خواتین کا ماحول',
    'vision.sidebarDesc': 'تمام انتظامیہ اور معلمات مستند خواتین عالمات پر مشتمل ہیں۔ زوم کلاسز اور مواصلاتی ذرائع مکمل پردے اور رازداری کے اصولوں کے مطابق ہیں۔',

    // Why Choose Us
    'why.badge': 'تفہیم کے معیارات',
    'why.title': 'بہنیں ہمارے ادارے کا انتخاب کیوں کرتی ہیں؟',
    'why.desc': 'ہم مستند دینی علوم اور جدید ڈیجیٹل دور کے تقاضوں کے درمیان ایک بہترین پل ہیں، جو ایک پرسکون، آسان اور باقاعدہ تعلیمی راستہ فراہم کرتا ہے۔',

    'why.feat1.title': 'مستند عالمہ معلمات',
    'why.feat1.desc': 'ہماری معلمات تصدیق شدہ اداروں سے درسِ نظامی کی سند یافتہ ہیں، جو تجوید و قرأت کی مستند مہارت رکھتی ہیں۔',
    'why.feat2.title': 'انفرادی کلاسز کے اوقات میں لچک',
    'why.feat2.desc': 'مصروف ماؤں، طالبات اور بچوں کی سہولت کے لیے صبح اور شام کے مختلف اوقات دستیاب ہیں۔',
    'why.feat3.title': 'اخلاقی تربیت پر خصوصی توجہ',
    'why.feat3.desc': 'ہم سیرت و کردار سازی، مسنون آداب اور روزمرہ زندگی میں اسلامی تعلیمات پر اعتماد کے ساتھ عمل کرنے پر خصوصی زور دیتے ہیں۔',
    'why.feat4.title': 'ہم نصابی سرگرمیاں اور مقابلے',
    'why.feat4.desc': 'ہم طالبات کی حوصلہ افزائی کے لیے کوئز مقابلوں، حسنِ قرأت کے مقابلوں، اسناد اور انعامات کا اہتمام کرتے ہیں۔',
    'why.feat5.title': 'فلاحی اور مخلصانہ تعلیمی مشن',
    'why.feat5.desc': 'یہ ایک فلاحی اور تربیتی تعلیمی مشن ہے، کوئی کاروباری مقصد نہیں۔ ہم مستحق اور پرعزم طالبات کو تعلیمی سہولیات فراہم کرتے ہیں۔',
    'why.feat6.title': 'رازداری کے سخت ترین اقدامات',
    'why.feat6.desc': 'ڈیجیٹل حفاظت کے اعلیٰ ترین اقدامات جہاں طالبات کے آڈیو، ذاتی چیٹس اور کیمرے مکمل طور پر محفوظ اور نجی رہتے ہیں۔',

    // Achievements Block
    'ach.badge': 'شاندار سنگِ میل',
    'ach.title': 'ہمارا برکتوں بھرا سفر اور شاندار کامیابیاں',
    'ach.desc': 'اللہ تعالیٰ کے فضل و کرم سے، ہماری آن لائن کلاسز بہنوں کی مختلف نسلوں میں روحانی ترقی اور تعلیمی پختگی پیدا کر رہی ہیں۔',
    'ach.item1.val': '8+ سال',
    'ach.item1.label': 'مسلسل دورۂ تفسیر',
    'ach.item1.desc': 'اللہ کے کلام کو پڑھنے، سمجھنے اور اس پر عمل کرنے کا ایک خوبصورت سفر۔',
    'ach.item2.val': '24+ پارہ جات',
    'ach.item2.label': 'تکمیل شدہ ترجمہ و تفسیر',
    'ach.item2.desc': 'طالبات نے قرآن پاک کا لفظ بہ لفظ ترجمہ و تفسیر کامیابی سے مکمل کر لیا ہے۔',
    'ach.item3.val': 'کئی طالبات',
    'ach.item3.label': 'تکمیلِ حفظِ قرآن مجید',
    'ach.item3.desc': 'بہت سی باہمت بہنوں نے خوبصورت تجوید کے ساتھ مکمل قرآنِ پاک حفظ کرنے کی سعادت حاصل کی ہے۔',
    'ach.item4.val': '25+ کورسز',
    'ach.item4.label': 'منعقد کردہ کلاسز',
    'ach.item4.desc': 'فقہ، حدیث، تفسیر، تجوید اور اخلاقی تربیت پر مشتمل درجنوں خصوصی کورسز۔',
    'ach.item5.val': 'عالمی طالبات',
    'ach.item5.label': 'آن لائن تعلیمی نظام',
    'ach.item5.desc': 'مختلف ممالک اور ٹائم زونز کی خواتین کو آپس میں جوڑنے والا ایک پرامن اسلامی مرکز۔',

    // Featured Courses Preview
    'featCourses.badge': 'خوبصورت تلاوت',
    'featCourses.title': 'ہمارے خصوصی کورسز کے راستے',
    'featCourses.btnAll': 'تمام کورسز دیکھیے',
    'featCourses.viewSyllabus': 'تفصیلی سلیبس دیکھیے',

    // About Our Teacher Home
    'teacherHome.badge': 'علمی سرپرستی',
    'teacherHome.title': 'ہماری معلمہ کے بارے میں',
    'teacherHome.desc': 'ہماری محترم اور پیاری معلمہ، استاذہ حبیبہ الیاس، ایک اعلیٰ تعلیم یافتہ اسلامی اسکالر (عالمہ) اور درسِ نظامی سے فارغ التحصیل ہیں۔ ہماری محترم معلمہ نے مستقل طور پر پاکستان کی سطح پر ممتاز پوزیشنز حاصل کی ہیں اور وفاق کے امتحانات میں مسلسل تین سالوں سے ملکی سطح پر پوزیشنز حاصل کر رہی ہیں۔ وہ سالہا سال سے بین الاقوامی سطح پر آن لائن کلاسز کے ذریعے خواتین کو قرآن، لفظ بہ لفظ تفسیر، تجوید اور مستند اسلامی علوم انتہائی محبت اور خلوص کے ساتھ سکھا رہی ہیں۔',
    'teacherHome.btnBio': 'ان کی مکمل اسناد اور سوانح پڑھیے',
    'teacherHome.sidebarTitle': 'قومی سطح کے اعزازات',
    'teacherHome.sidebarDesc': 'ہماری محترم معلمہ نے مستقل طور پر پاکستان کی سطح پر ممتاز پوزیشنز حاصل کی ہیں اور وفاق کے امتحانات میں مسلسل تین سالوں سے ملکی سطح پر پوزیشنز حاصل کر رہی ہیں۔',

    // Testimonials Home
    'test.badge': 'طالبات کے تأثرات',
    'test.title': 'دنیا بھر کی ماؤں اور بہنوں کا اعتماد',
    'test.desc': 'ہماری موجودہ اور سابقہ طالبات کے حقیقی تأثرات، جو ان کے علمی سفر کی گواہی دیتے ہیں۔',

    // Quick FAQ Home
    'faqHome.badge': 'فوری جوابات',
    'faqHome.title': 'کوئی سوال پوچھنا ہے؟',
    'faqHome.desc': 'کلاسز کے انعقاد، نجی کلاسز، زوم گائیڈ لائنز، معلمات کی اسناد اور داخلوں کے بارے میں فوری معلومات حاصل کریں۔',
    'faqHome.btnAll': 'مکمل سوالات کا صفحہ دیکھیے',

    // About Us View page
    'aboutUs.badge': 'ہمارا علمی ورثہ',
    'aboutUs.title': 'خالص دل و دماغ کی پرورش',
    'aboutUs.titleHighlight': 'نبوی ہدایت اور روشنی کے ساتھ',
    'aboutUs.desc': 'تفہیم الاسلام اکیڈمی للبنات کی بنیاد ایک واحد اور واضح مقصد کے ساتھ رکھی گئی تھی: ایک ایسی آن لائن پناہ گاہ فراہم کرنا جہاں خواتین اور بچیاں مکمل تحفظ، احترام اور علمی باقاعدگی کے ساتھ مستند اسلامی علوم سیکھ سکیں۔ تمام تجوید اور حفظ کلاسز مستند درسِ نظامی عالمہ معلمات کی نگرانی میں ہوتی ہیں، اور انفرادی (ون ٹو ون) کلاسز بھی مستند شیوخ کی نگرانی میں ہوتی ہیں۔',
    'aboutUs.mission': 'ہمارا عظیم مشن',
    'aboutUs.missionDesc': 'ہمارا مشن مسلم خواتین اور بچیوں کو باقاعدہ، آسان اور اعلیٰ معیار کی روایتی اسلامی تعلیم فراہم کرنا ہے۔ ہمارا مقصد روزمرہ کے شرعی مسائل واضح کرنا، خوبصورت تجوید کے ساتھ تلاوت سکھانا اور بہنوں کو تزکیۂ نفس اور پُراعتداد اسلامی طرزِ زندگی کی طرف لانا ہے، جو کہ بدعات و رسومات سے پاک ہو۔',
    'aboutUs.vision': 'ہمارا بلند وژن',
    'aboutUs.visionDesc': 'ہم ایک ایسے معاشرے کا خواب دیکھتے ہیں جہاں ہر مسلم خاتون اپنے گھر اور معاشرے میں تقویٰ اور علم کی روشن شمع بن کر کھڑی ہو۔ قرآنِ پاک کے با محاورہ ترجمہ، تفسیر اور رسولِ کریم ﷺ کی مبارک سنتوں کو سمجھ کر، ہم ایسی ماؤں، بیٹیوں اور معلمات کی تربیت کرنا چاہتے ہیں جو خلوص اور دانائی کے ساتھ سچے دین کا تحفظ کریں۔',

    // Core Values
    'values.badge': 'ہماری دعوت کے ارکان',
    'values.title': 'ہماری بنیادی روحانی اقدار',
    'values.desc': 'تفہیم الاسلام اکیڈمی میں ہمارے تمام معاملات، نصاب اور تدریس مبارک شرعی اصولوں کے پابند ہیں جو تعلیمی برکت کو یقینی بناتے ہیں۔',
    'values.val1.title': 'تقویٰ اور اخلاص',
    'values.val1.desc': 'ہمارا اولین مقصد طالبات میں اخلاص اور خوفِ خدا پیدا کرنا ہے، تاکہ ان کا علم عملی طور پر اللہ کی اطاعت کا ذریعہ بنے۔',
    'values.val2.title': 'حیا اور شرعی پردہ',
    'values.val2.desc': 'ایک ایسا تعلیمی ماحول جو مکمل طور پر اسلامی حیا کے سانچے میں ڈھلا ہو۔ صرف معلمات کی تدریس اور رازداری سے بھرپور ڈیجیٹل کلاس رومز۔',
    'values.val3.title': 'اعلیٰ تعلیمی معیار',
    'values.val3.desc': 'ہم وفاق المدارس العربیہ کے اعلیٰ تعلیمی معیار کی پیروی کرتے ہیں، جس میں تفصیلی نصاب، باقاعدہ امتحانات اور انٹرایکٹو تدریس شامل ہے۔',
    'values.val4.title': 'پوری دنیا تک رسائی',
    'values.val4.desc': 'ہمارا فلاحی نظام تعلیم کو سستا رکھتا ہے اور مختلف ممالک (امریکہ، برطانیہ، مشرقِ وسطیٰ، پاکستان) کے ٹائم زونز کے مطابق لچک فراہم کرتا ہے تاکہ کوئی بہن پیچھے نہ رہے۔',

    // Secure Online HighLight page
    'secure.badge': 'خواتین کے لیے 100% محفوظ علمی مرکز',
    'secure.title': 'خواتین کی ڈیجیٹل پرائیویسی اور رازداری کا نظام',
    'secure.desc': 'ہم سمجھتے ہیں کہ آن لائن پڑھنے والی بہنوں کے لیے پردہ اور پرائیویسی سب سے پہلی ترجیح ہے۔ تفہیم الاسلام اکیڈمی نے اس کے لیے سخت ترین ڈیجیٹل اصول وضع کیے ہیں:',
    'secure.feat1.title': 'کلاس ویڈیوز کا عام نہ کرنا',
    'secure.feat1.desc': 'کلاسز کی ایسی کوئی ریکارڈنگز جن میں طالبات کی آوازیں یا کوئی اسکرینز شامل ہوں، کبھی بھی پبلک یا شیئر نہیں کی جاتیں۔',
    'secure.feat2.title': 'کیمرے کے سخت اصول',
    'secure.feat2.desc': 'طالبات کے لیے کیمرہ کھولنا اختیاری ہے اور تجوید کی اصلاح کے دوران صرف بوقتِ ضرورت استانی کے سامنے ہی لایا جاتا ہے۔',
    'secure.feat3.title': 'صرف خواتین طالبات',
    'secure.feat3.desc': 'داخلے کی رجسٹریشن کی سخت جانچ کی جاتی ہے۔ کسی بھی مرد طالب علم یا منتظم کو بہنوں کے پورٹلز تک رسائی حاصل نہیں ہے۔',
    'secure.feat4.title': 'مکمل رازداری میں مشاورت',
    'secure.feat4.desc': 'طالبات کے ذاتی فقہی مسائل یا اخلاقی تربیت کی رہنمائی مکمل طور پر محفوظ اور نجی ذرائع سے طے کی جاتی ہے۔',

    // About Principal page
    'principal.badge': 'علمی و تعلیمی کمال',
    'principal.title': 'ہماری معلمہ کا تعارف:',
    'principal.titleHighlight': 'استاذہ حبیبہ الیاس',
    'principal.intro1': 'استاذہ حبیبہ الیاس ایک ممتاز پاکستانی اسلامی اسکالر (عالمہ) ہیں جو خواتین کی جامع دینی تعلیم و تربیت کی ماہر ہیں۔ وہ پاکستان کے سب سے بڑے اور باوقار اسلامی تعلیمی بورڈ وفاق المدارس العربیہ کی ممتاز فاضلہ ہیں۔ ہماری محترم معلمہ نے مستقل طور پر پاکستان کی سطح پر ممتاز پوزیشنز حاصل کی ہیں اور وفاق کے امتحانات میں مسلسل تین سالوں سے ملکی سطح پر پوزیشنز حاصل کر رہی ہیں۔',
    'principal.intro2': 'دین کی خدمت کے مخلصانہ جذبے کے تحت، وہ انٹرنیشنل لیول پر آن لائن لائیو کلاسز کے ذریعے طالبات کو پڑھا رہی ہیں۔ ان کے دلفریب اور شفیق اندازِ تدریس سے مختلف ممالک کی خواتین اور بچیوں کو قرآنِ پاک، لفظ بہ لفظ تفسیر، تجوید کے قواعد، احادیثِ مبارکہ اور مستند اسلامی علوم سیکھنے کا موقع مل رہا ہے۔ ان کی علمی نگرانی میں اکیڈمی روحانی ترقی اور دینی اعتماد کا ایک خوبصورت مرکز ہے۔',
    'principal.quote': '"ہمارا مشن سچی اسلامی تعلیمات کو ہر مسلمان خاتون کے لیے آسان, شفیق اور عملی بنانا ہے، اور ایک ایسا پرسکون ماحول دینا ہے جہاں وہ اپنے دل اور روح کو سنوار سکے۔"',
    'principal.teacherBadge': 'ہماری پیاری معلمہ',
    'principal.teacherTitle': 'استاذہ حبیبہ الیاس',
    'principal.teacherSubtitle': 'قومی سطح پر ممتاز پوزیشنز • وفاق المدارس العربیہ کی ممتاز فاضلہ',
    'principal.deg1': 'درسِ نظامی و علومِ شریعہ کی مستند سند',
    'principal.deg2': 'تفسیر اور علمِ تجوید میں خاص مہارت',
    'principal.deg3': 'خواتین کی فلاحی اور تربیتی تعلیم کے لیے وقف',
    'principal.sanadTitle': 'مستند اور تصدیق شدہ اسناد',
    'principal.sanadDesc': 'وفاق المدارس العربیہ کی اسناد کو پورے جنوبی ایسیاء اور بیرونِ ملک اسلامی علم و تحقیق کا سب سے بڑا معیار مانا جاتا ہے، جو اس بات کی تسلی دیتا ہے کہ آپ کی بیٹیاں مکمل طور پر مستند اور تصدیق شدہ علم حاصل کر رہی ہیں۔',

    // Principal credentials
    'principal.cred1.title': 'قومی سطح پر ممتاز پوزیشنز',
    'principal.cred1.desc': 'ہماری محترم معلمہ نے مستقل طور پر پاکستان کی سطح پر ممتاز پوزیشنز حاصل کی ہیں اور وفاق کے امتحانات میں مسلسل تین سالوں سے ملکی سطح پر پوزیشنز حاصل کر رہی ہیں۔',
    'principal.cred2.title': 'فقہ النساء میں خصوصی مہارت',
    'principal.cred2.desc': 'خواتین کے روزمرہ اور مخصوص مسائل کو مکمل شرعی رازداری اور علمی امانت کے ساتھ حل کرنے کا وسیع تجربہ۔',
    'principal.cred3.title': 'تجوید و قراءت کی مستند معلمہ',
    'principal.cred3.desc': 'تلاوتِ قرآن مجید کی ایسی اسناد جو آپ کے پڑھنے کے طریقے کو براہِ راست نبوی اور کلاسیکی روایت سے جوڑتی ہیں۔',
    'principal.cred4.title': 'کردار سازی اور اخلاقی تربیت',
    'principal.cred4.desc': 'نوجوان بچیوں اور خواتین کو عصرِ حاضر کے فکری چیلنجز کا سامنا کرنے اور پر اعتماد حجاب کے ساتھ جینے کے قابل بنانا۔',

    // Courses page (Urdu)
    'courses.badge': 'اپنا تعلیمی راستہ چنیں',
    'courses.title': 'اپنے دل اور تلاوت کو سنواریں',
    'courses.desc': 'مسلم خواتین کے لیے خاص طور پر تیار کردہ ہمارے باقاعدہ دینی نصاب کا مطالعہ کریں۔ تجوید سے لے کر مستند تفسیر تک، ہم ایک محفوظ اور پرسکون علمی ماحول فراہم کرتے ہیں۔',
    'courses.searchPlaceholder': 'کورسز تلاش کریں...',
    'courses.catAll': 'تمام زمرے',
    'courses.catQuran': 'قرآن مجید',
    'courses.catIslamic': 'اسلامی علوم',
    'courses.catLifestyle': 'طرزِ زندگی',
    'courses.enrollBtn': 'کورس میں داخلہ لیں',
    'courses.pathwayHeading': 'پروگرام کا تفصیلی نصاب اور خاکہ',
    'courses.featHeading': 'اس کورس کی بنیادی خصوصیات',
    'courses.syllabusHeading': 'ہفتہ وار تعلیمی نصاب کی تفصیل',
    'courses.durationLabel': 'کورس کا دورانیہ:',
    'courses.freqLabel': 'ہفتہ وار کلاسز:',
    'courses.levelLabel': 'علمی معیار:',
    'courses.catLabel': 'تعلیمی شعبہ:',

    // Activities page (Urdu)
    'activities.badge': 'تحریری تاریخ',
    'activities.title': 'ہماری سرگرمیاں اور اعزازات',
    'activities.desc': 'روزمرہ کی کلاسز کے علاوہ، تفہیم الاسلام اکیڈمی حسنِ تلاوت کے مقابلوں، علمی چیلنجز اور امتحانات میں شاندار کامیابیوں کا اہتمام کرتی ہے۔',
    'activities.btnAll': 'تمام ریکارڈز',
    'activities.btnCompetitions': 'علمی مقابلے',
    'activities.btnAchievements': 'کامیابیاں',
    'activities.btnWebinars': 'ویبنارز اور سیمینارز',
    'activities.btnOther': 'دیگر سرگرمیاں',

    // FAQ page (Urdu)
    'faq.badge': 'کثرت سے پوچھے گئے سوالات',
    'faq.desc': 'کلاس رومز، خواتین عالمات، کلاس کے اوقات، اسناد کے حصول اور فلاحی داخلوں کے بارے میں تفصیلی معلومات۔',
    'faq.searchPlaceholder': 'اپنا سوال یہاں ٹائپ کریں (مثلاً فیس، زوم، اوقات)...',
    'faq.stillQuestion': 'کیا آپ کا کوئی مخصوص سوال ہے؟',
    'faq.stillQuestionDesc': 'السلام علیکم۔ اگر آپ کا کلاس کے اوقات، فیسوں، بچوں کے داخلوں یا کسی اور بارے میں ذاتی سوال ہے، تو واٹس ایپ پر رابطہ کریں۔',
    'faq.btnAdmissions': 'داخلہ ڈیسک سے رابطہ کریں',
    'faq.noFaq': 'آپ کی تلاش کے مطابق کوئی سوال نہیں ملا۔ کچھ اور تلاش کریں۔',

    // Contact page (Urdu)
    'contact.badge': 'ہماری عالمی بہنوں میں شامل ہوں',
    'contact.title': 'ہم سے رابطہ کریں اور داخلہ لیں',
    'contact.desc': 'داخلہ کی درخواست جمع کروانا بالکل مفت ہے اور اس میں دو منٹ سے بھی کم وقت لگتا ہے۔ آپ کی درخواست موصول ہونے کے بعد ہماری کوآرڈینیٹر رابطہ کریں گی۔',
    'contact.emailCard': 'ای میل ایڈریس',
    'contact.phoneCard': 'فون / واٹس ایپ',
    'contact.onlineCard': 'آن لائن کلاسز',
    'contact.onlinePlatforms': 'بذریعہ واٹس ایپ، زوم اور گوگل میٹ',
    'contact.hoursTitle': 'رابطہ کے اوقات',
    'contact.hoursDesc': 'ہماری ٹیم پیر سے ہفتہ صبح 9:00 بجے سے شام 6:00 بجے تک دستیاب رہتی ہے۔ چونکہ ہمیں دنیا بھر سے درخواستیں موصول ہوتی ہیں، اس لیے جواب کے لیے 24 گھنٹے تک کا وقت دیں۔',
    'contact.success': 'جزاک اللہ خیراً!',
    'contact.successDesc': 'آپ کی درخواست تفہیم الاسلام اکیڈمی کو موصول ہو گئی ہے۔ ہماری کوآرڈینیٹر انٹرویو اور تفصیلات کے لیے جلد ہی واٹس ایپ پر رابطہ کریں گی۔',
    'contact.btnAnother': 'ایک اور درخواست جمع کروائیں',
    'contact.lblLabelName': 'طالبہ کا نام *',
    'contact.lblLabelEmail': 'ای میل ایڈریس *',
    'contact.lblLabelPhone': 'واٹس ایپ فون نمبر *',
    'contact.lblLabelCountry': 'رہائشی ملک *',
    'contact.lblLabelCourse': 'مطلوبہ کورس *',
    'contact.lblLabelAge': 'عمر کا گروپ *',
    'contact.lblLabelMessage': 'پیغام اور سابقہ قرآنی تعلیم کا پس منظر',
    'contact.placeholderName': 'مثلاً عائشہ صدیقہ',
    'contact.placeholderEmail': 'مثلاً student@example.com',
    'contact.placeholderPhone': 'مثلاً +92 300 1234567',
    'contact.placeholderCountry': 'مثلاً پاکستان',
    'contact.placeholderMessage': 'قرآنِ پاک پڑھنے کی موجودہ صلاحیت یا کسی اور سوال کے بارے میں تفصیلات شیئر کریں۔',
    'contact.btnSubmit': 'داخلہ کی درخواست بھیجیں',
    'contact.btnSubmitting': 'درخواست بھیجی جا رہی ہے...',
    'contact.ageUnder12': 'بچی (عمر 12 سال سے کم)',
    'contact.age12to18': 'نوجوان لڑکی (عمر 12 سے 18 سال)',
    'contact.age18above': 'خاتون (عمر 18 سال سے زائد)',

    // WhatsApp widget (Urdu)
    'whatsapp.coordinator': 'تفہیم کوآرڈینیٹر',
    'whatsapp.online': 'آن لائن اور معاون',
    'whatsapp.hello': 'السلام علیکم بہن! ہم تجوید القرآن اور مستند اسلامی علوم سیکھنے میں آپ کی کیا مدد کر سکتے ہیں؟',
    'whatsapp.btn': 'لائیو چیٹ شروع کریں',

    // Footer (Urdu)
    'footer.tagline': 'ایک پاکیزہ، فلاحی اور تربیتی آن لائن علمی ادارہ جو دنیا بھر کی مسلم خواتین، بیٹیوں اور ماؤں کو مستند دینی علوم اور فقہی مسائل کی تعلیم فراہم کرتا ہے۔',
    'footer.academicLinks': 'تعلیمی لنکس',
    'footer.privacyTitle': 'حیا اور رازداری کی ضمانت',
    'footer.privacyDesc': 'تفہیم الاسلام اکیڈمی للبنات طالبات کی آڈیو، ویڈیو اور ذاتی معلومات کے تحفظ اور حیا کے شرعی قوانین کی پاسداری کی مکمل ضمانت دیتی ہے۔',
    'footer.copyright': 'تفہیم الاسلام اکیڈمی للبنات۔ جملہ حقوق محفوظ ہیں۔ ایک فلاحی و تربیتی تعلیمی مشن۔',

    // Teacher profile (Urdu)
    'TEACHER.NAME': 'استاذہ حبیبہ الیاس',
    'TEACHER.TITLE': 'بانیہ و پرنسپل',
    'teacher.name': 'استاذہ حبیبہ الیاس',
    'teacher.title': 'بانیہ و پرنسپل',
    'teacher.sub': 'بانیہ و پرنسپل',
    'teacher.sidebarTitle': 'ہماری پیاری معلمہ',
    'teacher.sidebarSubtitle': 'بانیہ و پرنسپل',
    'teacher.badge': 'علمی کمال اور برتری',
    'teacher.bioParagraph1': 'استاذہ حبیبہ الیاس ایک ممتاز اور اعلیٰ تعلیم یافتہ عالمہ (درسِ نظامی سند یافتہ) ہیں، جو خواتین کی دینی تعلیم و تربیت کی ماہر ہیں۔ وہ پاکستان کے سب سے معتبر اور باوقار اسلامی تعلیمی بورڈ وفاق المدارس العربیہ کی ممتاز فاضلہ ہیں۔ ہماری محترم معلمہ نے مستقل طور پر پاکستان کی سطح پر ممتاز پوزیشنز حاصل کی ہیں اور وفاق کے امتحانات میں مسلسل تین سالوں سے ملکی سطح پر پوزیشنز حاصل کر رہی ہیں۔',
    'teacher.bioParagraph2': 'وہ دنیا بھر کی بہنوں کو واٹس ایپ اور زوم کے محفوظ پورٹلز پر نہایت شفقت، مخلصانہ اور پر اثر انداز میں قرآن، خوبصورت تجوید، حفظ، لفظ بہ لفظ ترجمہ و تفسیر، احادیثِ مبارکہ اور فقہی مسائل کی تدریس فراہم کر رہی ہیں۔',
    'teacher.sidebarBullet1': 'وفاق المدارس العربیہ کی ممتاز فاضلہ',
    'teacher.sidebarBullet2': 'قومی سطح پر مستقل پوزیشن ہولڈر',
    'teacher.sidebarBullet3': 'بین الاقوامی سطح کی آن لائن معلمہ',
    'teacher.quote': 'ہمارا مقصد ہر مسلمان خاتون کے لیے دین سیکھنا آسان، شفیق اور عملی بنانا ہے، اور انہیں ایک ایسا پرسکون تعلیمی ماحول دینا ہے جہاں وہ اپنے دل اور روح کو سنوار سکیں۔',
    'teacher.trustTitle': 'مستند اور تصدیق شدہ علم',
    'teacher.trustDesc': 'وفاق المدارس العربیہ کی اسناد کو علم و تحقیق کا سب سے اعلیٰ معیار مانا جاتا ہے، جو آپ کو مکمل تسلی دیتا ہے کہ آپ مستند اور مخلصانہ علم حاصل کر رہی ہیں۔',

    // Credentials (Urdu)
    'credentials.cred1.title': 'وفاق المدارس العربیہ کی فاضلہ',
    'credentials.cred1.desc': 'علومِ اسلامیہ اور شریعہ میں ماسٹرز کے مساوی مستند تعلیمی سند حاصل کی۔',
    'credentials.cred2.title': 'قومی سطح پر ممتاز پوزیشنز',
    'credentials.cred2.desc': 'ہماری محترم معلمہ نے مستقل طور پر پاکستان کی سطح پر ممتاز پوزیشنز حاصل کی ہیں اور وفاق کے امتحانات میں مسلسل تین سالوں سے ملکی سطح پر پوزیشنز حاصل کر رہی ہیں۔',
    'credentials.cred3.title': 'بین الاقوامی آن لائن معلمہ',
    'credentials.cred3.desc': 'آن لائن ورچوئل پورٹلز کے ذریعے عربی، تجوید اور کلاسیکی اسلامی کتب کی تدریس کا وسیع تجربہ۔',
    'credentials.cred4.title': 'دنیا بھر کی خواتین اور بچیوں کی تدریس',
    'credentials.cred4.desc': 'طالبات کی اخلاقی کردار سازی (تربیت) اور ان کے مخصوص مسائل کا مکمل رازداری میں حل۔',

    // Admission page (Urdu)
    'nav.admission': 'داخلہ فارم',
    'admission.badge': 'آن لائن داخلہ فارم',
    'admission.title': 'داخلہ کے لیے درخواست فارم',
    'admission.desc': 'آج ہی اپنے روحانی اور علمی سفر کا آغاز کریں۔ اپنی سیٹ محفوظ کرنے کے لیے اس فارم کو پُر کریں۔ ہماری کوآرڈینیٹر آپ سے واٹس ایپ یا ای میل کے ذریعے رابطہ کریں گی۔',
    'admission.studentName': 'طالبہ کا مکمل نام *',
    'admission.parentName': 'والد یا سرپرست کا نام *',
    'admission.age': 'عمر *',
    'admission.country': 'ملک *',
    'admission.city': 'شہر *',
    'admission.whatsapp': 'واٹس ایپ نمبر *',
    'admission.email': 'ای میل ایڈریس *',
    'admission.selectCourse': 'کورس منتخب کریں *',
    'admission.timing': 'کلاس کا پسندیدہ وقت *',
    'admission.message': 'اضافی پیغام (اختیاری)',
    'admission.submit': 'داخلہ کی درخواست جمع کروائیں',
    'admission.submitting': 'درخواست جمع کی جا رہی ہے...',
    'admission.successTitle': 'جزاک اللہ خیراً!',
    'admission.successMessage': 'جزاک اللہ خیراً! آپ کی داخلہ کی درخواست کامیابی سے موصول ہو گئی ہے۔ ہم جلد ہی آپ سے واٹس ایپ یا ای میل کے ذریعے رابطہ کریں گے، ان شاء اللہ۔',

    // Course List (Urdu)
    'course.quranTajweed': 'تجوید کے ساتھ قرآن خوانی',
    'course.nazraTajweed': 'تجوید کے ساتھ ناظرہ قرآن',
    'course.nooraniQaida': 'نورانی قاعدہ',
    'course.hifz': 'حفظ القرآن',
    'course.tafseer': 'تفسیر القرآن',
    'course.tarjuma': 'ترجمۃ القرآن',
    'course.hadith': 'درسِ حدیث',
    'course.fiqh': 'علم الفقہ',
    'course.seerat': 'سیرت النبی ﷺ',
    'course.sahaba': 'مطالعہ صحابہ کرام رضی اللہ علہم',
    'course.other': 'دیگر',

    'courses.course1.title': 'تجوید کے ساتھ قرآن خوانی',
    'courses.course2.title': 'حفظ القرآن الکریم',
    'courses.course3.title': 'ترجمہ و تفسیرِ قرآن مجید',
    'courses.course4.title': 'درسِ حدیث',
    'courses.course5.title': 'فقہ و مسائل',
    'courses.course6.title': 'سیرت النبی ﷺ',
    'courses.course7.title': 'اسلامی طرزِ زندگی و تربیت',
    'courses.course8.title': 'تجوید کے ساتھ ناظرہ قرآن'
  }
};
