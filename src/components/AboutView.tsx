import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { 
  ShieldCheck, 
  Lock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Award, 
  Users, 
  Scale, 
  Briefcase,
  Compass
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenDiagnostic }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="bg-[#09152B] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold mb-4 border border-blue-400/30">
              <ShieldCheck className="w-4 h-4" />
              Institucional e Posicionamento
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Por que confiar a governança da sua empresa à Vértice?
            </h1>
            <p className="text-xl text-blue-200 font-medium mb-3">
              Controle empresarial exige confiança, responsabilidade e visão de negócio.
            </p>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              Nascemos para atender a lacuna que se abre quando a empresa cresce além da capacidade de controles manuais e planilhas informais, oferecendo uma camada executiva de acompanhamento permanente.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos e Visão Executiva */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Nosso Propósito
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] tracking-tight">
                Mais visibilidade para quem decide. Menos vulnerabilidade na operação.
              </h2>
              <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  Muitas empresas bem-sucedidas enfrentam o mesmo dilema: os sócios e diretores gastam energia excessiva tentando descobrir se contratos foram reajustados corretamente, se fornecedores estão entregando no prazo ou quem autorizou determinada condição.
                </p>
                <p>
                  A <strong>Vértice Governança Operacional</strong> atua como um parceiro estratégico que estrutura, organiza e acompanha essas três dimensões essenciais — <strong>Contratos, Fornecedores e Compliance</strong> —, permitindo que a gestão tenha segurança para continuar expandindo o negócio.
                </p>
                <p className="font-semibold text-slate-900 border-l-2 border-blue-900 pl-4 py-1">
                  Não somos uma consultoria que apenas entrega relatórios teóricos. Apoiamos o acompanhamento contínuo dos pontos que mais impactam o resultado da sua empresa.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blue-900" />
                Nossos Princípios Inegociáveis
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Sigilo Absoluto e Acordo de Confidencialidade (NDA)',
                    desc: 'Todas as informações, números, minutas e estratégias dos nossos clientes são rigorosamente protegidas sob contrato formal de sigilo.',
                  },
                  {
                    title: 'Independência e Imparcialidade',
                    desc: 'Nosso único compromisso é com a segurança e a proteção patrimonial dos sócios e da diretoria.',
                  },
                  {
                    title: 'Sinergia com Jurídico e Contabilidade',
                    desc: 'Não concorremos com seus prestadores existentes; fornecemos subsídios organizados para que eles trabalhem com maior eficácia.',
                  },
                  {
                    title: 'Pragmatismo Empresarial',
                    desc: 'Sem burocracias vazias ou termos complicados. Cada controle implantado deve gerar redução real de riscos ou perdas.',
                  },
                ].map((prin, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">{prin.title}</div>
                      <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">{prin.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso Regional: Rio Claro e Região */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <MapPin className="w-4 h-4" />
              Proximidade e Atendimento Presencial
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] tracking-tight">
              Atuação executiva em Rio Claro e região paulista
            </h3>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Acreditamos no valor da proximidade física com nossos clientes para reuniões de diretoria, análises in loco e alinhamento com equipes administrativas e operacionais.
            </p>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {COMPANY_INFO.cities.map((city, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  {city}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenDiagnostic}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0F2552] hover:bg-[#163673] transition-colors shadow-sm"
              >
                <span>Solicitar diagnóstico para minha empresa</span>
                <ArrowRight className="w-4 h-4 text-blue-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
