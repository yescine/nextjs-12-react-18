import React from "react";

export type User = {
  name: any;
  address: any;
};

interface Props {
  user: User;
}

const Users = ({ user }: Props) => {
  return (
    <div>
      <h4>{"name: "}</h4>
      <span>{user.name}</span>
      <h4>
        <span>city:{}</span>
        {user.address.city}
      </h4>
    </div>
  );
};

export default Users;
