import { Link } from "react-router-dom";
import { Badge, PageHead, ProgressBar } from "../../components/Ui";
import { contextFiles } from "../../data/context";

function grade(h: number) {
  if (h >= 80) return { label: "Strong", tone: "text-emerald-300" };
  if (h >= 60) return { label: "Good", tone: "text-cyan-300" };
  return { label: "Needs work", tone: "text-amber-300" };
}

export default function Health() {
  const avg = Math.round(contextFiles.reduce((a, f) => a + f.health, 0) / contextFiles.length);
  return (
    <div>
      <PageHead
        title="Context Health"
        sub="Skills are only as good as the context they read. Keep these files fresh and every output improves."
        right={<Badge tone="green">Phase 1 · Free</Badge>}
      />

      <div className="glass mb-6 flex items-center gap-6 p-6">
        <div>
          <div className="text-5xl font-extrabold text-white">{avg}</div>
          <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">overall score</div>
        </div>
        <div className="flex-1">
          <ProgressBar pct={avg} />
          <p className="mt-3 text-sm text-slate-400">
            Two files are drifting: personas.md contradicts recent interviews, competitors.md
            is 6 weeks old.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {contextFiles.map((f) => {
          const g = grade(f.health);
          return (
            <div key={f.id} className="glass glass-hover flex items-center gap-5 px-5 py-4">
              <code className="w-52 shrink-0 text-xs text-cyan-300">{f.file}</code>
              <div className="flex-1">
                <ProgressBar pct={f.health} tone={f.health < 60 ? "amber" : "violet"} />
              </div>
              <span className={`w-24 text-right text-sm font-semibold ${g.tone}`}>{g.label}</span>
              <span className="w-16 text-right text-sm text-slate-400">{f.health}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">This is where PM Brain comes in</span>
              <Badge tone="amber">paid add-on</Badge>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              With the Brain enabled, context files stop going stale: interviews, meetings
              and threads are auto-summarized and distilled into your knowledge base, and
              drift like this gets flagged the day it appears.
            </p>
          </div>
          <Link
            to="/phase-2"
            className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
          >
            Preview PM Brain →
          </Link>
        </div>
      </div>
    </div>
  );
}
