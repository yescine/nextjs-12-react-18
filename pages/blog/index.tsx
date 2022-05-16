import Head from "next/head";
import Link from "next/link";
import {useRouter} from 'next/router';

function index() {
  const router = useRouter()

  const addBlog=()=>{
    router.push('/blog/some-new-blog')
  }
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/blog.png" />
      </Head>
      <div>
        <h1>Some Blogs</h1>
        <Link href="/blog/blog1"><a><p>blog1</p></a></Link>
        <button onClick={addBlog} >
          add blog
        </button>
      </div>
    </>
  );
}

export default index;
