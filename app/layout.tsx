import type { Metadata } from "next";
import "../public/assets/css/globals.css";
import "../public/assets/css/astro-theme.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tran Luong - Portfolio",
  description: "Portfolio website of Tran Luong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased astro-theme">
        {children}
        <Script src="/assets/js/starfield.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
