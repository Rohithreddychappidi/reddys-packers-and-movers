import Image from "next/image";
import { business } from "@/data/business";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-navy py-24 text-sand">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src="https://images.unsplash.com/photo-1749244768351-2726dc23d26c?auto=format&fit=crop&w=1200&q=70"
            alt="Warehouse shelves used for short and long-term storage"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-4xl font-semibold">
            Why people in Madanapalli call us first
          </h2>
          <ul className="mt-8 space-y-5">
            {business.whyUs.map((point) => (
              <li key={point} className="flex gap-4 font-body text-sand/85">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ember" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
