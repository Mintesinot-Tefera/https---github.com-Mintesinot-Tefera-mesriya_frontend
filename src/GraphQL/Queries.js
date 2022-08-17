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
    company_pages {
      id
    }

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
    user_account {
      first_name
      last_name
    }
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
  query tender_details($id: Int!) {
    tenders_by_pk(id: $id) {
      description
      title
      updated_at
      tender_poster_company_id
      start_date
      requirements_doc_link
      procurement_type
      mode_of_procurement
      created_at
      closing_date
      category
      bidding_hosting_location
      bid_no
      bid_document_price
      company_page {
        id
      }
    }
}
`
export const PROPOSALS = gql`
query{
  proposal  {
    Proposal_body_text
    id
    proposed_time
  }
}
`



export const PROPOSALS_OF_LOGGED_IN_USER = gql`
query proposal_of_loggedin_user( $_eq: Int!) {
  proposal(where: { proposing_company_id: {_eq: $_eq}}) {
    Proposal_body_text
    id
    proposed_time
    amount_of_money_proposed
  }
}
`

export const PROPOSALS_OF_LOGGED_IN_USER_AND_SELECTED_TENDER = gql`
query proposal_of_loggedin_user( $_eq: Int!, $_eq1: Int!) {
  proposal(where: { tender_id: {_eq: $_eq}, proposing_company_id: {_eq: $_eq1}}) {
    Proposal_body_text
    id
    proposed_time
    amount_of_money_proposed
  }
}
`
export const PROPOSAL_DETAILS= gql`
query proposaldetails($id: Int!) {
  proposal_by_pk(id: $id) {
    CPO_number
    Extra
    Proposal_body_text
    amount_of_money_proposed
    bank_name
    financial_proposal_file_link
    grade
    id
    other_file_link
    proposed_time
    proposing_company_id
    status
    technical_proposal_file_link
    tender_fee_FT_number
    tender_id
  }
}
`
export const TENDERS_OF_LOGGED_IN_USER= gql`
query MyQuery2($_eq: Int = 10) {
  tenders(where: {tender_poster_company_id: {_eq: $_eq}}) {
    bid_document_price
    bid_no
    bidding_hosting_location
    category
    closing_date
    created_at
    description
    extended_to
    extension_reason
    id
    mode_of_procurement
    procurement_type
    requirements_doc_link
    start_date
    status
    tender_poster_company_id
    title
    updated_at
  }
}
`

