"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Check,
} from "lucide-react";
import { getProperty } from "@/data/properties";

const hotspots = ["Master Lounge", "Gourmet Kitchen", "Sunset Deck"];

export default function VirtualTourPage() {
  const params = useParams<{ id: string }>();
  const property = getProperty(params.id);
  const [active, setActive] = useState(hotspots[0]);

  if (!property) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-display text-xl text-homiq-ink">Tour not found</p>
        <Link href="/properties" className="mt-4 inline-block text-homiq-forest underline">
          Back to properties
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-homiq-line bg-homiq-forest px-6 py-4 text-white md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Link
            href={`/properties/${property.id}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <p className="font-display text-base font-semibold">
              {property.name} — {active}
            </p>
            <p className="text-xs text-white/60">360° Interactive Spatial Environment</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="badge border border-homiq-gold/40 bg-homiq-gold/10 text-homiq-gold">
            <Sparkles size={13} /> Simulating Sunset Lighting
          </span>
          <Link
            href={`/properties/${property.id}`}
            className="rounded-lg bg-homiq-gold px-5 py-2 text-sm font-semibold text-homiq-ink"
          >
            Reserve Property
          </Link>
        </div>
      </div>

      <div className="relative h-[70vh] w-full bg-black">
        <Image
          src={property.gallery[0]}
          alt={`${property.name} — ${active}`}
          fill
          className="object-cover opacity-90"
        />

        <div className="absolute left-6 top-6 w-56 rounded-lg bg-black/70 p-4 text-white backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-wide text-homiq-goldlight">
            Hotspot Selector
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {hotspots.map((spot) => (
              <li key={spot}>
                <button
                  onClick={() => setActive(spot)}
                  className={`flex w-full items-center gap-2 text-left ${
                    spot === active ? "text-white" : "text-white/60"
                  }`}
                >
                  {spot === active && <Check size={13} className="text-homiq-goldlight" />}
                  {spot}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/70 px-4 py-3 text-white">
          <button aria-label="Rotate left"><RotateCcw size={18} /></button>
          <button aria-label="Rotate right"><RotateCw size={18} /></button>
          <span className="h-5 w-px bg-white/20" />
          <button aria-label="Zoom in"><ZoomIn size={18} /></button>
          <button aria-label="Zoom out"><ZoomOut size={18} /></button>
          <span className="h-5 w-px bg-white/20" />
          <button aria-label="Fullscreen"><Maximize size={18} /></button>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 bg-homiq-forest px-6 py-6 text-white md:flex-row md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-homiq-goldlight">
            HomiQ Integrated Reality
          </p>
          <p className="mt-1 max-w-xl text-sm text-white/60">
            Our digital twins are generated using spatial LIDAR systems,
            guaranteeing 99.8% dimensional accuracy to physical properties.
          </p>
        </div>
        <button className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white">
          Report Discrepancy
        </button>
      </div>
    </div>
  );
}
