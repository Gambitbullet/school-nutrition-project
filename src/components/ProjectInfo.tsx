import { GraduationCap, School, User, Target } from 'lucide-react';
import Reveal from './Reveal';

export default function ProjectInfo() {
  return (
    <section id="project" className="relative bg-brand-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">Фінал</span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-800 sm:text-4xl">Про проєкт</h2>
        </Reveal>

        <Reveal className="mt-12" delay={100}>
          <div className="overflow-hidden rounded-4xl bg-white shadow-glow ring-1 ring-slate-100">
            {/* Top banner */}
            <div className="relative gradient-brand p-8 text-white sm:p-10">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10" />
              <div className="absolute -left-8 -bottom-16 h-40 w-40 rounded-full bg-white/10" />
              <div className="relative">
                <h3 className="text-2xl font-extrabold sm:text-3xl">Кулінарний апгрейд</h3>
                <p className="mt-2 text-brand-50 text-lg">нові стандарти шкільного харчування</p>
              </div>
            </div>

            {/* Info grid */}
            <div className="grid gap-px bg-slate-100 sm:grid-cols-2">
              <InfoCard icon={User} label="Виконавець" value="Цикін Ілля Михайлович" />
              <InfoCard icon={GraduationCap} label="Клас" value="10-А" />
              <InfoCard icon={School} label="Школа" value="№11" />
              <InfoCard icon={Target} label="Предмет" value="Web-дизайн" />
            </div>

            {/* Goal */}
            <div className="p-8 sm:p-10">
              <div className="flex items-start gap-4 rounded-2xl bg-brand-50 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-sun text-white">
                  <Target className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="text-base font-bold text-slate-800">Мета проєкту</h4>
                  <p className="mt-1.5 text-slate-600 leading-relaxed">
                    Показати важливість сучасного, збалансованого та різноманітного харчування
                    школярів.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 bg-white p-6">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</div>
        <div className="text-lg font-bold text-slate-800">{value}</div>
      </div>
    </div>
  );
}
