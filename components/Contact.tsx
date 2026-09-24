import { MapPin, Mail, Phone } from "lucide-react";
import { contact } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const items = [
    { icon: MapPin, label: contact.location },
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, "")}` },
  ];
  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <SectionHeading>Contact</SectionHeading>
      <div className="mx-auto grid max-w-5xl gap-10 text-center sm:grid-cols-3">
        {items.map(({ icon: Icon, label, href }) => {
          const inner = (
            <>
              <Icon className="mx-auto h-9 w-9 text-brand dark:text-cyan-300" aria-hidden="true" />
              <span className="mt-3 block break-words">{label}</span>
            </>
          );
          return href ? (
            <a key={label} href={href} className="rounded-lg p-2 hover:text-brand dark:hover:text-cyan-300">{inner}</a>
          ) : (
            <div key={label} className="p-2">{inner}</div>
          );
        })}
      </div>
    </section>
  );
}
