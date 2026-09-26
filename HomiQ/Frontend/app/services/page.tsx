import { Truck, Sparkles, ChefHat, PaintBucket, Wrench, Package } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Shifting & Relocation",
    body: "Vetted movers handle packing, loading, and transport to your new HomiQ property, door to door.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    body: "Pre-move-in and post-move-out cleaning crews, insured and background-checked, booked in a few taps.",
  },
  {
    icon: ChefHat,
    title: "In-Home Cooking",
    body: "Local chefs for daily meals or move-in week catering, matched to your dietary preferences.",
  },
  {
    icon: PaintBucket,
    title: "Painting & Touch-Ups",
    body: "Fresh coats, patch repairs, and accent walls handled by certified painting partners.",
  },
  {
    icon: Wrench,
    title: "Handyman & Repairs",
    body: "Same-week appointments for plumbing, electrical, furniture assembly, and general fixes.",
  },
  {
    icon: Package,
    title: "Packing & Storage",
    body: "Professional packing materials plus short- or long-term storage while you settle in.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm font-semibold text-homiq-gold">End-to-End Comfort</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-homiq-ink">
        On-demand premium home services
      </h1>
      <p className="mt-3 max-w-xl text-homiq-muted">
        Everything you need before and after moving day, booked through
        HomiQ&apos;s vetted local partner network.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-card border border-homiq-line bg-white p-6 shadow-card">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-homiq-bg text-homiq-forest">
              <Icon size={18} />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-homiq-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-homiq-muted">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
