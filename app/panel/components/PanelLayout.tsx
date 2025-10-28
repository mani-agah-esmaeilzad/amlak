import Link from "next/link";
import type { ReactNode } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface StatItem {
  label: string;
  value: string;
  change?: string;
}

interface ActionItem {
  label: string;
  description: string;
}

interface PanelLayoutProps {
  title: string;
  description: string;
  active: string;
  navItems: NavItem[];
  stats?: StatItem[];
  actions?: ActionItem[];
  children: ReactNode;
}

export function PanelLayout({
  title,
  description,
  active,
  navItems,
  stats,
  actions,
  children,
}: PanelLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-16 pt-10 md:flex-row">
        <aside className="md:w-60">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-1">
              <p className="text-sm text-slate-400">پلتفرم Amlakia360</p>
              <p className="text-lg font-semibold text-white">منوی دسترسی</p>
            </div>
            <nav className="mt-6 grid gap-2 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = item.href === active;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 transition ${
                      isActive
                        ? "bg-emerald-500 text-slate-900"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            {actions && actions.length > 0 && (
              <div className="mt-8 space-y-3 text-xs text-slate-300">
                {actions.map((action) => (
                  <div key={action.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="font-semibold text-white">{action.label}</p>
                    <p className="mt-1 leading-6 text-slate-300">{action.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>
        <main className="flex-1 space-y-8">
          <header className="space-y-4">
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div>
                <p className="text-sm text-slate-400">داشبورد</p>
                <h1 className="text-3xl font-black text-white">{title}</h1>
              </div>
              <p className="max-w-3xl text-sm leading-7 text-slate-300">{description}</p>
            </div>
            {stats && stats.length > 0 && (
              <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
                    {stat.change && (
                      <p className="mt-1 text-xs text-emerald-300">{stat.change}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </header>
          <div className="space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
