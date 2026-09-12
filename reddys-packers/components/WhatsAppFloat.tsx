import { business } from "@/data/business";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    `Hi ${business.shortName}, I'd like a quote for a move.`
  );
  return (
    <a
      href={`https://wa.me/${business.phoneRaw}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40 group-hover:opacity-0" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-8 w-8 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.348.687 4.535 1.87 6.37L4 29l7.82-1.828A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.98 16.646c-.29.816-1.437 1.494-2.352 1.688-.626.132-1.443.238-4.197-.9-3.523-1.457-5.79-5.02-5.966-5.253-.17-.234-1.427-1.9-1.427-3.622 0-1.723.9-2.567 1.222-2.92.29-.318.63-.398.84-.398.21 0 .42.002.604.011.194.01.454-.074.71.541.29.7.985 2.42 1.07 2.596.086.176.144.382.03.615-.115.234-.172.38-.34.585-.17.205-.357.457-.51.615-.17.176-.347.367-.15.72.198.352.878 1.45 1.886 2.35 1.296 1.156 2.39 1.514 2.744 1.685.354.17.56.146.766-.088.207-.234.878-1.024 1.113-1.375.234-.352.469-.293.79-.176.322.117 2.045.965 2.396 1.14.352.176.586.264.674.41.088.147.088.85-.202 1.666Z" />
      </svg>
    </a>
  );
}
