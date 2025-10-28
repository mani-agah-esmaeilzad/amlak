"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "../lib/data";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-white">
          Amlakia360
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => {
            const isActive = link.href === "/"
              ? pathname === link.href
              : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-white ${isActive ? "text-cyan-300" : "text-slate-300"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/panel/agency"
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:border-white hover:text-white"
          >
            ورود آژانس‌ها
          </Link>
          <Link
            href="/pricing"
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            شروع رایگان
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-slate-200 md:hidden"
          aria-label="باز و بسته کردن منو"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/5 bg-slate-950/95 px-4 pb-6 md:hidden">
          <nav className="flex flex-col space-y-4 py-4 text-sm font-medium text-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1 transition hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <Link
              href="/panel/agency"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/20 px-4 py-2 text-center text-sm text-slate-200 transition hover:border-white hover:text-white"
            >
              ورود آژانس‌ها
            </Link>
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              className="rounded-full bg-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              شروع رایگان
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
