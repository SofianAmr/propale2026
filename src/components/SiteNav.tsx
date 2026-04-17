import Link from "next/link";

const LINKS = [
  { href: "/#villas", label: "Les villas" },
  { href: "/#pourquoi", label: "Pourquoi" },
  { href: "/#dates-budget", label: "Dates & budget" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/90 bg-stone-100/85 backdrop-blur-md supports-backdrop-filter:bg-stone-100/75">
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-10"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-stone-900 sm:text-xl"
        >
          Propale Verdon
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1 sm:gap-x-2">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-lg px-3 py-2 font-sans text-sm font-medium text-stone-700 transition hover:bg-white/80 hover:text-teal-900"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
