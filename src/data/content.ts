import { FaqItem, CaseStudy, StepItem } from '../types';

export const COMPANY_INFO = {
  name: 'Vértice Governança Operacional',
  shortName: 'Vértice',
  tagline: 'Controle para empresas que cresceram.',
  concept: 'Mais controle sobre o que acontece dentro da empresa. Mais visibilidade para quem toma as decisões.',
  brandIdea: 'Transformar informações dispersas, obrigações e relacionamentos críticos em uma estrutura de controle que dê mais segurança e visibilidade à gestão.',
  region: 'Rio Claro e região paulista',
  cities: ['Rio Claro', 'Limeira', 'Piracicaba', 'Araras', 'Campinas', 'Cordeirópolis', 'Ipeúna', 'Santa Gertrudes'],
  phoneDisplay: '(19) 3522-8900',
  whatsappDisplay: '(19) 99782-4120',
  whatsappNumber: '5519997824120',
  email: 'diretoria@verticegovernanca.com.br',
  address: 'Rua 3-A, 1120 - Cidade Nova, Rio Claro - SP',
  workingHours: 'Segunda a Sexta, das 08h00 às 18h00',
};

export const PROBLEMS_PILLARS = [
  {
    id: 'contratos',
    title: 'Contratos',
    subtitle: 'Obrigações e prazos em risco',
    items: ['Prazos e renovações', 'Reajustes e índices', 'Obrigações contratuais', 'Condições comerciais', 'Garantias e penalidades'],
    icon: 'FileText',
    color: 'border-blue-900/20 bg-blue-950/5',
  },
  {
    id: 'fornecedores',
    title: 'Fornecedores',
    subtitle: 'Relações críticas sem acompanhamento',
    items: ['Desempenho e SLA', 'Documentação e regularidade', 'Dependência operacional', 'Condições comerciais', 'Riscos de interrupção'],
    icon: 'Building2',
    color: 'border-slate-800/20 bg-slate-900/5',
  },
  {
    id: 'governanca',
    title: 'Governança & Compliance',
    subtitle: 'Processos e controles fragilizados',
    items: ['Responsabilidades definidas', 'Controles internos', 'Padronização de processos', 'Conformidade contínua', 'Rastreabilidade decisória'],
    icon: 'ShieldCheck',
    color: 'border-emerald-900/20 bg-emerald-950/5',
  },
];

export const TARGET_SITUATIONS = [
  'Possui muitos contratos ativos espalhados por diferentes pastas e e-mails',
  'Trabalha com diversos fornecedores críticos e recorrentes',
  'Depende de pessoas específicas da equipe para lembrar prazos e obrigações',
  'Utiliza diversas planilhas e controles paralelos que não conversam entre si',
  'Possui informações e documentos dispersos entre departamentos distintos',
  'Está passando por fase acelerada de crescimento, expansão ou fusão',
  'Precisa profissionalizar a gestão sem burocratizar excessivamente o dia a dia',
  'Deseja reduzir riscos operacionais, perdas financeiras e retrabalho',
  'Busca aumentar a visibilidade e clareza da diretoria sobre o que acontece na operação',
];

export const VALUE_GAINED = [
  {
    title: 'Mais visibilidade',
    description: 'Informações relevantes mais organizadas e consolidadas para apoiar a diretoria e os sócios.',
    badge: 'Controle',
  },
  {
    title: 'Menos dependência de pessoas',
    description: 'Menor concentração de informações críticas em indivíduos, evitando vulnerabilidade se houver troca de equipe.',
    badge: 'Continuidade',
  },
  {
    title: 'Mais previsibilidade',
    description: 'Maior capacidade de antecipar prazos, obrigações contratuais e situações que exigem atenção imediata.',
    badge: 'Prevenção',
  },
  {
    title: 'Redução de riscos',
    description: 'Identificação e acompanhamento constante de pontos que podem gerar multas, perdas ou litígios.',
    badge: 'Proteção',
  },
  {
    title: 'Mais segurança para decidir',
    description: 'Decisões estratégicas apoiadas por informações confiáveis, atualizadas e facilmente acessíveis.',
    badge: 'Estratégia',
  },
  {
    title: 'Gestão mais profissional',
    description: 'Estruturas de controle compatíveis com o nível real de complexidade e maturidade da sua empresa.',
    badge: 'Governança',
  },
];

export const JOURNEY_STEPS: StepItem[] = [
  {
    number: 1,
    title: 'Conversa inicial',
    description: 'Entendemos o momento atual da sua empresa, o porte da operação e os principais desafios enfrentados pela gestão.',
  },
  {
    number: 2,
    title: 'Diagnóstico',
    description: 'Identificamos os pontos críticos que merecem maior atenção imediata e as oportunidades de fortalecimento de controle.',
  },
  {
    number: 3,
    title: 'Proposta',
    description: 'Apresentamos um modelo de atuação sob medida para o volume e as necessidades específicas da sua organização.',
  },
  {
    number: 4,
    title: 'Implementação',
    description: 'Iniciamos a estruturação e organização dos fluxos de acompanhamento acordados, sem travar sua rotina diária.',
  },
  {
    number: 5,
    title: 'Acompanhamento',
    description: 'Sua diretoria passa a contar com acompanhamento contínuo, relatórios periódicos e visão clara dos pontos definidos.',
  },
];

