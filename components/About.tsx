import { GraduationCap, Brush } from "lucide-react";
import { about } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Avatar from "./Avatar";

export default function About() {
  const { education: edu } = about;
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <SectionHeading>About Me</SectionHeading>
      <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-[1fr_1.4fr] md:p-12 dark:bg-night-card">
        <Avatar
          src={edu.image}
          alt={edu.school}
          rounded="rounded-xl"
          className="mx-auto aspect-square w-full max-w-xs border-2 border-brand bg-brand/5 dark:bg-white/5"
          fallback={
            <div className="flex flex-col items-center gap-3 p-6 text-center text-brand dark:text-cyan-300">
              <GraduationCap className="h-16 w-16" aria-hidden="true" />
              <span className="font-serif text-xl">{edu.school}</span>
            </div>
          }
        />
        <div>
          <p className="text-lg leading-relaxed">{about.intro}</p>
          <p className="mt-5 flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Brush className="h-4 w-4 shrink-0 text-cyan-500" aria-hidden="true" />
            {about.hobbies}
          </p>
          <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-6 dark:border-white/15">
            <GraduationCap className="h-7 w-7 shrink-0 text-brand dark:text-cyan-300" aria-hidden="true" />
            <p>
              Studying <strong>{edu.degree}</strong> in <strong>{edu.field}</strong> at {edu.school}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
