import Link from "next/link";
import { business } from "@/data/business";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold uppercase tracking-tight text-sand">
            {business.shortName}
          </span>
          <span className="hidden font-body text-xs uppercase tracking-[0.2em] text-sand/70 sm:inline">
            Packers &amp; Movers
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-body text-sm text-sand/90 md:flex">
          <a href="#services" className="transition-colors hover:text-sand">
            Services
          </a>
          <a href="#why-us" className="transition-colors hover:text-sand">
            Why us
          </a>
          <a href="#recent-work" className="transition-colors hover:text-sand">
            Recent work
          </a>
          <a href="#contact" className="transition-colors hover:text-sand">
            Contact
          </a>
        </nav>

        <a
          href={`tel:+${business.phoneRaw}`}
          className="rounded-sm bg-brick px-4 py-2 font-body text-sm font-medium text-sand transition-colors hover:bg-brick-light"
        >
          {business.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
