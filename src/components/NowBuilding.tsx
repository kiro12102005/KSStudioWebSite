import { nowBuilding } from "@/data/now-building";

export function NowBuilding() {
  return (
    <section id="now-building" className="border-b border-border px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <h2 className="text-xl font-semibold">Now Building</h2>
        <ul className="flex flex-col gap-4">
          {nowBuilding.map((item) => (
            <li key={item.project} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-medium">{item.project}</span>
              </div>
              <p className="pl-3.5 text-sm leading-relaxed text-muted">
                {item.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
