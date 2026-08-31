import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-wrap px-5 md:px-8 py-24 text-center">
      <p className="plate-label mb-4">Plate not found</p>
      <h1 className="font-display text-4xl md:text-5xl text-ink mb-4">This piece isn&rsquo;t on display</h1>
      <p className="text-muted max-w-[50ch] mx-auto mb-8">
        The page you&rsquo;re looking for has moved, or never existed in this archive.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-ink-soft transition-colors"
      >
        Back to the gallery
      </Link>
    </div>
  );
}
