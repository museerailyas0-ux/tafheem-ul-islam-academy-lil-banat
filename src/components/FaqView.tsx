/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FAQS_DATA } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, Phone } from 'lucide-react';

export default function FaqView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Admission' | 'Classes' | 'Academy' | 'Fees'>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq1'); // First FAQ open by default

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/923123456789`, '_blank');
  };

  // Filter FAQs based on query and category
  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="faq-view" className="bg-neutral-50 py-12 sm:py-16 space-y-12">
      
      {/* Page Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-serif font-bold tracking-widest text-gold-deep uppercase bg-gold-light px-3 py-1.5 rounded-full border border-gold-soft/30">
            Answers & Clarity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Everything you need to know about our virtual classrooms, female scholars, class timings, certificate tracks, and non-profit admissions.
          </p>
        </div>
      </div>

      {/* Search and Category Filter Header */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Realtime Search Input */}
        <div className="relative rounded-2xl shadow-sm bg-white border border-neutral-200 focus-within:border-emerald-medium focus-within:ring-1 focus-within:ring-emerald-medium overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-4.5 w-4.5 text-neutral-400" />
          </div>
          <input
            type="text"
            placeholder="Type your question here (e.g. fees, zoom, timings)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full py-4 pl-11 pr-4 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none bg-transparent"
          />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2">
          {(['All', 'Academy', 'Classes', 'Admission', 'Fees'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-full border transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-medium text-white border-emerald-medium shadow-sm'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Accordion Questions List */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Toggle Header */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-neutral-50/50 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3 pr-4">
                      <HelpCircle className="h-5 w-5 text-emerald-medium mt-0.5 shrink-0" />
                      <span className="font-serif text-sm sm:text-base font-bold text-neutral-800 leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-gold-deep shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-neutral-400 shrink-0" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content Panel */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-neutral-50 bg-neutral-50/20 animate-fade-in">
                      <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-neutral-100">
            <p className="text-sm text-neutral-500 font-light">No questions match your filter query. Try searching for something else.</p>
          </div>
        )}
      </div>

      {/* Direct support CTA */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-deep text-white rounded-3xl p-6 sm:p-10 border border-gold-soft/20 shadow-xl text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full border border-white/5 -mr-10 -mt-10"></div>
          
          <div className="space-y-2 relative z-10">
            <h3 className="font-serif text-lg sm:text-xl font-bold">Still have a specific question?</h3>
            <p className="text-xs sm:text-sm text-neutral-200 font-light max-w-md mx-auto leading-relaxed">
              Assalamu Alaikum. If you have any personal questions about class timings, child placement, or need assistance, chat with our sister coordinators on WhatsApp.
            </p>
          </div>

          <div className="relative z-10">
            <button
              onClick={handleWhatsAppChat}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-deep via-gold-soft to-gold-deep text-emerald-deep px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase shadow-md hover:scale-[1.03] transition-transform cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span>Message Admissions Desk</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
