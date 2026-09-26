import Link from "next/link";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "AI Search", href: "/ai-recommendation" },
      { label: "Virtual 360° Tours", href: "/virtual-tours/zenith-peak-penthouse" },
      { label: "Verification Suite", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Experts", href: "/about" },
      { label: "Contact & Support", href: "/about" },
    ],
  },
  {
    title: "Trust & Security",
    links: [
      { label: "Secure Payments", href: "/services" },
      { label: "Fraud Prevention", href: "/services" },
      { label: "Privacy Policy", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-homiq-forest text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-homiq-gold text-homiq-ink font-display text-lg">
                Q
              </span>
              <span className="font-display text-xl font-semibold text-white">
                HomiQ
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Transforming the premium real estate journey with predictive
              intelligence, deep property verification, and cinematic VR
              tours.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} HomiQ AI. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
