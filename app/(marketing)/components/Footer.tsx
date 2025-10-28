import Link from "next/link";
import { navLinks } from "../lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <h2 className="text-lg font-semibold text-white">Amlakia360</h2>
            <p className="text-sm leading-6 text-slate-300">
              پلتفرم کامل برای ساخت تورهای ۳۶۰ درجه، جستجوی هوشمند و مدیریت فروش املاک. تجربه‌ای حرفه‌ای برای مشاوران، آژانس‌ها و مشتریان نهایی.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 text-sm text-slate-300 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white">مسیرهای سریع</h3>
              <ul className="space-y-2">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white">پنل‌ها</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/panel/customer" className="transition hover:text-white">
                    ورود مشتریان
                  </Link>
                </li>
                <li>
                  <Link href="/panel/agency" className="transition hover:text-white">
                    ورود املاکی‌ها
                  </Link>
                </li>
                <li>
                  <Link href="/panel/admin" className="transition hover:text-white">
                    ورود ادمین
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white">ارتباط</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:support@amlakia360.ir" className="transition hover:text-white">
                    support@amlakia360.ir
                  </a>
                </li>
                <li>
                  <a href="tel:02145298000" className="transition hover:text-white">
                    ۰۲۱-۴۵۲۹۸۰۰۰
                  </a>
                </li>
                <li>
                  <Link href="/resources" className="transition hover:text-white">
                    مستندات و راهنما
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Amlakia360. تمامی حقوق محفوظ است.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="transition hover:text-white">
              حریم خصوصی
            </Link>
            <Link href="#" className="transition hover:text-white">
              شرایط استفاده
            </Link>
            <Link href="#" className="transition hover:text-white">
              امنیت داده
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
