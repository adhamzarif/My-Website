import { site } from "@/data/portfolio";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-[#f55757] via-[#b97aad] to-[#7b9cff] text-white dark:from-[#141414] dark:via-[#1b1f3a] dark:to-[#2438b8]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-32">
        <div className="hero-rise text-center md:text-left">
          <p className="mb-3 text-lg text-white/85">Hi, I&apos;m {site.name}</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to my portfolio
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/90 md:mx-0">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#contact" className="rounded-md bg-white px-6 py-3 font-semibold text-ink shadow-md hover:bg-white/90">
              Contact me
            </a>
            <a href="#projects" className="rounded-md border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10">
              See projects
            </a>
            {site.resumeUrl && (
              <a href={site.resumeUrl} className="rounded-md border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10">
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-full bg-gradient-to-br from-brand to-cyan-300 p-1.5 shadow-2xl shadow-black/25">
            <Avatar
              src={site.profileImage}
              alt={`Photo of ${site.name}`}
              className="h-56 w-56 bg-white/15 backdrop-blur sm:h-72 sm:w-72"
              fallback={<span className="text-7xl font-extrabold text-white/90">{site.initials}</span>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
