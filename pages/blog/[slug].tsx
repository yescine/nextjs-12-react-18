import { useRouter } from "next/router";

function Slug() {
  const { slug } = useRouter().query;

  return (
    <div>
      <h1>Title, {slug}</h1>
    </div>
  );
}

export default Slug;
