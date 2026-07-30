import { brand, links, profile } from "@/data/site";
import { IconLink } from "./IconLink";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section id="top" className="border-b border-border px-6 py-20">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <div className="flex items-center gap-3">
          <Logo size={44} />
          <div className="flex flex-col">
            <span className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
              {brand.eyebrow}
            </span>
            <span className="text-lg font-semibold tracking-tight">
              {brand.name}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="text-muted">
            {profile.title} / {profile.affiliation}
          </p>
        </div>
        <p className="max-w-xl text-lg leading-relaxed">{profile.tagline}</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            開発実績を見る
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
          >
            お問い合わせ
          </a>
        </div>
        <div className="flex gap-2">
          {links.map((link) => (
            <IconLink
              key={link.href}
              short={link.short}
              href={link.href}
              label={link.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
