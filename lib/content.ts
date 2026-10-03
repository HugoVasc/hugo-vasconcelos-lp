import type { Locale } from "./i18n";

/**
 * Projetos descritos apenas com o que foi informado (sem métricas ou ferramentas inventadas).
 * Ao ter mais detalhes (stack, ganhos, prazos), acrescente em `delivered`, `results` e `stack`.
 */

type Project = {
  tag: string;
  title: string;
  context: string;
  delivered: string[];
  results: string;
  stack: string[];
};

export type Dict = {
  meta: { title: string; description: string; keywords: string[]; ogAlt: string };
  nav: { about: string; skills: string; projects: string; contact: string; hire: string; menu: string; lang: string };
  hero: {
    badge: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    ctaProjects: string;
    ctaEmail: string;
    ctaWhatsapp: string;
    scroll: string;
  };
  about: { eyebrow: string; title: string; paragraphs: string[]; highlights: string[]; cardLabel: string; cardValue: string };
  skills: { eyebrow: string; title: string; pillars: { name: string; description: string; tools: string[] }[] };
  projects: { eyebrow: string; title: string; context: string; delivered: string; results: string; stack: string; items: Project[] };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    email: string;
    whatsapp: string;
    emailLabel: string;
    chooseTitle: string;
    chooseText: string;
    previewLabel: string;
    messages: { emailSubject: string; emailBody: string; whatsappText: string };
  };
  footer: { tagline: string; rights: string; top: string; github: string; linkedin: string; emailLabel: string };
  jobTitle: string;
};

