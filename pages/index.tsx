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
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
        <Link href="/blog">
          <a>blog</a>
        </Link>
        <Link href="/docs">
          <a>Docs</a>
        </Link>
        <Link href="/users">
          <a>Users</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/news">
          <a>News</a>
        </Link>
      </nav>
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
