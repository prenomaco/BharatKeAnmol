import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bharat Ke Anmol",
  description: "Celebrating excellence and honoring India’s true achievers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header site-header-global">
          <div className="brand">
            <Image src="/media/BharatKeAnmolLogo.png" alt="Bharat Ke Anmol" width={68} height={68} className="brand-mark" />
            <div>
              <div className="brand-name">Bharat Ke Anmol</div>
              <div className="brand-tag">A national award ceremony</div>
            </div>
          </div>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#why">Why Us</Link>
            <Link href="/#categories">Categories</Link>
            <Link href="/#founder">Founder</Link>
            <Link href="/#forms">Forms</Link>
          </nav>
          <div className="header-actions">
            <Link className="button button-primary" href="/nominate">Nominate Now</Link>
            <Link className="button button-secondary" href="/partner">Become a Partner</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
