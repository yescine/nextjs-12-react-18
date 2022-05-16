import { useRouter } from "next/router";

function index() {
  const { slug, reviewId } = useRouter().query;
  return (
    <div>
      review details
      <h2>{slug}</h2>
      <h3>{reviewId}</h3>
    </div>
  );
}

export default index;
