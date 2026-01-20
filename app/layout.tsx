import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Background from "./ui/Background";
import Logo from "./ui/Logo";
import NavLinks from "./ui/NavLinks";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My ToDo with NextJS",
  description: "From DonkeyGeek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <Logo />
          <div className="nav-links">
            <NavLinks />
          </div>
        </header>
        <main>
          {children}
          <Background />
        </main>
        <footer>
          <p>&copy; 2026 My ToDo App</p>
        </footer>
      </body>
    </html>
  );
}
