import React from 'react'
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { PROPOSAL_DETAILS, TENDER_DETAILS } from "../GraphQL/Queries";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { DataArray } from '@mui/icons-material';


function ProposalDetail() {

    const proposalidfromlocalstorage = window.localStorage.getItem("proposalid");

    const  { error, loading, data } = useQuery(PROPOSAL_DETAILS, {
        variables: { id: proposalidfromlocalstorage }
      });
    
  
      if(data){
        console.log("okay")
      }
    // const navigate = useNavigate();
  
    // const navigateToProfilePageOthers = () => {
    //   window.localStorage.setItem("tenderpostercompanyid", data.tenders_by_pk.company_page.id);
    //   navigate('/profilepageothers');
    // };
  
    // const navigateToBiddingForm = () => {
    //   navigate('/biddingform');
    // };
  

  return (
    <div>
      <div className="px-20 justify-center py-14 bg-gray-300">
        <div className="block rounded-lg shadow-lg bg-white text-center h-fit border-2 p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            Proposal ዝርዝር መረጃ
          </h5>

          <div className="grid xs:rows-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7  h-full gap-8">
            <div className="sm:col-span-3 md:col-span-3 lg:col-span-6 text-gray-700 text-base mb-4 ">
              <p className="m-8">

                {/* <strong>{data ? data.tenders_by_pk.title : "no tender"}</strong><br />
                {data ? data.tenders_by_pk.description : "no tender"} */}


                {/* <strong> ORGANIZATION FOR WELFARE AND DEVELOPMENT IN ACTION

                  INVITATION TO BID</strong><br /> */}

                {/* Organization for Welfare and Development in Action (OWDA) is a non-governmental humanitarian organization,
                established in 1999 in Jigjiga,
                Ethiopia, with the objective of serving pastoral and agro-pastoral communities in the Somali Regional State.
                The ORGANIZATION FOR WELFARE AND DEVELOPMENT IN ACTION (OWDA) has received a project entitled emergency project
                to provide food assistance for drought-affected people in the Somali region of Ethiopia. The project will prioritize
                highly vulnerable community members, including pregnant and lactating women, elderly and children, female-headed households,
                IDPs, and people with disabilities in the Somali Region. */}
              </p><br />
            <div><strong>Details :  </strong>
            <p>{data ? data.proposal_by_pk.Proposal_body_text : "no tender"}</p>
            </div><br />
            <div><strong>Proposed time:  </strong>
              <p>{data ? data.proposal_by_pk.proposed_time : "no tender"}</p>
            </div><br />
            <div><strong>Company name:  </strong>
              <p>{data ? data.proposal_by_pk.closing_date : "no tender"}</p>
            </div><br />
            <div><strong>Grade : </strong>
              <p>{data ? data.proposal_by_pk.grade : "no tender"}</p>
            </div><br />
            <div><strong>FT number: </strong>
              <p>{data ? data.proposal_by_pk.tender_fee_FT_number : "no tender"}</p>
            </div><br />
            <div><strong>CPO number: </strong>
              <p>{data ? data.proposal_by_pk.CPO_number : "no tender"}</p>
            </div><br />
            <div><strong>Extra Information: </strong>
              <p>{data ? data.proposal_by_pk.Extra : "no tender"}</p>
            </div><br />
            <div><strong>Technical Proposal File Link: </strong>
              <p>{data ? data.proposal_by_pk.technical_proposal_file_link : "no tender"}</p>
            </div><br />
            <div><strong>Proposed Amount of Money: </strong>
              <p>{data ? data.proposal_by_pk.amount_of_money_proposed : "no tender"}</p>
            </div><br />
            <div><strong>Financial Proposal File Link: </strong>
              <p>{data ? data.proposal_by_pk.financial_proposal_file_link : "no tender"}</p>
            </div><br />
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default ProposalDetail



