import Link from "next/link";

const features = [
  {
    title: "تورهای ۳۶۰ درجه",
    description:
      "به راحتی و تنها با چند کلیک، تور مجازی از هر ملک بسازید و به خریداران اجازه دهید از راه دور وارد خانه شوند.",
    highlight: "کیفیت 8K",
  },
  {
    title: "جستجوی هوشمند با AI",
    description:
      "کاربر فقط کافی است نیازش را توصیف کند. موتور جستجوی ما دقیق‌ترین نتایج مطابق با سلیقه او را برمی‌گرداند.",
    highlight: "درک زبان طبیعی",
  },
  {
    title: "مدیریت آژانس‌ها",
    description:
      "هر آژانس یک داشبورد اختصاصی برای بارگذاری ملک‌ها، مدیریت اشتراک و گزارش‌گیری کامل دارد.",
    highlight: "پلن‌های اشتراکی انعطاف‌پذیر",
  },
  {
    title: "اتوماسیون بازاریابی",
    description:
      "سناریوهای پیامکی و ایمیلی آماده تا هیچ فرصت فروش از دست نرود و مشتریان همیشه در جریان باشند.",
    highlight: "اتوماسیون چندکاناله",
  },
];

const pricingPlans = [
  {
    name: "استارتاپ",
    price: "۹۹۰٬۰۰۰",
    period: "ماهانه",
    features: [
      "۵ تور فعال همزمان",
      "برندینگ سفارشی",
      "۳ کاربر در پنل املاک",
      "تحلیل‌های پایه بازدید",
    ],
  },
  {
    name: "حرفه‌ای",
    price: "۱٬۹۹۰٬۰۰۰",
    period: "ماهانه",
    highlighted: true,
    features: [
      "۱۵ تور فعال + آرشیو نامحدود",
      "جستجوی AI با فیلترهای پیشرفته",
      "ادغام با CRM محبوب",
      "پشتیبانی اولویت‌دار ۲۴/۷",
    ],
  },
  {
    name: "سازمانی",
    price: "تماس بگیرید",
    period: "سفارشی",
    features: [
      "دسترسی چند شعبه",
      "نقشه حرارتی بازدید",
      "اکانت مدیر منطقه",
      "تضمین SLA اختصاصی",
    ],
  },
];

const aiSearchFilters = [
  "نزدیک به مترو",
  "پارکینگ اختصاصی",
  "فاصله تا مدارس",
  "امکان مبله",
  "سازه نوساز",
  "سقف بلند",
];

const sampleProperties = [
  {
    id: 1,
    title: "پنت‌هاوس لوکس الهیه",
    description: "۳۲۰ متر | ۳ خواب | ویو شهر | مبله کامل",
    tag: "پیشنهاد ویژه",
  },
  {
    id: 2,
    title: "واحد دو خوابه شهرک غرب",
    description: "۱۲۵ متر | نورگیری عالی | دسترسی بزرگراه",
    tag: "پر بازدید",
  },
  {
    id: 3,
    title: "ویلای مدرن لواسان",
    description: "۶۰۰ متر زمین | استخر روباز | امنیت خصوصی",
    tag: "تور ۳۶۰ درجه",
  },
];

const tourHighlights = [
  {
    title: "ویرایشگر صحنه",
    description:
      "مسیر حرکت، نقاط داغ و توضیحات صوتی را در هر تور مجازی کنترل کنید تا تجربه‌ای تعاملی بسازید.",
  },
  {
    title: "اشتراک‌گذاری آسان",
    description:
      "لینک تور را در سایت خود، شبکه‌های اجتماعی یا پیام‌رسان‌ها قرار دهید و بازدید مجازی را چند برابر کنید.",
  },
  {
    title: "آنالیز رفتار",
    description:
      "دقیقا ببینید کدام اتاق بیشترین توجه را داشته و خریداران در هر تور چه مسیری را طی کرده‌اند.",
  },
];

