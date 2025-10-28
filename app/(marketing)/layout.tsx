import type { ReactNode } from "react";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />
      <main className="pb-20 pt-10">{children}</main>
      <Footer />
    </div>
  );
}
