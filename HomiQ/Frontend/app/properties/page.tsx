import { Search, ChevronDown } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const filters = [
  "Property Type: Mansion",
  "Budget: ₹2Cr - ₹5Cr",
  "BHK: 4+ BHK",
  "Area: 3k - 6k sqft",
  "Furnishing: Fully Furnished",
];

export default function PropertiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col gap-3 rounded-card border border-homiq-line bg-white p-4 shadow-card md:flex-row md:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-homiq-line px-4 py-2.5">
          <Search size={16} className="text-homiq-muted" />
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-homiq-muted"
            placeholder="Search location, neighborhood, zip code..."
          />
        </div>
        <button className="rounded-lg bg-homiq-forest px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-homiq-forestlight">
          Filter Results
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            className="flex items-center gap-1 rounded-lg border border-homiq-line bg-white px-4 py-2 text-sm text-homiq-ink/80"
          >
            {filter} <ChevronDown size={14} />
          </button>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h1 className="font-display text-xl font-semibold text-homiq-ink">
          {properties.length} Verified smart homes found
        </h1>
        <div className="flex items-center gap-2 text-sm text-homiq-ink/80">
          Sort by: <span className="font-semibold">Best AI Match</span>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
