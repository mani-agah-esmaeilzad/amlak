import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { pricingPlans } from "../lib/data";

export default function PricingPage() {
  return (
    <div className="space-y-24">
      <PageIntro
        eyebrow="پلن‌های اشتراک"
        title="پلن مناسب برای هر مرحله از رشد کسب‌وکار"
        description="از مشاور مستقل تا شبکه‌های بزرگ آژانس، با ساختار اشتراک انعطاف‌پذیر و محاسبه شفاف هزینه‌ها همراهتان هستیم."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-sm font-semibold text-cyan-300">{plan.name}</div>
              <div className="mt-4 text-3xl font-bold text-white">
                {plan.price}
                {plan.price.includes("ت") ? null : <span className="text-base font-medium text-slate-400"> تومان / ماه</span>}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/panel/agency"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
              >
                شروع پلن {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">سوالات پرتکرار درباره قیمت‌گذاری</h2>
          <div className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
            <p>
              • می‌توانید در هر زمان پلن خود را ارتقا دهید و فقط اختلاف هزینه پلن جدید را پرداخت کنید.
            </p>
            <p>
              • هزینه اشتراک شامل پشتیبانی فنی، به‌روزرسانی ویژگی‌ها و فضای ذخیره‌سازی ابری است.
            </p>
            <p>
              • برای پروژه‌های سازمانی، تیم فروش ما طرح اختصاصی با شرایط پرداخت سفارشی ارائه می‌دهد.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-12 sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">نیاز به جلسه مشاوره دارید؟</h2>
              <p className="text-base leading-7 text-slate-100">
                درخواست دمو زنده بدهید تا تمام امکانات را بر اساس نیازهای سازمانی شما شخصی‌سازی کنیم و نمونه گزارش‌ها را به‌صورت لحظه‌ای نمایش دهیم.
              </p>
            </div>
            <div className="space-y-3 text-sm leading-6 text-slate-900">
              <Link
                href="mailto:sales@amlakia360.ir"
                className="block rounded-full bg-white px-6 py-3 text-center font-semibold transition hover:bg-slate-200"
              >
                هماهنگی دمو
              </Link>
              <Link
                href="tel:02145298000"
                className="block rounded-full border border-white/50 px-6 py-3 text-center font-semibold text-white transition hover:border-white"
              >
                گفتگوی تلفنی با تیم فروش
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
