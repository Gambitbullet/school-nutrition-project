import { Scale, Apple, Leaf, Candy, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

const standards = [
  {
    icon: Scale,
    title: 'Збалансованість',
    text: 'Харчування повинно забезпечувати організм необхідними поживними речовинами.',
    color: 'brand',
  },
  {
    icon: Apple,
    title: 'Різноманітність',
    text: 'У меню повинні бути різні продукти, страви, овочі, фрукти, крупи та джерела білка.',
    color: 'citrus',
  },
  {
    icon: Leaf,
    title: 'Корисні продукти',
    text: 'Важливо збільшувати частку корисних та поживних продуктів.',
    color: 'brand',
  },
  {
    icon: Candy,
    title: 'Менше цукру та солі',
    text: 'Раціон має передбачати помірне використання цукру та солі.',
    color: 'sun',
  },
  {
    icon: ShieldCheck,
    title: 'Якість',
    text: "Їжа повинна бути якісною, безпечною та відповідати сучасним вимогам.",
    color: 'brand',
  },
];

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  brand: { bg: 'bg-brand-100', text: 'text-brand-600', ring: 'group-hover:ring-brand-200' },
  citrus: { bg: 'bg-citrus-100', text: 'text-citrus-500', ring: 'group-hover:ring-citrus-200' },
  sun: { bg: 'bg-sun-100', text: 'text-sun-600', ring: 'group-hover:ring-sun-200' },
};

export default function Standards() {
  return (
    <section id="standards" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">Розділ 01</span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Нові стандарти шкільного харчування
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Сучасні стандарти — це правила, які допомагають зробити шкільне харчування корисним,
            безпечним і смачним. Ось п'ять головних принципів.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s, i) => {
            const c = colorMap[s.color];
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <article className={`group h-full rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow ${c.ring}`}>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.bg} ${c.text} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-800">{s.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{s.text}</p>
                </article>
              </Reveal>
            );
          })}

          {/* CTA card */}
          <Reveal delay={standards.length * 80}>
            <article className="flex h-full flex-col items-center justify-center rounded-3xl gradient-brand p-7 text-center text-white shadow-soft">
              <p className="text-lg font-bold">Пам'ятай</p>
              <p className="mt-2 text-brand-50 text-sm leading-relaxed">
                Здорове харчування — це основа гарного самопочуття, успішної навчання та росту.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
