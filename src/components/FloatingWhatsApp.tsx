/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MessageSquareText, Sparkles, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a gentle greeting tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/923232358394?text=Assalamu%20Alaikum.%20I%20would%20like%20to%20join%20Tafheem-ul-Islam%20Academy%20Lil%20Banat.`, '_blank');
  };

  return (
    <div id="whatsapp-floating-root" className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 pointer-events-none">
      
      {/* Gentle Floating Tooltip / Invitation Bubble */}
      {showTooltip && (
        <div className="relative animate-fade-in bg-white border border-gold-soft/30 px-4 py-3 rounded-2xl shadow-xl max-w-xs text-left pointer-events-auto flex items-start space-x-2.5">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-neutral-400 hover:text-neutral-600 focus:outline-none cursor-pointer"
          >
            <X className="h-3 w-3" />
          </button>
          
          <div className="p-1.5 bg-emerald-bg text-emerald-medium rounded-full mt-0.5 shrink-0">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <div>
            <p className="text-[11px] font-serif font-bold text-emerald-deep tracking-wide leading-none">
              Assalamu Alaikum!
            </p>
            <p className="text-[10px] text-neutral-500 font-light leading-normal mt-1 pr-2">
              Have questions about courses or schedules? Sister Zainab is online to help you on WhatsApp.
            </p>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="pointer-events-auto relative">
        {/* Pulsing visual halo */}
        <div className="absolute inset-0 rounded-full bg-emerald-medium/30 animate-ping"></div>

        <button
          onClick={handleWhatsAppRedirect}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-medium text-white shadow-2xl hover:scale-[1.08] transition-transform duration-300 border border-gold-soft/20 cursor-pointer"
          aria-label="Contact us on WhatsApp"
        >
          {/* Custom SVG logo representing WhatsApp or speech bubble */}
          <MessageSquareText className="h-6 w-6 text-white" />
        </button>
      </div>

    </div>
  );
}
