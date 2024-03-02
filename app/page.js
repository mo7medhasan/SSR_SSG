import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-between p-24">
      <div className="flex justify-evenly flex-1 w-full items-center flex-wrap">
        {" "}
        <Link href={"/products"}>products</Link>
        <Link href={"/products-ssr"}>products-ssr</Link>
        <Link href={"/products-ssg"}>products-ssg</Link>{" "}
      </div>
      <Image
        width={1000}
        height={500}
        src={"/router.png"}
        alt="ssr ssg in next.js"
      />
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"
        target="_blank"
        rel="noopener noreferrer"
      >
        Docs for SSR and SSG
      </a>
    </main>
  );
}
