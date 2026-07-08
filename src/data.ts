/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course, Testimonial, FAQItem, Activity } from './types';

export const COURSES_DATA: Course[] = [
  {
    id: 'tajweed-quran',
    title: 'Qur\'an Reading with Tajweed',
    arabicTitle: 'تجويد القرآن الكريم',
    shortDesc: 'Learn the correct rules of pronunciation (Tajweed) from basic alphabets to fluent recitation.',
    longDesc: 'This course is beautifully designed for sisters of all ages who wish to recite the Holy Qur\'an with flawless pronunciation, respecting the rules of Tajweed. Starting from Noorani Qaida, our certified female teachers guide students patiently through articulation points (Makharij) and characteristics of Arabic letters, leading to standard, fluent recitation of the Book of Allah.',
    duration: '6 Months',
    frequency: '3 days a week (30-45 min sessions)',
    level: 'Beginner',
    category: 'Quran',
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
    id: 'hifz-quran',
    title: 'Hifz-ul-Qur\'an (Memorization)',
    arabicTitle: 'حفظ القرآن الكريم',
    shortDesc: 'A dedicated, structured program for memorizing the Holy Qur\'an with precise revision.',
    longDesc: 'A specialized memorization track for girls and women who aspire to preserve the Book of Allah in their hearts. Under the direct supervision of qualified Huffadh (female teachers), this program features highly customized individual goals, rigorous daily revision (Manzil/Sabaq/Sabqi), and spiritual counseling to maintain consistency and devotion.',
    duration: 'Flexible (Self-Paced / 2-4 Years)',
    frequency: 'Daily (Monday to Friday)',
    level: 'Intermediate',
    category: 'Quran',
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
    shortDesc: 'Understand the divine message of the Qur\'an through literal translation and classical exegesis.',
    longDesc: 'An enriching journey into the meanings of the Holy Qur\'an. This program translates divine words literally and contextually, combined with authentic classical Tafseer (such as Ibn Kathir, Ma\'ariful Qur\'an, and Tafseer Al-Jalalayn). Learn the reasons for revelation (Asbab-un-Nuzool) and practical, everyday lessons to implement Allah\'s guidance in our modern lives.',
    duration: '1 Year (Modular)',
    frequency: '2 days a week',
    level: 'All Levels',
    category: 'Quran',
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
    level: 'Intermediate',
    category: 'Islamic Studies',
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
    level: 'All Levels',
    category: 'Islamic Studies',
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
    level: 'All Levels',
    category: 'Islamic Studies',
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
    level: 'All Levels',
    category: 'Lifestyle',
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
    level: 'All Levels',
    category: 'Islamic Studies',
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

export const TESTIMONIALS_DATA: Testimonial[] = [
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

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Is this academy exclusively for women and girls?',
    answer: 'Yes, Tafheem-ul-Islam Academy Lil Banat is strictly dedicated to women and girls. All of our administrators, supervisors, and teachers are certified, highly qualified female scholars (Alimahs & Huffadh) providing a comfortable and safe learning environment.',
    category: 'Academy'
  },
  {
    id: 'faq2',
    question: 'How do the online classes take place?',
    answer: 'Classes are conducted online via live interactive video conferencing platforms (such as Zoom or Google Meet). We provide structured digital materials, slides, and class portals. High-speed internet, a smartphone/laptop, and a quiet learning space are all that you need to join.',
    category: 'Classes'
  },
  {
    id: 'faq3',
    question: 'What are the qualifications of Ustadha Habiba Ilyas?',
    answer: 'Our beloved teacher, Ustadha Habiba Ilyas, is a distinguished graduate of Wifaq-ul-Madaris Al-Arabia (the largest and most prestigious Islamic seminary board in Pakistan) and achieved the prestigious First Position (Top Rank) in the entire Sindh region in the Wifaq examinations. She brings years of classical teaching experience specializing in Tajweed, Tafseer, and Fiqh in a highly respectful and professional environment.',
    category: 'Academy'
  },
  {
    id: 'faq4',
    question: 'Is there a fee for these courses, since the academy is non-profit?',
    answer: 'Tafheem-ul-Islam Academy is a registered non-profit educational mission. Basic classes are provided for free or for nominal maintenance contributions that support our technology infrastructure and dedicated female staff. No deserving student is ever turned away due to lack of financial resources.',
    category: 'Fees'
  },
  {
    id: 'faq5',
    question: 'Are there flexible class timings available?',
    answer: 'Yes! We understand that our students include homemakers, students, and working professionals across different time zones (US, UK, Middle East, Pakistan). We offer morning, afternoon, and evening batches to accommodate different schedules.',
    category: 'Classes'
  },
  {
    id: 'faq6',
    question: 'Do you award certificates upon completion of a course?',
    answer: 'Absolutely. Upon successful completion of a course, maintaining 85% attendance, and passing the final assessments (both oral and written), students are awarded official completion certificates signed by the Academy administration and Ustadha Habiba Ilyas.',
    category: 'Admission'
  }
];

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: 'act1',
    title: 'Annual Husn-e-Qira\'at Competition',
    desc: 'An inspiring academy-wide Quran recitation competition celebrating beautiful Tajweed. Evaluated by international female Huffadh, with golden shields and cash awards distributed to the top reciters.',
    category: 'Competition',
    badge: 'Ramadan Special'
  },
  {
    id: 'act2',
    title: 'Wifaq-ul-Madaris Annual Exam Excellence',
    desc: 'Our advanced students achieved outstanding, top-tier results in the central examinations of Wifaq-ul-Madaris Al-Arabia, demonstrating academic rigor and deep theological mastery.',
    category: 'Achievement',
    badge: '100% Pass Rate'
  },
  {
    id: 'act3',
    title: 'Prophetic Character (Seerah) Quiz Challenge',
    desc: 'An interactive, high-tech online quiz competition focusing on the life of Prophet Muhammad ﷺ to encourage students to read classical biography books and adapt the Sunnah.',
    category: 'Competition',
    badge: 'Youth Special'
  },
  {
    id: 'act4',
    title: 'Weekly Tarbiyah Webinars',
    desc: 'Interactive weekend seminars hosted by guest female scholars addressing mental health, contemporary digital distractions, hijab confidence, and managing modern family dynamics.',
    category: 'Webinar',
    badge: 'Free Public Event'
  },
  {
    id: 'act5',
    title: 'Islamic Calligraphy & Design Exhibition',
    desc: 'Encouraging female artistic talent by hosting a digital exhibition for Arabic calligraphy, digital painting, and Quranic verse illustration submissions.',
    category: 'Activity',
    badge: 'Creative Arts'
  }
];
