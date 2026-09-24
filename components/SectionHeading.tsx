export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12 flex flex-col items-center">
      <h2 className="font-serif text-4xl text-brand dark:text-cyan-300">{children}</h2>
      <span className="mt-3 h-[3px] w-24 rounded-full bg-brand dark:bg-accent" />
    </div>
  );
}
