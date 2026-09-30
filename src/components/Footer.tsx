import { Salad, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand text-white">
              <Salad className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display font-bold text-white">Кулінарний апгрейд</div>
              <div className="text-sm text-slate-400">нові стандарти шкільного харчування</div>
            </div>
          </div>

          <div className="text-center text-sm md:text-right">
            <p className="font-semibold text-slate-200">Цикін Ілля Михайлович</p>
            <p className="text-slate-400">Клас 10-А · Школа №11</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-6 text-center">
          <p className="flex items-center justify-center gap-1.5 text-sm text-slate-400">
            Шкільний проєкт з предмету «Web-дизайн» · зроблено з
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
