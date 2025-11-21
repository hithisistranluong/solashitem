import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tran Luong - Portfolio",
  description: "Portfolio website of Tran Luong - Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
