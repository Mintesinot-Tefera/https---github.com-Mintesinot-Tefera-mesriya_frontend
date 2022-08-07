import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "./GraphQL/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.user_account);
    }
  }, [data]);

  return (
    <div>
      {" "}
      {users.map((val) => {
        return <div>
        <h1> {val.first_name}</h1>
        <h2>{val.email}</h2>
        </div>;
      })}
    </div>
  );
}

export default GetUsers;
