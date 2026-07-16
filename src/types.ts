/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActivePage = 'home' | 'about' | 'courses' | 'principal' | 'activities' | 'faq' | 'contact' | 'admission';

export interface Course {
  id: string;
  title: string;
  arabicTitle?: string;
  shortDesc: string;
  longDesc: string;
  duration: string;
  frequency: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  category: 'Quran' | 'Islamic Studies' | 'Lifestyle';
  features: string[];
  syllabus: string[];
  iconName: string; // references lucide icon
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admission' | 'Classes' | 'Academy' | 'Fees';
}

export interface Activity {
  id: string;
  title: string;
  desc: string;
  date?: string;
  category: 'Competition' | 'Achievement' | 'Webinar' | 'Activity';
  badge?: string;
}
