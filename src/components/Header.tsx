import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import logoDNA from '../assets/logo-dna.png';
import { 
  ShieldCheck, 
  FileText, 
  Building2, 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenDiagnostic,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSolutionActive = ['contratos', 'fornecedores', 'compliance'].includes(currentPage);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top micro-bar for executive authority and regional proximity */}
      <div className="bg-[#0B1528] text-slate-300 text-xs py-2 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium text-white">Governança Operacional B2B:</span>
            <span>Atendimento para empresas em {COMPANY_INFO.region}</span>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20governan%C3%A7a%20operacional.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400 font-mono text-[11px]">Sigilo e NDA garantidos</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden py-1"
            id="brand-logo-btn"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F2244] via-[#0B1528] to-[#060D1A] p-0.5 shadow-sm shadow-blue-950/20 border border-slate-700/50 ring-1 ring-amber-500/20 group-hover:border-amber-400/50 group-hover:ring-amber-400/30 group-hover:shadow-md transition-all duration-300 overflow-hidden shrink-0">
              <img 
                src={logoDNA} 
                alt="Logo DNA - Direto no Alvo" 
                className="w-full h-full object-cover scale-115 group-hover:scale-125 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-400/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#0B1528] group-hover:text-blue-950 transition-colors">
                  DNA
                </span>
                <span className="inline-block w-1 h-1 rounded-full bg-amber-500/80"></span>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  Direto no Alvo
                </span>
              </div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-blue-900/85 group-hover:text-blue-900 transition-colors mt-0.5">
                Governança Operacional
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-blue-900 bg-blue-50/80 font-semibold'
                  : 'text-slate-700 hover:text-blue-950 hover:bg-slate-100/70'
              }`}
              id="nav-home"
            >
              Início
            </button>

            {/* Soluções Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isSolutionActive
                    ? 'text-blue-900 bg-blue-50/80 font-semibold'
                    : 'text-slate-700 hover:text-blue-950 hover:bg-slate-100/70'
                }`}
                id="nav-solutions-dropdown"
                aria-expanded={solutionsDropdownOpen}
              >
                <span>Soluções</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-blue-900' : 'text-slate-400'}`} />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200/90 py-2.5 px-2">
                    <div className="px-3 py-1.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Pilares Estratégicos
                    </div>
                    <button
                      onClick={() => handleNavClick('contratos')}
                      className={`w-full text-left p-2.5 rounded-lg flex items-start gap-3 transition-colors ${
                        currentPage === 'contratos' ? 'bg-blue-50 text-blue-950' : 'hover:bg-slate-50'
                      }`}
                      id="dropdown-contratos"
                    >
                      <div className="p-2 rounded-md bg-blue-100/60 text-blue-900 shrink-0 mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Controladoria de Contratos</div>
                        <div className="text-xs text-slate-500 line-clamp-1">Prazos, reajustes, renovações e obrigações</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('fornecedores')}
                      className={`w-full text-left p-2.5 rounded-lg flex items-start gap-3 transition-colors ${
                        currentPage === 'fornecedores' ? 'bg-blue-50 text-blue-950' : 'hover:bg-slate-50'
                      }`}
                      id="dropdown-fornecedores"
                    >
                      <div className="p-2 rounded-md bg-slate-100 text-slate-800 shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Controladoria de Fornecedores</div>
                        <div className="text-xs text-slate-500 line-clamp-1">Desempenho, dependência e conformidade</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('compliance')}
                      className={`w-full text-left p-2.5 rounded-lg flex items-start gap-3 transition-colors ${
                        currentPage === 'compliance' ? 'bg-blue-50 text-blue-950' : 'hover:bg-slate-50'
                      }`}
                      id="dropdown-compliance"
                    >
                      <div className="p-2 rounded-md bg-emerald-100/60 text-emerald-900 shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Compliance Organizacional</div>
                        <div className="text-xs text-slate-500 line-clamp-1">Regras claras, alçadas e segurança interna</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('para-quem-e')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'para-quem-e'
                  ? 'text-blue-900 bg-blue-50/80 font-semibold'
                  : 'text-slate-700 hover:text-blue-950 hover:bg-slate-100/70'
              }`}
              id="nav-para-quem-e"
            >
              Para quem é
            </button>

            <button
              onClick={() => handleNavClick('como-funciona')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'como-funciona'
                  ? 'text-blue-900 bg-blue-50/80 font-semibold'
                  : 'text-slate-700 hover:text-blue-950 hover:bg-slate-100/70'
              }`}
              id="nav-como-funciona"
            >
              Como funciona
            </button>

            <button
              onClick={() => handleNavClick('sobre')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'sobre'
                  ? 'text-blue-900 bg-blue-50/80 font-semibold'
                  : 'text-slate-700 hover:text-blue-950 hover:bg-slate-100/70'
              }`}
              id="nav-sobre"
            >
              Sobre
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'faq'
                  ? 'text-blue-900 bg-blue-50/80 font-semibold'
                  : 'text-slate-700 hover:text-blue-950 hover:bg-slate-100/70'
              }`}
              id="nav-faq"
            >
              FAQ
            </button>
          </nav>

          {/* Primary CTA (High Visual Prominence as requested in briefing Section 19 & 21) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0F2552] hover:bg-[#163673] active:bg-[#0A1A3A] transition-all shadow-sm shadow-blue-950/20 border border-blue-800/30 cursor-pointer focus:outline-hidden"
              id="header-cta-diagnostic"
            >
              <Calendar className="w-4 h-4 text-blue-300" />
              <span>Solicitar diagnóstico</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-300 ml-0.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDiagnostic}
              className="px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#0F2552] shadow-xs"
            >
              Diagnóstico
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              id="mobile-menu-toggle"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'home' ? 'bg-blue-50 text-blue-950 font-semibold' : 'text-slate-800'
            }`}
          >
            Início
          </button>

          <div className="pt-2 pb-1 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            Soluções Especializadas
          </div>
          <button
            onClick={() => handleNavClick('contratos')}
            className={`w-full text-left pl-6 pr-3 py-2 rounded-md text-sm flex items-center gap-2.5 ${
              currentPage === 'contratos' ? 'bg-blue-50 text-blue-950 font-semibold' : 'text-slate-700'
            }`}
          >
            <FileText className="w-4 h-4 text-blue-900" />
            <span>Controladoria de Contratos</span>
          </button>
          <button
            onClick={() => handleNavClick('fornecedores')}
            className={`w-full text-left pl-6 pr-3 py-2 rounded-md text-sm flex items-center gap-2.5 ${
              currentPage === 'fornecedores' ? 'bg-blue-50 text-blue-950 font-semibold' : 'text-slate-700'
            }`}
          >
            <Building2 className="w-4 h-4 text-slate-800" />
            <span>Controladoria de Fornecedores</span>
          </button>
          <button
            onClick={() => handleNavClick('compliance')}
            className={`w-full text-left pl-6 pr-3 py-2 rounded-md text-sm flex items-center gap-2.5 ${
              currentPage === 'compliance' ? 'bg-blue-50 text-blue-950 font-semibold' : 'text-slate-700'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Compliance Organizacional</span>
          </button>

          <div className="pt-2"></div>

          <button
            onClick={() => handleNavClick('para-quem-e')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'para-quem-e' ? 'bg-blue-50 text-blue-950 font-semibold' : 'text-slate-800'
            }`}
          >
            Para quem é
          </button>

          <button
            onClick={() => handleNavClick('como-funciona')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'como-funciona' ? 'bg-blue-50 text-blue-950 font-semibold' : 'text-slate-800'
            }`}
          >
            Como funciona
          </button>

          <button
            onClick={() => handleNavClick('sobre')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'sobre' ? 'bg-blue-50 text-blue-950 font-semibold' : 'text-slate-800'
            }`}
          >
            Sobre a DNA - Direto no Alvo
          </button>

          <button
            onClick={() => handleNavClick('faq')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'faq' ? 'bg-blue-50 text-blue-950 font-semibold' : 'text-slate-800'
            }`}
          >
            Perguntas Frequentes (FAQ)
          </button>

          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full py-3 rounded-lg text-sm font-bold text-white bg-[#0F2552] flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-blue-300" />
              <span>Solicitar diagnóstico</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
