import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  HelpCircle,
  TrendingDown,
  DollarSign
} from 'lucide-react';

interface ContractControlViewProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: (initialSituation?: any) => void;
}

export const ContractControlView: React.FC<ContractControlViewProps> = ({
  onNavigate,
  onOpenDiagnostic,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="bg-[#09152B] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold mb-4 border border-blue-400/30">
              <FileText className="w-4 h-4" />
              Solução Especializada
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Controladoria de Contratos
            </h1>
            <p className="text-xl text-blue-200 font-medium mb-3">
              Mais controle sobre os contratos que movimentam sua empresa.
            </p>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              Acompanhamos informações, prazos, obrigações e condições contratuais relevantes para ajudar sua empresa a reduzir riscos, evitar perdas financeiras e manter maior controle sobre seus compromissos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenDiagnostic('contratos')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm cursor-pointer"
                id="contracts-cta-diagnostic"
              >
                <Calendar className="w-4 h-4 text-blue-200" />
                <span>Solicitar diagnóstico de contratos</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema e Riscos nos Contratos */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Onde as perdas acontecem
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] tracking-tight">
                Contratos esquecidos geram custos desnecessários todos os meses.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                À medida que a carteira de parceiros e clientes aumenta, manter o controle em planilhas ou na memória de colaboradores torna-se uma armadilha silenciosa.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  {
                    title: 'Renovações automáticas indesejadas',
                    desc: 'Contratos que continuam sendo faturados porque o prazo de rescisão ou denúncia prévia não foi observado.',
                  },
                  {
                    title: 'Reajustes aplicados sem conferência',
                    desc: 'Fornecedores que aplicam índices errados ou repassam aumentos sem validação contra o contrato original.',
                  },
                  {
                    title: 'Descumprimento de obrigações recíprocas',
                    desc: 'Prazos de entrega, marcos de pagamento ou contrapartidas que geram multas e desgastes operacionais.',
                  },
                  {
                    title: 'Dispersão de minutas e aditivos',
                    desc: 'Documentos espalhados em pastas locais, e-mails de ex-funcionários ou gavetas físicas.',
                  },
                ].map((risk, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{risk.title}</div>
                      <div className="text-xs text-slate-600 mt-0.5">{risk.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                O que a Controladoria de Contratos entrega
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Criamos uma estrutura de acompanhamento periódico para que a diretoria tenha visibilidade total de cada cláusula econômica e temporal relevante.
              </p>

              <div className="space-y-3">
                {[
                  'Maior visibilidade da carteira completa de contratos',
                  'Acompanhamento proativo de vencimentos, repactuações e avisos prévios',
                  'Redução drástica de riscos de vencimentos involuntários',
                  'Identificação antecipada de pontos críticos que exigem negociação',
                  'Maior controle sobre os índices e valores efetivamente contratados',
                  'Base confiável para apoiar tomadas de decisão da diretoria e do financeiro',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 font-medium">
                <strong>Importante:</strong> Não substituímos o departamento jurídico. Nossa atuação é de organização, controladoria e governança operacional, apoiando o trabalho dos advogados e da diretoria.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Situações em que é indicada */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] tracking-tight">
              Quando este serviço é mais indicado?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Empresas que apresentam um ou mais dos seguintes cenários:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Volume superior a 20 contratos ativos entre fornecedores e clientes',
              'Contratos com cláusulas complexas de reajuste (IGP-M, IPCA, INCC, etc.)',
              'Histórico de multas contratuais pagas por perda de prazos de rescisão',
              'Incerteza sobre quais são exatamente as minutas e aditivos em vigor',
              'Ausência de um responsável único pelo acompanhamento do ciclo de vida contratual',
              'Empresas em preparação para auditorias, captações de crédito ou transições societárias',
            ].map((sit, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">{sit}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenDiagnostic('contratos')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0F2552] hover:bg-[#163673] transition-colors shadow-sm"
            >
              <span>Avaliar a situação dos contratos da minha empresa</span>
              <ArrowRight className="w-4 h-4 text-blue-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
