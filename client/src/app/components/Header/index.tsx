"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ROUTES = Object.freeze({
  Home: "/",
  Chat: "/chat",
});

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex w-full bg-gradient-to-r from-transparent via-[#04052e] to-transparent py-[1px]">
      <div className="flex w-full items-center justify-between gap-3 bg-[#D6DBDC] p-2 text-white">
        <div className="flex items-center gap-3 sm:gap-10">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo/logo.webp"
              alt="logo"
              width={512}
              height={512}
              className="size-16"
            />
            <h1 className="stroke-2 text-2xl font-black tracking-wider text-[#04052e] max-sm:hidden">
              Datatürk Q&A
            </h1>
          </div>
          <nav className="flex items-center font-semibold">
            {Object.entries(ROUTES).map(([key, value]) => (
              <Link
                key={key}
                href={value}
                className={`rounded-full px-4 py-1 text-[#04052e] transition-all hover:opacity-75 ${
                  pathname === value ? "bg-[#04052e] text-white" : ""
                }`}
              >
                {key}
              </Link>
            ))}
          </nav>
        </div>
        <Image
          src="/images/logo/ataturk-logo.webp"
          alt="Ataturk"
          width={103}
          height={96}
          className="h-16 w-auto"
        />
      </div>
    </header>
  );
}
