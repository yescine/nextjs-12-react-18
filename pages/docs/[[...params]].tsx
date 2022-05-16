import Head from "next/head";
import { useRouter } from "next/router";

function Docs() {
  const { params } = useRouter().query;
  return (
    <>
       <Head>
        <title>Docs</title>
        <meta name="description" content="docs" />
        <link rel="icon" href="/doc.png" />
      </Head>
      <h1>docs home page</h1>
      <p>{JSON.stringify({params}, null, 2)}</p>
    </>
  );
}

export default Docs;
