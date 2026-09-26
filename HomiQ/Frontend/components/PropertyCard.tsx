import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles, Scan, Heart, Star } from "lucide-react";
import { formatINR, type Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="overflow-hidden rounded-card border border-homiq-line bg-homiq-card shadow-card">
      <div className="relative h-56 w-full">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="badge bg-white/90 text-homiq-verified">
            <ShieldCheck size={13} /> Verified
          </span>
          <span className="badge bg-white/90 text-homiq-gold">
            <Sparkles size={13} /> {property.match}% Match
          </span>
        </div>
        <span className="badge absolute right-3 top-3 bg-black/60 text-white">
          <Scan size={13} /> 360° VR
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-homiq-ink">
            {formatINR(property.price)}
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-homiq-ink/70">
            <Star size={14} className="fill-homiq-gold text-homiq-gold" />
            {property.rating}
          </span>
        </div>

        <h3 className="mt-2 font-display text-base font-semibold text-homiq-ink">
          {property.name}
        </h3>
        <p className="mt-1 text-sm text-homiq-muted">{property.location}</p>

        <div className="mt-4 flex items-center gap-4 border-t border-homiq-line pt-4 text-sm text-homiq-muted">
          <span>{property.beds} BHK</span>
          <span>{property.sqft.toLocaleString()} sqft</span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Link
            href={`/properties/${property.id}`}
            className="flex-1 rounded-lg bg-homiq-forest py-2.5 text-center text-sm font-semibold text-white transition hover:bg-homiq-forestlight"
          >
            Details
          </Link>
          <button
            aria-label="Save property"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-homiq-line text-homiq-ink/60 transition hover:text-homiq-gold"
          >
            <Heart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
