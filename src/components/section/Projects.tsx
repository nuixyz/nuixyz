import { Star } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";
import TUIPane from "../ui/TuiPane";

const STATUS_BADGE: Record<Project["status"], string> = {
  live: "badge-active",
  wip: "badge-wip",
  archived: "badge-archived",
};

const GRID_COLS = "grid-cols-[56px_1fr_88px_72px]";
const TABLE_MIN_WIDTH = "min-w-[560px]";

async function getStars(githubUrl?: string): Promise<number | null> {
  const match = githubUrl?.match(/github\.com\/([^/]+)\/([^/]+?)\/?$/i);
  if (!match) return null;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${match[1]}/${match[2]}`,
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
  const Wrapper = project.githubUrl ? "a" : "div";

  return (
    <Wrapper
      {...(project.githubUrl
        ? { href: project.githubUrl, target: "_blank", rel: "noreferrer" }
        : {})}
      className={`group grid items-stretch transition-colors ${GRID_COLS}`}
    >
      {/* Icon */}
      <div className="flex items-center justify-center border py-3 text-base transition-colors group-hover:border-[var(--mauve)] border-[var(--surface1)]">
        {project.icon}
      </div>

      {/* Name & Description */}
      <div className="flex flex-col justify-center min-w-0 border-t border-b border-[var(--surface1)] transition-colors group-hover:border-[var(--mauve)]">
        <p className="truncate px-4 pt-4 pb-1 font-mono text-xs font-bold text-[var(--text)] transition-colors group-hover:text-[var(--mauve)]">
          {project.name}
        </p>
        <p className="truncate px-4 pb-4 font-mono text-xs text-[var(--subtext0)]">
          {project.description}
        </p>
      </div>

      {/* Status */}
      <div className="flex items-center justify-center border px-2 transition-colors group-hover:border-[var(--mauve)] border-[var(--surface1)]">
        <span className={STATUS_BADGE[project.status]}>[ {project.status} ]</span>
      </div>

      {/* Stars */}
      <div className="flex items-center justify-center gap-1 px-2 font-mono text-[11px] text-[var(--overlay0)] border-t border-r border-b border-[var(--surface1)] transition-colors group-hover:border-[var(--mauve)]">
        <Star size={12} className="shrink-0" />
        {stars !== null ? stars.toLocaleString() : "—"}
      </div>
    </Wrapper>
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
    <section className="mx-auto max-w-[1180px] px-6">
      <div className="mb-3 flex items-baseline justify-between">
        <p className="section-label">featured_projects</p>
        <a
          href="/projects"
          className="border-b border-[var(--surface2)] font-mono text-xs text-[var(--overlay0)] transition-colors hover:text-[var(--mauve)]"
        >
          view all &rarr;
        </a>
      </div>

      <TUIPane index={5} label="projects.tbl">
        <div className="overflow-x-auto">
          <div className={TABLE_MIN_WIDTH}>
            {/* Table header */}
            <div className={`grid px-0 py-2.5 font-mono text-[11px] border-b border-[var(--surface2)] uppercase tracking-wider text-[var(--overlay0)] ${GRID_COLS}`}>
              <span />
              <span className="px-4">name</span>
              <span className="px-2 text-center">status</span>
              <span className="px-2 text-center">stars</span>
            </div>

            {/* Table body */}
            <div className="flex flex-col">
              {rows.map(({ project, stars }) => (
                <ProjectRow key={project.id} project={project} stars={stars} />
              ))}
            </div>
          </div>
        </div>
      </TUIPane>
    </section>
  );
}
