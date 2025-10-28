import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import {
  aiAssistantMessages,
  features,
  useCases,
  automationFlows,
} from "../lib/data";

export default function FeaturesPage() {
  return (
    <div className="space-y-24">
      <PageIntro
        eyebrow="امکانات پلتفرم"
        title="هر بخش از تیم فروش شما یک ابزار اختصاصی دارد"
        description="از ساخت تورهای ۳۶۰ درجه گرفته تا پیگیری هوشمند لید و یکپارچگی با سامانه‌های دیگر، همه چیز در یک محیط یکپارچه در دسترس است."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-white/5 bg-white/5 p-6">
              <div className="text-sm font-semibold text-cyan-300">{feature.highlight}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">جستجوی هوشمند با مکالمه طبیعی</h2>
              <p className="text-base leading-7 text-slate-300">
                موتور جستجوی Amlakia360 ترجیحات مشتری را تحلیل می‌کند و بهترین گزینه‌ها را در قالب مکالمه پیشنهاد می‌دهد.
              </p>
              <Link href="/tours" className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                مشاهده عملکرد روی املاک واقعی →
              </Link>
            </div>
            <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl">
              {aiAssistantMessages.map((message, index) => (
                <div
                  key={`${message.speaker}-${index}`}
                  className={`rounded-2xl border border-white/10 px-4 py-3 text-sm leading-6 shadow-inner ${
                    message.speaker === "دستیار هوشمند"
                      ? "bg-cyan-400/10 text-cyan-100"
                      : "bg-white/5 text-slate-200"
                  }`}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {message.speaker}
                  </div>
                  <p className="mt-1">{message.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">سناریوهای آماده برای انواع کسب‌وکار</h2>
            <p className="text-base leading-7 text-slate-300">
              قالب‌های آماده برای آژانس‌های لوکس، پروژه‌های پیش‌فروش و سامانه‌های اجاره کوتاه‌مدت در دسترس است تا سریع‌تر فروش را آغاز کنید.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-2xl border border-white/5 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">اتوماسیون‌هایی که به جای شما کار می‌کنند</h2>
              <p className="text-base leading-7 text-slate-300">
                سناریوهای آماده را فعال کنید تا لیدها به‌صورت خودکار پیگیری شوند، بازدید حضوری هماهنگ شود و تیم فروش گزارش آماده در اختیار داشته باشد.
              </p>
            </div>
            <div className="space-y-4">
              {automationFlows.map((flow) => (
                <div key={flow.title} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5">
                  <h3 className="text-lg font-semibold text-white">{flow.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/80">{flow.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
