"use client";

import { useEffect, useState } from "react";
import { Home, User, FolderOpen, Code2, BadgeCheck, Mail, Menu, X, Moon, Sun } from "lucide-react";
import { site } from "@/data/portfolio";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: FolderOpen },
  { href: "#skills", label: "Skills", icon: Code2 },
  { href: "#certifications", label: "Certifications", icon: BadgeCheck },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    // Highlight the link for the section currently on screen
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  const ThemeIcon = dark ? Sun : Moon;

  return (
    <header className="sticky top-0 z-50 bg-brand shadow-lg shadow-black/10 dark:bg-night-nav">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-xl font-bold text-white">{site.name}</a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                aria-current={active === href ? "true" : undefined}
                className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm transition-colors ${
                  active === href ? "bg-white/15 text-white" : "text-white/75 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <button
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              className="grid h-9 w-10 place-items-center rounded-md border border-white/80 text-white hover:bg-white/10"
            >
              <ThemeIcon className="h-4 w-4" />
            </button>
          </li>
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-11 place-items-center rounded-md border border-white/30 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col items-center gap-1 pb-4">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2 ${active === href ? "text-white" : "text-white/75"}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 rounded-md border border-white/80 px-4 py-2 text-sm text-white"
              >
                <ThemeIcon className="h-4 w-4" />
                {dark ? "Light theme" : "Dark theme"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
