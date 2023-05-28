import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-4 flex flex-1 flex-col	justify-center items-center">
      <Head>
        <title>Intelligent stocks</title>
        <meta
          name="description"
          content="Helping you pick intelligent stocks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col p-4 m-10 mb-0 text-center">
        <h1 className="text-primary text-6xl mb-10">Intelligent stocks</h1>
        <p className="text-secondary my-4 text-2xl">About</p>
        <p className="text-secondary my-4 text-l">
          This tool shows if a stock is an intelligent pick or not. It uses
          Yahoo Finance API data and principles from the Intelligent Investor
          book.
        </p>
      </div>

      <footer className="flex w-full pt-4 border-t-neutral-100 border-t-2 justify-center items-center">
        <Link href="/" className="text-primary font-bold hover:underline">
          <div>Home</div>
        </Link>
        <span>🪀</span>
      </footer>
    </main>
  );
}
