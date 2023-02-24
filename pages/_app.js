import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import Link from "next/link";
import { HeaderText } from "../components/HeaderText";
import { Body } from "../components/Body";
import "../styles/globals.css";

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
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
      <footer className="flex flex-1 py-4 border-t-neutral-100 border-t-2 justify-center items-center">
        <Link href="/about" className="text-primary font-bold hover:underline">
          About
        </Link>
        <span>🪀</span>
      </footer>
    </>
  );
}
