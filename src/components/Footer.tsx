"use client"
import Link from "next/link";
import { GitBranch, Mail, XIcon as X } from "lucide-react";

export function Footer(): React.JSX.Element {
  return (
    <footer className="mt-16 bg-gray-950 text-gray-200">
      {/* Top CTA strip */}
      <div className="border-b border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 md:flex-row md:items-center">
          <div>
            <p className="text-base font-semibold">Stay on top of new arrivals</p>
            <p className="text-sm text-gray-400">Updates when items hit the catalog. No spam.</p>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-sm outline-none placeholder:text-gray-500 focus:border-gray-600"
            />
            <button
              type="submit"
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-950 hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-2xl bg-white" />
              <span className="text-lg font-semibold tracking-tight">Business Catalog</span>
            </div>
            <p className="text-sm text-gray-400">Curated products. Clean browsing. Save favourites and compare later.</p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="inline-flex items-center rounded-xl border border-gray-800 p-2 hover:bg-gray-900"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://GitBranch.com/your-org/business-catalog"
                target="_blank"
                rel="noreferrer"
                aria-label="GitBranch"
                className="inline-flex items-center rounded-xl border border-gray-800 p-2 hover:bg-gray-900"
              >
                <GitBranch className="h-4 w-4" />
              </a>
              <a
                href="https://X.com/your-handle"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="inline-flex items-center rounded-xl border border-gray-800 p-2 hover:bg-gray-900"
              >
                <X className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white/80">Catalog</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-gray-200">Home</Link>
              </li>
              <li>
                <Link href="/favourites" className="hover:text-gray-200">Favourites</Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-gray-200">Profile</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white/80">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/help" className="hover:text-gray-200">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>
              <li><Link href="/shipping" className="hover:text-gray-200">Shipping & Returns</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white/80">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/terms" className="hover:text-gray-200">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-200">Privacy</Link></li>
              <li><Link href="/cookies" className="hover:text-gray-200">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Business Catalog</p>
        </div>
      </div>
    </footer>
  );
}