const faqs = [
  {
    question: "آیا نیاز به نصب نرم‌افزار خاصی برای ایجاد تور دارم؟",
    answer:
      "خیر، تمام فرآیند بارگذاری، چیدمان و انتشار تور از طریق پنل تحت وب انجام می‌شود و تنها به تصاویر ۳۶۰ نیاز دارید.",
  },
  {
    question: "هوش مصنوعی چگونه املاک پیشنهادی را پیدا می‌کند؟",
    answer:
      "با تحلیل توضیحات متنی، برچسب‌ها، رفتار کاربران و ترکیب آن با داده‌های مکانی. هر قدر داده بیشتری وارد کنید نتایج دقیق‌تر می‌شود.",
  },
  {
    question: "آیا می‌توانم چند شعبه را زیر یک حساب مدیریت کنم؟",
    answer:
      "بله، در پلن سازمانی می‌توانید شعب مختلف را با سطح دسترسی متفاوت و گزارش‌های جداگانه مدیریت کنید.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-xl font-black text-emerald-400">
              360
            </span>
            <div>
              <p className="text-sm text-slate-400">پلتفرم واقعیت مجازی املاک</p>
              <p className="text-lg font-semibold text-white">Amlakia360</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <Link className="transition hover:text-white" href="#features">
              امکانات
            </Link>
            <Link className="transition hover:text-white" href="#ai-search">
              جستجوی هوشمند
            </Link>
            <Link className="transition hover:text-white" href="#pricing">
              پلن‌های اشتراک
            </Link>
            <Link className="transition hover:text-white" href="#faqs">
              سوالات متداول
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/panel/agency"
              className="hidden rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:text-white md:block"
            >
              ورود پنل املاک
            </Link>
            <Link
              href="#pricing"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
            >
              شروع رایگان
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-32 pt-20">
        <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-emerald-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              نسل جدید بازدید املاک با تور ۳۶۰ و هوش مصنوعی
            </div>
            <h1 className="text-4xl font-black leading-snug text-white md:text-5xl">
              فروش سریع‌تر املاک با واقعیت مجازی و جستجوی دقیق هوشمند
            </h1>
            <p className="max-w-2xl text-lg leading-9 text-slate-300">
              Amlakia360 یک پلتفرم کامل برای مشاوران املاک است تا تجربه بازدید حضوری را به شکل آنلاین و جذاب ارائه کنند.
              از ساخت تورهای سه‌بعدی، تا کشف مشتریان جدید با جستجوی مبتنی بر هوش مصنوعی، همه چیز آماده استفاده است.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#ai-search"
                className="rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-emerald-400"
              >
                مشاهده جستجوی هوشمند
              </Link>
              <Link
                href="/panel/customer"
                className="rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200"
              >
                دموی پنل مشتری
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <dt className="text-sm text-slate-400">تورهای ساخته‌شده</dt>
                <dd className="mt-2 text-3xl font-black text-white">+۳٬۸۰۰</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <dt className="text-sm text-slate-400">میانگین افزایش لید</dt>
                <dd className="mt-2 text-3xl font-black text-white">۵۷٪</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <dt className="text-sm text-slate-400">زمان راه‌اندازی</dt>
                <dd className="mt-2 text-3xl font-black text-white">کمتر از ۱۰ دقیقه</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-emerald-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/5 bg-slate-900/60 px-6 py-4">
                <p className="text-sm font-semibold text-white">تور ۳۶۰ درجه</p>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                  دموی زنده
                </span>
              </div>
              <div className="space-y-4 p-6">
                <div className="aspect-video rounded-2xl bg-[radial-gradient(circle_at_top,_#0ea5e9,_#1e293b)]" />
                <div className="grid gap-3 text-sm text-slate-300">
                  <p>
                    مسیر بازدید به صورت خودکار بر اساس رفتار کاربران تنظیم شده و نقاط داغ برای توضیح ویژگی‌های کلیدی تعریف
                    می‌شوند.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["نمای ۳۶۰", "اندازه‌گیری آنلاین", "VR", "اشتراک‌گذاری"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">امکانات</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">همه ابزارهای لازم برای رشد کسب‌وکار املاک</h2>
            <p className="max-w-3xl text-lg text-slate-300">
              از اولین قدم تا بستن قرارداد کنار شما هستیم. هر بخش از پلتفرم با تحقیقات میدانی بین مشاوران املاک طراحی شده است
              تا کارایی تیم شما را چند برابر کند.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-emerald-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    {feature.highlight}
                  </span>
                </div>
                <p className="mt-4 text-base leading-8 text-slate-300">{feature.description}</p>
                <div className="mt-6 flex items-center gap-3 text-sm text-emerald-200">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  آماده اتصال به سیستم‌های شما
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="ai-search" className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">جستجوی هوشمند</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">
              خانه رویایی را با چند کلمه پیدا کنید
            </h2>
            <p className="text-lg leading-9 text-slate-300">
              موتور جستجوی Amlakia360 زبان طبیعی را می‌فهمد. کافی است بنویسید «آپارتمان دو خوابه نورگیر نزدیک مترو با امکان قسطی»
              تا پیشنهادهایی کاملا مطابق با نیاز دریافت کنید. فیلترهای هوشمند هر روز با رفتار کاربران بهتر می‌شوند.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <label className="text-sm text-slate-400" htmlFor="search">
                توضیح خود را بنویسید
              </label>
              <div className="mt-3 flex flex-col gap-3 md:flex-row">
                <input
                  id="search"
                  placeholder="مثال: ویلای مدرن با باغچه بزرگ برای خانواده ۴ نفره"
                  className="flex-1 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                />
                <button className="rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400">
                  تحلیل هوشمند
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                {aiSearchFilters.map((filter) => (
                  <span key={filter} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    #{filter}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {sampleProperties.map((property) => (
              <div
                key={property.id}
                className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-lg shadow-emerald-500/5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{property.title}</h3>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    {property.tag}
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-300">{property.description}</p>
                <div className="mt-6 grid gap-2 text-xs text-slate-400">
                  <p>دقت جستجو: ۹۶٪</p>
                  <p>بازدید مجازی فعال · بروزرسانی ۳ دقیقه قبل</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">تورهای ۳۶۰</p>
              <h2 className="text-3xl font-black text-white md:text-4xl">ویرایشگر تعاملی برای ساخت تجربه‌های فراموش‌نشدنی</h2>
            </div>
            <Link
              href="/panel/agency"
              className="rounded-full border border-purple-400/60 px-6 py-3 text-sm font-semibold text-purple-200 transition hover:border-purple-200 hover:text-white"
            >
              مشاهده پنل املاک
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {tourHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800">
            <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-center">
              <div className="space-y-6 p-8">
                <h3 className="text-2xl font-bold text-white">پیش‌نمایش آنلاین تور</h3>
                <p className="text-sm text-slate-300">
                  با استفاده از شبیه‌ساز داخلی، مسیر حرکت کاربر را قبل از انتشار بررسی کنید. نقاط داغ، توضیحات صوتی و سناریوهای
                  اتوماتیک را از اینجا مدیریت کنید.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                  {[
                    "نقاط تعاملی",
                    "اندازه‌گیری هوشمند",
                    "پشتیبانی VR",
                    "تبدیل خودکار فرمت",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative h-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.25),_transparent_65%)]">
                <div className="m-8 rounded-2xl border border-white/10 bg-slate-950/70 p-6">
                  <div className="aspect-[16/9] rounded-2xl bg-[conic-gradient(at_top,_#22d3ee,_#0f172a,_#0ea5e9)] shadow-inner" />
                  <div className="mt-6 grid gap-3 text-xs text-slate-400">
                    <div className="flex items-center justify-between">
                      <p>میانگین زمان بازدید</p>
                      <span className="text-emerald-300">۴:۳۸ دقیقه</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>واکنش کاربران</p>
                      <span className="text-emerald-300">+۷۲٪ تعامل بیشتر</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>پخش همزمان</p>
                      <span className="text-emerald-300">۲۳ کاربر آنلاین</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">گزارش‌دهی لحظه‌ای</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">یک نگاه، تمام عملکرد تیم فروش</h2>
            <p className="text-lg text-slate-300">
              داشبورد مدیریتی، تصویر جامعی از عملکرد آژانس شما ارائه می‌دهد: از میزان مشاهده تورها، تعداد لیدهای جدید تا روند
              فروش در هر محله. همه چیز در یک صفحه.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>• ردیابی منبع ورود لیدها و کمپین‌های موثر</li>
              <li>• مشاهده تنگناهای قیف فروش و اولویت‌بندی فرصت‌ها</li>
              <li>• گزارش آماده چاپ برای مدیران و سرمایه‌گذاران</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">آمار هفتگی</p>
              <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-300">+۱۸٪ نسبت به هفته قبل</span>
            </div>
            <div className="mt-6 grid gap-4 text-sm">
              <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                <p className="text-slate-400">لیدهای جدید</p>
                <p className="mt-2 text-2xl font-bold text-white">۲۴۳</p>
                <p className="text-xs text-emerald-300">+۳۲٪ رشد</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                <p className="text-slate-400">تورهای مشاهده‌شده</p>
                <p className="mt-2 text-2xl font-bold text-white">۱٬۵۹۰</p>
                <p className="text-xs text-emerald-300">+۵۱٪ رشد</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                <p className="text-slate-400">قراردادهای بسته‌شده</p>
                <p className="mt-2 text-2xl font-bold text-white">۴۸</p>
                <p className="text-xs text-emerald-300">+۱۴٪ رشد</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">اشتراک‌ها</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">
              پلن مناسب تیم خود را انتخاب کنید و هر زمان ارتقا دهید
            </h2>
            <p className="text-lg text-slate-300">
              همه پلن‌ها شامل آزمایش رایگان ۱۴ روزه، آموزش کامل و انتقال داده بدون هزینه هستند.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border bg-white/[0.04] p-8 text-center transition ${
                  plan.highlighted
                    ? "border-emerald-400/60 bg-emerald-500/10 shadow-lg shadow-emerald-500/20"
                    : "border-white/10"
                }`}
              >
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-4 text-4xl font-black text-white">
                  {plan.price}
                  <span className="mr-2 text-base font-medium text-slate-400">{plan.period}</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center justify-center gap-2">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                      : "border border-white/20 text-white hover:border-emerald-300 hover:text-emerald-200"
                  }`}
                >
                  شروع آزمایشی
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">سیستم‌های یکپارچه</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">به ابزارهای محبوب خود متصل شوید</h2>
            <p className="text-lg text-slate-300">
              ادغام آماده با سامانه‌های CRM، درگاه‌های پرداخت، سیستم‌های پیامک و ابزارهای بازاریابی. اگر سرویسی نیاز دارید که
              هنوز اضافه نشده، تیم ما در کمترین زمان اتصال را برای شما فراهم می‌کند.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-300">
              {[
                "HubSpot",
                "Zoho CRM",
                "سامانه پیامک کاوه",
                "درگاه پرداخت شاپرک",
                "Microsoft Teams",
                "WhatsApp Business",
              ].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-semibold text-white">داستان موفقیت آژانس آفتاب</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              «بعد از استفاده از Amlakia360 تورهای مجازی ما در کمتر از سه روز بیش از ۲۰۰ بازدید دریافت کردند و فروش واحدهای لوکس
              سرعت چشمگیری گرفت. داشبورد مدیریتی به ما نشان داد کدام محله‌ها بیشتر جستجو می‌شوند و بر همان اساس کمپین تبلیغاتی
              طراحی کردیم.»
            </p>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
              <div>
                <p className="font-semibold text-white">مدیر فروش آژانس آفتاب</p>
                <p>تهران · مشتری از ۱۴۰۱</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">افزایش فروش ۶۵٪</span>
            </div>
          </div>
        </section>

        <section id="faqs" className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">سوالات متداول</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">همه چیز آماده است تا از امروز شروع کنید</h2>
            <p className="text-lg text-slate-300">
              اگر پاسخ سوال خود را پیدا نکردید، با ما تماس بگیرید تا مشاور اختصاصی راه‌اندازی برای شما تعیین کنیم.
            </p>
            <Link
              href="/panel/admin"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200"
            >
              نگاهی به پنل ادمین
            </Link>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-400/60 bg-emerald-500/10 p-10 text-center">
          <h2 className="text-3xl font-black text-white md:text-4xl">آماده‌اید تجربه مشتریان خود را متحول کنید؟</h2>
          <p className="mt-4 text-lg text-emerald-100">
            همین امروز ثبت‌نام کنید، تور نمونه بسازید و با مشاور اختصاصی ما نقشه راه دیجیتال شدن آژانس را طراحی کنید.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/panel/agency"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              شروع نسخه آزمایشی
            </Link>
            <Link
              href="mailto:hello@amlakia360.com"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              درخواست جلسه معرفی
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-white">Amlakia360</p>
            <p>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link className="transition hover:text-white" href="/panel/customer">
              پنل مشتری
            </Link>
            <Link className="transition hover:text-white" href="/panel/agency">
              پنل املاک
            </Link>
            <Link className="transition hover:text-white" href="/panel/admin">
              پنل ادمین
            </Link>
            <Link className="transition hover:text-white" href="#pricing">
              تعرفه‌ها
            </Link>
            <Link className="transition hover:text-white" href="#faqs">
              راهنما
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
