import { GetStaticProps,GetStaticPaths } from "next";
import {useRouter} from 'next/router';

function PostDetails({ post }: { post: any }) {
  const router = useRouter()
  if(router.isFallback) return <h1>...loading</h1>

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body} </p>
    </>
  );
}

export default PostDetails;

export const  getStaticPaths:GetStaticPaths=async()=> {
  const posts = (await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json()) as any[];
  const paths = posts.map(post=>({params:{postId:`${post.id}`}}))
  return {
    paths,
    fallback:true
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const post = (await (await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)).json()) as any;

  if(!post.id){
    return {notFound:true}
  }
  return {
    props: {
      post,
    },
  };
};
