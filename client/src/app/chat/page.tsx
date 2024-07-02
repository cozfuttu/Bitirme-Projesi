import Image from "next/image";

export default function Chat() {
  return (
    <main>
      <Image
        src="/images/ataturk-hero.webp"
        alt="logo"
        width={512}
        height={512}
        className="h-60 w-auto sm:h-96"
      />
    </main>
  );
}
