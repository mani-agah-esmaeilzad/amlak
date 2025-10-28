import Link from "next/link";
import { PanelLayout } from "../components/PanelLayout";

const navItems = [
  { label: "پنل مشتری", href: "/panel/customer" },
  { label: "پنل املاک", href: "/panel/agency" },
  { label: "پنل ادمین", href: "/panel/admin" },
  { label: "صفحه اصلی", href: "/" },
];

const activeListings = [
  {
    title: "ویلای لاکچری لواسان",
    views: "۱٬۲۸۰ بازدید",
    leads: "۴۵ لید",
    status: "تور فعال",
  },
  {
    title: "پروژه برج آسمان شهرک غرب",
    views: "۹۸۰ بازدید",
    leads: "۳۲ لید",
    status: "در حال به‌روزرسانی",
  },
  {
    title: "آپارتمان نوساز قلهک",
    views: "۷۲۰ بازدید",
    leads: "۲۴ لید",
    status: "رزرو بازدید حضوری",
  },
];

const teamActivities = [
  {
    agent: "مریم صادقی",
    action: "تور جدید بارگذاری شد",
    time: "۲۰ دقیقه پیش",
  },
  {
    agent: "امیررضا فلاح",
    action: "پاسخ به پیام مشتری",
    time: "۱ ساعت پیش",
  },
  {
    agent: "نسترن کیانی",
    action: "قرارداد فروش ثبت شد",
    time: "دیروز",
  },
];

const tasks = [
  {
    title: "بارگذاری تصاویر ۳۶۰ پروژه سعادت‌آباد",
    owner: "تیم محتوا",
    due: "تا فردا",
  },
  {
    title: "هماهنگی بازدید حضوری ویلای لواسان",
    owner: "مریم صادقی",
    due: "امروز",
  },
  {
    title: "ارسال کمپین پیامکی",
    owner: "تیم بازاریابی",
    due: "سه‌شنبه",
  },
];

export default function AgencyPanelPage() {
  return (
    <PanelLayout
      title="پنل املاک"
      description="داشبورد جامع برای آژانس‌های املاک جهت مدیریت تورهای ۳۶۰ درجه، پیگیری لیدها و هماهنگی تیم فروش."
      active="/panel/agency"
      navItems={navItems}
      stats={[
        { label: "تورهای فعال", value: "۱۲", change: "۳ تور در حال ساخت" },
        { label: "میانگین بازدید روزانه", value: "۱٬۴۸۰" },
        { label: "قراردادهای ماه جاری", value: "۲۱", change: "+۱۸٪ نسبت به ماه قبل" },
      ]}
      actions={[
        {
          label: "ارتقای پلن",
          description: "با ارتقای پلن به حرفه‌ای از جستجوی AI پیشرفته و آرشیو نامحدود استفاده کنید.",
        },
        {
          label: "دعوت از همکار",
          description: "همکاران جدید را تنها با ارسال لینک دعوت به سیستم اضافه کنید.",
        },
      ]}
    >
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">فهرست املاک فعال</h2>
            <p className="text-sm text-slate-300">عملکرد تورها را رصد کنید و سریعاً اقدام‌های لازم را انجام دهید.</p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
          >
            افزودن ملک جدید
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {activeListings.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-base font-semibold text-white">{item.title}</p>
              <div className="mt-3 space-y-2 text-xs text-slate-300">
                <p>{item.views}</p>
                <p>{item.leads}</p>
              </div>
              <span className="mt-4 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{item.status}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">فعالیت‌های اخیر تیم</h2>
          <div className="mt-5 space-y-3">
            {teamActivities.map((activity) => (
              <div key={activity.agent} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300">
                <div className="flex items-center justify-between text-white">
                  <p className="font-semibold">{activity.agent}</p>
                  <span className="text-xs text-slate-400">{activity.time}</span>
                </div>
                <p className="mt-2">{activity.action}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">وظایف روزانه</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            {tasks.map((task) => (
              <div key={task.title} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p className="font-semibold text-white">{task.title}</p>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span>{task.owner}</span>
                  <span className="text-emerald-300">{task.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-purple-400/40 bg-purple-500/10 p-6 text-sm text-purple-100">
        <h2 className="text-2xl font-semibold text-white">پیشنهاد بهبود</h2>
        <p className="mt-2 leading-7">
          تور پروژه برج آسمان بیشترین بازدیدکننده را دارد اما نرخ تبدیل پایین است. پیشنهاد می‌کنیم ویدیوی معرفی مشاور را به تور
          اضافه کرده و سناریوی پیامک پیگیری را فعال کنید.
        </p>
      </section>
    </PanelLayout>
  );
}
