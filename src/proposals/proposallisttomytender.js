import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { LOAD_TENDERS, PROPOSALS_OF_LOGGED_IN_USER_AND_SELECTED_TENDER } from "../GraphQL/Queries";

function ProposalListToMyTender() {
    const navigate = useNavigate();

    const companyidfromlocalstorage = window.localStorage.getItem("companyid");
    const tenderidfromlocalstorage = window.localStorage.getItem("tenderid");


    const navigateToProposalDetails = (id) => {

        window.localStorage.setItem("proposalid", id);
        navigate(`/proposaldetails`)
    };


    const { error, loading, data } = useQuery(PROPOSALS_OF_LOGGED_IN_USER_AND_SELECTED_TENDER, {
        variables: { _eq: tenderidfromlocalstorage }
    });

    const [proposal, setProposals] = useState([]);

    useEffect(() => {
        if (data) {

            console.log("hashuka")
            // console.log(data)
            setProposals(data.proposal);
            // console.log(proposal)
        }
    }, [data]);

    const navigateToMessages = () => {
        navigate('/messages');
    };
    return (
        <div className=" px-20 justify-center py-14 bg-gray-300">
            <h5 className="text-sky-900 text-xl font-medium mb-2">
                የገቡ ማመልከቻዎች MY proposals
            </h5>
            {proposal.map((val) => {
                return <div className="grid grid-cols-12 border-2 mb-2 bg-gray-100">
                    <div className=" col-span-6">
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">የአመልካች ስም</h5>
                            <p className="text-gray-700 text-base mb-4">
                                This content is a little bit longer.
                            </p>
                            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                        </div>

                    </div>
                    <div className="p-6 col-span-2">
                        <h3 className="text-gray-900 text-l font-medium mb-2">ብር መጠን</h3>
                        <p className="text-gray-700 text-base mb-4">
                            {val.amount_of_money_proposed}
                        </p>
                    </div>
                    <div className="p-6 col-span-2">
                        <h3 className="text-gray-900 text-l font-medium mb-2">ጊዜ መጠን</h3>
                        <p className="text-gray-700 text-base mb-4">
                            10 months +{val.proposed_time}
                        </p>
                    </div>
                    <div className="space-y-3 grid grid-rows-3 col-span-2 mr-10 my-4">
                        <button type="button" className="inline-block px-6 py-2.5 bg-sky-800 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out"
                        >ወደ ገጽ ሂድ </button>
                        <button type="button" className="inline-block px-6 py-2.5 bg-sky-800  text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={navigateToMessages}
                        >መልእክት ላክ</button>
                        <button type="button" className="inline-block px-6 py-2.5 bg-sky-800  text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={() => { navigateToProposalDetails(val.id) }
                            }
                        >Details</button>
                    </div>
                </div>
            })}
        </div>

    );
}

export default ProposalListToMyTender;
