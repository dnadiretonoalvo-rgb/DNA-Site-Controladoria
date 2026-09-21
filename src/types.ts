export type PageId =
  | 'home'
  | 'contratos'
  | 'fornecedores'
  | 'compliance'
  | 'para-quem-e'
  | 'como-funciona'
  | 'sobre'
  | 'faq'
  | 'contato'
  | 'diagnostico';

export type DiagnosticSituation =
  | 'contratos'
  | 'fornecedores'
  | 'compliance'
  | 'organizacao'
  | 'ainda-nao-sei';

export interface DiagnosticFormData {
  nome: string;
  empresa: string;
  cargo: string;
  telefone: string;
  email: string;
  cidade: string;
  situacao: DiagnosticSituation;
  detalhes?: string;
  quantidadeContratosOuFornecedores?: string;
}

export interface PillarCard {
  title: string;
  headline: string;
  description: string;
  items: string[];
  pageId: PageId;
  ctaText: string;
}

export interface BenefitCard {
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CaseStudy {
  segment: string;
  title: string;
  necessidade: string;
  atuacao: string;
  resultado: string;
}
