import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border p-5">
      <h3 className="font-semibold">{project.name}</h3>
      <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-1 flex gap-4 text-sm font-medium">
        {project.demoHref && (
          <a
            href={project.demoHref}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-muted"
          >
            Demo
          </a>
        )}
        <a
          href={project.githubHref}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-muted"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
