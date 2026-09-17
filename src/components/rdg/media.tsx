import { useState } from "react";
import { cn } from "@/lib/utils";

/** Image with a branded RDG fallback panel when the file is missing. */
export function SmartImage({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-secondary", className)}>
      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,var(--ink),var(--secondary))]">
          <span className="font-display text-2xl tracking-[0.4em] text-champagne/70">RDG</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full object-cover transition-transform duration-[1200ms] ease-out",
            imgClassName,
          )}
        />
      )}
    </div>
  );
}

/** Looping muted video with an image poster fallback. */
export function SmartVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return <SmartImage src={poster} alt="" className={className} />;

  return (
    <video
      className={cn("h-full w-full object-cover", className)}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setFailed(true)}
    />
  );
}
