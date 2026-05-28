"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { content } from "@/content";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line bg-bg/60 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 md:px-10">
        <a href="#top" aria-label="Solvy" className="flex items-center">
          <Image
            src="/brand/logobranca.png"
            alt="Solvy"
            width={128}
            height={36}
            priority
            className="h-7 w-auto md:h-[30px]"
          />
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {content.header.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button href="#contato" className="px-5 py-2.5 text-sm">
          {content.header.cta}
        </Button>
      </div>
    </header>
  );
}
