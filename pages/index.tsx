import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/home.png" />
      </Head>
      <h1>Home page</h1>
      <div style={{ textAlign: "center" }}>
        <Link href="/company">
          <a className={styles.sideMenu}>Company</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
