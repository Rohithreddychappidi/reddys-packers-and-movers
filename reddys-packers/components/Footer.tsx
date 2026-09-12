import Link from "next/link";
import { business } from "@/data/business";
import { cityGroups, slugify } from "@/data/cities";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark text-sand/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-14">
          <h2 className="font-display text-2xl font-semibold text-sand">
            Packers and movers, city by city
          </h2>
          <p className="mt-2 max-w-2xl font-body text-sm text-sand/60">
            We run moves in and out of these towns and cities. Pick yours for
            local pricing and pickup details.
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {cityGroups.map((group) => (
              <div key={group.region}>
                <h3 className="font-body text-xs font-semibold uppercase tracking-wide text-ember">
                  {group.region}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.cities.map((city) => (
                    <li key={city}>
                      <Link
                        href={`/packers-and-movers-in/${slugify(city)}`}
                        className="font-body text-sm text-sand/70 underline-offset-2 transition-colors hover:text-sand hover:underline"
                      >
                        Packers and Movers in {city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 border-t border-sand/10 pt-10 sm:grid-cols-3">
          <div>
            <span className="font-display text-lg font-bold uppercase text-sand">
              {business.shortName}
            </span>
            <p className="mt-3 font-body text-sm text-sand/60">
              {business.tagline}.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-wide text-sand/50">
              Visit us
            </h4>
            <p className="mt-3 font-body text-sm text-sand/70">
              {business.address.line1}
              <br />
              {business.address.line2}
              <br />
              {business.address.city}, {business.address.state}{" "}
              {business.address.pin}
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-wide text-sand/50">
              Reach us
            </h4>
            <p className="mt-3 font-body text-sm text-sand/70">
              <a
                href={`tel:+${business.phoneRaw}`}
                className="transition-colors hover:text-sand"
              >
                {business.phoneDisplay}
              </a>
              <br />
              <a
                href={`https://wa.me/${business.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-sand"
              >
                WhatsApp us
              </a>
              <br />
              {business.domain}
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-sand/10 pt-6 font-body text-xs text-sand/40">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
