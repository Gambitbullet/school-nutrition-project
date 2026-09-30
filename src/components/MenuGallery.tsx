import { useState } from 'react';
import Reveal from './Reveal';

type Dish = {
  name: string;
  category: 'Сніданок' | 'Обід' | 'Перекус' | 'Напої';
  image: string;
  desc: string;
  benefit: string;
};

const dishes: Dish[] = [
  {
    name: 'Вівсяна каша з фруктами',
    category: 'Сніданок',
    image: 'https://images.pexels.com/photos/5604830/pexels-photo-5604830.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Тепла каша зі свіжими ягодами та насінням — заряд енергії на весь ранок.',
    benefit: 'Клітковина та вуглеводи для активного ранку.',
  },
  {
    name: 'Овочевий суп',
    category: 'Обід',
    image: 'https://images.pexels.com/photos/6646157/pexels-photo-6646157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Легкий, але ситний суп із сезонних овочів та зелені.',
    benefit: 'Вітаміни та мінерали для імунітету.',
  },
  {
    name: 'Гречка з куркою',
    category: 'Обід',
    image: 'https://images.pexels.com/photos/7307354/pexels-photo-7307354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Класичне поєднання гречаної каші з ніжною курячою грудкою.',
    benefit: 'Білок і складні вуглеводи для росту.',
  },
  {
    name: 'Салат зі свіжих овочів',
    category: 'Перекус',
    image: 'https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Хрусткий мікс із помідорів, огірків та зелені з олією.',
    benefit: 'Свіжість, вітаміни та клітковина.',
  },
  {
    name: 'Запечена риба',
    category: 'Обід',
    image: 'https://images.pexels.com/photos/14537684/pexels-photo-14537684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Сочна риба, запечена з овочами та лимоном — легко та корисно.',
    benefit: 'Омега-3 для мозку та серця.',
  },
  {
    name: 'Фруктовий салат',
    category: 'Перекус',
    image: 'https://images.pexels.com/photos/11783272/pexels-photo-11783272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Яскравий салат із сезонних фруктів — натуральна солодкість.',
    benefit: 'Природні вітаміни та антиоксиданти.',
  },
  {
    name: 'Компот або вода',
    category: 'Напої',
    image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Свіжий компот із сухофруктів або чиста вода — найкращий вибір.',
    benefit: 'Зволожнення організму без зайвого цукру.',
  },
];

const categories = ['Усі', 'Сніданок', 'Обід', 'Перекус', 'Напої'] as const;

export default function MenuGallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('Усі');

  const filtered = active === 'Усі' ? dishes : dishes.filter((d) => d.category === active);

  return (
    <section id="menu" className="relative bg-brand-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">Розділ 02</span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-800 sm:text-4xl">Корисне меню</h2>
          <p className="mt-4 text-lg text-slate-600">
            Приклади страв, які відповідають новим стандартам шкільного харчування.
          </p>
        </Reveal>

        {/* Category filter */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2" delay={100}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                active === cat
                  ? 'gradient-brand text-white shadow-soft scale-105'
                  : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-brand-300 hover:text-brand-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d, i) => (
            <Reveal key={d.name} delay={i * 60}>
              <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-700 backdrop-blur-sm">
                    {d.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-800">{d.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{d.desc}</p>
                  <div className="mt-4 flex items-start gap-2 rounded-xl bg-brand-50 p-3">
                    <span className="text-base">✨</span>
                    <p className="text-sm font-medium text-brand-800">{d.benefit}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
