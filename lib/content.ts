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
  nav: { about: string; skills: string; projects: string; contact: string; menu: string; lang: string };
  hero: { eyebrow: string; title: string; subtitle: string; ctaProjects: string; ctaEmail: string; ctaWhatsapp: string };
  about: { title: string; paragraphs: string[] };
  skills: { title: string; intro: string; pillars: { name: string; description: string; tools: string[] }[] };
  projects: { title: string; intro: string; context: string; delivered: string; results: string; stack: string; items: Project[] };
  contact: { title: string; text: string; email: string; whatsapp: string; messages: { emailSubject: string; emailBody: string; whatsappText: string } };
  footer: { rights: string; top: string };
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
  nav: { about: "Sobre", skills: "Competências", projects: "Projetos", contact: "Contato", menu: "Abrir menu", lang: "Idioma" },
  hero: {
    eyebrow: "Engenharia de Dados · IA · Analytics",
    title: "Transformo dados em decisões e produtos que geram resultado.",
    subtitle:
      "Sou Hugo Vasconcelos, profissional de dados. Construo plataformas confiáveis, modelos de IA aplicados ao negócio e análises que a liderança realmente usa.",
    ctaProjects: "Ver projetos",
    ctaEmail: "Enviar e-mail",
    ctaWhatsapp: "Chamar no WhatsApp",
  },
  about: {
    title: "Sobre mim",
    paragraphs: [
      "Atuo na ponte entre tecnologia e negócio: da ingestão e modelagem dos dados à entrega de dashboards, modelos preditivos e soluções com IA generativa.",
      "Valorizo pipelines simples de operar, qualidade de dados mensurável e documentação clara — para que o time continue evoluindo a solução depois da entrega.",
    ],
  },
  skills: {
    title: "Competências",
    intro: "Três frentes que se complementam em um mesmo projeto de dados.",
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
    title: "Projetos em destaque",
    intro: "Dois dos maiores projetos de dados que entreguei.",
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
    title: "Vamos conversar?",
    text: "Tem um desafio com dados, IA ou analytics? Me chame por e-mail ou WhatsApp — a mensagem já vai pronta, é só ajustar e enviar.",
    email: "Entrar em contato por e-mail",
    whatsapp: "Entrar em contato pelo WhatsApp",
    messages: {
      emailSubject: "Contato pelo site — projeto de dados",
      emailBody:
        "Olá, Hugo!\n\nVi seu site e gostaria de conversar sobre um projeto de dados.\n\nNome:\nEmpresa:\nResumo do desafio:\n\nObrigado!",
      whatsappText: "Olá, Hugo! Vi seu site e gostaria de conversar sobre um projeto de dados.",
    },
  },
  footer: { rights: "Todos os direitos reservados.", top: "Voltar ao topo" },
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
  nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact", menu: "Open menu", lang: "Language" },
  hero: {
    eyebrow: "Data Engineering · AI · Analytics",
    title: "I turn data into decisions and products that deliver results.",
    subtitle:
      "I'm Hugo Vasconcelos, a data professional. I build reliable platforms, business-focused AI models and analytics that leadership actually uses.",
    ctaProjects: "View projects",
    ctaEmail: "Send an email",
    ctaWhatsapp: "Message on WhatsApp",
  },
  about: {
    title: "About me",
    paragraphs: [
      "I work at the bridge between technology and business: from data ingestion and modeling to dashboards, predictive models and generative AI solutions.",
      "I value pipelines that are simple to operate, measurable data quality and clear documentation — so the team can keep evolving the solution after delivery.",
    ],
  },
  skills: {
    title: "Skills",
    intro: "Three complementary fronts within a single data project.",
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
    title: "Featured projects",
    intro: "Two of the biggest data projects I have delivered.",
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
    title: "Let's talk?",
    text: "Have a challenge with data, AI or analytics? Reach out by email or WhatsApp — the message is pre-filled, just tweak it and send.",
    email: "Contact me by email",
    whatsapp: "Contact me on WhatsApp",
    messages: {
      emailSubject: "Website inquiry — data project",
      emailBody:
        "Hi Hugo,\n\nI found your website and would like to talk about a data project.\n\nName:\nCompany:\nChallenge summary:\n\nThanks!",
      whatsappText: "Hi Hugo! I found your website and would like to talk about a data project.",
    },
  },
  footer: { rights: "All rights reserved.", top: "Back to top" },
  jobTitle: "Data professional — Data Engineering, AI and Analytics",
};

const dictionaries: Record<Locale, Dict> = { pt, en };

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
