import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { business } from "@/data/business";
import { allCities, slugify, unslugify } from "@/data/cities";

type Props = {
  params: { city: string };
};

export function generateStaticParams() {
  return allCities.map((city) => ({ city: slugify(city) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = unslugify(params.city);
  if (!city) return {};
  return {
    title: `Packers and Movers in ${city}`,
    description: `${business.name} offers home shifting, office relocation, packing and vehicle transport in ${city}. Get a free quote by call or WhatsApp.`,
  };
}

export default function CityPage({ params }: Props) {
  const city = unslugify(params.city);
  if (!city) notFound();

  return (
    <main>
      <Header />

      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-navy-dark">
        <Image
          src="https://images.unsplash.com/photo-1758523671826-d7f8217ffac3?auto=format&fit=crop&w=2000&q=70"
          alt={`A family settling into a new home in ${city}`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/25" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
          <p className="mb-3 font-body text-sm font-medium text-ember">
            {business.address.state}
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-bold uppercase leading-tight text-sand sm:text-5xl">
            Packers and Movers in {city}
          </h1>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[2fr,1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">
              Welcome to {business.name} in {city}
            </h2>
            <div className="mt-6 space-y-5 font-body text-ink/75">
              <p>
                Moving in or out of {city} takes local knowledge as much as
                it takes muscle — the right lanes for a truck, the right
                timing for a building's lift, the right way to wrap what
                can't be replaced. Our {city} crew handles all of that, so the
                move feels routine to us and effortless to you.
              </p>
              <p>
                Whether it's a one-bedroom flat, a family house, or an office
                floor, we quote the job after seeing what's actually moving —
                no vague estimates that change on move day. Packing materials
                are matched to what they're protecting, and every shipment
                can be covered by insurance for its full value.
              </p>
              <p>
                From {city} we also run regular routes to the rest of{" "}
                {business.address.state}, Karnataka, and the major cities of
                South India, so a move that starts here doesn't have to end
                here.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`tel:+${business.phoneRaw}`}
                className="rounded-sm bg-brick px-7 py-3.5 font-body text-base font-medium text-sand transition-colors hover:bg-brick-light"
              >
                Call for a {city} quote
              </a>
              <a
                href={`https://wa.me/${business.phoneRaw}?text=${encodeURIComponent(
                  `Hi ${business.shortName}, I need packers and movers in ${city}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-navy/20 px-7 py-3.5 font-body text-base font-medium text-navy transition-colors hover:bg-navy/5"
              >
                WhatsApp us about {city}
              </a>
            </div>
          </div>

          <aside className="rounded-sm border border-navy/10 bg-white/60 p-7">
            <h3 className="font-display text-lg font-semibold text-navy">
              What's included
            </h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-ink/70">
              {business.services.map((s) => (
                <li key={s.title} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brick" />
                  {s.title}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-navy/10 pt-5 font-body text-sm text-ink/60">
              <p>{business.address.line1}</p>
              <p>{business.address.line2}</p>
              <p>
                {business.address.city}, {business.address.state}
              </p>
              <p className="mt-3">
                <a
                  href={`tel:+${business.phoneRaw}`}
                  className="font-medium text-navy"
                >
                  {business.phoneDisplay}
                </a>
              </p>
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-6">
          <Link
            href="/"
            className="font-body text-sm text-navy/70 underline-offset-2 hover:underline"
          >
            ← Back to {business.shortName} home
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
