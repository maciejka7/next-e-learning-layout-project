import Head from "next/head";
import { Preview, Navigation } from "../components";
import styles from "../styles/main.module.scss";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        widht: "100vw",
        height: "100vh",
        padding: "20px",
        margin: 0
      }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Preview />
      <main className={styles.wrapper}>
        <Navigation />
        <section style={{ backgroundColor: "white" }}> content </section>
      </main>
    </div>
  );
}
