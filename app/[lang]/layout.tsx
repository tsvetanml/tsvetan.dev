import type { Metadata } from "next";
import AnimatedBackground from "../components/animatedBackground";
import ClientWrapper from "../components/clientWrapper"; // 🔥 Importamos el wrapper
import DropdownMenu from "../components/dropdownMenu";
import LanguageSwitcher from "../components/languageSwitcher";
import "../globals.css";

export const metadata: Metadata = {
  title: "Tsvetan - Portfolio",
  description: "Personal portfolio of Tsvetan Mladenov, a full-stack developer specialized in modern web technologies.",
  keywords: ["Tsvetan Mladenov", "Fullstack Developer", "Web Developer", "Portfolio", "React", "Next.js"],
  authors: { name: "Tsvetan Mladenov", url: "https://tsvetan.pro" },
  metadataBase: new URL("https://tsvetan.pro"),
  openGraph: {
    title: "Tsvetan - Portfolio",
    description: "Explore the personal portfolio of Tsvetan Mladenov, a full-stack developer specialized in modern web technologies.",
    url: "https://tsvetan.pro",
    siteName: "tsvetan.pro",
    images: [
      {
        url: "https://tsvetan.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tsvetan Mladenov Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white relative overflow-hidden">
        <AnimatedBackground />
        <ClientWrapper>
          <div className="relative z-10">
            <DropdownMenu />
            <LanguageSwitcher />
            {children}
          </div>
        </ClientWrapper>
      </body>
    </html>
  );
}
