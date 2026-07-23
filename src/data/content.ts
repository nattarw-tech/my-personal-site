export const LINKS = {
  linkedin: "https://www.linkedin.com/in/nisrin-attarwala/",
  github: "https://github.com/nattarw-tech",
  email: "nisrin.attarwala@gmail.com",
  cv: "/Nisrin_Attarwala_CV.pdf",
};

export const STATS = [
  { value: 15, suffix: "", label: "years in regulated operations" },
  { value: 100, suffix: "+", label: "fund portfolios reported on" },
  { value: 17, suffix: "", label: "RegVarsity modules" },
  { value: 6, suffix: "", label: "regulators tracked by RegTrack" },
];

export interface Project {
  name: string;
  tag: string;
  description: string;
  stack: string;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "RegVarsity",
    tag: "Flagship",
    description:
      "A free site that teaches UK and EU financial regulation in plain English. 17 modules and 38 chapters covering the FCA Handbook, MiCA and UK GDPR, with a quiz after every chapter, module badges, audio, scenario exercises, a 57-term glossary and an AI tutor. Every figure checked against primary sources.",
    stack: "React, TypeScript, Vite, Tailwind CSS, Vercel",
    liveUrl: "https://regvarsity.vercel.app",
    liveLabel: "Visit the site",
    repoUrl: "https://github.com/nattarw-tech/regvarsity",
  },
  {
    name: "DeFi Wallet Risk Intelligence",
    tag: "AML screening",
    description:
      "Live AML screening for XRP Ledger wallets. Pulls on-chain transaction data, scores wallets across four behavioural risk signals, screens against the OFAC SDN list, and writes a plain-English compliance summary with an LLM. Try it on any XRPL wallet address.",
    stack: "Python, Streamlit, Groq / LLaMA 3.3",
    liveUrl:
      "https://defi-wallet-risk-intelligence-jye2qznapkns8qkff3orrb.streamlit.app/",
    liveLabel: "Try the app",
    repoUrl: "https://github.com/nattarw-tech/defi-wallet-risk-intelligence",
  },
  {
    name: "RegTrack",
    tag: "Compliance ops",
    description:
      "A live RegTech dashboard that replaces static Excel compliance trackers. Tracks filing obligations across 6 regulators (SEC, FCA, CFTC, HMRC, NFA, Companies House) with a real-time deadline engine, a filing manager that auto-schedules the next cycle, and an AI explainer that generates preparation checklists per filing.",
    stack: "Python, Pandas, Streamlit, Groq / LLaMA 3.3",
    liveUrl:
      "https://regtech-compliance-dashboard-jpeftg6ajanxph3onhb7vb.streamlit.app/",
    liveLabel: "Try the app",
    repoUrl: "https://github.com/nattarw-tech/regtech-compliance-dashboard",
  },
  {
    name: "Weather Risk & Electricity Markets",
    tag: "Data analysis",
    description:
      "An interactive five-dashboard Tableau story analysing four years of hourly Spanish electricity, renewable generation and weather data, showing how weather-driven renewable supply (the merit-order effect) shapes wholesale prices.",
    stack: "Tableau, Python, SQL",
    liveUrl:
      "https://public.tableau.com/app/profile/nisrin.shoukat.attarwala/viz/Spain-WeatherRiskandElectricityMarkets2015-2018/Overview",
    liveLabel: "View on Tableau Public",
    repoUrl: undefined,
  },
];

export interface Article {
  title: string;
  kind: "Article" | "Post";
  teaser: string;
  url: string;
}

export const WRITING: Article[] = [
  {
    title: "Who Does the Rulebook Actually Protect?",
    kind: "Article",
    teaser:
      "When the rulebook for digital finance finally gets written, who will it actually protect? A reckoning from years spent close to the machinery of regulated finance.",
    url: "https://www.linkedin.com/pulse/who-does-rulebook-actually-protect-nisrin-shoukat-attarwala-glb6e/",
  },
  {
    title: "The Ethical Imperative of AI: Balancing Progress and Responsibility",
    kind: "Article",
    teaser:
      "AI can transform sectors of the economy and society, and it creates new challenges for policy makers. On building progress and responsibility together.",
    url: "https://www.linkedin.com/pulse/ethical-imperative-ai-balancing-progress-nisrin-attarwala-she-her-/",
  },
  {
    title: "Launching RegVarsity",
    kind: "Post",
    teaser:
      "For a year, interviews kept circling the same polite doubt: \"Your regulatory experience is American. How well do you know the UK regime?\" So I built the answer.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7483434029061439488/",
  },
  {
    title: "Building DeFi Wallet Risk Intelligence",
    kind: "Post",
    teaser:
      "Public blockchains are transparent, but that does not make them easy to review from a compliance perspective. So I built a screening tool that does.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7477845822542635008/",
  },
  {
    title: "Tokenising a Heathrow infrastructure project",
    kind: "Post",
    teaser:
      "Designing a tokenised investment marketplace for a real UK infrastructure project at Heathrow: a permissioned chain and a hybrid token that gives investors both a revenue claim and a vote, without breaking compliance.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7478241735937175552/",
  },
  {
    title: "Four weeks levelling up on AI with Women in Tech UK",
    kind: "Post",
    teaser:
      "Four weeks, one Claude, and a lot of women casually levelling up their AI game, from rule-based prompting to shipping working agents.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7483071621264642049/",
  },
  {
    title: "An evening at OpenSourceIRL",
    kind: "Post",
    teaser:
      "The kind of evening London's tech scene needs more of: no slides, no speeches, just real builders and open-source energy over pizza in Soho.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7482490800333848576/",
  },
  {
    title: "Scoring 89% on the AmplifyME M&A simulation",
    kind: "Post",
    teaser:
      "Going in, I felt completely unprepared. This was totally outside my wheelhouse. On finding out what you are capable of by doing the hard thing anyway.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7389771064022794240/",
  },
];
