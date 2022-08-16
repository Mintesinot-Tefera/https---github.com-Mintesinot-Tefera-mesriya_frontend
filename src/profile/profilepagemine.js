import { Button } from "@material-tailwind/react";
import { Divider } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { LOGGED_IN_USER_COMPANY_PAGE } from "../GraphQL/Queries";
function ProfilePageMine() {
    const companyidfromlocalstorage = window.localStorage.getItem("companyid");

    // const { id } = useParams();
    const navigate = useNavigate();

    const { error, loading, data } = useQuery(LOGGED_IN_USER_COMPANY_PAGE, {
        variables: { id: companyidfromlocalstorage }
    });

    if (data) {
        console.log(data);
        console.log(data.company_page_by_pk.company_name);
        console.log(data.company_page_by_pk.company_details);
        console.log(data.company_page_by_pk.company_size_name);
        console.log(data.company_page_by_pk.company_locations[0].location.name);

        console.log("minteee")
    }

    return (
        <div className="bg-gray-300">
            <div className="grid grid-cols-3 divider-2 h-screen">
                <div className="grid items-center">
                    <div className="flex flex-col items-center pb-10 ">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data ? data.company_page_by_pk.user_account.first_name: "nouser"} {data ? data.company_page_by_pk.user_account.last_name: "nouser"}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    </div>
                </div>
                <div className=" mx-20 justify-center my-14 col-span-2">
                    <div className="block rounded-lg shadow-lg bg-white text-center h-full bg-gray-200 grid grid-rows-8">
                        <div className="row-span-2 flex-col">

                            <h5 className="text-black text-xl font-semibold tracking-tight dark:text-white place-self-center">
                                Followers
                            </h5><h5 className="text-sky-800 text-xl font-semibold" >12k</h5>
                        </div>
                        <div className="row-span-6 mx-20">
                            <h5 className="text-black text-xl font-semibold tracking-tight dark:text-white place-self-center">
                                Company Description
                            </h5>
                            <h2 className="text-sky-800 text-l font-semibold tracking-tight dark:text-white place-self-center">
                                {data ? data.company_page_by_pk.company_name : "nouser"}

                            </h2>
                            <br />
                            <h3 className="text-blacl text-xl font-semibold tracking-tight dark:text-white place-self-center">
                                Who are you?
                            </h3>
                            <h3 className="text-sky-800 text-md font-semibold tracking-tight dark:text-white place-self-center">
                                {data ? data.company_page_by_pk.company_details : "nouser"}
                            </h3>
                            <br />
                            <h3 className="text-black text-xl font-semibold tracking-tight dark:text-white place-self-center">
                                Company Size
                            </h3>
                            <h3 className="text-sky-800 text-md font-semibold tracking-tight dark:text-white place-self-center">
                                {data ? data.company_page_by_pk.company_size_name : "nouser"}
                            </h3>
                            <br />
                            <h3 className="text-black text-xl font-semibold tracking-tight dark:text-white place-self-center">
                               Type of company
                            </h3>
                            <h3 className="text-sky-800 text-md font-semibold tracking-tight dark:text-white place-self-center">
                                {data ? data.company_page_by_pk.company_type_name : "nouser"}
                            </h3>
                            <br />
                            <h3 className="text-black text-xl font-semibold tracking-tight dark:text-white place-self-center" >
                                Company Locations?
                            </h3>
                            <h3 className="text-sky-800 text-md font-semibold tracking-tight dark:text-white place-self-center">
                                {data ? data.company_page_by_pk.company_locations[0].location.name : "nouser"}
                            </h3>
                        </div>

                    </div>
                </div>

            </div>
            <Divider />
            <div className="grid grid-cols-3 my-20 px-32 gap-x-10">
                <a href="#" className="h-fit w-fit block p-6 bg-sky-800 rounded-lg border border-gray-200 shadow-md hover:bg-sky-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Goals</h5>
                    <p className="font-normal text-white dark:text-gray-400">
                        {/* {data.company_page_by_pk.goals} */}
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.

                    </p>
                </a>

                <a href="#" className="h-fit w-fit block p-6 bg-sky-800 rounded-lg border border-gray-200 shadow-md hover:bg-sky-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Mission</h5>
                    <p className="font-normal text-white dark:text-gray-400">
                        {/* {data.company_page_by_pk.mission} */}
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.

                    </p>
                </a>

                <a href="#" className="h-fit w-fit block p-6 bg-sky-800 rounded-lg border border-sky-900 shadow-md hover:bg-sky-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Story</h5>
                    <p className="font-normal text-white dark:text-gray-400">
                        {/* {data.company_page_by_pk.goals} */}
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </a>
            </div>
            <Divider />
            <div>
                <h5 className="mb-2 mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Team</h5>

                <div className="grid grid-cols-2 mt-12 gap-x-40">
                    <div className="flex flex-col items-end pb-10">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    </div>
                    <div className="flex flex-col items-start pb-10">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>

                    </div>
                </div>
            </div>
            <Divider />


        </div>

    );
}

export default ProfilePageMine;
