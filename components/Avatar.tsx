import Image from "next/image";

// Shows the image when set, otherwise a clean fallback — never a broken image icon.
export default function Avatar({
  src, alt, fallback, className, rounded = "rounded-full",
}: { src: string; alt: string; fallback: React.ReactNode; className: string; rounded?: string }) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="320px" className="object-cover" priority />
      ) : (
        <div className="grid h-full w-full place-items-center">{fallback}</div>
      )}
    </div>
  );
}
