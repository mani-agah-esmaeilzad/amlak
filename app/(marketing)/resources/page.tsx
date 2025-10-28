import { PageIntro } from "../components/PageIntro";
import { blogPosts, contactChannels, faqs } from "../lib/data";

export default function ResourcesPage() {
  return (
    <div className="space-y-24">
      <PageIntro
        eyebrow="منابع و پشتیبانی"
        title="همیشه یک قدم جلوتر از سوالات مشتریان"
        description="مرکز دانش، سوالات متداول و کانال‌های پشتیبانی برای آموزش تیم فروش، پاسخ به مشتریان و پیگیری سریع درخواست‌ها."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">پرسش‌های پرتکرار</h2>
            <p className="text-base leading-7 text-slate-300">
              پاسخ به رایج‌ترین سوالات درباره تورهای ۳۶۰، هوش مصنوعی و اتصال به سامانه‌های دیگر.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-white">
                  <span className="inline-flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-cyan-300 transition group-open:rotate-90">→</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">آخرین آموزش‌ها و داستان‌های موفقیت</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{post.excerpt}</p>
                <a href={post.href} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                  مطالعه بیشتر
                  <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">با تیم ما در ارتباط باشید</h2>
            <p className="text-base leading-7 text-slate-300">
              برای فعال‌سازی پلن، دریافت آموزش یا مطرح کردن درخواست فنی از یکی از کانال‌های زیر استفاده کنید.
            </p>
            <div className="space-y-4">
              {contactChannels.map((channel) => (
                <div key={channel.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-base font-semibold text-white">{channel.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{channel.description}</p>
                  <p className="mt-2 text-sm font-semibold text-cyan-200">{channel.value}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white">
                نام و نام خانوادگی
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                placeholder="مثال: نازنین احمدی"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white">
                ایمیل کاری
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                placeholder="مثال: you@company.ir"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-white">
                نام شرکت یا آژانس
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                placeholder="مثال: گروه املاک طلوع"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white">
                توضیحات درخواست
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                placeholder="چه چیزی می‌خواهید یاد بگیرید یا فعال کنید؟"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              ارسال درخواست
            </button>
            <p className="text-xs leading-6 text-slate-400">
              با ارسال فرم، شرایط استفاده Amlakia360 را می‌پذیرید. تیم ما ظرف یک روز کاری با شما تماس خواهد گرفت.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
