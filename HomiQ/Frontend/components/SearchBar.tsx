import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-card border border-homiq-line bg-white p-4 shadow-card md:flex-row md:items-center">
      <div className="flex-1 border-homiq-line md:border-r md:pr-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-homiq-muted">
          Location
        </p>
        <p className="mt-1 text-sm text-homiq-ink">Gurugram, Haryana</p>
      </div>
      <div className="flex-1 border-homiq-line md:border-r md:pr-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-homiq-muted">
          Property Type
        </p>
        <p className="mt-1 text-sm text-homiq-ink">Luxury Mansion</p>
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-homiq-muted">
          Budget Range
        </p>
        <p className="mt-1 text-sm text-homiq-ink">₹2.5 Cr - ₹5 Cr</p>
      </div>
      <button className="flex items-center justify-center gap-2 rounded-lg bg-homiq-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-homiq-forestlight">
        <Search size={16} /> Search
      </button>
    </div>
  );
}
