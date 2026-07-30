import Link from "next/link";
import { brand } from "@/data/site";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#now-building", label: "Now Building" },
  { href: "#news", label: "News" },
  { href: "#links", label: "Links" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <Link href="#top" className="flex items-center gap-2.5">
          <Logo size={28} />
          <span className="text-sm font-semibold tracking-wide">
            {brand.name}
          </span>
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
