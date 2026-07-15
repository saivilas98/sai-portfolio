import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { Tape } from "../doodles/Tape";

type PolaroidProps = {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  attach?: "tape" | "none";
  className?: string;
};

/** A photo styled as a printed polaroid, taped to the page, that tilts gently toward the cursor. */
export function Polaroid({ src, alt, caption, rotate = -2, attach = "tape", className = "" }: PolaroidProps) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const tiltX = useSpring(useTransform(py, [0, 1], [8, -8]), { stiffness: 200, damping: 18 });
  const tiltY = useSpring(useTransform(px, [0, 1], [-8, 8]), { stiffness: 200, damping: 18 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.figure
      data-cursor-lift
      className={`group relative w-full max-w-[280px] select-none bg-card p-3 pb-5 paper-edge ${className}`}
      style={{ rotate, rotateX: tiltX, rotateY: tiltY, transformPerspective: 700 }}
      initial={{ opacity: 0, y: 24, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      whileHover={{ scale: 1.04, y: -6 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {attach === "tape" && (
        <Tape className="-top-3 left-1/2 -translate-x-1/2" rotate={-4} width={70} />
      )}
      <div className="overflow-hidden bg-paper-alt">
        <img src={src} alt={alt} loading="lazy" className="aspect-[4/3] w-full object-cover object-top" />
      </div>
      {caption && (
        <figcaption className="mt-2.5 px-0.5 font-hand text-xl leading-none text-graphite">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