export const REAL_CASES: CaseStudy[] = [
  {
    segment: 'Indústria de Manufatura e Embalagens',
    title: 'Reestruturação do Acompanhamento de Fornecedores Críticos',
    necessidade: 'Mais de 120 fornecedores recorrentes, frequentes atrasos sem penalidades previstas aplicadas e reajustes automáticos não conferidos.',
    atuacao: 'Estruturação do acompanhamento dos fornecedores estratégicos, mapeamento de dependências e monitoramento de certidões e prazos de entrega.',
    resultado: 'Previsibilidade de custos, mitigação de riscos de interrupção fabril e maior segurança para a diretoria industrial nas renegociações.',
  },
  {
    segment: 'Empresa de Distribuição e Logística B2B',
    title: 'Controladoria de Contratos de Frotas e Armazenagem',
    necessidade: 'Contratos dispersos em múltiplos departamentos, renovações automáticas indesejadas e ausência de arquivo centralizado de obrigações.',
    atuacao: 'Organização estruturada de todos os contratos vigentes, acompanhamento rigoroso de datas de repactuação e marcos de obrigações.',
    resultado: 'Eliminação de renovações passivas com reajustes indevidos e visibilidade integral dos compromissos vigentes pelo CFO e diretoria.',
  },
  {
    segment: 'Grupo de Serviços Corporativos em Expansão',
    title: 'Estruturação de Compliance Operacional e Rastreabilidade',
    necessidade: 'Crescimento de 40% em dois anos gerando sobrecarga na liderança e controles paralelos em planilhas sem responsáveis claros.',
    atuacao: 'Definição de regras de alçada, matriz clara de responsabilidades e rotinas periódicas de conferência de conformidade.',
    resultado: 'Redução drástica da dependência de pessoas-chave na gestão e estrutura preparada para novas rodadas de expansão.',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Minha empresa precisa ter um departamento jurídico?',
    answer: 'Não necessariamente. A nossa atuação funciona como uma estrutura de controle, organização e acompanhamento operacional da gestão, sem substituir serviços jurídicos quando pareceres contenciosos ou específicos forem necessários. Quando a empresa já possui assessoria jurídica externa ou interna, trabalhamos em total sinergia, fornecendo subsídios organizados para que o jurídico atue com muito mais precisão.',
  },
  {
    question: 'É indicado apenas para grandes empresas?',
    answer: 'Não. O principal fator não é o faturamento bruto isolado, mas sim o nível de complexidade da operação. Pequenas e médias empresas estruturadas que possuem dezenas de contratos ativos, múltiplos fornecedores recorrentes e várias pessoas envolvidas na tomada de decisão já sofrem com a perda de controle e se beneficiam imediatamente da nossa solução.',
  },
  {
    question: 'Vocês trabalham com empresas de qualquer segmento?',
    answer: 'Atendemos prioritariamente indústrias, distribuidoras, empresas de serviços B2B, empresas familiares em fase de profissionalização e organizações com contratos recorrentes. Avaliamos cada negócio individualmente durante o diagnóstico inicial para assegurar que a nossa solução gere valor concreto para o setor em questão.',
  },
  {
    question: 'Preciso mudar todos os meus softwares e sistemas de gestão?',
    answer: 'De forma alguma. Evitamos qualquer ruptura tecnológica ou investimento forçado em novos softwares. Nossa abordagem avalia a realidade operacional atual da sua empresa e estrutura o acompanhamento de forma a integrar os fluxos existentes, sem sobrecarregar sua equipe de TI ou paralisar o trabalho diário.',
  },
  {
    question: 'Quanto custa a contratação?',
    answer: 'Como se trata de uma solução consultiva e estruturada sob medida, o investimento varia de acordo com o volume de contratos, quantidade de fornecedores acompanhados e o nível de profundidade exigido pela gestão. No diagnóstico inicial (que é gratuito e sem compromisso), mapeamos o cenário e apresentamos uma proposta justa e perfeitamente dimensionada.',
  },
  {
    question: 'O serviço substitui funcionários da minha empresa?',
    answer: 'Não. Não vendemos redução de equipe. O objetivo da governança operacional é complementar, apoiar e fortalecer a estrutura de gestão e controle da empresa. Desafogamos sua equipe técnica e financeira de controles manuais dispersos, permitindo que seus líderes foquem no crescimento do negócio com segurança.',
  },
];
