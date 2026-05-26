"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  onClick,
  type = "button",
  className,
}: Props) {
  const reduce = useReducedMotion();

  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-medium transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-fg text-bg hover:bg-white"
      : "border border-line-strong text-fg hover:border-blue-light/60 hover:text-blue-light";

  const inner = (
    <>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </>
  );

  const motionProps = reduce
    ? {}
    : { whileHover: { scale: 1.025 }, whileTap: { scale: 0.97 } };

  if (href) {
    return (
      <motion.a href={href} className={cn(base, styles, className)} {...motionProps}>
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cn(base, styles, className)}
      {...motionProps}
    >
      {inner}
    </motion.button>
  );
}
