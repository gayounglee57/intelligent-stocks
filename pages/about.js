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
        <h1 className={styles.title}>About</h1>

        <p className={styles.description}>Hello</p>
      </main>

      <footer className={styles.footer}>
        <Link href="/" className="text-primary font-bold hover:underline">
          Home
        </Link>
        <span>🪀</span>
      </footer>
    </div>
  );
}
