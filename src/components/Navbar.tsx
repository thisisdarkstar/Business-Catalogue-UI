'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Home as HomeIcon, Heart, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Typed className joiner
function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

// Typed nav item
type NavItem = { name: string; href: string; icon: LucideIcon };

const links: NavItem[] = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Favourites', href: '/favourites', icon: Heart },
  { name: 'Profile', href: '/profile', icon: User },
];

function NavLink({ item, activePath }: { item: NavItem; activePath: string }) {
  const active = activePath === item.href;
  const Icon = item.icon;
  return (
    <a
      href={item.href}
      aria-current={active ? 'page' : undefined}
      className={cx(
        'inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium',
        active ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
      )}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span>{item.name}</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname() || '/'; // SSR-safe active path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-gray-900" />
          <span className="text-lg font-semibold tracking-tight">Business Catalog</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((item) => (
            <NavLink key={item.href} item={item} activePath={pathname} />
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-xl border border-gray-300 p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-200 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2">
            {links.map((item) => (
              <NavLink key={item.href} item={item} activePath={pathname} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
