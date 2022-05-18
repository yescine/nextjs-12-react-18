import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Nav() {
  const { data, status } = useSession();
  console.log({ data });
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
      {status === "unauthenticated" && (
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
      )}
      {status === "authenticated" && (
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
      )}
    </nav>
  );
}

export default Nav;
