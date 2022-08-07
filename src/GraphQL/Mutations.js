import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation insert_user_account(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String
  ) {
    insert_user_account(
      first_name: $first_name
      last_name: $last_name
      email: $email
      password: $password
    ) {
      token
    }
  }
`;
