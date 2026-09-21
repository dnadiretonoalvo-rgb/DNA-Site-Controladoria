import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { ShieldCheck, Phone, Mail, MapPin, Lock, ArrowUpRight, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1220] text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand and Concept (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center text-white border border-blue-700/50">
                <ShieldCheck className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-white block">DNA - Direto no Alvo</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 block">
                  Governança Operacional
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Mais controle sobre o que acontece dentro da empresa. Mais visibilidade para quem toma as decisões. Transformamos informações dispersas, contratos e relacionamentos críticos em uma estrutura de acompanhamento segura e previsível.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garantia de confidencialidade e Acordo de Sigilo (NDA) em todos os diagnósticos.</span>
            </div>
          </div>

          {/* Col 2: Soluções */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Soluções Estratégicas
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => handleNav('contratos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Controladoria de Contratos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('fornecedores')}
                  className="hover:text-white transition-colors text-left"
                >
                  Controladoria de Fornecedores
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('compliance')}
                  className="hover:text-white transition-colors text-left"
                >
                  Compliance Organizacional
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('para-quem-e')}
                  className="hover:text-white transition-colors text-left"
                >
                  Critérios de Elegibilidade
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('como-funciona')} className="hover:text-white transition-colors">
                  Como Funciona
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sobre')} className="hover:text-white transition-colors">
                  Sobre a Empresa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors">
                  Dúvidas Frequentes (FAQ)
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenDiagnostic}
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                >
                  <span>Solicitar Diagnóstico</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato e Região */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Atendimento Regional
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Rio Claro - SP e cidades do polo regional paulista</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom micro-bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacidade e Sigilo Garantidos</span>
            <span>Atendimento B2B Estruturado</span>
            <span>Rio Claro e Região</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
