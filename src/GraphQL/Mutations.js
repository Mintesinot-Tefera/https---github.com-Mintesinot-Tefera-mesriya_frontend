import { gql } from "@apollo/client";


export const INSERT_USER_ACCOUNT = gql`
mutation insert_user_account(
  $first_name: String!, 
  $last_name: String!, 
  $phone_no: String!,
  $user_name:String,
  $password: String!, 
  $email: String) {
  insert_user_account(objects: {
    first_name: $first_name, 
    last_name: $last_name, 
    phone_no: $phone_no, 
    user_name: $user_name,
    password: $password, 
    email: $email}) {
    returning {
      id
    }
  }
}`

// export const LOGIN_USER = gql`
// mutation insert_user_account(
//   $email: String!) {
//   $password: String!, 
//   insert_user_account(objects: {
//     email: $email
//     password: $password, 
//   }) {
//     returning {
//       id
//     }
//   }
// }`;

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
`
