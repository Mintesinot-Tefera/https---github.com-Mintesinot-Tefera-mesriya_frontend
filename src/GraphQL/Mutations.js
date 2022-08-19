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
export const INSERT_PROPOSAL= gql`
mutation insert_proposal(
  $CPO_number: String!, 
  $Extra: String!,
  $Proposal_body_text: String!, 
  $amount_of_money_proposed: money!, 
  $financial_proposal_file_link: String!, 
  $grade: bpchar!, 
  $proposed_time: timestamp!, 
  $proposing_company_id: Int!, 
  $tender_fee_FT_number: String!, 
  $tender_id: Int!,
  $other_file_link: String!,
  $bank_name: String!,
  $technical_proposal_file_link:String!
  ) {
  insert_proposal(objects: {CPO_number: $CPO_number, 
    Extra: $Extra, 
    Proposal_body_text: $Proposal_body_text, 
    amount_of_money_proposed: $amount_of_money_proposed, 
    financial_proposal_file_link: $financial_proposal_file_link, 
    grade: $grade, 
    proposed_time: $proposed_time, 
    proposing_company_id: $proposing_company_id, 
    tender_fee_FT_number: $tender_fee_FT_number, 
    tender_id: $tender_id, 
    other_file_link: $other_file_link, 
    bank_name: $bank_name, 
    technical_proposal_file_link: $technical_proposal_file_link}
    ) {
    returning {
      CPO_number
      Extra
      Proposal_body_text
      amount_of_money_proposed
      bank_name
      financial_proposal_file_link
      grade
      id
      proposed_time
      proposing_company_id
      technical_proposal_file_link
      tender_fee_FT_number
      tender_id
    }
  }
}
`

export const INSERT_COMPANY_PAGE= gql`
mutation insert_company_page(
  $company_name: String!, 
  $company_details: String!, 
  $company_size_name: String!, 
  $company_type_name: String!, 
  $goals: String!, 
  $mission: String!, 
  $socials_facebook: String!, 
  $socials_linkedIn: String!, 
  $twitter: String!, 
  $user_id: Int!, 
  $action: String!) {
  insert_company_page(objects: {
    company_name: $company_name, 
    company_details: $company_details, 
    company_size_name: $company_size_name, 
    company_type_name: $company_type_name, 
    goals: $goals, 
    mission: $mission, 
    socials_facebook: $socials_facebook, 
    socials_linkedIn: $socials_linkedIn, 
    twitter: $twitter, 
    user_id: $user_id, 
    action: $action
  }) {
    returning {
      company_details
      company_name
      company_size_name
      company_type_name
      goals
      id
      mission
      registration_date
      socials_facebook
      socials_linkedIn
      stars_cumulative
      twitter
      user_id
      action
    }
  }
}
`
export const INSERT_TENDERS= gql`
mutation insert_tenders($bid_no: String!, 
  $bidding_hosting_location: String!, 
  $category: String!, 
  $description: String!, 
  $mode_of_procurement: String!, 
  $procurement_type: String!, 
  $requirements_doc_link: String!, 
  $tender_poster_company_id: Int!, 
  $title: String!, 
  $closing_date: date = "") {
  insert_tenders(objects: {bid_no: $bid_no, bidding_hosting_location: $bidding_hosting_location, category: $category, description: $description, mode_of_procurement: $mode_of_procurement, procurement_type: $procurement_type, requirements_doc_link: $requirements_doc_link, tender_poster_company_id: $tender_poster_company_id, title: $title, closing_date: $closing_date}) {
    returning {
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
}
`

