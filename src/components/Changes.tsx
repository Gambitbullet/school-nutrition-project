import { useState } from 'react';
import { X, Check, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const before = [
  'Одноманітне меню',
  'Менше різноманітних овочів і фруктів',
  'Традиційні страви',
  'Менша увага до сучасних принципів харчування',
];

const after = [
  'Різноманітне меню',
  'Більше овочів і фруктів',
  'Збалансовані страви',
  'Увага до поживної цінності',
  'Сучасні підходи до приготування їжі',
];

export default function Changes() {
  const [mode, setMode] = useState<'before' | 'after'>('after');

  return (
    <section id="changes" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">Розділ 03</span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-800 sm:text-4xl">Що змінилося?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Порівняння старого та нового підходів до шкільного харчування.
          </p>
        </Reveal>

        {/* Toggle */}
        <Reveal className="mt-10 flex justify-center" delay={100}>
          <div className="inline-flex rounded-2xl bg-slate-100 p-1.5">
            <button
              onClick={() => setMode('before')}
              className={`rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                mode === 'before' ? 'bg-white text-slate-700 shadow-card' : 'text-slate-400'
              }`}
            >
              Раніше
            </button>
            <button
              onClick={() => setMode('after')}
              className={`rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                mode === 'after' ? 'gradient-brand text-white shadow-soft' : 'text-slate-400'
              }`}
            >
              Сучасний підхід
            </button>
          </div>
        </Reveal>

        {/* Two columns */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Before */}
          <Reveal>
            <div className={`h-full rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-100 transition-opacity duration-300 ${mode === 'before' ? '' : 'opacity-60'}`}>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                  <X className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-bold text-slate-600">Раніше</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {before.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* After */}
          <Reveal delay={120}>
            <div className={`relative h-full overflow-hidden rounded-3xl gradient-brand p-8 text-white shadow-soft transition-opacity duration-300 ${mode === 'after' ? '' : 'opacity-60'}`}>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
              <div className="relative flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                  <Sparkles className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-bold">Сучасний підхід</h3>
              </div>
              <ul className="relative mt-5 space-y-3">
                {after.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium">
                    <Check className="h-5 w-5 shrink-0 text-brand-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
