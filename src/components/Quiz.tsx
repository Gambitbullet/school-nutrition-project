import { useState } from 'react';
import { CheckCircle2, Circle, RotateCcw, Trophy } from 'lucide-react';
import Reveal from './Reveal';

type Question = {
  question: string;
  options: string[];
  correct: number;
};

const questions: Question[] = [
  {
    question: 'Що краще пити протягом дня?',
    options: ['Солодку газовану воду', 'Чисту воду або компот', 'Енергетик', 'Сік із пакетика'],
    correct: 1,
  },
  {
    question: 'Чому потрібно їсти овочі?',
    options: ['Вони дешеві', 'У них багато вітамінів і клітковини', 'Бо вони красиві', 'Щоб не їсти м’ясо'],
    correct: 1,
  },
  {
    question: 'Чи потрібно снідати?',
    options: ['Ні, можна обійтися', 'Тільки по вихідних', 'Так, сніданок дає енергію на день', 'Тільки дорослим'],
    correct: 2,
  },
  {
    question: 'Яким має бути харчування?',
    options: ['Тільки солодким', 'Збалансованим і різноманітним', 'Тільки м’ясним', 'Тільки овочевим'],
    correct: 1,
  },
  {
    question: 'Чи варто обмежувати надмірне вживання солодощів?',
    options: ['Ні, солодке дуже корисне', 'Так, надмір цукру шкодить здоров’ю', 'Тільки взимку', 'Тільки дорослим'],
    correct: 1,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const total = questions.length;
  const score = answers.filter((a, i) => a === questions[i].correct).length;

  const handleSelect = (idx: number) => {
    if (showFeedback) return;
    setSelected(idx);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);

    if (current + 1 < total) {
      setCurrent(current + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
    setShowFeedback(false);
  };

  const progress = ((current + (showFeedback ? 1 : 0)) / total) * 100;

  return (
    <section id="quiz" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">Інтерактив</span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Чи знаєш ти правила здорового харчування?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Пройди короткий тест із 5 запитань і дізнайся свій результат.
          </p>
        </Reveal>

        <Reveal className="mt-12" delay={100}>
          <div className="rounded-4xl bg-white p-6 shadow-glow ring-1 ring-slate-100 sm:p-10">
            {!finished ? (
              <div>
                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm font-semibold text-slate-500">
                    <span>Питання {current + 1} / {total}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full gradient-brand rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-xl font-bold text-slate-800 sm:text-2xl">
                  {questions[current].question}
                </h3>

                {/* Options */}
                <div className="mt-6 space-y-3">
                  {questions[current].options.map((opt, idx) => {
                    const isCorrect = idx === questions[current].correct;
                    const isSelected = idx === selected;
                    let state = 'idle';

                    if (showFeedback) {
                      if (isCorrect) state = 'correct';
                      else if (isSelected) state = 'wrong';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        disabled={showFeedback}
                        className={`flex w-full items-center gap-3 rounded-2xl border-2 px-5 py-4 text-left text-base font-medium transition-all duration-200 ${
                          state === 'correct'
                            ? 'border-brand-500 bg-brand-50 text-brand-800'
                            : state === 'wrong'
                            ? 'border-red-300 bg-red-50 text-red-700'
                            : 'border-slate-200 text-slate-700 hover:border-brand-300 hover:bg-brand-50/50 active:scale-[0.99]'
                        } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        {state === 'correct' ? (
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" />
                        ) : state === 'wrong' ? (
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-red-400" />
                        ) : (
                          <Circle className="h-5 w-5 shrink-0 text-slate-300" />
                        )}
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {showFeedback && (
                  <div className="mt-6 flex items-center justify-between">
                    <p className={`text-sm font-bold ${selected === questions[current].correct ? 'text-brand-600' : 'text-red-500'}`}>
                      {selected === questions[current].correct
                        ? 'Правильно!'
                        : `Неправильно. Правильна відповідь: ${questions[current].options[questions[current].correct]}`}
                    </p>
                    <button
                      onClick={handleNext}
                      className="rounded-xl gradient-brand px-6 py-2.5 text-sm font-bold text-white shadow-soft transition-all hover:scale-105 active:scale-100"
                    >
                      {current + 1 < total ? 'Далі' : 'Завершити'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Result screen */
              <div className="text-center">
                <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl animate-pop ${
                  score >= 4 ? 'gradient-brand' : score >= 2 ? 'gradient-sun' : 'bg-slate-200'
                }`}>
                  <Trophy className="h-10 w-10 text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-slate-800 sm:text-3xl">
                  Твій результат: <span className="text-brand-600">{score}/{total}</span>
                </h3>

                <p className="mt-3 text-lg text-slate-600">
                  {score === 5
                    ? 'Відмінно! Ти чудово знаєш правила здорового харчування!'
                    : score >= 3
                    ? 'Добре! Але є, куди рости — переглянь поради на сайті.'
                    : 'Треба повторити матеріал. Зазирни у розділ «Нові стандарти»!'}
                </p>

                {/* Review */}
                <div className="mt-6 space-y-2 text-left">
                  {questions.map((q, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 rounded-xl p-3 text-sm font-medium ${
                        answers[i] === q.correct ? 'bg-brand-50 text-brand-800' : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {answers[i] === q.correct ? (
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" />
                      ) : (
                        <Circle className="h-5 w-5 shrink-0 text-red-400" />
                      )}
                      <span className="line-clamp-1">{q.question}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleRestart}
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl gradient-brand px-7 py-3.5 text-base font-bold text-white shadow-soft transition-all hover:scale-105 active:scale-100"
                >
                  <RotateCcw className="h-5 w-5" />
                  Пройти ще раз
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
