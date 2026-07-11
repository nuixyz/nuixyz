import { Star } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";

function parseGithubRepo(url?: string) {
  if (!url) return null;
  const match = url.match(/github\.com\/([^/]+)\/([^/]+?)\/?$/i);
  if (!match) return null;
  return { owner: match[1], repo: match[2] };
}

async function getStars(githubUrl?: string): Promise<number | null> {
  const repo = parseGithubRepo(githubUrl);
  if (!repo) return null;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${repo.owner}/${repo.repo}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.stargazers_count === "number"
      ? data.stargazers_count
      : null;
  } catch {
    return null;
  }
}

function ProjectRow({
  project,
  stars,
}: {
  project: Project;
  stars: number | null;
}) {
  const href = project.githubUrl ?? project.liveUrl ?? "#";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative z-0 flex items-stretch border border-subtle hover:border-[var(--border3)]"
    >
      {/* Icon */}
      <div className="flex w-14 shrink-0 items-center justify-center border-r border-default text-xl">
        {project.icon}
      </div>

      {/* Title */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 px-4 py-3">
        <p className="truncate font-mono text-sm font-semibold text-primary">
          {project.name}
        </p>
        <p className="truncate text-sm text-secondary">
          {project.description}
        </p>
      </div>

      {/* Stars */}
      {project.githubUrl && (
        <div className="flex shrink-0 items-center gap-1.5 px-4 font-mono text-sm text-muted">
          <Star size={14} className="shrink-0" />
          <span>{stars !== null ? stars.toLocaleString() : "—"}</span>
        </div>
      )}
    </a>
  );
}

export default async function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);

  const rows = await Promise.all(
    featured.map(async (project) => ({
      project,
      stars: await getStars(project.githubUrl),
    }))
  );

  return (
    <section className="mx-auto max-w-4xl px-6 py-8">
      <p className="mb-2 font-mono text-xs tracking-widest text-muted">
        <span style={{ color: "var(--green)" }}>$</span> cat projects.md
      </p>
      <div className="flex flex-col">
        {rows.map(({ project, stars }) => (
          <ProjectRow key={project.id} project={project} stars={stars} />
        ))}
      </div>
    </section>
  );
}
