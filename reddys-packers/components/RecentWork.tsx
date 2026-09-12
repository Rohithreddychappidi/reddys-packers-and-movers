import Image from "next/image";

const recentPhotos = [
  { file: "/recent-work/1.jpg", caption: "Packed & wrapped for pickup" },
  { file: "/recent-work/2.jpg", caption: "Palletised & warehouse-ready" },
  { file: "/recent-work/3.jpg", caption: "Secure wrapping for transit" },
  { file: "/recent-work/4.jpg", caption: "Loaded & covered for the road" },
  { file: "/recent-work/5.jpg", caption: "Careful loading, every box accounted for" },
];

export default function RecentWork() {
  return (
    <section id="recent-work" className="bg-sand py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-semibold text-navy">
            Recent work
          </h2>
          <p className="mt-3 font-body text-ink/70">
            A few moves from the last few weeks — from packing to the road.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {recentPhotos.map((item) => (
            <figure
              key={item.file}
              className="group relative aspect-square overflow-hidden rounded-sm bg-navy/5"
            >
              <Image
                src={item.file}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/80 to-transparent p-3 font-body text-xs text-sand opacity-0 transition-opacity group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </figure>
          ))}

          <figure className="group relative aspect-square overflow-hidden rounded-sm bg-navy">
            <video
              src="/recent-work/moving-day.mp4"
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/80 to-transparent p-3 font-body text-xs text-sand opacity-0 transition-opacity group-hover:opacity-100">
              Loading day, start to finish
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
