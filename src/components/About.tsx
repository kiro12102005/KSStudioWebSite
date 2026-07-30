import { profile } from "@/data/site";

export function About() {
  return (
    <section id="about" className="border-b border-border px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="max-w-2xl leading-relaxed text-foreground">{profile.bio}</p>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
