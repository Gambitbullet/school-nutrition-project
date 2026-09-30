import { useEffect, useState } from 'react';
import { Menu, X, Salad } from 'lucide-react';

const links = [
  { href: '#hero', label: 'Головна' },
  { href: '#standards', label: 'Нові стандарти' },
  { href: '#menu', label: 'Меню' },
  { href: '#changes', label: "Що змінилося?" },
  { href: '#tips', label: 'Поради' },
  { href: '#project', label: 'Про проєкт' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(22,163,74,0.2)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-display font-bold text-slate-800">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl gradient-brand text-white shadow-soft">
              <Salad className="h-5 w-5" />
            </span>
            <span className="hidden sm:inline text-lg">Кулінарний апгрейд</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-brand-50 transition-colors"
            aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-white/95 backdrop-blur-md ${
          open ? 'max-h-96 opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
