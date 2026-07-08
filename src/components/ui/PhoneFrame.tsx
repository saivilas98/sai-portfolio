import { motion } from "framer-motion";

export function PhoneFrame({
  src,
  alt,
  delay = 0,
}: {
  src: string;
  alt: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex-none"
    >
      <div className="relative aspect-[9/19.3] w-[210px] overflow-hidden rounded-[1.75rem] border border-line bg-black shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] transition-shadow duration-500 group-hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] sm:w-[230px]">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black" aria-hidden />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      </div>
    </motion.div>
  );
}
