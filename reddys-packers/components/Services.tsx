import { business } from "@/data/business";

export default function Services() {
  return (
    <section id="services" className="bg-sand py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-semibold text-navy">
            What we handle
          </h2>
          <p className="mt-3 font-body text-ink/70">
            Six services, one crew — from the first box packed to the last
            item placed in your new home or office.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {business.services.map((service) => (
            <div key={service.title} className="bg-sand p-8">
              <h3 className="font-display text-xl font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
