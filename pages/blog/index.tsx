import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/blog.png" />
      </Head>
      <div>
        <h1>Some Blogs</h1>
      </div>
    </>
  );
}

export default index;
