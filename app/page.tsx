import Link from "next/link";

const navLinks = [
  { label: "امکانات", href: "#features" },
  { label: "فرآیند راه‌اندازی", href: "#workflow" },
  { label: "جستجوی هوشمند", href: "#ai-search" },
  { label: "تورهای ۳۶۰", href: "#tours" },
  { label: "پلن‌های اشتراک", href: "#pricing" },
  { label: "موفقیت مشتریان", href: "#success" },
  { label: "منابع و پشتیبانی", href: "#resources" },
  { label: "ارتباط", href: "#contact" },
];

const heroStats = [
  { label: "تورهای ساخته‌شده", value: "+۳٬۸۰۰" },
  { label: "افزایش میانگین لید", value: "۵۷٪" },
  { label: "میانگین زمان راه‌اندازی", value: "۱۰ دقیقه" },
];

const partnerLogos = [
  "Amlakino",
  "Real360",
  "سرمایه مسکن",
  "VistaHome",
  "SazePlus",
  "SmartEstate",
];

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
  {
    title: "همگام‌سازی چند پلتفرم",
    description:
      "ملک‌ها، قیمت‌گذاری و وضعیت‌ها به‌صورت خودکار با وب‌سایت شما، CRM و پورتال‌های آگهی همگام می‌شوند.",
    highlight: "API باز",
  },
  {
    title: "تحلیل رفتار کاربران",
    description:
      "حرکات بازدیدکنندگان در تور، نقاط توقف و نرخ خروج در اختیار تیم فروش قرار می‌گیرد تا تجربه بهینه شود.",
    highlight: "نقشه حرارتی",
  },
];

