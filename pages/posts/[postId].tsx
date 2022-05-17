import { GetStaticProps } from "next";

function PostDetails({ post }: { post: any }) {
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body} </p>
    </>
  );
}

export default PostDetails;

export async function getStaticPaths() {
  const posts = (await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json()) as any[];
  const paths = posts.map(post=>({params:{postId:`${post.id}`}}))
  return {
    paths,
    fallback:false
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const post = (await (await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)).json()) as {};
  return {
    props: {
      post,
    },
  };
};
