import { news } from "@/data/news";

export function News() {
  return (
    <section id="news" className="border-b border-border px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <h2 className="text-xl font-semibold">News</h2>
        <ul className="flex flex-col gap-3">
          {news.map((item) => (
            <li
              key={`${item.date}-${item.title}`}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <time className="shrink-0 font-mono text-xs text-muted">
                {item.date}
              </time>
              <p className="text-sm leading-relaxed">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
