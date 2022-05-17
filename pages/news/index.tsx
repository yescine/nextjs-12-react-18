import { GetServerSideProps } from "next";
import Link from "next/link";
const Index = (props) => {
  const { posts } = props;
  return (
    <>
      <h1>Lists of news</h1>
      {posts.map((post) => (
        <Link href={`/news/${post.id}`}>
        <div key={post.id}>
          <h6>{post.title} </h6>
          <p>{post.body}</p>
        </div>
        </Link>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = (await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json()) as any[];

  return {
    props: {
      posts,
    },
  };
};

export default Index;
