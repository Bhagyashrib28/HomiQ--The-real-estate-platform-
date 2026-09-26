import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles, Eye } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Certified Property Verification",
    body: "Eliminate fraud. Our proprietary machine learning scans ownership chains, municipal filings, and physical indicators.",
  },
  {
    icon: Sparkles,
    title: "AI Lifestyle Recommendations",
    body: "Go beyond bedrooms. Our AI aligns properties with your daily rhythms, noise preference, sunlight paths, and local vibe.",
  },
  {
    icon: Eye,
    title: "True 360° Spatial VR",
    body: "Tour hyper-realistic environments remotely before booking. Explore spaces down to texture scales and sunlight changes.",
  },
];

const services = [
  {
    title: "Shifting & Relocation",
    body: "Vetted movers for packing, loading, and door-to-door transport.",
  },
  {
    title: "Deep Cleaning",
    body: "Insured cleaning crews for move-in and move-out days.",
  },
  {
    title: "In-Home Cooking",
    body: "Local chefs for daily meals or move-in week catering.",
  },
];

export default function HomePage() {
  const featured = properties.slice(0, 3);

  return (
    <>
      <section className="bg-homiq-forest text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="badge border border-white/20 bg-white/5 text-white/80">
              AI-Powered Real Estate
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-tight">
              Find a home that feels like yours
            </h1>
            <p className="mt-5 max-w-md text-white/70">
              Seamless matching based on lifestyle analysis, certified
              property fraud detection, and instant immersive 360° virtual
              tours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/properties"
                className="rounded-lg bg-homiq-gold px-6 py-3 text-sm font-semibold text-homiq-ink transition hover:bg-homiq-goldlight"
              >
                Explore Properties
              </Link>
              <Link
                href="/ai-recommendation"
                className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                AI Recommendation
              </Link>
            </div>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-card md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Modern hillside home at dusk"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 -mt-10 relative z-10">
        <SearchBar />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold text-homiq-gold">HomiQ Picks</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-homiq-ink">
              Featured smart homes
            </h2>
          </div>
          <Link
            href="/properties"
            className="text-sm font-semibold text-homiq-forest underline underline-offset-4"
          >
            View all properties
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold text-homiq-gold">
            Intelligent Assurance
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-homiq-ink">
            The HomiQ advantage
          </h2>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            {advantages.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-card border border-homiq-line p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-homiq-bg text-homiq-forest">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-homiq-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-homiq-muted">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-homiq-forest text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold text-homiq-gold">
              No Flights Required
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              Virtual tours, real textures
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Skip travel friction with high-definition digital twins of
              elite properties. Place yourself inside the room, experience
              sunset simulations, and explore adjacent layouts.
            </p>
            <Link
              href="/virtual-tours/zenith-peak-penthouse"
              className="mt-8 inline-block rounded-lg bg-homiq-gold px-6 py-3 text-sm font-semibold text-homiq-ink transition hover:bg-homiq-goldlight"
            >
              Launch Demo Tour
            </Link>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-card">
            <Image
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80"
              alt="Interior VR walkthrough"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="text-sm font-semibold text-homiq-gold">
          End-to-End Comfort
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-homiq-ink">
          On-demand premium home services
        </h2>

        <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="rounded-card border border-homiq-line p-6"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-homiq-forest text-sm font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-homiq-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-homiq-muted">{service.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
