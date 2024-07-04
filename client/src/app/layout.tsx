import "./globals.css";
import { fontClasses } from "./fonts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Datatürk Q&A Uygulaması",
  description:
    "Mustafa Kemal Atatürk hakkında bir soru-cevap uygulamasıdır. Bu uygulama kullanıcıların Atatürk hakkında sorular sormasına ve detaylı cevaplar almasına olanak sağlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classNames = fontClasses.join(" ");
  return (
    <html lang="en">
      <body
        className={`${classNames} relative grid min-h-screen grid-rows-[auto_1fr_auto] selection:bg-[#98181f] selection:text-white`}
      >
        <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
