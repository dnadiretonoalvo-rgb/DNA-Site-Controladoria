import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  Calendar, 
  TrendingUp, 
  ShieldAlert, 
  Layers,
  Scale
} from 'lucide-react';

interface SupplierControlViewProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: (initialSituation?: any) => void;
}

export const SupplierControlView: React.FC<SupplierControlViewProps> = ({
  onNavigate,
  onOpenDiagnostic,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="bg-[#09152B] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-500/20 text-slate-300 text-xs font-bold mb-4 border border-slate-400/30">
              <Building2 className="w-4 h-4" />
              Solução Especializada
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Controladoria de Fornecedores
            </h1>
            <p className="text-xl text-blue-200 font-medium mb-3">
              Fornecedores sob controle. Operação mais previsível.
            </p>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              Estruturamos o acompanhamento dos fornecedores relevantes para que a empresa tenha maior visibilidade sobre relacionamentos que impactam custos, operação, qualidade e continuidade do negócio.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenDiagnostic('fornecedores')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm cursor-pointer"
                id="suppliers-cta-diagnostic"
              >
                <Calendar className="w-4 h-4 text-blue-200" />
                <span>Solicitar diagnóstico de fornecedores</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Os 4 Grandes Focos: Custos, Riscos, Dependência e Previsibilidade */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] tracking-tight">
              Os 4 pilares de proteção na cadeia de fornecimento
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Não basta negociar o melhor preço de compra. É necessário garantir a segurança da operação contínua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">Custos e Condições</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Histórico de compras, condições comerciais acordadas, cumprimento de tabelas de preços e reajustes justificados.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">Risco Operacional</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Monitoramento de certidões negativas, regularidade fiscal, passivos e estabilidade de parceiros críticos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">Nível de Dependência</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Identificação de fornecedores monopolistas ou insubstituíveis e plano de contingência para a produção.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-900">Previsibilidade</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Acompanhamento de prazos de entrega (SLA), qualidade e pontualidade para evitar gargalos na fábrica ou no escritório.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que sua empresa ganha */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Benefícios diretos para a diretoria e área de compras
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
              {[
                'Maior visibilidade e consolidação da base de fornecedores',
                'Acompanhamento contínuo dos pontos críticos de cada relação comercial',
                'Identificação proativa de riscos de parada na operação',
                'Maior organização dos documentos, alvarás e certidões',
                'Apoio estratégico à negociação com parceiros-chave',
                'Redução da dependência de controles manuais ou individuais de funcionários',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Modelo voltado a indústrias, distribuidoras e empresas com grande volume de parceiros.
              </span>
              <button
                onClick={() => onOpenDiagnostic('fornecedores')}
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#0F2552] hover:bg-[#163673] transition-colors"
              >
                Solicitar diagnóstico de fornecedores
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
