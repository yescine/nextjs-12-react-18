import { GetStaticProps } from "next";
import UserContainer, {User} from "@components/Users";


const users = ({ users }: { users: User[] }) => {
  return (
    <>
      {users.map((user, idx) => {
        return (
          <div key={idx}>
            <UserContainer user={user} />
          </div>
        );
      })}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const users = (await (await fetch("https://jsonplaceholder.typicode.com/users")).json()) as User[];
  return {
    props: {
      users,
    },
  };
};

export default users;
