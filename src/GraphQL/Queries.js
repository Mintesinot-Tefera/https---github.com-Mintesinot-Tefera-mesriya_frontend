import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    user_account {
      email
    first_name
    last_name
    id
    password
    phone_no
    user_name
    }
  }
`;
