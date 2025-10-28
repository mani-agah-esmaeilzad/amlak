import type { ReactNode } from "react";

export function PageIntro({ title, description, eyebrow }: { title: string; description: string; eyebrow?: ReactNode }) {
  return (
    <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      {eyebrow ? <div className="mb-4 text-sm font-semibold text-cyan-300">{eyebrow}</div> : null}
      <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
      <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </section>
  );
}
