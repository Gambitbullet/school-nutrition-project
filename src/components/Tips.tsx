import Reveal from './Reveal';

const tips = [
  { emoji: '🥦', text: 'Їж більше овочів та фруктів.' },
  { emoji: '💧', text: 'Пий достатньо води.' },
  { emoji: '🍎', text: 'Не пропускай сніданок.' },
  { emoji: '🥗', text: 'Намагайся харчуватися різноманітно.' },
  { emoji: '🍫', text: 'Не зловживай солодощами.' },
  { emoji: '🍽️', text: 'Дотримуйся режиму харчування.' },
];

export default function Tips() {
  return (
    <section id="tips" className="relative bg-brand-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">Розділ 04</span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-800 sm:text-4xl">Поради школярам</h2>
          <p className="mt-4 text-lg text-slate-600">
            Шість простих правил, які допоможуть харчуватися правильно кожен день.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((t, i) => (
            <Reveal key={t.text} delay={i * 70}>
              <article className="group flex items-center gap-4 rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow hover:ring-brand-200">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-sun-100">
                  {t.emoji}
                </span>
                <p className="text-base font-semibold text-slate-700 leading-snug">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
