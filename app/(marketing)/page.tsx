import Link from "next/link";
import { heroStats, partnerLogos, features, workflowSteps, sampleProperties } from "./lib/data";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
              نسل جدید فروش املاک
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              تور ۳۶۰ درجه، جستجوی هوشمند و مدیریت فروش در یک پلتفرم واحد
            </h1>
            <p className="text-base leading-7 text-slate-300 sm:text-lg">
              Amlakia360 به مشاورین و آژانس‌ها کمک می‌کند تا تورهای واقعیت مجازی حرفه‌ای بسازند، مشتریان را با هوش مصنوعی مطابقت دهند و مسیر فروش را خودکار کنند.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                مشاهده تور نمونه
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                انتخاب پلن مناسب
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                <span>آمار تورها</span>
                <span>به‌روزرسانی لحظه‌ای</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-center">
                    <div className="text-lg font-bold text-cyan-300">{item.value}</div>
                    <div className="mt-1 text-xs text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <div className="text-sm font-semibold text-white">آخرین تورهای منتشر شده</div>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  {sampleProperties.map((property) => (
                    <div key={property.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">{property.title}</p>
                        <p className="text-xs text-slate-400">{property.description}</p>
                      </div>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-200">{property.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          اعتماد برندهای پیشرو
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-3 lg:grid-cols-6">
          {partnerLogos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 px-4 py-6 text-center"
            >
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">چرا املاکی‌ها Amlakia360 را انتخاب می‌کنند؟</h2>
            <p className="text-base leading-7 text-slate-300">
              هر آنچه برای فروش آنلاین املاک نیاز دارید؛ از معرفی تعاملی گرفته تا تحلیل عملکرد و مدیریت تیم.
            </p>
            <Link href="/features" className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
              مشاهده تمام امکانات →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.slice(0, 4).map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-white/5 bg-white/5 p-6">
                <div className="text-sm font-semibold text-cyan-300">{feature.highlight}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr,1fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">راه‌اندازی در سه مرحله</h2>
              <p className="text-base leading-7 text-slate-300">
                فرایند ساخت تور و انتشار آن به‌صورت خودکار و بدون نیاز به تیم فنی انجام می‌شود.
              </p>
              <Link href="/tours" className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                یادگیری ساخت تور →
              </Link>
            </div>
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/5 bg-white/5 p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    مرحله {index + 1}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold text-white">تور آزمایشی بسازید</h2>
          <p className="mt-4 text-base leading-7 text-slate-100">
            نسخه آزمایشی ۱۴ روزه فعال کنید، اولین تور ۳۶۰ درجه را بسازید و بازخورد مشتریان خود را اندازه بگیرید.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              شروع نسخه آزمایشی
            </Link>
            <Link
              href="/panel/customer"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              ورود مشتریان موجود
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
