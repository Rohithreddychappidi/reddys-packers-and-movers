import Image from "next/image";
import { business } from "@/data/business";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-dark">
      <Image
        src="https://images.unsplash.com/photo-1715645948484-da40dd56bc93?auto=format&fit=crop&w=2000&q=70"
        alt="A mover loading boxes into the back of a moving truck"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/30 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
        <p className="mb-4 font-body text-sm font-medium text-ember">
          Madanapalli · Andhra Pradesh
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-bold uppercase leading-[1.05] text-sand sm:text-6xl md:text-7xl">
          {business.name}
        </h1>
        <p className="mt-6 max-w-xl font-body text-lg text-sand/85">
          {business.tagline}. Home shifting, office relocation, packing and
          vehicle transport, handled door to door across South India.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={`tel:+${business.phoneRaw}`}
            className="rounded-sm bg-brick px-7 py-3.5 font-body text-base font-medium text-sand transition-colors hover:bg-brick-light"
          >
            Call {business.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${business.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-sand/40 px-7 py-3.5 font-body text-base font-medium text-sand transition-colors hover:bg-sand/10"
          >
            Get a free quote on WhatsApp
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-sand/15 pt-8 sm:grid-cols-4">
          {business.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold text-sand">
                {stat.value}
              </dd>
              <dd className="mt-1 font-body text-xs uppercase tracking-wide text-sand/60">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
