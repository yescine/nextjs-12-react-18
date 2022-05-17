import { GetServerSideProps } from "next";

const NewsDetails = ({ post }) => {
  return (
    <>
      <h6>{post.title} </h6>
      <p>{post.body} </p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;
  const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.newsId}`)).json();

  return {
    props: {
      post,
    },
  };
};

export default NewsDetails;
