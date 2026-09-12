import Image from "next/image";

const recentWork = [
  { file: "/recent-work/1.jpg", caption: "Home shifting, Madanapalli" },
  { file: "/recent-work/2.jpg", caption: "Office relocation" },
  { file: "/recent-work/3.jpg", caption: "Careful packing" },
  { file: "/recent-work/4.jpg", caption: "Loading & transport" },
  { file: "/recent-work/5.jpg", caption: "Vehicle transport" },
  { file: "/recent-work/6.jpg", caption: "Warehouse storage" },
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
            A few moves from the last few months. Swap in your own photos any
            time by replacing the files in{" "}
            <code className="rounded bg-navy/5 px-1.5 py-0.5 text-sm">
              /public/recent-work
            </code>
            .
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {recentWork.map((item) => (
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
        </div>
      </div>
    </section>
  );
}
