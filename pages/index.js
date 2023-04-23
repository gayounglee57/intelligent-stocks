import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import Link from "next/link";

import { HeaderText } from "../components/HeaderText";
import { Body } from "../components/Body";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <main className="py-4">
        <div className="min-h-screen flex flex-1 flex-col	justify-center items-center">
          <Head>
            <title>Intelligent stocks</title>
            <meta
              name="description"
              content="Helping you pick intelligent stocks"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <QueryClientProvider client={queryClient}>
            <HeaderText />
            <Body />
          </QueryClientProvider>
        </div>
        <footer className="flex flex-1 w-full pt-4 border-t-neutral-100 border-t-2 justify-center items-center">
          <Link
            href="/about"
            className="text-primary font-bold hover:underline"
          >
            <div>About</div>
          </Link>
          <span>🪀</span>
        </footer>
      </main>
    </div>
  );
}
