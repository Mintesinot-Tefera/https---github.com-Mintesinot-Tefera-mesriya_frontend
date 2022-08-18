import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import { INSERT_TENDERS } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import tender from "../img/tender.png";



function TenderCreatorAllinOne() {

    const navigate = useNavigate();
  
    const navigateToTenderListMine = () => {
      navigate(`/mytenders`);
    };

    const companyidfromlocalstorage = window.localStorage.getItem("companyid");

    const [titleInput, setTitleInput] = useState("");
    const [categoryInput, setCategory] = useState("");
    const [closingdateInput, setClosingdateInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [requirementsdoclink, setRequirementsdoclink] = useState("");
    const [bidnumberInput, setBidnumberInput] = useState("");

    const [insert_tenders, { error }] = useMutation(INSERT_TENDERS)


    const handleSubmit = (e) => {
        e.preventDefault();
        var x = insert_tenders({
            variables: {
                bid_no: bidnumberInput,
                bidding_hosting_location: "bidding_hosting_location",
                category: categoryInput,
                description: descriptionInput,
                mode_of_procurement: "mode_of_procurement",
                procurement_type: "procurement_type",
                requirements_doc_link: requirementsdoclink,
                tender_poster_company_id: companyidfromlocalstorage,
                title: titleInput,
                status: "approved",
                closing_date: closingdateInput
            }
        });

        if(x){
            navigateToTenderListMine()
        }
    }

  

    return (
        <div className="sm:px-10 lg:px-20  bg-gray-300 pt-8 pb-32" >
            <h5 className="text-sky-800  text-xl font-medium mb-8">
                ጨረታ መልቀቂያ
            </h5>
            <div sx={{ width: '100%' }} className="block rounded-lg shadow-lg bg-white text-center grid grid-cols-2 divide-x-2 border-2 ">
                <div>
                <img className="justify-center" src={tender} alt=""/>
                </div>
                <div className="mx-12 justify-center mb-8 p-8">
                    <form>
                        <div className="mb-6">
                            <label
                                className="block text-md font-medium text-gray-900 dark:text-black-600 "
                            >
                                ርእሰ
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="ርእሰ"
                                required=""
                                onChange={(e) => {
                                    setTitleInput(e.target.value);
                                }
                                }
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-md font-medium text-gray-900 dark:text-black-600"
                            >
                                የስራ ዘርፉን ይምረጡ
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="የስራ ዘርፉን ይምረጡ"
                                required=""
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }
                                }
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block mb-2 text-md font-medium text-gray-900 dark:text-black-600"
                            >
                                የመነሻ ብር መጠን ያስገቡ
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                required=""
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block mb-2 text-md font-medium text-gray-900 dark:text-black-600"
                            >
                                የጨረታው ጊዜ ገደብ
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                placeholder="የጨረታው ጊዜ ገደብ format = 1900-01-01"
                                required=""
                                onChange={(e) => {
                                    setClosingdateInput(e.target.value);
                                }
                                }
                            />
                        </div>
                        <Divider />

                        <div className="mb-6 pt-6">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                ዝርዝር መግለጫ
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="ዝርዝር መግለጫ"
                                onChange={(e) => {
                                    setDescriptionInput(e.target.value);
                                }
                                }

                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የስራው ማለቂያ
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="የስራው ማለቂያ format = 1900-01-01"
                                required=""
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                ተጨማሪ
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="ተጨማሪ"
                            ></textarea>
                        </div>
                        <Divider />

                        <div className="mb-6 pt-6">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የመወዳደሪያ መስፈርት
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="የመወዳደሪያ መስፈርት"
                                onChange={(e) => {
                                    setRequirementsdoclink(e.target.value);
                                }
                                }

                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <label
                                className="block mb-2 text-md font-medium text-gray-900 dark:text-black-600"
                            >
                                የጨረታው number
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                placeholder="የጨረታው number"
                                required=""
                                onChange={(e) => {
                                    setBidnumberInput(e.target.value);
                                }
                                }
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የስራው መገኛ ቦታ
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="የስራው መገኛ ቦታ"
                                required=""
                            />
                        </div>
                        {/* <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8"
                        >
                            ቀጥል
                        </button> */}

                        <div className="flex mr-10 pr-20 justify-end gap-8">
                            <button
                                type="submit"
                                className="text-white my-10 bg-sky-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                አቋርጥ
                            </button>
                            <button
                                type="submit"
                                className="text-white my-10 bg-sky-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={handleSubmit}
                            >
                                ላክ
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div >

    )
}

export default TenderCreatorAllinOne