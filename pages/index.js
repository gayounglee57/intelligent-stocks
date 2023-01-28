import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Intelligent stocks</title>
        <meta
          name="description"
          content="Helping you pick intelligent stocks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Intelligent stocks</h1>

        <p className={styles.description}>
          Enter a ticker symbol to see if the stock is an intelligent pick.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className={styles.card}>
            <h2>Earnings Per Share? &#9432;</h2>
            <p className="text-7xl ">✨</p>
          </div>

          <div className={styles.card}>
            <h2>Price to Earning Ratio? &#9432;</h2>
            <p className="text-7xl">✨</p>
          </div>

          <div className={styles.card}>
            <h2>Book Value? &#9432;</h2>
            <p className="text-7xl">👎🏽</p>
          </div>

          <div className={styles.card}>
            <h2>Long Term Debt? &#9432;</h2>
            <p className="text-7xl">👎🏽</p>
          </div>

          <div className={styles.card}>
            <h2>Liabilities? &#9432;</h2>
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
