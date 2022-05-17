import Link from "next/link";

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
    </nav>
  );
}

export default Nav;
