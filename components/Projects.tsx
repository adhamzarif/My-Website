import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <SectionHeading>Projects</SectionHeading>
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.name} className="flex flex-col rounded-xl border-t-4 border-brand bg-white p-6 shadow-sm dark:border-accent dark:bg-night-card">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 flex-1 text-gray-600 dark:text-gray-300">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand dark:bg-white/10 dark:text-cyan-200">{t}</li>
              ))}
            </ul>
            <div className="mt-5 flex gap-4 text-sm font-semibold">
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-brand dark:hover:text-cyan-300">
                  <GithubIcon className="h-4 w-4" /> Code
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-brand dark:hover:text-cyan-300">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live site
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
