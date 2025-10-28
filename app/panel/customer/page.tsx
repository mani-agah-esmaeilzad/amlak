import Link from "next/link";
import { PanelLayout } from "../components/PanelLayout";

const navItems = [
  { label: "پنل مشتری", href: "/panel/customer" },
  { label: "پنل املاک", href: "/panel/agency" },
  { label: "پنل ادمین", href: "/panel/admin" },
  { label: "صفحه اصلی", href: "/" },
];

const upcomingTours = [
  {
    title: "تور ۳۶۰ آپارتمان الهیه",
    datetime: "پنج‌شنبه ۲۳ شهریور · ساعت ۱۸",
    status: "رزرو شده",
    cta: "ورود به تور",
  },
  {
    title: "بازدید مجازی ویلای لواسان",
    datetime: "جمعه ۲۴ شهریور · ساعت ۱۱",
    status: "منتظر تایید مشاور",
    cta: "پیگیری",
  },
];

const recommendations = [
  {
    title: "آپارتمان دو خوابه نیاوران",
    description: "۱۴۰ متر · نورگیر جنوبی · مبله جزئی",
    score: "۹۳٪ تطابق",
  },
  {
    title: "پنت‌هاوس سعادت‌آباد",
    description: "۲۳۰ متر · تراس بزرگ · امکان پارک دو خودرو",
    score: "۸۸٪ تطابق",
  },
  {
    title: "خانه باغ شهریار",
    description: "۵۰۰ متر زمین · استخر روباز · مناسب دورکاری",
    score: "۸۵٪ تطابق",
  },
];

const supportShortcuts = [
  {
    title: "گفت‌وگوی زنده با مشاور",
    description: "هر زمان سوالی داشتید، از طریق چت آنلاین پاسخ فوری دریافت کنید.",
    action: "شروع گفت‌وگو",
  },
  {
    title: "برنامه‌ریزی بازدید حضوری",
    description: "پس از بازدید مجازی، زمان مناسب برای بازدید حضوری را رزرو کنید.",
    action: "رزرو زمان",
  },
];

export default function CustomerPanelPage() {
  return (
    <PanelLayout
      title="پنل مشتری"
      description="در این بخش مشتری می‌تواند تورهای رزرو شده، پیشنهادهای شخصی‌سازی‌شده و وضعیت درخواست‌های خود را مدیریت کند."
      active="/panel/customer"
      navItems={navItems}
      stats={[
        { label: "تورهای در انتظار", value: "۲", change: "یک تور جدید اضافه شد" },
        { label: "درخواست‌های پیگیری", value: "۳" },
        { label: "میانگین امتیاز تطابق", value: "۹۰٪" },
      ]}
      actions={[
        {
          label: "تکمیل پروفایل",
          description: "اطلاعات سبک زندگی و بودجه را وارد کنید تا پیشنهادهای دقیق‌تری دریافت کنید.",
        },
        {
          label: "اشتراک‌گذاری با خانواده",
          description: "هم‌خانه‌های خود را دعوت کنید تا تورها را همراه هم بررسی کنید.",
        },
      ]}
    >
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">تورهای پیش رو</h2>
            <p className="text-sm text-slate-300">بازدیدهای رزرو شده خود را مدیریت کنید و مستقیما وارد تور شوید.</p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
          >
            رزرو تور جدید
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {upcomingTours.map((tour) => (
            <div key={tour.title} className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-lg font-semibold text-white">{tour.title}</p>
              <p className="mt-2 text-sm text-slate-400">{tour.datetime}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">{tour.status}</span>
                <button className="rounded-full border border-white/20 px-3 py-1 text-white transition hover:border-emerald-300 hover:text-emerald-200">
                  {tour.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold text-white">پیشنهادهای هوشمند</h2>
        <p className="mt-2 text-sm text-slate-300">
          سیستم هوشمند براساس سلیقه و رفتار شما این ملک‌ها را پیشنهاد می‌دهد. هر لحظه می‌توانید معیارها را تغییر دهید.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {recommendations.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{item.score}</span>
              </div>
              <p className="mt-3 text-xs leading-6 text-slate-300">{item.description}</p>
              <button className="mt-4 w-full rounded-full border border-white/20 px-4 py-2 text-xs text-white transition hover:border-emerald-300 hover:text-emerald-200">
                مشاهده جزئیات
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {supportShortcuts.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg font-semibold text-white">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            <button className="mt-4 rounded-full bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-emerald-500 hover:text-slate-900">
              {item.action}
            </button>
          </div>
        ))}
        <div className="rounded-3xl border border-dashed border-emerald-400/60 bg-emerald-500/10 p-6 text-sm text-emerald-100">
          <p className="text-base font-semibold text-white">همگام‌سازی با تقویم شخصی</p>
          <p className="mt-2 leading-7">
            تورهای رزرو شده را با Google Calendar یا تقویم گوشی خود هماهنگ کنید تا هیچ بازدیدی را از دست ندهید.
          </p>
        </div>
      </section>
    </PanelLayout>
  );
}
