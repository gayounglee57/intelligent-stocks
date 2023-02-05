import Head from "next/head";
import Link from "next/link";
import { HeaderText } from "../components/HeaderText";
import { Table } from "../components/Table";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Intelligent stocks</title>
        <meta
          name="description"
          content="Helping you pick intelligent stocks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-4 flex flex-1 flex-col	justify-center items-center">
        <HeaderText />
        <Table />
      </main>

      <footer className={styles.footer}>
        <Link href="/about" className="text-primary font-bold hover:underline">
          About
        </Link>
        <span>🪀</span>
      </footer>
    </div>
  );
}
