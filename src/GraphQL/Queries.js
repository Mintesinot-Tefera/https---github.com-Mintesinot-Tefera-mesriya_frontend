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
`

export const LOGIN_USER = gql`
query user_account($email: String!, $password: String!) {
  user_account(where: {email: {_eq: $email}, password: {_eq: $password}}) {
    id
    user_name
  }
}
`
export const LOGGED_IN_USER = gql`
query user_account($id: Int!) {
  user_account_by_pk(id: $id) {
    first_name
    last_name
    email
    id
    user_name
    company_pages {
      id
    }
  }
}
`
export const LOGGED_IN_USER_COMPANY_PAGE = gql`
query user_company_page($id: Int!) {
  company_page_by_pk(id: $id) {
    company_name
    mission
    socials_facebook
    socials_linkedIn
    stars_cumulative
    user_id
    action
    company_details
    company_size_name
    twitter
    updated_at
    goals
    company_type_name
    company_verification
    company_owned_contacts {
      id
      phone_no
      company_id
    }
    company_locations {
      location_id
      location {
        id
        name
      }
     
    }
  }
}
`



export const INSERT_BLOG_POST = gql`
    mutation InsertBlogPost($title: String!, $content: String!) {
        insert_blog_post_one(object: {
            title: $title
            content: $content
        }) {
            id
        }
    }
`


export const LOAD_TENDERS = gql`
  query {
  tenders {
    id
    title
    description
    category
    start_date
    status
    tender_poster_company_id
    updated_at
  }
}
`

export const TENDER_DETAILS = gql`
  query ($id: String!) {
    tenders_by_pk(id: $id) {
      bid_document_price
      bid_no
      bidding_hosting_location
      category
      closing_date
      created_at
    }
}
`