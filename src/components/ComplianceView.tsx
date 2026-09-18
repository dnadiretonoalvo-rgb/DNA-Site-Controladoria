import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Users, 
  FileCheck, 
  Lock, 
  Compass,
  Briefcase
} from 'lucide-react';

interface ComplianceViewProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: (initialSituation?: any) => void;
}

export const ComplianceView: React.FC<ComplianceViewProps> = ({
  onNavigate,
  onOpenDiagnostic,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="bg-[#09152B] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-4 border border-emerald-400/30">
              <ShieldCheck className="w-4 h-4" />
              Governança Operacional
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Compliance Organizacional
            </h1>
            <p className="text-xl text-blue-200 font-medium mb-3">
              Regras claras. Responsabilidades definidas. Mais segurança para a empresa.
            </p>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              Ajudamos empresas a fortalecer seus controles e sua organização interna, reduzindo vulnerabilidades e criando maior clareza sobre responsabilidades, processos e conformidade — com linguagem direta e prática empresarial.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenDiagnostic('compliance')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm cursor-pointer"
                id="compliance-cta-diagnostic"
              >
                <Calendar className="w-4 h-4 text-blue-200" />
                <span>Solicitar diagnóstico de governança</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visão Prática de Compliance B2B */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Governança Prática e Descomplicada
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] tracking-tight">
              Compliance não precisa ser uma teoria jurídica distante.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Para empresas em crescimento e organizações familiares, compliance significa simplesmente saber quem responde por quê, quais são as regras de aprovação e como evitar falhas operacionais que custam caro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Alçadas e Limites Decisórios</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Definição clara de quem pode contratar, aprovar despesas, assinar aditivos ou negociar exceções comerciais, evitando decisões informais.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Rotinas e Rastreabilidade</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Controles internos sistematizados que garantem que todo ato relevante deixe rastros documentados para os sócios e a diretoria.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Blindagem Operacional</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Redução contínua de vulnerabilidades trabalhistas, fiscais e operacionais causadas por processos despadronizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              O que sua empresa ganha com o Compliance Organizacional
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
              {[
                'Maior organização nos processos que envolvem compras e contratos',
                'Clareza cristalina sobre responsabilidades de cada gestor',
                'Redução drástica de vulnerabilidades que geram perdas financeiras',
                'Maior rastreabilidade para auditorias e reuniões de diretoria',
                'Fortalecimento consistente dos controles internos da organização',
                'Suporte vital à profissionalização da gestão e sucessão familiar',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Atendimento estruturado e presencial para Rio Claro e polo regional.
              </span>
              <button
                onClick={() => onOpenDiagnostic('compliance')}
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#0F2552] hover:bg-[#163673] transition-colors"
              >
                Solicitar diagnóstico de compliance
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
