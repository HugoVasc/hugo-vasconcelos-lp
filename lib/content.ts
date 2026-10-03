import type { Locale } from "./i18n";

/**
 * Conteúdo alinhado ao perfil profissional real (LinkedIn/GitHub): apenas ferramentas e números confirmados pelo autor.
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
      "Engenheiro de dados com experiência em pipelines em larga escala (Spark, Databricks) e soluções de IA com LLMs. Conheça meus projetos e fale comigo por e-mail ou WhatsApp.",
    keywords: ["engenheiro de dados", "engenharia de dados", "inteligência artificial", "analytics", "data engineer", "pipelines de dados", "business intelligence", "Spark", "PySpark", "Databricks", "LLM", "LangChain", "Hugo Vasconcelos"],
    ogAlt: "Hugo Vasconcelos — Engenharia de Dados, IA e Analytics",
  },
  nav: { about: "Sobre", skills: "Serviços", projects: "Projetos", contact: "Contato", hire: "Fale comigo", menu: "Abrir menu", lang: "Idioma" },
  hero: {
    badge: "Disponível para projetos",
    titleA: "Dados em larga escala,",
    titleB: "prontos para decisão",
    subtitle:
      "Sou Hugo Vasconcelos, engenheiro de dados em um dos maiores bancos da América Latina. Construo pipelines com Spark e Databricks e aplico LLMs a documentos e grandes volumes de dados.",
    ctaProjects: "Ver projetos",
    ctaEmail: "Enviar e-mail",
    ctaWhatsapp: "Chamar no WhatsApp",
    scroll: "Rolar",
  },
  about: {
    eyebrow: "Sobre mim",
    title: "Engenheiro de dados que também constrói soluções de IA",
    paragraphs: [
      "Sou engenheiro de dados no Banco do Brasil: mantenho pipelines em PySpark e IBM DataStage que movem mais de 1,5 bilhão de registros por semana, entre a nuvem privada do banco e o Azure Databricks, sob requisitos de governança e auditoria.",
      "Antes, na snowfoxAI (Canadá, 100% remoto), fui de estagiário a engenheiro de IA e construí pipelines com LLM e modelos de classificação de risco. Valorizo pipelines simples de operar e qualidade de dados mensurável.",
    ],
    highlights: [
      "12 pipelines ETL em produção, +1,5 bilhão de registros por semana",
      "PDFs não estruturados viram dados com LangChain e Spark",
      "Modelagem dimensional (Kimball) e painéis em Power BI",
      "Trabalho 100% remoto com time no Canadá",
    ],
    cardLabel: "Foco",
    cardValue: "Dados · IA · Analytics",
  },
  skills: {
    eyebrow: "O que eu faço",
    title: "Do dado bruto à decisão, em três frentes",
    pillars: [
      {
        name: "Engenharia de Dados",
        description: "Pipelines ETL em PySpark e DataStage, modelagem dimensional (Kimball), arquitetura medalhão e processamento híbrido entre nuvem privada e Azure.",
        tools: ["Python", "SQL", "PySpark", "Databricks", "Hive", "DB2"],
      },
      {
        name: "Inteligência Artificial",
        description: "Extração de dados de documentos com LLMs (LangChain, LangSmith), modelos de classificação com XGBoost e entrega em interfaces Streamlit.",
        tools: ["LangChain", "LangSmith", "XGBoost", "Streamlit", "Claude Code", "Copilot"],
      },
      {
        name: "Analytics",
        description: "Painéis em Power BI sobre modelo dimensional, métricas padronizadas entre áreas e alertas automáticos para mudanças bruscas nos dados.",
        tools: ["Power BI", "SQL", "Kimball", "Data quality"],
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
        title: "Plataforma analítica de classificação de clientes",
        context: "Um motor de simulação do banco gera mais de 1 bilhão de linhas, com várias classificações candidatas por cliente. Os gestores exploravam esse volume com consultas SAS complexas e dependentes de suporte técnico.",
        delivered: [
          "Pipeline em Spark que filtra mais de 1 bilhão de linhas e reduz as classificações candidatas aos casos relevantes.",
          "Modelo dimensional (estrela) carregado em um schema dedicado no DB2, como camada de consumo.",
          "Painel em Power BI com filtros dinâmicos e alertas automáticos para mudanças bruscas na classificação.",
        ],
        results: "Gestores passaram a explorar os cenários por conta própria (~480 horas de análise economizadas por ano), com alertas que detectam erros de parâmetros antes que afetem milhões de clientes.",
        stack: ["PySpark", "IBM DB2", "Modelagem dimensional", "Power BI"],
      },
      {
        tag: "Engenharia de Dados & IA",
        title: "Pipeline de análise de licitações com LLM",
        context: "As licitações públicas combinam uma API governamental (PNCP) e PDFs de diários oficiais federais e estaduais, o que dificulta a análise em escala e a identificação de oportunidades.",
        delivered: [
          "Ingestão da API do PNCP (JSON) e dos PDFs de diários oficiais (coletados com Scrapy), com dados brutos no Amazon S3.",
          "Spark UDF chamando LangChain para estruturar os PDFs em paralelo, com LangSmith rastreando a qualidade das respostas do LLM.",
          "Camadas Bronze/Silver/Gold em PostgreSQL, com modelo fato/dimensão alimentando relatórios para análise jurídica e abordagem comercial.",
        ],
        results: "Documentos que exigiam leitura manual viraram registros consultáveis, alimentando relatórios prontos para a análise jurídica e a abordagem comercial.",
        stack: ["Spark", "LangChain", "LangSmith", "Amazon S3", "PostgreSQL"],
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre dados e IA?",
    text: "Está contratando ou tem um desafio com pipelines, IA ou analytics? Estou aberto a posições remotas, em contrato ou tempo integral. Me chame por e-mail ou WhatsApp.",
    email: "Entrar em contato por e-mail",
    whatsapp: "Entrar em contato pelo WhatsApp",
    emailLabel: "E-mail",
    chooseTitle: "Escolha como falar comigo",
    chooseText: "A mensagem já vai pronta, é só ajustar e enviar.",
    previewLabel: "Mensagem sugerida",
    messages: {
      emailSubject: "Contato pelo site — oportunidade ou projeto de dados",
      emailBody:
        "Olá, Hugo!\n\nVi seu site e gostaria de conversar sobre uma oportunidade ou projeto de dados.\n\nNome:\nEmpresa:\nResumo da oportunidade ou desafio:\n\nObrigado!",
      whatsappText: "Olá, Hugo! Vi seu site e gostaria de conversar sobre uma oportunidade ou projeto de dados.",
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
  jobTitle: "Engenheiro de Dados",
};

const en: Dict = {
  meta: {
    title: "Hugo Vasconcelos | Data Engineering, AI & Analytics",
    description:
      "Data engineer with hands-on experience in large-scale pipelines (Spark, Databricks) and LLM-based AI solutions. See my projects and get in touch by email or WhatsApp.",
    keywords: ["data engineer", "data engineering", "artificial intelligence", "analytics", "data pipelines", "business intelligence", "Spark", "PySpark", "Databricks", "LLM", "LangChain", "Hugo Vasconcelos"],
    ogAlt: "Hugo Vasconcelos — Data Engineering, AI & Analytics",
  },
  nav: { about: "About", skills: "Services", projects: "Projects", contact: "Contact", hire: "Hire me", menu: "Open menu", lang: "Language" },
  hero: {
    badge: "Available for projects",
    titleA: "Data at scale,",
    titleB: "ready for decisions",
    subtitle:
      "I'm Hugo Vasconcelos, a data engineer at one of Latin America's largest banks. I build pipelines with Spark and Databricks and apply LLMs to documents and large data volumes.",
    ctaProjects: "View projects",
    ctaEmail: "Send an email",
    ctaWhatsapp: "Message on WhatsApp",
    scroll: "Scroll",
  },
  about: {
    eyebrow: "About me",
    title: "Data engineer who also builds AI solutions",
    paragraphs: [
      "I'm a data engineer at Banco do Brasil: I maintain PySpark and IBM DataStage pipelines that move over 1.5 billion records a week, across the bank's private cloud and Azure Databricks, under strict governance and audit requirements.",
      "Before that, at snowfoxAI (Canada, fully remote), I went from intern to AI engineer, building LLM pipelines and risk classification models. I value pipelines that are simple to operate and measurable data quality.",
    ],
    highlights: [
      "12 production ETL pipelines, 1.5B+ records per week",
      "Unstructured PDFs turned into data with LangChain and Spark",
      "Dimensional modeling (Kimball) and Power BI dashboards",
      "Fully remote work with a team in Canada",
    ],
    cardLabel: "Focus",
    cardValue: "Data · AI · Analytics",
  },
  skills: {
    eyebrow: "What I do",
    title: "From raw data to decisions, on three fronts",
    pillars: [
      {
        name: "Data Engineering",
        description: "ETL pipelines in PySpark and DataStage, dimensional modeling (Kimball), medallion architecture and hybrid processing across private cloud and Azure.",
        tools: ["Python", "SQL", "PySpark", "Databricks", "Hive", "DB2"],
      },
      {
        name: "Artificial Intelligence",
        description: "Document data extraction with LLMs (LangChain, LangSmith), XGBoost classification models and delivery through Streamlit interfaces.",
        tools: ["LangChain", "LangSmith", "XGBoost", "Streamlit", "Claude Code", "Copilot"],
      },
      {
        name: "Analytics",
        description: "Power BI dashboards on a dimensional model, metrics standardized across business areas and automatic alerts for sudden data shifts.",
        tools: ["Power BI", "SQL", "Kimball", "Data quality"],
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
        title: "Customer classification analytics platform",
        context: "A classification simulation engine at the bank generates 1B+ rows, with several candidate classifications per customer. Managers explored it through complex SAS queries that depended on technical support.",
        delivered: [
          "Spark pipeline that filters over 1 billion rows, narrowing candidate classifications down to the relevant cases.",
          "Dimensional (star) model loaded into a dedicated DB2 schema as the consumption layer.",
          "Power BI dashboard with dynamic filters and automatic alerts for sudden shifts in classification.",
        ],
        results: "Managers now explore scenarios on their own, saving about 480 analysis hours a year, with alerts that catch parameter errors before they affect millions of customers.",
        stack: ["PySpark", "IBM DB2", "Dimensional modeling", "Power BI"],
      },
      {
        tag: "Data Engineering & AI",
        title: "Public tender analysis pipeline with LLM",
        context: "Public tenders combine a government API (PNCP) with PDFs from federal and state official gazettes, making large-scale analysis and opportunity spotting hard.",
        delivered: [
          "Ingestion of the PNCP API (JSON) and official gazette PDFs (collected with Scrapy), with raw data in Amazon S3.",
          "Spark UDF calling LangChain to structure the PDFs in parallel, with LangSmith tracing LLM output quality.",
          "Bronze/Silver/Gold layers in PostgreSQL, with a fact/dimension model feeding reports for legal analysis and commercial outreach.",
        ],
        results: "Documents that required manual reading became queryable records, feeding reports ready for legal analysis and commercial outreach.",
        stack: ["Spark", "LangChain", "LangSmith", "Amazon S3", "PostgreSQL"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about data and AI",
    text: "Hiring, or have a challenge with pipelines, AI or analytics? I'm open to remote roles, on contract or full-time. Reach me by email or WhatsApp.",
    email: "Contact me by email",
    whatsapp: "Contact me on WhatsApp",
    emailLabel: "Email",
    chooseTitle: "Choose how to reach me",
    chooseText: "The message is pre-filled, just tweak it and send.",
    previewLabel: "Suggested message",
    messages: {
      emailSubject: "Website inquiry — opportunity or data project",
      emailBody:
        "Hi Hugo,\n\nI found your website and would like to talk about an opportunity or data project.\n\nName:\nCompany:\nOpportunity or challenge summary:\n\nThanks!",
      whatsappText: "Hi Hugo! I found your website and would like to talk about an opportunity or data project.",
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
  jobTitle: "Data Engineer",
};

const dictionaries: Record<Locale, Dict> = { pt, en };

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
