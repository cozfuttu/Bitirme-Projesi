import "./globals.css";
import { fontClasses } from "./fonts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atatürk Q&A Application",
  description:
    "A question and answer application about Mustafa Kemal Atatürk. This application allows users to ask questions about Atatürk and get detailed answers.",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
