import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6">
      <SectionHeading>Experience</SectionHeading>
      <div className="mx-auto max-w-3xl space-y-6">
        {experience.map((e) => (
          <article
            key={`${e.role}-${e.organization}`}
            className="rounded-xl border-l-4 border-brand bg-white p-6 shadow-sm dark:border-accent dark:bg-night-card"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">{e.role}</h3>
                <p className="flex items-center gap-1.5 text-brand dark:text-cyan-300">
                  <Briefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {e.organization}
                </p>
              </div>
              <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                <p>{e.period}</p>
                <p className="flex items-center justify-end gap-1">
                  <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {e.location}
                </p>
              </div>
            </div>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-gray-600 dark:text-gray-300">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
