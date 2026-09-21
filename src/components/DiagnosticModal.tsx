import React, { useState } from 'react';
import { DiagnosticFormData, DiagnosticSituation } from '../types';
import { COMPANY_INFO } from '../data/content';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Lock, 
  MessageSquare, 
  Building, 
  User, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin,
  HelpCircle
} from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSituation?: DiagnosticSituation;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  initialSituation = 'ainda-nao-sei',
}) => {
  const [formData, setFormData] = useState<DiagnosticFormData>({
    nome: '',
    empresa: '',
    cargo: '',
    telefone: '',
    email: '',
    cidade: 'Rio Claro - SP',
    situacao: initialSituation,
    detalhes: '',
    quantidadeContratosOuFornecedores: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const getSituationLabel = (situacao: DiagnosticSituation) => {
    switch (situacao) {
      case 'contratos': return 'Controladoria de Contratos';
      case 'fornecedores': return 'Controladoria de Fornecedores';
      case 'compliance': return 'Compliance e Governança';
      case 'organizacao': return 'Organização e Controles Gerais';
      case 'ainda-nao-sei': return 'Avaliação Geral (Ainda a definir)';
    }
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Olá, gostaria de solicitar um diagnóstico de governança operacional.\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Empresa:* ${formData.empresa}\n` +
      `*Cargo:* ${formData.cargo}\n` +
      `*Cidade:* ${formData.cidade}\n` +
      `*Principal Necessidade:* ${getSituationLabel(formData.situacao)}\n` +
      (formData.quantidadeContratosOuFornecedores ? `*Porte/Volume:* ${formData.quantidadeContratosOuFornecedores}\n` : '') +
      (formData.detalhes ? `*Observações:* ${formData.detalhes}` : '')
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        id="diagnostic-modal-container"
      >
        {/* Modal Header */}
        <div className="bg-[#0B1528] text-white px-6 py-5 sm:px-8 sm:py-6 border-b border-slate-800 flex items-start justify-between">
          <div className="pr-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Diagnóstico de Governança
              </span>
              <span className="text-xs text-slate-400">Sem compromisso</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Entenda onde estão os pontos de atenção da sua empresa
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
              Avaliamos a realidade e o momento do seu negócio para identificar onde existe maior necessidade de controle, organização e mitigação de perdas.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors focus:outline-hidden"
            id="modal-close-btn"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200" id="diagnostic-success-view">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#0B1528]">
                  Solicitação de Diagnóstico Recebida!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Agradecemos a confiança, <span className="font-semibold text-slate-900">{formData.nome}</span>. Nossa diretoria técnica entrará em contato em até 24 horas úteis para alinhar a análise preliminar da <span className="font-semibold text-slate-900">{formData.empresa}</span>.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 rounded-xl p-4 text-left border border-slate-200 text-xs sm:text-sm space-y-2 max-w-md mx-auto">
                <div className="font-bold text-slate-800 pb-1 border-b border-slate-200 flex justify-between items-center">
                  <span>Resumo do Diagnóstico Solicitado</span>
                  <span className="text-[11px] font-normal text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">Protocolo Ativo</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-600 pt-1">
                  <div><span className="font-medium text-slate-900">Empresa:</span> {formData.empresa}</div>
                  <div><span className="font-medium text-slate-900">Cargo:</span> {formData.cargo}</div>
                  <div><span className="font-medium text-slate-900">Local:</span> {formData.cidade}</div>
                  <div><span className="font-medium text-slate-900">Foco:</span> {getSituationLabel(formData.situacao)}</div>
                </div>
              </div>

              {/* WhatsApp direct acceleration button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-sm"
                  id="whatsapp-direct-confirmation-btn"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Acelerar atendimento via WhatsApp</span>
                </a>
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-5 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 border border-slate-300 transition-colors"
                  id="close-success-btn"
                >
                  Concluir e Fechar
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-3">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Suas informações estão protegidas sob sigilo corporativo e acordo de confidencialidade.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" id="diagnostic-form">
              {/* Row 1: Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-nome">
                    Seu Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      id="field-nome"
                      required
                      placeholder="Ex: Carlos Mendonça"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-empresa">
                    Nome da Empresa *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      id="field-empresa"
                      required
                      placeholder="Ex: Grupo Industrial Paulista"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden transition-all text-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Role and City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-cargo">
                    Seu Cargo ou Função *
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      id="field-cargo"
                      required
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden transition-all text-slate-900"
                    >
                      <option value="">Selecione seu cargo...</option>
                      <option value="Sócio-proprietário / Acionista">Sócio-proprietário / Acionista</option>
                      <option value="Diretor / CEO / Superintendente">Diretor / CEO / Superintendente</option>
                      <option value="CFO / Diretor Financeiro">CFO / Diretor Financeiro</option>
                      <option value="Gestor Administrativo">Gestor Administrativo</option>
                      <option value="Gestor de Operações">Gestor de Operações</option>
                      <option value="Gestor de Compras / Suprimentos">Gestor de Compras / Suprimentos</option>
                      <option value="Outro cargo executivo">Outro cargo executivo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-cidade">
                    Cidade / Região *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      id="field-cidade"
                      required
                      placeholder="Ex: Rio Claro - SP"
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden transition-all text-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Phone/WhatsApp and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-telefone">
                    Telefone / WhatsApp Comercial *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      id="field-telefone"
                      required
                      placeholder="(19) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-email">
                    E-mail Corporativo *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      id="field-email"
                      required
                      placeholder="carlos@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden transition-all text-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* Crucial Question from Briefing Section 20 */}
              <div className="pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2" htmlFor="field-situacao">
                  Qual situação você gostaria de melhorar na sua empresa? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'contratos', label: 'Contratos (prazos, reajustes, renovações)' },
                    { id: 'fornecedores', label: 'Fornecedores (riscos, dependência, custos)' },
                    { id: 'compliance', label: 'Compliance (alçadas, regras, organização)' },
                    { id: 'organizacao', label: 'Organização geral / controles paralelos' },
                    { id: 'ainda-nao-sei', label: 'Ainda não sei (quero uma avaliação geral)' },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer text-xs transition-all ${
                        formData.situacao === option.id
                          ? 'border-blue-900 bg-blue-50/80 font-semibold text-blue-950 shadow-xs'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="situacao"
                        value={option.id}
                        checked={formData.situacao === option.id}
                        onChange={() => setFormData({ ...formData, situacao: option.id as DiagnosticSituation })}
                        className="mt-0.5 text-blue-900 focus:ring-blue-900"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Volume / Approximate info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-volume">
                    Volume aproximado de contratos ou fornecedores (opcional)
                  </label>
                  <select
                    id="field-volume"
                    value={formData.quantidadeContratosOuFornecedores}
                    onChange={(e) => setFormData({ ...formData, quantidadeContratosOuFornecedores: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden transition-all text-slate-900"
                  >
                    <option value="">Selecione se souber...</option>
                    <option value="Até 20 contratos / fornecedores">Até 20 contratos ou fornecedores ativos</option>
                    <option value="20 a 50 contratos / fornecedores">20 a 50 contratos ou fornecedores ativos</option>
                    <option value="50 a 150 contratos / fornecedores">50 a 150 contratos ou fornecedores ativos</option>
                    <option value="Mais de 150 contratos / fornecedores">Mais de 150 contratos ou fornecedores ativos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-detalhes">
                    Algum detalhe ou desafio específico? (opcional)
                  </label>
                  <input
                    type="text"
                    id="field-detalhes"
                    placeholder="Ex: Tivemos problemas recentes com reajustes"
                    value={formData.detalhes}
                    onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden transition-all text-slate-900"
                  />
                </div>
              </div>

              {/* Security note */}
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 flex items-center gap-2.5 text-xs text-slate-600">
                <Lock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>
                  <strong>Garantia de Sigilo:</strong> Suas informações são estritamente confidenciais e utilizadas apenas para o diagnóstico preliminar com a diretoria.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-lg font-bold text-sm text-white bg-[#0F2552] hover:bg-[#163673] active:bg-[#0A1A3A] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  id="submit-diagnostic-btn"
                >
                  {submitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Processando solicitação...
                    </span>
                  ) : (
                    <>
                      <span>Solicitar diagnóstico</span>
                      <ArrowRight className="w-4 h-4 text-blue-300" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
