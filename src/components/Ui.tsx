import { ReactNode } from "react";

export function Badge({
  children,
  tone = "violet",
}: {
  children: ReactNode;
  tone?: "violet" | "cyan" | "amber" | "green" | "slate";
}) {
  const tones: Record<string, string> = {
    violet: "bg-violet-500/15 text-violet-300 border-violet-400/30",
    cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
    amber: "bg-amber-500/15 text-amber-300 border-amber-400/30",
    green: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
    slate: "bg-white/5 text-slate-300 border-white/15",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function PageHead({
  title,
  sub,
  right,
}: {
  title: string;
  sub?: string;
  right?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="text-xl font-bold text-white">{title}</h1>
        {sub && <p className="mt-1 max-w-2xl text-sm text-slate-400">{sub}</p>}
      </div>
      {right}
    </div>
  );
}

export function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="glass p-4">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
      </div>
      {hint && <div className="mt-1 text-xs text-slate-500">{hint}</div>}
    </div>
  );
}

export function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="toggle"
      className={`relative h-5 w-9 rounded-full transition ${
        on ? "bg-violet-500" : "bg-white/15"
      }`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
          on ? "left-[18px]" : "left-0.5"
        }`}
      />
    </button>
  );
}

export function ProgressBar({ pct, tone = "violet" }: { pct: number; tone?: string }) {
  const bg =
    tone === "cyan"
      ? "from-cyan-400 to-violet-400"
      : tone === "amber"
      ? "from-amber-400 to-orange-400"
      : "from-violet-500 to-cyan-400";
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${bg}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
