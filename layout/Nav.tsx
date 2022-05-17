import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

function Nav() {
  return (
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
      <Link href="/api/auth/signin">
        <a
          // onClick={(evt) => {
          //   evt.preventDefault();
          //   signIn();
          // }}
          style={{ color: "darkgray" }}
        >
          sign-in
        </a>
      </Link>
      <Link href="/api/auth/signout">
        <a
          onClick={(evt) => {
            evt.preventDefault();
            signOut();
          }}
          style={{ color: "darkgray" }}
        >
          sign-out
        </a>
      </Link>
    </nav>
  );
}

export default Nav;
