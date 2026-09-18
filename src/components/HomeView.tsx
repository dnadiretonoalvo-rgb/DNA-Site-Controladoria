import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  COMPANY_INFO, 
  PROBLEMS_PILLARS, 
  TARGET_SITUATIONS, 
  VALUE_GAINED, 
  JOURNEY_STEPS, 
  REAL_CASES, 
  FAQ_LIST 
} from '../data/content';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Building2, 
  ChevronRight, 
  ChevronDown, 
  Lock, 
  Phone, 
  Eye, 
  Users, 
  Calendar, 
  AlertTriangle, 
  TrendingUp, 
  Compass, 
  Sparkles,
  Layers,
  HelpCircle,
  Clock,
  Briefcase
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: (initialSituation?: any) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenDiagnostic }) => {
  // State for interactive target evaluation checklist
  const [selectedSituations, setSelectedSituations] = useState<number[]>([0, 1, 3]);
  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  // State for interactive Growth vs Control comparison
  const [activeStage, setActiveStage] = useState<'early' | 'growth' | 'governed'>('growth');

  const toggleSituation = (index: number) => {
    if (selectedSituations.includes(index)) {
      setSelectedSituations(selectedSituations.filter((i) => i !== index));
    } else {
      setSelectedSituations([...selectedSituations, index]);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleDeepDive = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION (First Screen)
          Section 5 of Briefing: Headline, Subheadline, CTA Principal, CTA Secundário, Confiança
          ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#09152B] via-[#0E2042] to-[#0A162C] text-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden border-b border-slate-800">
        {/* Subtle grid background for executive precision */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Strategic Message (Span 7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Governança Operacional e Controladoria B2B</span>
              </div>

              {/* Main Headline (Recommended in Section 5 & 28) */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.15]">
                Sua empresa cresceu.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
                  Seus controles cresceram junto?
                </span>
              </h1>

              {/* Subheadline (Section 5) */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Organizamos e acompanhamos contratos, fornecedores e controles de governança para dar à gestão mais visibilidade, segurança e controle sobre o negócio.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onOpenDiagnostic()}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all shadow-lg shadow-blue-900/40 cursor-pointer focus:outline-hidden"
                  id="hero-cta-diagnostic"
                >
                  <Calendar className="w-5 h-5 text-blue-200" />
                  <span>Solicitar diagnóstico</span>
                  <ArrowRight className="w-4 h-4 text-blue-200" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20um%20especialista%20sobre%20a%20governan%C3%A7a%20operacional%20da%20minha%20empresa.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700 transition-all"
                  id="hero-cta-specialist"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Falar com um especialista</span>
                </a>
              </div>

              {/* Local Trust Note (Section 5) */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Atendimento empresarial presencial e consultivo em <strong>Rio Claro e região</strong>.</span>
              </div>
            </div>

            {/* Right Col: Strategic Concept Diagram (Section 26 of Briefing) */}
            <div className="lg:col-span-5">
              <div className="bg-[#13223D]/90 rounded-2xl border border-slate-700/80 p-6 shadow-2xl backdrop-blur-md relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-5">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Diagnóstico de Escala
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    Maturidade da Operação
                  </span>
                </div>

                {/* Growth Formula Diagram */}
                <div className="space-y-4">
                  {/* Step 1: Growth */}
                  <div className="bg-[#0D182E] p-4 rounded-xl border border-slate-800">
                    <div className="text-xs font-semibold text-amber-300 mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>O Fenômeno do Crescimento:</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Mais clientes <span className="text-slate-500">→</span> Mais fornecedores <span className="text-slate-500">→</span> Mais contratos <span className="text-slate-500">→</span> Mais obrigações e riscos dispersos
                    </p>
                  </div>

                  {/* Downward Connector Arrow */}
                  <div className="flex justify-center -my-2">
                    <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-300">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step 2: The Core Question */}
                  <div className="bg-blue-950/40 p-4 rounded-xl border border-blue-800/40 text-left">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-blue-300 mb-1">
                      A Pergunta Decisória
                    </div>
                    <p className="text-sm font-semibold text-white italic">
                      “Quem está garantindo que tudo está sendo devidamente acompanhado?”
                    </p>
                  </div>

                  {/* Downward Connector Arrow */}
                  <div className="flex justify-center -my-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step 3: Governança Operacional Result */}
                  <div className="bg-emerald-950/20 p-4 rounded-xl border border-emerald-800/40">
                    <div className="text-xs font-semibold text-emerald-400 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>A Solução Vértice:</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Mais controle <span className="text-emerald-500 font-bold">→</span> Mais visibilidade <span className="text-emerald-500 font-bold">→</span> Decisões protegidas e redução contínua de perdas
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-blue-400" />
                    Estrutura própria de acompanhamento
                  </span>
                  <button
                    onClick={() => onOpenDiagnostic()}
                    className="text-blue-300 hover:text-white font-semibold flex items-center gap-1"
                  >
                    <span>Avaliar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SEÇÃO "O PROBLEMA"
          Section 6 of Briefing: Explores the business problem before mentioning compliance.
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200" id="o-problema">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200/70">
              O Desafio da Expansão
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight leading-tight">
              Quando a empresa cresce, controlar tudo fica mais difícil.
            </h2>
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-3 pt-2 text-left sm:text-center">
              <p>
                Informações que antes estavam concentradas em poucas pessoas passam a ficar distribuídas entre departamentos, sistemas, planilhas, documentos e e-mails.
              </p>
              <p>
                Contratos vencem, fornecedores mudam, obrigações precisam ser acompanhadas e decisões passam a depender de informações que nem sempre estão disponíveis no momento certo.
              </p>
              <p className="text-slate-900 font-semibold pt-1">
                O problema não é necessariamente falta de informação.{' '}
                <span className="text-blue-900">
                  É a falta de uma visão integrada sobre o que precisa ser acompanhado.
                </span>
              </p>
            </div>
          </div>

          {/* 3 Visual Cards: Contratos, Fornecedores, Governança (Section 6) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Contratos */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-5 border border-blue-100">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Contratos</h3>
              <p className="text-xs text-slate-500 mb-5">Pontos críticos de atenção jurídica e financeira:</p>
              <ul className="space-y-3 text-sm text-slate-700">
                {['Prazos de vigência e marcos', 'Reajustes e índices aplicados', 'Obrigações contratuais recíprocas', 'Renovações automáticas passivas', 'Condições comerciais acordadas'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <button
                  onClick={() => handleDeepDive('contratos')}
                  className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Ver controladoria de contratos</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Fornecedores */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-5 border border-slate-200">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fornecedores</h3>
              <p className="text-xs text-slate-500 mb-5">Vulnerabilidades na cadeia operacional:</p>
              <ul className="space-y-3 text-sm text-slate-700">
                {['Desempenho e cumprimento de prazos', 'Documentação e regularidade fiscal', 'Dependência operacional de parceiros', 'Condições comerciais e histórico', 'Riscos de interrupção no fornecimento'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <button
                  onClick={() => handleDeepDive('fornecedores')}
                  className="text-xs font-bold text-slate-900 hover:text-slate-700 flex items-center gap-1"
                >
                  <span>Ver controladoria de fornecedores</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Governança */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 border border-emerald-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Governança</h3>
              <p className="text-xs text-slate-500 mb-5">Segurança dos processos e alçadas:</p>
              <ul className="space-y-3 text-sm text-slate-700">
                {['Responsabilidades e alçadas claras', 'Controles internos institucionalizados', 'Processos e rotinas padronizadas', 'Conformidade com diretrizes da diretoria', 'Rastreabilidade para auditorias'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <button
                  onClick={() => handleDeepDive('compliance')}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-700 flex items-center gap-1"
                >
                  <span>Ver compliance organizacional</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Section 6 Closing Statement */}
          <div className="mt-14 p-6 sm:p-8 bg-[#0B1528] rounded-2xl text-white text-center max-w-4xl mx-auto shadow-sm">
            <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2">
              “Quanto maior a operação, maior a importância de saber o que está acontecendo.”
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              Estruturamos uma camada de acompanhamento que conecta esses três pontos vitais para que sua diretoria nunca seja pega de surpresa.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SEÇÃO DE SOLUÇÃO & OS TRÊS PILARES
          Sections 7, 7.1, 8, 9 of Briefing: Detailed Solution Pillars
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200" id="solucoes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 border border-blue-200/80">
              Nossas Soluções
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              Controle para que a gestão enxergue o negócio com mais clareza.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Trabalhamos nas três áreas críticas que mais concentram riscos, custos ocultos e obrigações dentro de empresas em expansão.
            </p>
          </div>

          {/* Solution 1: Controladoria de Contratos (Section 7.1) */}
          <div className="mb-16 bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 lg:p-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-900 text-xs font-bold">
                  <FileText className="w-4 h-4" />
                  Pilar 1: Contratos
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Mais controle sobre os contratos que movimentam sua empresa.
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Acompanhamos informações, prazos, obrigações e condições contratuais relevantes para ajudar sua empresa a reduzir riscos, evitar perdas e manter maior controle sobre seus compromissos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Maior visibilidade dos contratos ativos',
                    'Acompanhamento rigoroso de prazos e obrigações',
                    'Redução de riscos de vencimentos e esquecimentos',
                    'Identificação de pontos que exigem atenção',
                    'Maior controle sobre condições contratadas',
                    'Suporte qualificado à tomada de decisão',
                  ].map((ben, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleDeepDive('contratos')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-white bg-[#0F2552] hover:bg-[#163673] transition-colors"
                  >
                    <span>Quero conhecer a Controladoria de Contratos</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenDiagnostic('contratos')}
                    className="text-xs font-bold text-slate-600 hover:text-blue-900 underline underline-offset-4"
                  >
                    Diagnóstico de Contratos
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-800">Mapa Típico de Atenção Contratual</span>
                  <span className="text-[10px] bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded-sm">Monitoramento</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-900">Locação Comercial & Maquinário</div>
                      <div className="text-slate-500">Reajuste anual pelo IPCA + cláusula de renovação</div>
                    </div>
                    <span className="px-2 py-1 rounded-sm bg-blue-100 text-blue-900 font-bold">Acompanhado</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-900">Serviços de Tecnologia & Licenças</div>
                      <div className="text-slate-500">Prazo de notificação prévia de 60 dias</div>
                    </div>
                    <span className="px-2 py-1 rounded-sm bg-blue-100 text-blue-900 font-bold">Acompanhado</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-900">Fornecimento de Matéria-Prima</div>
                      <div className="text-slate-500">Índice setorial e obrigações de entrega mínima</div>
                    </div>
                    <span className="px-2 py-1 rounded-sm bg-blue-100 text-blue-900 font-bold">Acompanhado</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 italic text-center pt-1">
                  Sua gestão passa a ter controle proativo antes de cada data crítica.
                </p>
              </div>
            </div>
          </div>

          {/* Solution 2: Controladoria de Fornecedores (Section 8) */}
          <div className="mb-16 bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 lg:p-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-800">Indicadores Críticos de Suprimentos</span>
                  <span className="text-[10px] bg-slate-100 text-slate-800 font-semibold px-2 py-0.5 rounded-sm">Segurança B2B</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="flex justify-between font-semibold text-slate-900 mb-1">
                      <span>Mitigação de Dependência Única</span>
                      <span className="text-emerald-700">92% Seguro</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[92%]"></div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="flex justify-between font-semibold text-slate-900 mb-1">
                      <span>Regularidade Fiscal e Certidões</span>
                      <span className="text-blue-800">100% Atualizado</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full w-[100%]"></div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="flex justify-between font-semibold text-slate-900 mb-1">
                      <span>Cumprimento de SLA & Prazos</span>
                      <span className="text-slate-800">Monitorado</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-slate-700 h-full w-[88%]"></div>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 italic text-center pt-1">
                  Redução da dependência de controles manuais em cadernos ou planilhas individuais.
                </p>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 text-slate-900 text-xs font-bold">
                  <Building2 className="w-4 h-4" />
                  Pilar 2: Fornecedores
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Fornecedores sob controle. Operação mais previsível.
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Estruturamos o acompanhamento dos fornecedores relevantes para que a empresa tenha maior visibilidade sobre relacionamentos que impactam custos, operação, qualidade e continuidade do negócio.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Maior visibilidade da base de parceiros',
                    'Acompanhamento rigoroso de pontos críticos',
                    'Identificação precoce de riscos operacionais',
                    'Maior organização histórica das informações',
                    'Apoio à gestão de fornecedores estratégicos',
                    'Redução da dependência de controles individuais',
                  ].map((ben, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleDeepDive('fornecedores')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-white bg-[#0F2552] hover:bg-[#163673] transition-colors"
                  >
                    <span>Quero conhecer a Controladoria de Fornecedores</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenDiagnostic('fornecedores')}
                    className="text-xs font-bold text-slate-600 hover:text-blue-900 underline underline-offset-4"
                  >
                    Diagnóstico de Fornecedores
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Solution 3: Compliance Organizacional (Section 9) */}
          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 lg:p-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100/70 text-emerald-900 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  Pilar 3: Governança Interna
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Regras claras. Responsabilidades definidas. Mais segurança para a empresa.
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Ajudamos empresas a fortalecer seus controles e sua organização interna, reduzindo vulnerabilidades e criando maior clareza sobre responsabilidades, processos e conformidade — sem juridiquês ou burocracia desnecessária.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Maior organização nos fluxos decisórios',
                    'Clareza cristalina de responsabilidades e alçadas',
                    'Redução de vulnerabilidades operacionais e financeiras',
                    'Maior rastreabilidade para os sócios e diretores',
                    'Fortalecimento consistente dos controles internos',
                    'Suporte prático à profissionalização da gestão',
                  ].map((ben, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleDeepDive('compliance')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-white bg-[#0F2552] hover:bg-[#163673] transition-colors"
                  >
                    <span>Conhecer Compliance Organizacional</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenDiagnostic('compliance')}
                    className="text-xs font-bold text-slate-600 hover:text-blue-900 underline underline-offset-4"
                  >
                    Diagnóstico de Compliance
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-800">Estrutura de Governança B2B</span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded-sm">Segurança</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="font-semibold text-slate-900">Matriz de Alçadas e Aprovações</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">Quem pode assinar, contratar e liberar pagamentos</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="font-semibold text-slate-900">Padronização de Controles Críticos</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">Rotinas periódicas que evitam retrabalho e esquecimentos</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="font-semibold text-slate-900">Rastreabilidade Documental</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">Histórico centralizado para auditorias ou transições societárias</div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 italic text-center pt-1">
                  Protege os sócios e dá autonomia com segurança aos gestores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SEÇÃO "PARA QUEM É" (Interactive Self-Assessment)
          Section 10 of Briefing: Real situations checklist
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200" id="para-quem-e">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-200">
              Aderência Operacional
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              Este serviço faz sentido para sua empresa?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Nossa solução é indicada principalmente para empresas que cresceram, estão crescendo ou já possuem uma operação complexa e precisam aumentar o nível de controle sobre suas atividades.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Pode fazer sentido se sua empresa...
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Selecione as situações abaixo que refletem o cenário atual da sua operação:
                </p>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900 flex items-center gap-2 self-start sm:self-center">
                <span>Indicadores identificados:</span>
                <span className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-[11px]">
                  {selectedSituations.length}
                </span>
              </div>
            </div>

            {/* Interactive Situation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TARGET_SITUATIONS.map((situation, index) => {
                const isChecked = selectedSituations.includes(index);
                return (
                  <div
                    key={index}
                    onClick={() => toggleSituation(index)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                      isChecked
                        ? 'border-blue-900 bg-blue-50/70 text-slate-900 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-600'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'bg-blue-900 text-white' : 'border border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-xs sm:text-sm font-medium leading-snug">
                      {situation}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Dynamic Assessment Result & Conversion Banner */}
            <div className="mt-8 pt-6 border-t border-slate-200 bg-slate-50 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Diagnóstico Rápido de Aderência
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {selectedSituations.length >= 3 ? (
                    <span className="text-blue-900">
                      Sua empresa apresenta {selectedSituations.length} pontos críticos típicos de negócios que demandam governança operacional estruturada.
                    </span>
                  ) : (
                    <span>
                      Mesmo com poucos pontos selecionados, antecipar controles previne perdas financeiras na próxima fase de expansão.
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => onOpenDiagnostic()}
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#0F2552] hover:bg-[#163673] transition-colors shadow-sm"
                id="assessment-cta-btn"
              >
                <span>Quero avaliar minha empresa</span>
                <ArrowRight className="w-4 h-4 text-blue-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SEÇÃO "O QUE SUA EMPRESA GANHA" (Perceived Results)
          Section 11 of Briefing: Focus on perceived outcomes, not technical features.
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200" id="beneficios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 border border-emerald-200">
              Resultados Práticos
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              O objetivo não é criar mais burocracia. É aumentar o controle.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Não vendemos procedimentos burocráticos que travam o dia a dia. Entregamos clareza e previsibilidade para que sua equipe trabalhe com segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUE_GAINED.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-200/90 hover:border-blue-900/30 transition-all hover:bg-white hover:shadow-md space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                    {val.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SEÇÃO DE DIFERENCIAÇÃO
          Section 12 of Briefing: Explains why hire us vs just an internal finance clerk,
          without revealing the internal machinery.
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#0B1528] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-300">
              <Compass className="w-3.5 h-3.5" />
              Posicionamento e Diferencial
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Não somos apenas mais um controle dentro da empresa.
            </h2>

            <div className="text-base sm:text-lg text-slate-300 leading-relaxed space-y-4 pt-2">
              <p>
                Nossa atuação é voltada para criar maior visibilidade sobre áreas que atravessam diferentes setores da organização.
              </p>
              <p>
                Em vez de tratar contratos, fornecedores e controles como informações isoladas mantidas em gavetas ou planilhas individuais, trabalhamos para que a gestão tenha uma visão mais organizada dos pontos que exigem acompanhamento.
              </p>
              <p className="text-white font-semibold text-lg sm:text-xl border-l-2 border-blue-400 pl-4 py-1">
                O resultado é uma estrutura de controle pensada para apoiar a gestão e proteger o negócio.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-slate-700/60">
                <div className="font-semibold text-white text-sm mb-1">Visão Transversal</div>
                <div className="text-xs text-slate-400">
                  Conectamos as áreas jurídica, de compras, operacional e financeira sem ruídos de comunicação.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-slate-700/60">
                <div className="font-semibold text-white text-sm mb-1">Independência e Foco</div>
                <div className="text-xs text-slate-400">
                  Sem desvios de função com as urgências rotineiras que frequentemente atropelam a equipe interna.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. SEÇÃO "COMO FUNCIONA" (Client Journey)
          Section 13 of Briefing: Simple 5 steps without internal complexity.
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200">
              Processo de Trabalho
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              Começar é simples.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Sem burocracia excessiva ou implantações traumáticas. Uma jornada transparente pensada para respeitar o tempo dos diretores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {JOURNEY_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0F2552] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    {step.number}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-blue-900">
                  <span>Etapa {step.number}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenDiagnostic()}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0F2552] hover:bg-[#163673] transition-colors shadow-sm"
              id="journey-cta-btn"
            >
              <Calendar className="w-4 h-4 text-blue-300" />
              <span>Solicitar diagnóstico</span>
              <ArrowRight className="w-4 h-4 text-blue-300" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. SEÇÃO DE DIAGNÓSTICO (Callout Especial de Conversão)
          Section 14 of Briefing: Highlighting the diagnostic as the main conversion tool.
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200" id="diagnostico-destaque">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50/40 rounded-3xl p-8 sm:p-12 border border-blue-200/80 shadow-xs text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              Primeiro Passo Recomendado
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              Antes de contratar, entenda onde estão seus pontos de atenção.
            </h3>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Cada empresa possui uma estrutura, um nível de complexidade e necessidades diferentes. Por isso, começamos entendendo a realidade do negócio para identificar onde existe maior necessidade de controle e acompanhamento.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenDiagnostic()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#0F2552] hover:bg-[#163673] transition-all shadow-md"
                id="highlight-diagnostic-btn"
              >
                <span>Solicitar um diagnóstico</span>
                <ArrowRight className="w-4 h-4 text-blue-300" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20de%20governan%C3%A7a%20operacional.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Avaliação preliminar sem compromisso e sob total sigilo.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. SEÇÃO DE AUTORIDADE, CREDIBILIDADE & CASES
          Sections 15 & 16 of Briefing: Real credibility without fake stats; genuine cases.
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200" id="cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200">
              Credibilidade e Experiência
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              Resultados que podem ser percebidos na gestão
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Controle empresarial exige confiança, responsabilidade e visão de negócio. Conheça cenários típicos onde nossa atuação gera valor imediato.
            </p>
          </div>

          {/* Genuine Respectful Case Studies (Section 16) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REAL_CASES.map((cs, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-md inline-block">
                    {cs.segment}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {cs.title}
                  </h3>
                  
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600 pt-2">
                    <div>
                      <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider mb-0.5">
                        Necessidade inicial:
                      </span>
                      <p>{cs.necessidade}</p>
                    </div>

                    <div>
                      <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider mb-0.5">
                        Atuação Vértice:
                      </span>
                      <p>{cs.atuacao}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/70 -mx-7 -mb-7 p-5 rounded-b-2xl">
                  <span className="font-bold text-emerald-800 block text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Resultado Percebido:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    {cs.resultado}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Trust Statement (Section 15) */}
          <div className="mt-14 max-w-3xl mx-auto text-center border-t border-slate-200 pt-10">
            <blockquote className="text-xl sm:text-2xl font-bold text-slate-800 italic">
              “Controle empresarial exige confiança, responsabilidade e visão de negócio.”
            </blockquote>
            <p className="text-xs text-slate-500 mt-2">
              Atuação pautada pela ética profissional, sigilo contratual estrito e suporte executivo contínuo.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. SEÇÃO FAQ (Perguntas Frequentes)
          Section 17 of Briefing: Fundamental to resolve key objections.
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 border border-blue-200">
              Esclarecimentos Executivos
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              Perguntas frequentes da diretoria
            </h2>
            <p className="text-base text-slate-600">
              Respostas claras e objetivas sobre o nosso modelo de trabalho.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors bg-white shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base text-slate-900 hover:bg-slate-50/70 transition-colors focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-blue-100 text-blue-900' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center text-xs text-slate-500">
            Tem outra dúvida específica sobre sua operação?{' '}
            <button
              onClick={() => onOpenDiagnostic()}
              className="text-blue-900 font-bold hover:underline"
            >
              Fale diretamente com nossos consultores
            </button>
            .
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. SEÇÃO FINAL DE CTA (Chamada de Fechamento)
          Section 18 of Briefing: Simple, direct, powerful.
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#09152B] text-white relative overflow-hidden" id="cta-final">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-semibold border border-blue-400/20">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Fortaleça a Gestão do seu Negócio
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Sua empresa cresceu.{' '}
            <span className="text-blue-200">
              Está na hora de fortalecer seus controles?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Converse com nossa equipe e entenda como podemos ajudar sua empresa a aumentar a visibilidade, organização e segurança da gestão.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDiagnostic()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-950/50 cursor-pointer"
              id="final-cta-diagnostic-btn"
            >
              <Calendar className="w-5 h-5 text-blue-200" />
              <span>Solicitar diagnóstico</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20a%20governan%C3%A7a%20operacional%20da%20minha%20empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700 transition-colors"
              id="final-cta-whatsapp-btn"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-slate-400">
            Atendimento presencial e consultivo para empresas de <strong>Rio Claro e região</strong>.
          </div>
        </div>
      </section>
    </div>
  );
};
