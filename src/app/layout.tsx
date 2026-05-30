import type { Metadata } from "next";
import { molde, ttCommons, newsreader } from "./fonts";
import { content, locale } from "@/content";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://solvystudio.com"),
  title: content.meta.title,
  description: content.meta.description,
  icons: { icon: "/brand/iconbdegrade.png" },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: content.meta.title },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={locale}
      className={`${molde.variable} ${ttCommons.variable} ${newsreader.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        {/* base ambiente: azul difuso nas quinas (imagem do Pedro) */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60vw 60vh at 92% 8%, rgba(0,167,244,0.16), transparent 60%), radial-gradient(58vw 58vh at 8% 92%, rgba(2,126,226,0.14), transparent 60%), #030305",
          }}
        />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
