import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { TourViewer } from "./TourViewer";
import { tourHighlights } from "../lib/data";

const demoHotspots = [
  { pitch: 2, yaw: 45, text: "آشپزخانه" },
  { pitch: 1, yaw: 120, text: "تراس" },
  { pitch: -5, yaw: -60, text: "اتاق خواب اصلی" },
];

export default function ToursPage() {
  return (
    <div className="space-y-24">
      <PageIntro
        eyebrow="تورهای ۳۶۰ درجه"
        title="بازدیدکنندگان را به قلب ملک ببرید"
        description="تورهای مجازی واکنش‌گرا با سرعت بالا و سازگار با موبایل که در وب‌سایت شما، شبکه‌های اجتماعی یا هدست‌های VR اجرا می‌شوند."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">تور نمونه را امتحان کنید</h2>
            <p className="text-base leading-7 text-slate-300">
              این پیش‌نمایش با موتور WebGL اختصاصی ما اجرا می‌شود تا دقیقاً همان تجربه‌ای که در محصول نهایی ارائه می‌دهیم را
              نشان دهد. روی نقاط راهنما مکث کنید و با حرکت ماوس یا لمس، فضای داخلی را کاوش کنید؛ حتی اگر اتصال اینترنت ضعیف
              باشد، تور با بافت جایگزین واکنش‌گرا در دسترس است.
            </p>
            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              <li>• بارگذاری تصاویر ۳۶۰ با کشیدن و رها کردن</li>
              <li>• افزودن لوگو، توضیحات و لینک فرم تماس</li>
              <li>• انتشار با لینک اختصاصی یا iframe در سایت شما</li>
            </ul>
            <Link
              href="/pricing"
              className="inline-flex w-max items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              ساخت تور نامحدود
            </Link>
          </div>
          <TourViewer title="تور نمونه واحد مبله" hotspots={demoHotspots} />
        </div>
      </section>

      <section className="bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">کنترل کامل روی تجربه بازدید</h2>
              <p className="text-base leading-7 text-slate-300">
                سرعت حرکت، نمایش منو، موزیک پس‌زمینه و فرم جمع‌آوری لید را شخصی‌سازی کنید و گزارش تعامل را به صورت لحظه‌ای ببینید.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {tourHighlights.map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-6 text-slate-200">
                  <h3 className="text-base font-semibold text-white">{highlight.title}</h3>
                  <p className="mt-2 text-slate-300">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">هماهنگ با برند شما</h2>
              <p className="text-base leading-7 text-slate-300">
                استایل تورها را با رنگ سازمانی، فونت و دکمه‌های اختصاصی تغییر دهید. لینک رزرو بازدید حضوری یا تماس مستقیم را در هر صحنه اضافه کنید.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-6 text-sm leading-6 text-cyan-50/90">
              <p>• خروجی WebGL و HTML سازگار با تمام مرورگرهای مدرن</p>
              <p>• پشتیبانی از هدست‌های واقعیت مجازی برای نمایشگاه‌ها</p>
              <p>• آمار کامل بازدید، زمان ماندگاری و نرخ تعامل هر صحنه</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