const workflowSteps = [
  {
    title: "ثبت نام و تعریف تیم",
    description:
      "ساخت حساب کمتر از سه دقیقه زمان می‌برد. اعضای فروش، محتوا و پشتیبانی را با سطح دسترسی مناسب دعوت کنید.",
  },
  {
    title: "بارگذاری محتوا و ساخت تور",
    description:
      "با کشیدن و رها کردن تصاویر ۳۶۰، نقشه تور را تنظیم و نقاط داغ، توضیحات صوتی و فرم‌های لید را اضافه کنید.",
  },
  {
    title: "انتشار و تحلیل",
    description:
      "تور را در سایت خود، شبکه‌های اجتماعی یا لینک اختصاصی منتشر کنید و از داشبورد لحظه‌ای نتایج را بسنجید.",
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

const aiAssistantMessages = [
  { speaker: "کاربر", content: "آپارتمان دو خوابه نزدیک مترو با امکان پرداخت قسطی می‌خوام." },
  { speaker: "دستیار هوشمند", content: "سه گزینه در محله‌های صادقیه، سعادت‌آباد و پیروزی پیدا کردم که با شرایط شما هماهنگ هستند." },
  { speaker: "کاربر", content: "نورگیری و امکان پارکینگ خیلی مهمه." },
  { speaker: "دستیار هوشمند", content: "نتایج را بر اساس نور جنوبی، پنجره سرتاسری و پارکینگ اختصاصی فیلتر کردم. بهترین مورد، واحد ۱۲۵ متری شهرک غرب است." },
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

const useCases = [
  {
    title: "آژانس‌های لوکس",
    description:
      "با ویدیوهای 8K و بازدید VR مشتریان VIP را بدون اتلاف زمان به ملک‌های منتخب هدایت کنید و گزارش تعامل اختصاصی بگیرید.",
  },
  {
    title: "پروژه‌های پیش‌فروش",
    description:
      "قبل از اتمام پروژه با ماکت سه‌بعدی و تور مجازی از واحد نمونه، فروش واحدها را آغاز کنید و سناریوهای پرداخت را نمایش دهید.",
  },
  {
    title: "سامانه‌های اجاره کوتاه‌مدت",
    description:
      "با بازدید مجازی و مدیریت تقویم هوشمند، اعتماد مهمانان را جلب کرده و رزروهای خود را افزایش دهید.",
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

const automationFlows = [
  {
    title: "پیگیری خودکار لید",
    steps: ["پیامک خوش‌آمد", "ارسال تور مرتبط", "یادآوری تماس مشاور"],
  },
  {
    title: "بازاریابی ایمیلی هوشمند",
    steps: ["تحلیل رفتار", "ارسال پیشنهاد شخصی", "گزارش عملکرد"],
  },
  {
    title: "کنترل کیفیت تور",
    steps: ["آلارم کیفیت تصویر", "یادآوری ویرایش", "تایید انتشار"],
  },
];

const pricingPlans = [
  {
    name: "استارتاپ",
    price: "۹۹۰٬۰۰۰",
    period: "ماهانه",
    features: ["۵ تور فعال همزمان", "برندینگ سفارشی", "۳ کاربر در پنل املاک", "تحلیل‌های پایه بازدید"],
  },
  {
    name: "حرفه‌ای",
    price: "۱٬۹۹۰٬۰۰۰",
    period: "ماهانه",
    highlighted: true,
    features: ["۱۵ تور فعال + آرشیو نامحدود", "جستجوی AI با فیلترهای پیشرفته", "ادغام با CRM محبوب", "پشتیبانی اولویت‌دار ۲۴/۷"],
  },
  {
    name: "سازمانی",
    price: "تماس بگیرید",
    period: "سفارشی",
    features: ["دسترسی چند شعبه", "نقشه حرارتی بازدید", "اکانت مدیر منطقه", "تضمین SLA اختصاصی"],
  },
];

const supportChannels = [
  {
    title: "مرکز آموزش ویدئویی",
    description: "آموزش‌های گام‌به‌گام برای ساخت تور، تنظیم هوش مصنوعی و مدیریت تیم در کمتر از ۱۵ دقیقه.",
  },
  {
    title: "وبینارهای هفتگی",
    description: "هر هفته همراه با متخصصین فروش درباره بهترین روش‌های بازاریابی ملکی صحبت می‌کنیم.",
  },
  {
    title: "پشتیبانی چندزبانه",
    description: "تیم پشتیبانی فارسی، انگلیسی و عربی از طریق چت، ایمیل و تماس تلفنی در دسترس است.",
  },
];

const resourceHighlights = [
  {
    title: "راهنمای شروع سریع",
    items: ["چک‌لیست آماده‌سازی تصاویر", "قالب قراردادهای آنلاین", "چک‌لیست تجهیز دفتر مجازی"],
  },
  {
    title: "ابزارهای رشد",
    items: ["محاسبه‌گر بازگشت سرمایه", "الگوی کمپین پیامکی", "نمونه گزارش هیئت‌مدیره"],
  },
  {
    title: "امنیت و حریم خصوصی",
    items: ["گواهی ISO 27001", "مستند سیاست حریم خصوصی", "تنظیمات دسترسی جزئی"],
  },
];

const blogPosts = [
  {
    title: "چگونه تور مجازی فروش پروژه‌های لوکس را متحول می‌کند؟",
    date: "۲۸ بهمن ۱۴۰۲",
    link: "#",
  },
  {
    title: "راهنمای انتخاب لنز مناسب برای عکاسی ۳۶۰ درجه",
    date: "۱۲ اسفند ۱۴۰۲",
    link: "#",
  },
  {
    title: "۵ ایده برای استفاده از هوش مصنوعی در بازاریابی املاک",
    date: "۲۳ اسفند ۱۴۰۲",
    link: "#",
  },
];

const contactDetails = [
  { label: "تلفن فروش", value: "۰۲۱-۴۸۴۹۶" },
  { label: "ایمیل", value: "hello@amlakia360.com" },
  { label: "آدرس دفتر", value: "تهران، خیابان ولیعصر، پلاک ۲۴۳" },
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
  {
    question: "چگونه می‌توانم داده‌های قبلی خود را منتقل کنم؟",
    answer:
      "تیم ما فایل‌های اکسل، دیتابیس CRM و آرشیو تصاویر شما را بدون هزینه اضافه وارد سیستم می‌کند.",
  },
  {
    question: "آیا اپلیکیشن موبایل هم دارید؟",
    answer:
      "بله، اپلیکیشن مدیریت تیم و بازدید میدانی روی iOS و Android در دسترس است و همگام با نسخه وب کار می‌کند.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
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
            {navLinks.map((item) => (
              <Link key={item.href} className="transition hover:text-white" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/panel/agency"
              className="rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:text-white"
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
        <div className="mx-auto mb-3 w-full max-w-7xl px-4 md:hidden">
          <details className="group rounded-2xl border border-white/10 bg-slate-900/80 p-3 text-sm text-slate-200">
            <summary className="flex cursor-pointer items-center justify-between gap-2 font-semibold text-white">
              منوی اصلی
              <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs text-slate-300 transition group-open:border-emerald-400 group-open:text-emerald-200">
                باز
              </span>
            </summary>
            <nav className="mt-3 grid gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  className="rounded-xl px-3 py-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 grid gap-2">
                <Link
                  href="/panel/agency"
                  className="rounded-xl border border-emerald-400/40 px-3 py-2 text-center text-emerald-200 transition hover:border-emerald-300 hover:text-white"
                >
                  ورود پنل املاک
                </Link>
                <Link
                  href="#pricing"
                  className="rounded-xl bg-emerald-500 px-3 py-2 text-center font-semibold text-slate-900 transition hover:bg-emerald-400"
                >
                  شروع رایگان
                </Link>
              </div>
            </nav>
          </details>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-32 pt-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-emerald-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              نسل جدید بازدید املاک با تور ۳۶۰ و هوش مصنوعی
            </div>
            <h1 className="text-4xl font-black leading-snug text-white md:text-5xl">
              فروش سریع‌تر املاک با واقعیت مجازی و جستجوی دقیق هوشمند
            </h1>
            <p className="max-w-2xl text-lg leading-9 text-slate-300">
              Amlakia360 یک پلتفرم کامل برای مشاوران املاک است تا تجربه بازدید حضوری را به شکل آنلاین و جذاب ارائه کنند. از ساخت تورهای سه‌بعدی، تا کشف مشتریان جدید با جستجوی مبتنی بر هوش مصنوعی، همه چیز آماده استفاده است.
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
            <dl className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <dt className="text-sm text-slate-400">{item.label}</dt>
                  <dd className="mt-2 text-3xl font-black text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-emerald-500/20 blur-3xl" />
            <div className="relative grid gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">تور ۳۶۰ درجه</p>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">دموی زنده</span>
                </div>
                <div className="mt-4 aspect-video rounded-2xl bg-[radial-gradient(circle_at_top,_#0ea5e9,_#1e293b)]" />
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                  {["نمای ۳۶۰", "اندازه‌گیری آنلاین", "VR", "اشتراک‌گذاری"].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm leading-7 text-slate-200">
                <p className="text-sm font-semibold text-white">دستیار فروش هوشمند</p>
                <div className="mt-3 space-y-3">
                  {aiAssistantMessages.map((message, index) => (
                    <div key={`${message.speaker}-${index}`} className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs text-emerald-200">{message.speaker}</p>
                      <p className="mt-1 text-sm text-slate-100">{message.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">اعتماد برندها</p>
              <h2 className="text-lg font-semibold text-white">بیش از ۲۵۰ آژانس املاک در سراسر کشور به ما اعتماد کرده‌اند</h2>
            </div>
            <div className="flex flex-1 flex-wrap items-center justify-end gap-4 text-xs text-slate-400">
              {partnerLogos.map((logo) => (
                <span key={logo} className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 font-semibold text-slate-200">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">امکانات</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">همه ابزارهای لازم برای رشد کسب‌وکار املاک</h2>
            <p className="max-w-3xl text-lg text-slate-300">
              از اولین قدم تا بستن قرارداد کنار شما هستیم. هر بخش از پلتفرم با تحقیقات میدانی بین مشاوران املاک طراحی شده است تا کارایی تیم شما را چند برابر کند.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-emerald-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{feature.highlight}</span>
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

        <section id="workflow" className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">فرآیند راه‌اندازی</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">در سه مرحله ساده، دفتر املاک خود را دیجیتال کنید</h2>
            <p className="max-w-3xl text-lg text-slate-300">
              تیم موفقیت مشتری ما از روز اول در کنار شماست تا آموزش، انتقال داده و تنظیمات فنی بدون چالش انجام شود.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg font-bold text-emerald-300">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ai-search" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">جستجوی هوشمند</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">خانه رویایی را با چند کلمه پیدا کنید</h2>
            <p className="text-lg leading-9 text-slate-300">
              موتور جستجوی Amlakia360 زبان طبیعی را می‌فهمد. کافی است بنویسید «آپارتمان دو خوابه نورگیر نزدیک مترو با امکان قسطی» تا پیشنهادهایی کاملا مطابق با نیاز دریافت کنید. فیلترهای هوشمند هر روز با رفتار کاربران بهتر می‌شوند.
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
                <button
                  className="rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
                  type="button"
                >
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
              <div key={property.id} className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-lg shadow-emerald-500/5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{property.title}</h3>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{property.tag}</span>
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
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">کاربردها</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">راهکار متناسب با اندازه و نوع کسب‌وکار شما</h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-300">
              ابزارهای اختصاصی برای آژانس‌های لوکس، پروژه‌های پیش‌فروش و پلتفرم‌های اجاره کوتاه‌مدت در نظر گرفته‌ایم تا مسیر جذب مشتری کوتاه‌تر شود.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-right">
                <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{useCase.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs text-emerald-200">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  داستان موفقیت موجود است
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="tours" className="space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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
            <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div className="space-y-6 p-8">
                <h3 className="text-2xl font-bold text-white">پیش‌نمایش آنلاین تور</h3>
                <p className="text-sm text-slate-300">
                  با استفاده از شبیه‌ساز داخلی، مسیر حرکت کاربر را قبل از انتشار بررسی کنید. نقاط داغ، توضیحات صوتی و سناریوهای اتوماتیک را از اینجا مدیریت کنید.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                  {["نقاط تعاملی", "اندازه‌گیری هوشمند", "پشتیبانی VR", "تبدیل خودکار فرمت"].map((item) => (
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
        <section className="space-y-10">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">گزارش‌دهی لحظه‌ای</p>
              <h2 className="text-3xl font-black text-white md:text-4xl">یک نگاه، تمام عملکرد تیم فروش</h2>
              <p className="text-lg text-slate-300">
                داشبورد مدیریتی، تصویر جامعی از عملکرد آژانس شما ارائه می‌دهد: از میزان مشاهده تورها، تعداد لیدهای جدید تا روند فروش در هر محله. همه چیز در یک صفحه.
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
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {automationFlows.map((flow) => (
              <div key={flow.title} className="rounded-3xl border border-emerald-400/30 bg-emerald-500/5 p-6">
                <h3 className="text-lg font-semibold text-white">{flow.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-slate-200">
                  {flow.steps.map((step) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">اشتراک‌ها</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">پلن مناسب تیم خود را انتخاب کنید و هر زمان ارتقا دهید</h2>
            <p className="text-lg text-slate-300">
              همه پلن‌ها شامل آزمایش رایگان ۱۴ روزه، آموزش کامل و انتقال داده بدون هزینه هستند.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
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
                  type="button"
                >
                  شروع آزمایشی
                </button>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-sm text-slate-300 lg:flex lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-base font-semibold text-white">نیاز به طرح اختصاصی دارید؟</p>
              <p>پلن سازمانی شامل استقرار اختصاصی، قرارداد SLA و ادغام عمیق با سیستم‌های داخلی شما است.</p>
            </div>
            <Link
              href="mailto:sales@amlakia360.com"
              className="mt-4 inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200 lg:mt-0"
            >
              رزرو جلسه مشاوره
            </Link>
          </div>
        </section>

        <section id="success" className="space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">موفقیت مشتریان</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">روایت واقعی از آژانس‌هایی که رشد کرده‌اند</h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-300">
              ده‌ها آژانس، از دفاتر خانوادگی تا هلدینگ‌های بزرگ، با Amlakia360 فروش خود را متحول کردند.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold text-white">داستان موفقیت آژانس آفتاب</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                «بعد از استفاده از Amlakia360 تورهای مجازی ما در کمتر از سه روز بیش از ۲۰۰ بازدید دریافت کردند و فروش واحدهای لوکس سرعت چشمگیری گرفت. داشبورد مدیریتی به ما نشان داد کدام محله‌ها بیشتر جستجو می‌شوند و بر همان اساس کمپین تبلیغاتی طراحی کردیم.»
              </p>
              <div className="mt-6 flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white">مدیر فروش آژانس آفتاب</p>
                  <p>تهران · مشتری از ۱۴۰۱</p>
                </div>
                <span className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">افزایش فروش ۶۵٪</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm text-slate-400">بازده سرمایه‌گذاری</p>
                <p className="mt-3 text-2xl font-bold text-white">۳.۴ برابر</p>
                <p className="mt-2 text-xs text-slate-300">میانگین بازگشت سرمایه در سه ماه اول استفاده.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm text-slate-400">کاهش لغو بازدید</p>
                <p className="mt-3 text-2xl font-bold text-white">۴۲٪</p>
                <p className="mt-2 text-xs text-slate-300">به کمک بازدید مجازی و پیگیری خودکار.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm text-slate-400">رضایت مشتری نهایی</p>
                <p className="mt-3 text-2xl font-bold text-white">۹.۱/۱۰</p>
                <p className="mt-2 text-xs text-slate-300">براساس نظرسنجی ۳۲۰ خریدار فعال.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm text-slate-400">زمان بستن قرارداد</p>
                <p className="mt-3 text-2xl font-bold text-white">-۲۷٪</p>
                <p className="mt-2 text-xs text-slate-300">با تحلیل اولویت لید و اتوماسیون پیگیری.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">منابع و پشتیبانی</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">با تیم تخصصی ما همیشه یک قدم جلوتر باشید</h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-300">
              آموزش‌های ویدئویی، رویدادهای زنده و پشتیبانی چندکاناله، اطمینان می‌دهد که تیم شما از تمام ظرفیت پلتفرم بهره ببرد.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {supportChannels.map((channel) => (
              <div key={channel.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold text-white">{channel.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{channel.description}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {resourceHighlights.map((resource) => (
              <div key={resource.title} className="rounded-3xl border border-emerald-400/20 bg-emerald-500/5 p-6">
                <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {resource.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <p className="text-base font-semibold text-white">خبرنامه رشد املاک</p>
                <p className="text-sm text-slate-300">هر دو هفته یکبار جدیدترین ترفندهای بازاریابی و تحلیل بازار را دریافت کنید.</p>
              </div>
              <form className="flex w-full flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-4 lg:w-auto">
                <input
                  type="email"
                  required
                  placeholder="ایمیل کاری شما"
                  className="flex-1 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-emerald-400"
                >
                  عضویت
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="faqs" className="grid gap-6 lg:grid-cols-[1fr_1fr]">
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
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-white">
                  {item.question}
                  <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs text-slate-300 transition group-open:border-emerald-300 group-open:text-emerald-200">
                    مشاهده
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">وبلاگ</p>
              <h2 className="text-3xl font-black text-white md:text-4xl">بینش‌های تخصصی برای پیشتازان صنعت املاک</h2>
              <p className="text-lg text-slate-300">تازه‌ترین مقالات و راهنماهای عملی را که توسط متخصصان ما نوشته شده دنبال کنید.</p>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.title}
                  href={post.link}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  <p className="text-xs text-slate-400">{post.date}</p>
                  <p className="mt-3 text-base font-semibold text-white">{post.title}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs text-emerald-300">
                    مطالعه بیشتر
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">ارتباط با ما</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">برای دریافت مشاوره اختصاصی آماده‌ایم</h2>
            <p className="text-lg text-slate-300">
              فرم زیر را پر کنید تا کمتر از ۲۴ ساعت با شما تماس بگیریم و نسخه‌ای متناسب با اهداف کسب‌وکار شما پیشنهاد دهیم.
            </p>
            <div className="space-y-3 text-sm text-slate-200">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-slate-400">{detail.label}</span>
                  <span className="font-semibold text-white">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
          <form className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200">
            <div className="grid gap-2">
              <label className="text-xs text-slate-400" htmlFor="name">
                نام و نام خانوادگی
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="مثال: نگار احمدی"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs text-slate-400" htmlFor="company">
                نام مجموعه
              </label>
              <input
                id="company"
                name="company"
                placeholder="مثال: گروه مشاورین بهار"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs text-slate-400" htmlFor="email">
                ایمیل کاری
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="example@company.com"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs text-slate-400" htmlFor="message">
                توضیحات تکمیلی
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="نیازمندی‌ها و سوالات خود را بنویسید"
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-emerald-400"
            >
              درخواست مشاوره
            </button>
            <p className="text-xs text-slate-400">
              با ارسال فرم، شرایط استفاده و سیاست حریم خصوصی Amlakia360 را می‌پذیرید.
            </p>
          </form>
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 text-sm text-slate-400 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-white">Amlakia360</p>
              <p className="mt-1 text-slate-400">پلتفرم واقعیت مجازی و هوش مصنوعی برای آژانس‌های املاک.</p>
            </div>
            <p className="max-w-md text-xs text-slate-500">
              ما با ترکیب تجربه کاربری عالی و تحلیل داده دقیق، به تیم‌های فروش کمک می‌کنیم تصمیم‌های سریع‌تر و آگاهانه‌تری بگیرند.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="rounded-full border border-white/10 px-3 py-1">ISO 27001</span>
              <span className="rounded-full border border-white/10 px-3 py-1">GDPR Ready</span>
              <span className="rounded-full border border-white/10 px-3 py-1">پشتیبانی ۲۴/۷</span>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">محصول</p>
              <ul className="space-y-2">
                <li>
                  <Link className="transition hover:text-white" href="#features">
                    امکانات
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="#ai-search">
                    جستجوی هوشمند
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="#pricing">
                    تعرفه‌ها
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">پنل‌ها</p>
              <ul className="space-y-2">
                <li>
                  <Link className="transition hover:text-white" href="/panel/customer">
                    پنل مشتری
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="/panel/agency">
                    پنل املاک
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="/panel/admin">
                    پنل ادمین
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">پشتیبانی</p>
              <ul className="space-y-2">
                <li>
                  <Link className="transition hover:text-white" href="#resources">
                    مرکز آموزش
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="#faqs">
                    سوالات متداول
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="#contact">
                    درخواست مشاوره
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link className="transition hover:text-white" href="#">
                شرایط استفاده
              </Link>
              <Link className="transition hover:text-white" href="#">
                سیاست حریم خصوصی
              </Link>
              <Link className="transition hover:text-white" href="mailto:support@amlakia360.com">
                پشتیبانی
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