const pt: Dict = {
  meta: {
    title: "Hugo Vasconcelos | Engenharia de Dados, IA e Analytics",
    description:
      "Profissional de dados com atuação em Engenharia de Dados, Inteligência Artificial e Analytics. Conheça meus principais projetos e fale comigo por e-mail ou WhatsApp.",
    keywords: ["engenheiro de dados", "engenharia de dados", "inteligência artificial", "analytics", "data engineer", "pipelines de dados", "business intelligence", "Hugo Vasconcelos"],
    ogAlt: "Hugo Vasconcelos — Engenharia de Dados, IA e Analytics",
  },
  nav: { about: "Sobre", skills: "Serviços", projects: "Projetos", contact: "Contato", hire: "Fale comigo", menu: "Abrir menu", lang: "Idioma" },
  hero: {
    badge: "Disponível para projetos",
    titleA: "Transformando dados em",
    titleB: "decisões e valor",
    subtitle:
      "Sou Hugo Vasconcelos, profissional de dados. Construo plataformas confiáveis, soluções de IA aplicadas ao negócio e análises que a liderança realmente usa.",
    ctaProjects: "Ver projetos",
    ctaEmail: "Enviar e-mail",
    ctaWhatsapp: "Chamar no WhatsApp",
    scroll: "Rolar",
  },
  about: {
    eyebrow: "Sobre mim",
    title: "Profissional de dados com mentalidade de construtor",
    paragraphs: [
      "Atuo na ponte entre tecnologia e negócio: da ingestão e modelagem dos dados à entrega de dashboards, modelos preditivos e soluções com IA generativa.",
      "Valorizo pipelines simples de operar, qualidade de dados mensurável e documentação clara — para que o time continue evoluindo a solução depois da entrega.",
    ],
    highlights: [
      "Pipelines de dados em larga escala (+1 bilhão de registros)",
      "Extração de dados estruturados e não estruturados com LLM",
      "Painéis analíticos e relatórios para apoiar decisões",
      "Comunicação clara entre áreas técnicas e de negócio",
    ],
    cardLabel: "Foco",
    cardValue: "Dados · IA · Analytics",
  },
  skills: {
    eyebrow: "O que eu faço",
    title: "Serviços pensados para a sua jornada de dados",
    pillars: [
      {
        name: "Engenharia de Dados",
        description: "Pipelines ELT/ETL, modelagem dimensional, data lakes/lakehouses, orquestração, qualidade e governança.",
        tools: ["Python", "SQL", "Spark", "Airflow", "dbt", "Cloud"],
      },
      {
        name: "Inteligência Artificial",
        description: "Modelos de machine learning, MLOps básico e aplicações com LLMs e RAG sobre dados da empresa.",
        tools: ["scikit-learn", "LLMs", "RAG", "MLflow", "APIs"],
      },
      {
        name: "Analytics",
        description: "Camada semântica, métricas de negócio, dashboards e storytelling com dados para tomada de decisão.",
        tools: ["Power BI", "SQL", "Métricas", "Storytelling"],
      },
    ],
  },
  projects: {
    eyebrow: "Portfólio",
    title: "Projetos em destaque",
    context: "Contexto",
    delivered: "O que entreguei",
    results: "Resultado",
    stack: "Stack",
    items: [
      {
        tag: "Engenharia de Dados & Analytics",
        title: "Pipeline e painel analítico de categorização de clientes",
        context: "Era preciso processar a categoria dos clientes sobre uma base com mais de 1 bilhão de registros e disponibilizar o resultado para análise.",
        delivered: [
          "Pipeline de processamento em larga escala, cobrindo mais de 1 bilhão de registros.",
          "Cálculo da categoria dos clientes dentro do pipeline.",
          "Painel analítico para consultar e explorar as categorias de clientes.",
        ],
        results: "Categorização de clientes sobre mais de 1 bilhão de registros, acessível em um painel analítico.",
        stack: ["Pipeline de dados", "Alto volume (+1 bi)", "Painel analítico"],
      },
      {
        tag: "Engenharia de Dados & IA",
        title: "Pipeline de análise de licitações com LLM",
        context: "As licitações combinam dados estruturados e documentos não estruturados, o que dificulta a análise em escala e a identificação de oportunidades.",
        delivered: [
          "Extração de dados estruturados (JSON) e não estruturados das licitações.",
          "Integração com LLM para interpretar o conteúdo extraído.",
          "Relatório para análise jurídica, base para a posterior abordagem comercial.",
        ],
        results: "Licitações transformadas em relatórios prontos para a análise jurídica e para apoiar a abordagem comercial.",
        stack: ["Extração JSON", "Dados não estruturados", "LLM", "Relatórios"],
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos construir algo incrível juntos?",
    text: "Tem um desafio com dados, IA ou analytics? Seja uma plataforma de dados, um painel que conte uma história ou uma solução com IA — vamos conversar.",
    email: "Entrar em contato por e-mail",
    whatsapp: "Entrar em contato pelo WhatsApp",
    emailLabel: "E-mail",
    chooseTitle: "Escolha como falar comigo",
    chooseText: "A mensagem já vai pronta, é só ajustar e enviar.",
    previewLabel: "Mensagem sugerida",
    messages: {
      emailSubject: "Contato pelo site — projeto de dados",
      emailBody:
        "Olá, Hugo!\n\nVi seu site e gostaria de conversar sobre um projeto de dados.\n\nNome:\nEmpresa:\nResumo do desafio:\n\nObrigado!",
      whatsappText: "Olá, Hugo! Vi seu site e gostaria de conversar sobre um projeto de dados.",
    },
  },
  footer: {
    tagline: "Engenharia de Dados · IA · Analytics",
    rights: "Todos os direitos reservados.",
    top: "Voltar ao topo",
    github: "GitHub",
    linkedin: "LinkedIn",
    emailLabel: "E-mail",
  },
  jobTitle: "Profissional de dados — Engenharia de Dados, IA e Analytics",
};

const en: Dict = {
  meta: {
    title: "Hugo Vasconcelos | Data Engineering, AI & Analytics",
    description:
      "Data professional working across Data Engineering, Artificial Intelligence and Analytics. See my main projects and get in touch by email or WhatsApp.",
    keywords: ["data engineer", "data engineering", "artificial intelligence", "analytics", "data pipelines", "business intelligence", "Hugo Vasconcelos"],
    ogAlt: "Hugo Vasconcelos — Data Engineering, AI & Analytics",
  },
  nav: { about: "About", skills: "Services", projects: "Projects", contact: "Contact", hire: "Hire me", menu: "Open menu", lang: "Language" },
  hero: {
    badge: "Available for projects",
    titleA: "Turning data into",
    titleB: "decisions & value",
    subtitle:
      "I'm Hugo Vasconcelos, a data professional. I build reliable platforms, business-focused AI solutions and analytics that leadership actually uses.",
    ctaProjects: "View projects",
    ctaEmail: "Send an email",
    ctaWhatsapp: "Message on WhatsApp",
    scroll: "Scroll",
  },
  about: {
    eyebrow: "About me",
    title: "Data professional with a builder's mindset",
    paragraphs: [
      "I work at the bridge between technology and business: from data ingestion and modeling to dashboards, predictive models and generative AI solutions.",
      "I value pipelines that are simple to operate, measurable data quality and clear documentation — so the team can keep evolving the solution after delivery.",
    ],
    highlights: [
      "Large-scale data pipelines (1B+ records)",
      "Structured and unstructured data extraction with LLMs",
      "Analytics dashboards and reports that support decisions",
      "Clear communication between technical and business teams",
    ],
    cardLabel: "Focus",
    cardValue: "Data · AI · Analytics",
  },
  skills: {
    eyebrow: "What I do",
    title: "Services built around your data journey",
    pillars: [
      {
        name: "Data Engineering",
        description: "ELT/ETL pipelines, dimensional modeling, data lakes/lakehouses, orchestration, quality and governance.",
        tools: ["Python", "SQL", "Spark", "Airflow", "dbt", "Cloud"],
      },
      {
        name: "Artificial Intelligence",
        description: "Machine learning models, basic MLOps and LLM/RAG applications over company data.",
        tools: ["scikit-learn", "LLMs", "RAG", "MLflow", "APIs"],
      },
      {
        name: "Analytics",
        description: "Semantic layer, business metrics, dashboards and data storytelling for decision-making.",
        tools: ["Power BI", "SQL", "Metrics", "Storytelling"],
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Featured projects",
    context: "Context",
    delivered: "What I delivered",
    results: "Outcome",
    stack: "Stack",
    items: [
      {
        tag: "Data Engineering & Analytics",
        title: "Customer categorization pipeline and analytics dashboard",
        context: "Customer categories had to be processed over a base of more than 1 billion records and made available for analysis.",
        delivered: [
          "Large-scale processing pipeline covering more than 1 billion records.",
          "Customer category calculation within the pipeline.",
          "Analytics dashboard to query and explore customer categories.",
        ],
        results: "Customer categorization over more than 1 billion records, accessible through an analytics dashboard.",
        stack: ["Data pipeline", "High volume (1B+)", "Analytics dashboard"],
      },
      {
        tag: "Data Engineering & AI",
        title: "Public tender analysis pipeline with LLM",
        context: "Public tenders mix structured data and unstructured documents, making large-scale analysis and opportunity spotting hard.",
        delivered: [
          "Extraction of structured (JSON) and unstructured data from tenders.",
          "LLM integration to interpret the extracted content.",
          "Report for legal analysis, feeding the subsequent commercial outreach.",
        ],
        results: "Tenders turned into reports ready for legal analysis and to support commercial outreach.",
        stack: ["JSON extraction", "Unstructured data", "LLM", "Reports"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something great together",
    text: "Have a challenge with data, AI or analytics? Whether it's a data platform, a dashboard that tells a story or an AI solution — let's talk.",
    email: "Contact me by email",
    whatsapp: "Contact me on WhatsApp",
    emailLabel: "Email",
    chooseTitle: "Choose how to reach me",
    chooseText: "The message is pre-filled, just tweak it and send.",
    previewLabel: "Suggested message",
    messages: {
      emailSubject: "Website inquiry — data project",
      emailBody:
        "Hi Hugo,\n\nI found your website and would like to talk about a data project.\n\nName:\nCompany:\nChallenge summary:\n\nThanks!",
      whatsappText: "Hi Hugo! I found your website and would like to talk about a data project.",
    },
  },
  footer: {
    tagline: "Data Engineering · AI · Analytics",
    rights: "All rights reserved.",
    top: "Back to top",
    github: "GitHub",
    linkedin: "LinkedIn",
    emailLabel: "Email",
  },
  jobTitle: "Data professional — Data Engineering, AI and Analytics",
};

const dictionaries: Record<Locale, Dict> = { pt, en };

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
