import { Code2, Server, Languages, Globe, Database } from "lucide-react";
import { skills, type SkillIcon } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const icons: Record<SkillIcon, typeof Code2> = { code: Code2, server: Server, languages: Languages, globe: Globe, database: Database };

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6">
      <SectionHeading>Skills</SectionHeading>
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => {
          const Icon = icons[s.icon];
          return (
            <div key={s.name} className="rounded-xl bg-white p-6 text-center shadow-sm dark:bg-night-card">
              <Icon className="mx-auto h-8 w-8" style={{ color: s.color }} aria-hidden="true" />
              <h3 className="mt-3 text-xl font-semibold">{s.name}</h3>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
