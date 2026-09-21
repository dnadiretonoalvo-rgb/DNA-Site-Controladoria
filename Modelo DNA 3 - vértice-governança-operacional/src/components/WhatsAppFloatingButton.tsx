import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { MessageSquare, Phone, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor%20sobre%20a%20governan%C3%A7a%20operacional%20da%20minha%20empresa.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0B1528] text-white text-xs py-2 px-3 rounded-lg shadow-lg border border-slate-700/80 animate-in fade-in slide-in-from-right-2 duration-300">
          <span>Atendimento executivo em Rio Claro e região</span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shadow-lg shadow-emerald-950/30 hover:scale-105 active:scale-95 transition-all focus:outline-hidden"
        aria-label="Falar pelo WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};
