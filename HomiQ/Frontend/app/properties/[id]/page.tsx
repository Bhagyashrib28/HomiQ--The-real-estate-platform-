import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Sparkles,
  BedDouble,
  Bath,
  Scan,
  Check,
  Star,
} from "lucide-react";
import { formatINR, getProperty, properties } from "@/data/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = getProperty(params.id);
  if (!property) return notFound();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
        <div className="relative h-[420px] overflow-hidden rounded-card">
          <Image
            src={property.gallery[0]}
            alt={property.name}
            fill
            className="object-cover"
          />
          <Link
            href={`/virtual-tours/${property.id}`}
            className="badge absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-homiq-forest/90 px-4 py-2 text-sm text-white"
          >
            <Scan size={14} /> Explore 360° VR Tour
          </Link>
        </div>
        <div className="grid gap-3">
          {(property.gallery[1] ? [property.gallery[1]] : [property.gallery[0]])
            .concat(property.gallery[2] ? [property.gallery[2]] : [property.gallery[0]])
            .slice(0, 2)
            .map((src, i) => (
              <div key={i} className="relative h-[204px] overflow-hidden rounded-card">
                <Image src={src} alt={`${property.name} view ${i + 2}`} fill className="object-cover" />
              </div>
            ))}
        </div>
      </div>

      <div className="mt-8 grid gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="badge bg-homiq-verified/10 text-homiq-verified">
              <ShieldCheck size={13} /> Verified Estate
            </span>
            <span className="badge bg-homiq-gold/10 text-homiq-gold">
              <Sparkles size={13} /> {property.match}% AI Match
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold text-homiq-ink">
            {property.name}
          </h1>
          <p className="mt-2 text-homiq-muted">{property.location}</p>

          <div className="mt-6 flex gap-10 border-y border-homiq-line py-5">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-homiq-muted">
                <BedDouble size={14} /> Bedrooms
              </p>
              <p className="mt-1 font-display text-lg font-semibold">
                {property.beds} Bedrooms
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-homiq-muted">
                <Bath size={14} /> Bathrooms
              </p>
              <p className="mt-1 font-display text-lg font-semibold">
                {property.baths} Bathrooms
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-homiq-muted">
                Total Area
              </p>
              <p className="mt-1 font-display text-lg font-semibold">
                {property.sqft.toLocaleString()} sqft
              </p>
            </div>
          </div>

          <h2 className="mt-8 font-display text-xl font-semibold text-homiq-ink">
            About the property
          </h2>
          <p className="mt-3 leading-relaxed text-homiq-muted">
            {property.description}
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-homiq-ink">
            Premium amenities
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {property.amenities.map((a) => (
              <span
                key={a}
                className="flex items-center gap-2 rounded-lg border border-homiq-line px-4 py-2 text-sm text-homiq-ink/80"
              >
                <Check size={14} className="text-homiq-verified" /> {a}
              </span>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-card border border-homiq-line bg-white p-6 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-wide text-homiq-muted">
            Asking Price
          </p>
          <p className="mt-1 font-display text-3xl font-semibold text-homiq-ink">
            {formatINR(property.price)}
          </p>

          <div className="mt-5 rounded-lg bg-homiq-gold/10 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-homiq-gold">
              <Sparkles size={14} /> HomiQ Predictive AI
            </p>
            <p className="mt-2 text-sm text-homiq-ink">
              Predicted to rise +{property.predictedGrowth}% in the next 12
              months.
            </p>
            <p className="mt-1 text-xs text-homiq-muted">
              Based on local infrastructure growth &amp; historical trends.
            </p>
          </div>

          <div className="mt-4 rounded-lg bg-homiq-verified/10 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-homiq-verified">
              <ShieldCheck size={14} /> Verification Score: {property.verificationScore}/100
            </p>
            <p className="mt-1 text-xs text-homiq-muted">
              No zoning encumbrances, ownership title certified.
            </p>
          </div>

          <button className="mt-5 w-full rounded-lg bg-homiq-forest py-3 text-sm font-semibold text-white transition hover:bg-homiq-forestlight">
            Book Property Tour
          </button>
          <button className="mt-3 w-full rounded-lg border border-homiq-line py-3 text-sm font-semibold text-homiq-ink">
            Contact Owner
          </button>
        </aside>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-homiq-ink">
          Expert &amp; resident reviews
        </h2>
        <div className="mt-4 rounded-card border border-homiq-line bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-homiq-ink">Marcus Aurelius Vance</p>
              <p className="text-sm text-homiq-muted">Verified Buyer Advisor</p>
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-homiq-ink">
              <Star size={14} className="fill-homiq-gold text-homiq-gold" /> 5.0
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-homiq-muted">
            The spatial alignment and sunrise shadows here are spectacular.
            The build was certified via a municipal HomiQ audit and fully
            approved.
          </p>
        </div>
      </div>
    </div>
  );
}
