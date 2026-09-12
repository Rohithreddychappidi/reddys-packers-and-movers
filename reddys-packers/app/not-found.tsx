import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center text-sand">
      <p className="font-display text-sm uppercase tracking-wide text-ember">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold">
        We don't have a page for that city yet
      </h1>
      <p className="mt-3 max-w-md font-body text-sand/70">
        Call us directly and we'll still get your move sorted — most routes
        aren't limited to the cities listed on the site.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-brick px-6 py-3 font-body text-sm font-medium text-sand transition-colors hover:bg-brick-light"
      >
        Back to home
      </Link>
    </main>
  );
}
