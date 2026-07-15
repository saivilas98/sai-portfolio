type TapeProps = {
  className?: string;
  rotate?: number;
  variant?: "washi" | "clear" | "kraft";
  width?: number;
};

const variants = {
  washi: "rgb(var(--color-tape) / 0.75)",
  clear: "rgb(var(--color-paper-alt) / 0.65)",
  kraft: "rgb(190 156 112 / 0.55)",
};

/** A strip of tape rendered as a small textured div, meant to overlap a photo or note edge. */
export function Tape({ className = "", rotate = -3, variant = "washi", width = 84 }: TapeProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{
        width,
        height: width * 0.34,
        transform: `rotate(${rotate}deg)`,
        background: `linear-gradient(180deg, ${variants[variant]}, ${variants[variant]})`,
        boxShadow: "0 1px 2px rgb(0 0 0 / 0.08)",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgb(255 255 255 / 0.12) 0px, rgb(255 255 255 / 0.12) 2px, transparent 2px, transparent 5px)",
        opacity: 0.9,
      }}
    />
  );
}
