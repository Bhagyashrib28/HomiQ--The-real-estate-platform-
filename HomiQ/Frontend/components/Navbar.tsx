import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/ai-recommendation", label: "AI Recommendation" },
  { href: "/virtual-tours/zenith-peak-penthouse", label: "Virtual Tours" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="border-b border-homiq-line bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-homiq-forest text-white font-display text-lg">
            Q
          </span>
          <span className="font-display text-xl font-semibold text-homiq-ink">
            HomiQ
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-homiq-ink/80 transition hover:text-homiq-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-homiq-ink"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-homiq-forest px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-homiq-forestlight"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
