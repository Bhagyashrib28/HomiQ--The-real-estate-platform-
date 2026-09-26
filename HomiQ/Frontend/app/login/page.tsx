"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const accountTypes = ["Buyer/Tenant", "Owner/Seller", "Service Provider"];

export default function LoginPage() {
  const [accountType, setAccountType] = useState(accountTypes[0]);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md rounded-card border border-homiq-line bg-white p-10 shadow-card">
        <h1 className="text-center font-display text-2xl font-semibold text-homiq-ink">
          Welcome to HomiQ
        </h1>
        <p className="mt-2 text-center text-sm text-homiq-muted">
          Enter credentials to access your smart real estate suite
        </p>

        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-homiq-muted">
              Select account type
            </label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {accountTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setAccountType(type)}
                  className={`rounded-lg border px-2 py-2 text-xs font-semibold ${
                    accountType === type
                      ? "border-homiq-forest bg-homiq-forest text-white"
                      : "border-homiq-line text-homiq-ink/80"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wide text-homiq-muted"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@domain.com"
              className="mt-2 w-full rounded-lg border border-homiq-line px-4 py-3 text-sm outline-none focus:border-homiq-forest"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-xs font-semibold uppercase tracking-wide text-homiq-muted"
            >
              Password
            </label>
            <div className="relative mt-2">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                className="w-full rounded-lg border border-homiq-line px-4 py-3 text-sm outline-none focus:border-homiq-forest"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-homiq-muted"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-homiq-ink/80">
              <input type="checkbox" defaultChecked className="accent-homiq-forest" />
              Remember Me
            </label>
            <Link href="#" className="font-semibold text-homiq-forest">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-homiq-forest py-3 text-sm font-semibold text-white transition hover:bg-homiq-forestlight"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-homiq-muted">
          New to our ecosystem?{" "}
          <Link href="/signup" className="font-semibold text-homiq-forest">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
