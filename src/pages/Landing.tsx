import { Link } from "react-router-dom";
import { Badge } from "../components/Ui";

const pillars = ["Context", "Skills", "Workflows", "Automation"];

const phaseCards = [
  {
    id: "phase-1",
    n: "01",
    badge: <Badge tone="green">Free</Badge>,
    tone: "from-cyan-400/20",
    ring: "group-hover:border-cyan-400/50",
    title: "PM Onboarding",
    tag: "Your AI teammate, preloaded",
    body: "The best of existing PM operating systems, packaged: write your context once (company, product, personas, competitors, goals), then run curated skills for discovery, strategy, prioritization, PRDs and roadmapping. A simple UI on top of markdown files, so nobody memorizes commands: browse skills, review skill files, build your own. Barebone, and free.",
    points: ["Context Builder + Context Health", "Skills Library, Skill Builder, orchestration", "Workflows and agents that automate tasks", "Personal branding, built in"],
    cta: "Open Phase 1",
  },
  {
    id: "phase-2",
    n: "02",
    badge: <Badge tone="amber">Paid add-on</Badge>,
    tone: "from-violet-500/20",
    ring: "group-hover:border-violet-400/50",
    title: "PM Brain",
    tag: "A second brain for product work",
    body: "Everything you capture becomes structured knowledge: auto-summarize, distill, remember. Connect your tools to consolidate data, ask questions and get answers with cited sources, and watch a knowledge graph connect the dots across meetings, docs and decisions. Built on the best of the current generation of AI brains.",
    points: ["Memory with provenance", "Knowledge graph of people, themes, decisions", "Connectors: Slack, Jira, Notion and more", "Daily priorities from live patterns"],
    cta: "Open Phase 2",
  },
  {
    id: "phase-3",
    n: "03",
    badge: <Badge tone="cyan">Teams</Badge>,
    tone: "from-amber-400/20",
    ring: "group-hover:border-amber-400/50",
    title: "Scale to the Org",
    tag: "From one PM to the entire PM org",
    body: "Double down on the second brain and expand it from a single PM to the whole product team. A shared company brain with per-source permissions keeps private notes private while team knowledge compounds. Leaders see adoption and impact in one place.",
    points: ["Shared company brain", "Per-source permissions", "Adoption and impact dashboard"],
    cta: "Open Phase 3",
  },
];

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink">
      <div className="orb left-[-10%] top-[-15%] h-[480px] w-[480px] bg-violet-600/25" />
      <div className="orb right-[-8%] top-[10%] h-[380px] w-[380px] bg-cyan-500/15" />
      <div className="grid-bg absolute inset-0" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 font-extrabold text-white">
            P
          </div>
          <span className="text-base font-bold text-white">
            PM <span className="grad-text">OS</span>
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
          <a href="#phases" className="hover:text-white">The 3 phases</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <Link
            to="/phase-1"
            className="rounded-lg bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
          >
            Open the prototype
          </Link>
        </nav>
      </header>

      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
        <div className="mb-5 flex justify-center">
          <Badge tone="violet">The PM Operating System, in three phases</Badge>
        </div>
        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          The operating system
          <br />
          for <span className="grad-text">product teams</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          Custom context, skills, workflows and automation, plus a second brain that
          remembers everything your team learns. Onboard in minutes. Compound forever.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/phase-1"
            className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:opacity-90"
          >
            Explore the prototype
          </Link>
          <a
            href="#phases"
            className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:bg-white/5"
          >
            See the 3 phases
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {pillars.map((p) => (
            <span key={p} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-slate-300">
              {p}
            </span>
          ))}
          <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
            + Second Brain
          </span>
        </div>
      </section>

      <section id="how" className="relative z-10 mx-auto max-w-4xl px-6 pb-20">
        <div className="glass p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white">Why an operating system?</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Most teams use AI as a chat box. Context gets re-explained every session,
            results come back generic, and the best prompts stay trapped in one person's
            browser. Meanwhile the real problem compounds: information overload. Insights
            from meetings, tickets and threads pile up faster than any PM can connect
            them.
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">
            PM OS fixes both. <span className="text-slate-200">Onboarding</span> gives
            every PM the same context, skills, workflows and automation.{" "}
            <span className="text-slate-200">The Brain</span> turns what your team learns
            into structured knowledge: auto-summarized, distilled, remembered. Together
            they become an OS that gets smarter every week you use it.
          </p>
        </div>
      </section>

      <section id="phases" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white">Three phases. One OS.</h2>
          <p className="mt-3 text-slate-400">
            Start free with onboarding. Add the brain. Scale it to your org.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {phaseCards.map((c) => (
            <div key={c.id} className={`group glass glass-hover relative flex flex-col p-7 ${c.ring}`}>
              <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-2xl bg-gradient-to-b ${c.tone} to-transparent`} />
              <div className="relative flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-slate-500">{c.n}</span>
                {c.badge}
              </div>
              <h3 className="relative mt-4 text-xl font-bold text-white">{c.title}</h3>
              <div className="relative mt-1 text-sm font-medium text-slate-300">{c.tag}</div>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-400">{c.body}</p>
              <ul className="relative mt-4 space-y-2 text-sm text-slate-300">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to={`/${c.id}`}
                className="relative mt-6 inline-block rounded-lg border border-white/15 px-4 py-2 text-center text-sm font-semibold text-white transition group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-cyan-500"
              >
                {c.cta} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-4 text-sm text-slate-400">
          <Badge tone="slate">Phase 4 · on the roadmap</Badge>
          Recursive loops + self-learning: toward a true self-learning OS for the whole
          company.
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 text-center">
        <div className="glass p-10">
          <h2 className="text-3xl font-bold text-white">
            Start with Phase 1. <span className="grad-text">It's free.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            PM Onboarding is free for every PM. PM Brain comes as a paid add-on when
            you're ready to remember everything.
          </p>
          <Link
            to="/phase-1"
            className="mt-6 inline-block rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-glow transition hover:opacity-90"
          >
            Open the prototype
          </Link>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-xs text-slate-600">
        PM OS · clickable prototype · built from the PM OS spec, June 2026
      </footer>
    </div>
  );
}
