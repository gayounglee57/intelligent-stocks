import Head from "next/head";
import Link from "next/link";
import { HeaderText } from "../components/HeaderText";
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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className={styles.card}>
            <h2 className="text-primary">Earnings Per Share? &#9432;</h2>
            <p className="text-7xl ">✨</p>
          </div>

          <div className={styles.card}>
            <h2 className="text-primary">Price to Earning Ratio? &#9432;</h2>
            <p className="text-7xl">✨</p>
          </div>

          <div className={styles.card}>
            <h2 className="text-primary">Book Value? &#9432;</h2>
            <p className="text-7xl">👎🏽</p>
          </div>

          <div className={styles.card}>
            <h2 className="text-primary">Long Term Debt? &#9432;</h2>
            <p className="text-7xl">👎🏽</p>
          </div>

          <div className={styles.card}>
            <h2 className="text-primary">Liabilities? &#9432;</h2>
            <p className="text-7xl">✨</p>
          </div>
        </div>
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
