import { site, socials } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-brand py-8 text-center text-white dark:bg-night-nav">
      <div className="flex justify-center gap-5">
        <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80"><GithubIcon /></a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80"><LinkedinIcon /></a>
      </div>
      <p className="mt-4 text-sm">&copy; {site.year} {site.name}. All rights reserved.</p>
    </footer>
  );
}
