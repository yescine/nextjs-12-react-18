import useSwr from "swr";
import Rest from "service/rest";

function Dashboard() {
  const { data, error } = useSwr("dashboard", Rest.getNews);

  if (error)
    return (
      <div>
        <hr />
        error <hr />
      </div>
    );
  if (!data) return <h1>...loading</h1>;

  return <>
  {data.map(elem=>(
    <div key={elem.id} >
      <h1>{elem.title} </h1>
    </div>
  ))}
  </>;
}

export default Dashboard;
