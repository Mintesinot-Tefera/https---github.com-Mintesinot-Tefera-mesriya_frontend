import { Button, Typography } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { TENDER_DETAILS } from "../GraphQL/Queries";
import { useQuery, useLazyQuery, gql } from "@apollo/client";


function TenderDetailsMine() {
  const tenderidfromlocalstorage = window.localStorage.getItem("tenderid");

  const { error, loading, data } = useQuery(TENDER_DETAILS, {
    variables: { id: tenderidfromlocalstorage }
  });

  const navigate = useNavigate();

  return (
    <div>
      <div className="px-20 justify-center py-14 bg-gray-300">
        <div className="block rounded-lg shadow-lg bg-white text-center h-fit border-2 p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            Tender ተጨማሪ ዝርዝር መረጃ
          </h5>

          <div className="grid xs:rows-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7  h-full gap-8">
            <div className="sm:col-span-3 md:col-span-3 lg:col-span-6 text-gray-700 text-base mb-4 ">
              <p className="m-8">

                <strong>{data ? data.tenders_by_pk.title : "no tender"}</strong><br />
                {data ? data.tenders_by_pk.description : "no tender"}


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
            <div><strong>Category:  </strong>
            <p>{data ? data.tenders_by_pk.category : "no tender"}</p>
            </div><br />
            <div><strong>Closing Date:  </strong>
              <p>{data ? data.tenders_by_pk.closing_date : "no tender"}</p>
            </div><br />
            <div><strong>Start date: </strong>
              <p>{data ? data.tenders_by_pk.created_at : "no tender"}</p>
            </div><br />
            <div><strong>Bid number: </strong>
              <p>{data ? data.tenders_by_pk.bid_no : "no tender"}</p>
            </div><br />
            <div><strong>Bid document price: </strong>
              <p>{data ? data.tenders_by_pk.bid_document_price : "no tender"}</p>
            </div>


        </div>

        <div className="flex flex-col space-y-8">
          <Button
            className="bg-sky-800 text-white col-end-9"
            variant="filled"
          >
            አጋራ
          </Button>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
export default TenderDetailsMine;
