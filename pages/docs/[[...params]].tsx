import { useRouter } from "next/router";

function Docs() {
  const { params } = useRouter().query;
  return (
    <div>
      <h1>docs home page</h1>
      <p>{JSON.stringify({params}, null, 2)}</p>
    </div>
  );
}

export default Docs;
