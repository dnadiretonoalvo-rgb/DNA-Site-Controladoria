import React, { useState } from 'react';
import { DiagnosticFormData, DiagnosticSituation, PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Lock, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Building,
  User,
  Briefcase
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<DiagnosticFormData>({
    nome: '',
    empresa: '',
    cargo: '',
    telefone: '',
    email: '',
    cidade: 'Rio Claro - SP',
    situacao: 'ainda-nao-sei',
    detalhes: '',
    quantidadeContratosOuFornecedores: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      (formData.detalhes ? `*Observações:* ${formData.detalhes}` : '')
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="bg-[#09152B] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold mb-4 border border-blue-400/30">
              <Calendar className="w-4 h-4" />
              Canais Diretos de Comunicação
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Solicitar Diagnóstico ou Contato
            </h1>
            <p className="text-xl text-blue-200 font-medium mb-3">
              Antes de contratar, entenda onde estão seus pontos de atenção.
            </p>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              Preencha o formulário abaixo ou utilize nossos canais diretos para agendar uma conversa com nossa diretoria técnica. Todas as informações são estritamente confidenciais.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Contact Info */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Contact Information (Span 5) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0B1528] mb-3">
                  Atendimento Empresarial
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Realizamos atendimentos presenciais e consultivos em Rio Claro e em todo o polo regional paulista, com flexibilidade para reuniões na sede da sua empresa.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Telefone e WhatsApp</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{COMPANY_INFO.phoneDisplay}</div>
                    <div className="text-xs text-slate-600 mt-1">
                      WhatsApp direto:{' '}
                      <a 
                        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        {COMPANY_INFO.whatsappDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">E-mail Corporativo</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{COMPANY_INFO.email}</div>
                    <div className="text-xs text-slate-500 mt-1">Canal exclusivo para contato com diretores e sócios</div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Sede Regional</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{COMPANY_INFO.address}</div>
                    <div className="text-xs text-slate-500 mt-1">Rio Claro - SP | Polo Regional</div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0F2552] text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-200">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Compromisso de Sigilo (NDA)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Garantimos que toda conversa, diagnóstico ou análise preliminar é tratada sob rigoroso sigilo corporativo.
                </p>
              </div>
            </div>

            {/* Right Col: Dedicated Diagnostic Form (Span 7) */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-10 border border-slate-200">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1528]">
                  Formulário de Diagnóstico Inicial
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Responda os campos abaixo para entendermos a realidade e a complexidade atual da sua organização.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B1528]">
                    Solicitação Recebida com Sucesso!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Entraremos em contato em até 24 horas úteis para apresentar o diagnóstico preliminar e alinhar os próximos passos.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Notificar agora pelo WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="c-nome">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="c-nome"
                        required
                        placeholder="Seu nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="c-empresa">
                        Nome da Empresa *
                      </label>
                      <input
                        type="text"
                        id="c-empresa"
                        required
                        placeholder="Nome da sua empresa"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="c-cargo">
                        Cargo / Função *
                      </label>
                      <select
                        id="c-cargo"
                        required
                        value={formData.cargo}
                        onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden"
                      >
                        <option value="">Selecione...</option>
                        <option value="Sócio-proprietário / Acionista">Sócio-proprietário / Acionista</option>
                        <option value="Diretor / CEO">Diretor / CEO</option>
                        <option value="CFO / Diretor Financeiro">CFO / Diretor Financeiro</option>
                        <option value="Gestor Administrativo">Gestor Administrativo</option>
                        <option value="Gestor de Operações">Gestor de Operações</option>
                        <option value="Gestor de Compras">Gestor de Compras</option>
                        <option value="Outro cargo executivo">Outro cargo executivo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="c-cidade">
                        Cidade / UF *
                      </label>
                      <input
                        type="text"
                        id="c-cidade"
                        required
                        placeholder="Ex: Rio Claro - SP"
                        value={formData.cidade}
                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="c-tel">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="c-tel"
                        required
                        placeholder="(19) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="c-email">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        id="c-email"
                        required
                        placeholder="diretoria@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Qual situação você gostaria de melhorar? *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { id: 'contratos', label: 'Contratos (prazos, reajustes, renovações)' },
                        { id: 'fornecedores', label: 'Fornecedores (riscos, dependência, custos)' },
                        { id: 'compliance', label: 'Compliance (alçadas, regras, organização)' },
                        { id: 'organizacao', label: 'Organização geral / controles paralelos' },
                        { id: 'ainda-nao-sei', label: 'Ainda não sei (quero uma avaliação geral)' },
                      ].map((opt) => (
                        <label
                          key={opt.id}
                          className={`flex items-start gap-2 p-2.5 rounded-lg border cursor-pointer text-xs transition-all ${
                            formData.situacao === opt.id
                              ? 'border-blue-900 bg-blue-50/80 font-semibold text-blue-950 shadow-xs'
                              : 'border-slate-200 hover:bg-slate-50 text-slate-700 bg-white'
                          }`}
                        >
                          <input
                            type="radio"
                            name="contact-situacao"
                            value={opt.id}
                            checked={formData.situacao === opt.id}
                            onChange={() => setFormData({ ...formData, situacao: opt.id as DiagnosticSituation })}
                            className="mt-0.5 text-blue-900 focus:ring-blue-900"
                          />
                          <span>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1" htmlFor="c-detalhes">
                      Mensagem ou observações adicionais (opcional)
                    </label>
                    <textarea
                      id="c-detalhes"
                      rows={3}
                      placeholder="Descreva brevemente o momento da empresa..."
                      value={formData.detalhes}
                      onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-hidden"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-lg font-bold text-sm text-white bg-[#0F2552] hover:bg-[#163673] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    id="contact-submit-btn"
                  >
                    <span>Solicitar diagnóstico</span>
                    <ArrowRight className="w-4 h-4 text-blue-300" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
