import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="px-4 py-24 sm:px-6">
      <SectionHeading>Certifications</SectionHeading>
      <ul className="mx-auto max-w-3xl divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-sm dark:divide-white/10 dark:bg-night-card">
        {certifications.map((c) => {
          const body = (
            <>
              <BadgeCheck className="h-6 w-6 shrink-0 text-brand dark:text-accent" aria-hidden="true" />
              <div className="flex-1">
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{c.issuer}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{c.year}</span>
            </>
          );
          return (
            <li key={c.name}>
              {c.url ? (
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 hover:bg-brand/5">{body}</a>
              ) : (
                <div className="flex items-center gap-4 p-5">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
