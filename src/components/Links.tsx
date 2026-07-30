import { links } from "@/data/site";

export function Links() {
  return (
    <section id="links" className="border-b border-border px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <h2 className="text-xl font-semibold">Links</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-1 rounded-lg border border-border p-4 transition-colors hover:border-foreground"
            >
              <span className="font-medium">{link.label}</span>
              <span className="text-sm text-muted">{link.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
