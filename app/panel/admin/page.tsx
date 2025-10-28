import Link from "next/link";
import { PanelLayout } from "../components/PanelLayout";

const navItems = [
  { label: "پنل مشتری", href: "/panel/customer" },
  { label: "پنل املاک", href: "/panel/agency" },
  { label: "پنل ادمین", href: "/panel/admin" },
  { label: "صفحه اصلی", href: "/" },
];

const agencies = [
  {
    name: "آژانس آفتاب",
    plan: "حرفه‌ای",
    seats: "۱۸ کاربر",
    status: "فعال",
  },
  {
    name: "گروه توسعه سروش",
    plan: "سازمانی",
    seats: "۴۵ کاربر",
    status: "توسعه داده",
  },
  {
    name: "املاک ساحل",
    plan: "استارتاپ",
    seats: "۶ کاربر",
    status: "آزمایشی",
  },
];

const systemAlerts = [
  {
    title: "افزایش ترافیک جستجوی AI",
    description: "بار پردازشی به ۸۷٪ ظرفیت رسیده است. پیشنهاد می‌شود نود جدید فعال شود.",
    severity: "هشدار",
  },
  {
    title: "به‌روزرسانی نسخه تور ۳۶۰",
    description: "نسخه ۲.۴ آماده انتشار است و شامل بهبود سرعت رندر می‌باشد.",
    severity: "اطلاعیه",
  },
];

const auditLogs = [
  {
    actor: "مدیر سیستم",
    action: "دسترسی مدیر منطقه برای آژانس آفتاب ایجاد شد",
    time: "۵ دقیقه پیش",
  },
  {
    actor: "پشتیبان شیفت صبح",
    action: "بازنشانی گذرواژه کاربر مریم صادقی",
    time: "۱ ساعت پیش",
  },
  {
    actor: "سیستم خودکار",
    action: "گزارش هفتگی عملکرد به مدیرعامل ارسال شد",
    time: "دیروز",
  },
];

export default function AdminPanelPage() {
  return (
    <PanelLayout
      title="پنل ادمین"
      description="از اینجا می‌توانید وضعیت کلی سیستم، اشتراک آژانس‌ها و تنظیمات امنیتی را کنترل کنید."
      active="/panel/admin"
      navItems={navItems}
      stats={[
        { label: "آژانس‌های فعال", value: "۷۲" },
        { label: "تورهای امروز", value: "۴۵۰" },
        { label: "درخواست‌های پشتیبانی", value: "۹", change: "۳ درخواست جدید" },
      ]}
      actions={[
        {
          label: "گزارش عملکرد",
          description: "آخرین گزارش هفتگی را دانلود کنید و با تیم اجرایی به اشتراک بگذارید.",
        },
        {
          label: "تنظیمات امنیت",
          description: "سیاست‌های ورود دو مرحله‌ای و مدیریت دستگاه‌ها را بررسی کنید.",
        },
      ]}
    >
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">وضعیت آژانس‌ها</h2>
            <p className="text-sm text-slate-300">اشتراک‌ها و سطح دسترسی هر آژانس را کنترل کنید.</p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
          >
            افزودن آژانس جدید
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {agencies.map((agency) => (
            <div key={agency.name} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-sm text-slate-300">
              <p className="text-base font-semibold text-white">{agency.name}</p>
              <p className="mt-2">پلن: {agency.plan}</p>
              <p className="mt-1">کاربران فعال: {agency.seats}</p>
              <span className="mt-3 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{agency.status}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">هشدارها و اطلاعیه‌ها</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            {systemAlerts.map((alert) => (
              <div key={alert.title} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">{alert.title}</p>
                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-300">{alert.severity}</span>
                </div>
                <p className="mt-2 leading-7">{alert.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">گزارش فعالیت سیستم</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            {auditLogs.map((log) => (
              <div key={log.action} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <div className="flex items-center justify-between text-white">
                  <p className="font-semibold">{log.actor}</p>
                  <span className="text-xs text-slate-400">{log.time}</span>
                </div>
                <p className="mt-2 leading-7">{log.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-400/40 bg-emerald-500/10 p-6 text-sm text-emerald-100">
        <h2 className="text-2xl font-semibold text-white">برنامه نگه‌داری</h2>
        <p className="mt-2 leading-7">
          پنجره نگه‌داری بعدی برای شنبه ساعت ۲ بامداد برنامه‌ریزی شده است. سرویس‌ها بدون قطعی اما با حالت فقط خواندنی در دسترس
          خواهند بود. اطلاع‌رسانی از طریق ایمیل و اعلان درون برنامه انجام می‌شود.
        </p>
      </section>
    </PanelLayout>
  );
}
