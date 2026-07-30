export function IconLink({ short, href, label }: { short: string; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-medium tracking-tight transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
    >
      {short}
    </a>
  );
}
