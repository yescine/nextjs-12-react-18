import { GetStaticProps } from "next";
import Link from 'next/link';

const Posts = ({ posts }: { posts: any[] }) => {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
          <h6><span>{post.id}{": "} </span>{post.title} </h6>
          </Link>
        </div>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = (await (await fetch("https://jsonplaceholder.typicode.com/posts")).json()) as {}[];
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
