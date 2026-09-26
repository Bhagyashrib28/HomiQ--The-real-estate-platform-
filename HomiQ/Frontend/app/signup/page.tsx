"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md rounded-card border border-homiq-line bg-white p-10 shadow-card">
        <h1 className="text-center font-display text-2xl font-semibold text-homiq-ink">
          Join HomiQ Intelligence
        </h1>
        <p className="mt-2 text-center text-sm text-homiq-muted">
          Create an account to browse validated listings and run AI matches.
        </p>

        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <Field label="Full Name" placeholder="John Doe" />
          <Field label="Email Address" type="email" placeholder="john@homiq.ai" />
          <Field label="Phone Number" placeholder="+1 (555) 000-0000" />

          <div className="grid grid-cols-2 gap-4">
            <Field label="Password" type="password" placeholder="••••••••" />
            <Field label="Confirm Password" type="password" placeholder="••••••••" />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-homiq-muted">
              Account Type
            </label>
            <select className="mt-2 w-full rounded-lg border border-homiq-line px-4 py-3 text-sm outline-none focus:border-homiq-forest">
              <option>Buyer/Tenant</option>
              <option>Owner/Seller</option>
              <option>Service Provider</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-homiq-forest py-3 text-sm font-semibold text-white transition hover:bg-homiq-forestlight"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-homiq-muted">
          Already registered?{" "}
          <Link href="/login" className="font-semibold text-homiq-forest">
            Login Instead
          </Link>
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wide text-homiq-muted">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-homiq-line px-4 py-3 text-sm outline-none focus:border-homiq-forest"
      />
    </div>
  );
}
