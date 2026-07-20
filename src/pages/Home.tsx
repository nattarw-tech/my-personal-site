import ThemeToggle from "../components/ThemeToggle";
import CountUp from "../components/CountUp";
import { LINKS, PROJECTS, STATS, WRITING } from "../data/content";

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-accent font-semibold tracking-wide uppercase text-sm">{kicker}</p>
      <h2 className="text-3xl sm:text-4xl font-bold mt-1">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-[#0e1420] dark:text-slate-100 transition-colors">
      {/* Nav */}
      <header className="max-w-5xl mx-auto flex items-center justify-between px-5 py-5">
        <a href="#top" className="font-bold text-lg">
          Nisrin<span className="text-accent">.</span>
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#projects" className="hover:text-accent transition-colors hidden sm:inline">
            Projects
          </a>
          <a href="#writing" className="hover:text-accent transition-colors hidden sm:inline">
            Writing
          </a>
          <a href="#about" className="hover:text-accent transition-colors hidden sm:inline">
            About
          </a>
          <a href="#contact" className="hover:text-accent transition-colors hidden sm:inline">
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="max-w-4xl mx-auto px-5 pt-14 pb-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          I read the rulebook,
          <br />
          then <span className="text-accent">automate the workflow</span>.
        </h1>
        <p className="mt-6 text-lg max-w-2xl opacity-90">
          I&apos;m Nisrin Shoukat Attarwala. Nearly eight years in SEC regulatory reporting at
          Franklin Templeton, now building RegTech and compliance tools in Python. MSc Financial
          Technology &amp; Innovation at Bayes Business School, City, University of London.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Regulatory reporting", "RegTech", "Compliance automation", "Python"].map((t) => (
            <span
              key={t}
              className="text-xs font-medium rounded-full bg-accent-soft dark:bg-accent/20 text-accent px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={LINKS.cv}
            download
            className="rounded-xl bg-accent text-white px-5 py-2.5 font-semibold hover:opacity-90 transition-opacity"
          >
            Download CV
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-ink/20 dark:border-white/25 px-5 py-2.5 font-semibold hover:bg-accent-soft dark:hover:bg-white/10 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-ink/20 dark:border-white/25 px-5 py-2.5 font-semibold hover:bg-accent-soft dark:hover:bg-white/10 transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-ink/10 dark:border-white/10 bg-accent-soft/60 dark:bg-white/5">
        <div className="max-w-5xl mx-auto px-5 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-extrabold text-accent">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm mt-1 opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-5 py-16">
        <SectionHeading kicker="Things I have built" title="Projects" />
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-ink/10 dark:border-white/10 p-6 bg-white dark:bg-white/5 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <span className="text-xs font-semibold rounded-full bg-accent-soft dark:bg-accent/20 text-accent px-3 py-1 whitespace-nowrap">
                  {p.tag}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed opacity-90">{p.description}</p>
              <p className="mt-3 text-xs font-mono opacity-60">{p.stack}</p>
              <div className="mt-4 flex gap-4 text-sm font-semibold">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                    {p.liveLabel ?? "Live demo"} →
                  </a>
                )}
                {p.repoUrl && (
                  <a href={p.repoUrl} target="_blank" rel="noreferrer" className="hover:underline opacity-80">
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="max-w-5xl mx-auto px-5 py-16">
        <SectionHeading kicker="Things I have written" title="Writing" />
        <div className="grid sm:grid-cols-2 gap-6">
          {WRITING.map((a) => (
            <a
              key={a.title}
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-ink/10 dark:border-white/10 p-6 bg-white dark:bg-white/5 hover:-translate-y-1 hover:shadow-lg transition-all block"
            >
              <span className="text-xs font-semibold rounded-full bg-accent-soft dark:bg-accent/20 text-accent px-3 py-1">
                {a.kind}
              </span>
              <h3 className="text-lg font-bold mt-3">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-90">{a.teaser}</p>
              <p className="mt-3 text-sm font-semibold text-accent">Read on LinkedIn →</p>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-5 py-16">
        <SectionHeading kicker="Background" title="About" />
        <div className="max-w-3xl">
          <div className="space-y-4 leading-relaxed">
            <p>
              For nearly eight years at Franklin Templeton I managed US mutual fund filings through
              SEC EDGAR across 100+ portfolios, work where a single misplaced figure becomes a
              regulatory problem. Somewhere along the way I noticed that every tedious reporting
              process was really an automation project wearing a disguise, and I started building
              the tools myself: VBA first, then Python.
            </p>
            <p>
              In 2025 I moved to London for an MSc in Financial Technology &amp; Innovation at Bayes
              Business School, City, University of London, where I am the elected student
              representative for my cohort. To learn the UK regime properly I built RegVarsity, a
              free site that teaches UK and EU financial regulation in plain English. My
              dissertation looks at checking compliance before a transaction settles on the XRP
              Ledger.
            </p>
            <p>
              Off duty you will find me at London&apos;s tech and AI events (recently a four-week
              Claude AI working group with Women in Tech UK), at open-source meet-ups, or explaining
              to anyone who will listen that regulation is really about trust: in an age where AI
              makes building easy, the compliance rules we skip past are exactly what protect the
              customer on the other end.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-5 py-16">
        <SectionHeading kicker="Say hello" title="Contact" />
        <div className="rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-white/5 p-8 grid sm:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-lg font-semibold">
              Looking for someone who speaks both regulation and Python?
            </p>
            <p className="mt-2 opacity-90 max-w-md">
              I am open to regulatory reporting, RegTech implementation, compliance technology and
              AI governance roles in the UK. Full right to work, no sponsorship required.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
              <a href={`mailto:${LINKS.email}`} className="text-accent hover:underline">
                {LINKS.email}
              </a>
              <span className="opacity-30">|</span>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn
              </a>
              <span className="opacity-30">|</span>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="hover:underline">
                GitHub
              </a>
            </div>
          </div>
          <div className="text-center">
            <img
              src="/qr-linkedin.svg"
              alt="QR code linking to Nisrin's LinkedIn profile"
              className="w-36 h-36 mx-auto rounded-lg border border-ink/10"
            />
            <p className="mt-2 text-xs opacity-70">Scan to connect on LinkedIn</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-5 py-6 text-sm opacity-70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Nisrin Shoukat Attarwala</p>
          <p>London, UK</p>
        </div>
      </footer>
    </div>
  );
}
