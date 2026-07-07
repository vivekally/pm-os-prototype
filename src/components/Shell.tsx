import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Badge } from "./Ui";

const phases = [
  { id: "phase-1", label: "Phase 1", name: "PM Onboarding", tone: "text-cyan-300" },
  { id: "phase-2", label: "Phase 2", name: "PM Brain", tone: "text-violet-300" },
  { id: "phase-3", label: "Phase 3", name: "Scale to Org", tone: "text-amber-300" },
];

const nav: Record<string, { to: string; label: string; icon: string }[]> = {
  "phase-1": [
    { to: "/phase-1/setup", label: "Setup", icon: "◇" },
    { to: "/phase-1/skills", label: "Skills Library", icon: "⌘" },
    { to: "/phase-1/runner", label: "Skill Runner", icon: "▷" },
    { to: "/phase-1/health", label: "Context Health", icon: "♥" },
    { to: "/phase-1/branding", label: "Personal Branding", icon: "✦" },
  ],
  "phase-2": [
    { to: "/phase-2/dashboard", label: "Brain Dashboard", icon: "◉" },
    { to: "/phase-2/ask", label: "Ask the Brain", icon: "?" },
    { to: "/phase-2/graph", label: "Knowledge Graph", icon: "⬡" },
    { to: "/phase-2/ingest", label: "Connectors & Ingest", icon: "⇄" },
  ],
  "phase-3": [
    { to: "/phase-3/org", label: "PM Org", icon: "▦" },
    { to: "/phase-3/company-brain", label: "Company Brain", icon: "◫" },
    { to: "/phase-3/impact", label: "Impact", icon: "↗" },
  ],
};

export default function Shell() {
  const { pathname } = useLocation();
  const current = phases.find((p) => pathname.startsWith(`/${p.id}`)) ?? phases[0];

  return (
    <div className="flex min-h-screen bg-ink">
      <aside className="fixed inset-y-0 left-0 z-20 flex w-60 flex-col border-r border-white/10 bg-[#0d1220] px-4 py-5">
        <Link to="/" className="flex items-center gap-2 px-1">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-extrabold text-white">
            P
          </div>
          <span className="text-sm font-bold tracking-wide text-white">
            PM <span className="grad-text">OS</span>
          </span>
          <span className="ml-auto text-[10px] uppercase tracking-widest text-slate-500">
            proto
          </span>
        </Link>

        <div className="mt-6 grid grid-cols-3 gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1">
          {phases.map((p) => (
            <Link
              key={p.id}
              to={`/${p.id}`}
              className={`rounded-lg px-1 py-1.5 text-center text-[11px] font-semibold transition ${
                current.id === p.id
                  ? "bg-white/10 text-white"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {p.label}
            </Link>
          ))}
        </div>
        <div className="mt-2 px-1 text-xs font-medium">
          <span className={current.tone}>{current.name}</span>
        </div>

        <nav className="mt-5 flex flex-col gap-1">
          {nav[current.id].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition ${
                  isActive
                    ? "bg-violet-500/15 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`
              }
            >
              <span className="w-4 text-center text-xs opacity-70">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
          {current.id === "phase-1" && (
            <Link
              to="/phase-2"
              className="mt-1 flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-slate-500 transition hover:bg-white/5"
            >
              <span className="w-4 text-center text-xs">🔒</span>
              PM Brain
              <span className="ml-auto">
                <Badge tone="amber">add-on</Badge>
              </span>
            </Link>
          )}
        </nav>

        <div className="mt-auto space-y-3">
          {current.id === "phase-1" && (
            <div className="glass p-3 text-xs leading-relaxed text-slate-400">
              <span className="font-semibold text-white">Free plan.</span> PM Onboarding
              (context + skills + workflows + automation) is free. PM Brain is a paid
              add-on.
              <Link
                to="/phase-2"
                className="mt-2 block rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 px-3 py-1.5 text-center font-semibold text-white"
              >
                Preview PM Brain
              </Link>
            </div>
          )}
          <Link to="/" className="block px-1 text-xs text-slate-500 hover:text-slate-300">
            ← Back to landing
          </Link>
        </div>
      </aside>

      <main className="ml-60 flex-1 px-8 py-7">
        <div className="mx-auto max-w-5xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
