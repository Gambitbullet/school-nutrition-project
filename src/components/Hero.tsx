import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden hero-grid-bg pt-16"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sun-200/40 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Text */}
        <div className="text-center lg:text-left animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-bold text-brand-700">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            Шкільний проєкт · Web-дизайн
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-800 text-balance sm:text-5xl lg:text-6xl">
            Кулінарний апгрейд:
            <span className="block bg-gradient-to-r from-brand-600 via-brand-500 to-citrus-500 bg-clip-text text-transparent">
              нові стандарти шкільного харчування
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 lg:mx-0">
            Сучасне шкільне харчування — це баланс, різноманітність, користь і смачні страви
            для школярів.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
            <a
              href="#standards"
              className="group inline-flex items-center gap-2 rounded-2xl gradient-brand px-7 py-3.5 text-base font-bold text-white shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-glow active:scale-100"
            >
              Дізнатися більше
              <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#quiz"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-base font-bold text-brand-700 shadow-card ring-1 ring-brand-100 transition-all duration-300 hover:scale-105 hover:ring-brand-300 active:scale-100"
            >
              Пройти тест
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-10 flex justify-center gap-8 lg:justify-start">
            {[
              { n: '5', l: 'стандартів' },
              { n: '7', l: 'страв у меню' },
              { n: '6', l: 'порад' },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="text-3xl font-extrabold text-brand-600">{s.n}</div>
                <div className="text-sm text-slate-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute inset-0 -rotate-3 rounded-5xl gradient-sun opacity-20 blur-2xl" />
            <img
              src="https://images.pexels.com/photos/5852271/pexels-photo-5852271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Здорова шкільна їжа: сендвічі, фрукти та овочі"
              className="relative rounded-5xl object-cover shadow-glow ring-4 ring-white"
              loading="eager"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-glow ring-1 ring-brand-100 animate-float sm:-left-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sun-100 text-2xl">🍎</span>
              <div>
                <div className="text-sm font-bold text-slate-800">Корисно</div>
                <div className="text-xs text-slate-500">і смачно</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
