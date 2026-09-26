"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const questions = [
  { 
    label: "What type of property are you looking for?",
    options: ["Apartment", "Row House", "Villa", "Independent House"]
  },
  {
    label: "Do you need parking?",
    options: ["Yes, essential", "Yes, preferably", "Not required"],
  },
  {
    label: "How much open space would you like?",
    options: ["Large open space", "Some open space", "Not important"],
  },
  {
    label: "How many bedrooms do you need?",
    options: ["1 BHK", "2 BHK", "3 BHK", "4+ BHK"],
  }
];

export default function AIRecommendationPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="badge bg-homiq-gold/10 text-homiq-gold">
        <Sparkles size={13} /> AI Recommendation
      </span>
      <h1 className="mt-4 font-display text-3xl font-semibold text-homiq-ink">
        Tell us how you live, we&apos;ll match the home
      </h1>
      <p className="mt-3 max-w-xl text-homiq-muted">
        A few quick preferences let HomiQ&apos;s model align listings with
        your daily rhythms, noise tolerance, and priorities.
      </p>

      <div className="mt-10 space-y-8">
        {questions.map((q) => (
          <div key={q.label}>
            <p className="font-semibold text-homiq-ink">{q.label}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setAnswers((a) => ({ ...a, [q.label]: opt }))}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium ${
                    answers[q.label] === opt
                      ? "border-homiq-forest bg-homiq-forest text-white"
                      : "border-homiq-line text-homiq-ink/80"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setSubmitted(true)}
        className="mt-10 rounded-lg bg-homiq-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-homiq-forestlight"
      >
        Run AI Match
      </button>

      {submitted && (
        <div className="mt-14">
          <h2 className="font-display text-xl font-semibold text-homiq-ink">
            Your top matches
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {properties.slice(0, 2).map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
