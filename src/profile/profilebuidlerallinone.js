import React, { useState } from "react";
import MyLogo from '../img/logo.png';
import MyLogos from '../img/logo.png';
import Divider from '@material-ui/core/Divider';
import { INSERT_COMPANY_PAGE } from "../GraphQL/Mutations";
import { GET_COMPANY_FROM_USER_ACCOUNT } from "../GraphQL/Queries";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";




function ProfileBuilderAllinOne() {

    const useridfromlocalstorage = window.localStorage.getItem("userid")
    const navigate = useNavigate();


    const [companynameInput, setCompanynameInput] = useState("");
    const [companydetailInput, setCompanydetailInput] = useState("");
    const [companytypenameInput, setCompanytypenameInput] = useState("");
    const [companysizenameInput, setCompanysizenameInput] = useState("");
    const [goalsInput, setGoals] = useState("");
    const [missionInput, setMission] = useState("");
    const [socialsfacebook, setSocialFacebook] = useState("");
    const [socialslinkedin, setSocialsLinkedin] = useState("");
    const [socialstwitter, setSocialstwitter] = useState("");
    const [action, setAction] = useState("");


    const [insert_company_page, { error, loading }] = useMutation(INSERT_COMPANY_PAGE
    );

    const navigateToLogin = () => {
        navigate('/login');
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        var x =insert_company_page(
            {
                variables: {
                    company_name: companynameInput,
                    company_details: companydetailInput,
                    company_type_name: companytypenameInput,
                    company_size_name: companysizenameInput,
                    mission: missionInput,
                    goals: goalsInput,
                    socials_facebook: socialsfacebook,
                    socials_linkedIn: socialslinkedin,
                    twitter: socialstwitter,
                    user_id: useridfromlocalstorage,
                    action: action
                }
            })

        if (x) {
        //     if (data.user_account[0].company_pages[0]) {
        //         window.localStorage.setItem("companyid", data.user_account[0].company_pages[0].id);
        //         console.log("if true "+data)
        //     }
        //     else {
        //         console.log("if false "+data)

        //         window.localStorage.setItem("companyid", null);

        //     }
        // }

        navigateToLogin();
    }
}

    return (
        <div className="sm:px-10 lg:px-20  bg-gray-300 h-fit pt-8 pb-32" >
            <h5 className="text-sky-800  text-xl font-medium mb-8">
                የድርጅት ድረ ገጽ መፍጠሪያ ቅጽ
            </h5>
            <div sx={{ width: '100%' }} className="block rounded-lg shadow-lg bg-white text-center h-full divide-x-2 border-2 grid grid-cols-3">
                <div className="grid grid-rows-3">
                    <div className="flex flex-col items-center pb-10 pt-40 gap-x-6">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={MyLogos} alt="Bonnie image" />
                        <div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h4 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">ስለ ድርጅታችሁ ይግለጹ</h4>
                        <h4 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">ይህ ገጽ የናንተን ማንነት የሚገልጹበት ድረ ገጽ ስለሆነ ተጠንቅቀው ይሙሉ</h4>
                    </div>
                </div>
                <div className="block rounded-lg shadow-lg bg-white text-center border-2 col-span-2 px-6 py-10">
                    <form>
                        <div className="grid gap-x-6 gap-y-2 mb-4 md:grid-cols-2">
                            <div>
                                <label
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                                >
                                    የድርጅት ስም
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="የድርጅት ስም (required , unique)"
                                    required=""
                                    onChange={(e) => {
                                        setCompanynameInput(e.target.value);
                                    }
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                                >
                                    የድርጅት አይነት
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="የድርጅት አይነት (required , ex. NGO, PLC, LLC)"
                                    required=""
                                    onChange={(e) => {
                                        setCompanytypenameInput(e.target.value);
                                    }
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                                >
                                    የተቀጣሪ ብዛት
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="የተቀጣሪ ብዛት (required ex. macro, micro)"
                                    required=""
                                    onChange={(e) => {
                                        setCompanysizenameInput(e.target.value);
                                    }
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                                >
                                    መገኛ ቦታዎች
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="መገኛ ቦታዎች"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የድርጅት ገለጻ
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="የድርጅት ገለጻ...(required)"
                                onChange={(e) => {
                                    setCompanydetailInput(e.target.value);
                                }
                                }
                            ></textarea>
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                                >
                                    ተዛማጅ ድርጅቶች
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=" ተዛማጅ ድርጅቶች"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                                >
                                    የሥራ ዘርፎች
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="የሥራ ዘርፎች ()"
                                    required=""
                                    onChange={(e) => {
                                        setAction(e.target.value);
                                    }
                                    }
                                />
                            </div>
                        </div>
                        {/* ////////////////////////////////////////////////////////////////// */}
                        <Divider />

                        <div className="mb-4 pt-20">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የድርጅቱ ራዕይ
                            </label>

                            <textarea
                                id="message"
                                rows="3"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message...  (required)"
                                onChange={(e) => {
                                    setMission(e.target.value);
                                }
                                }
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የድርጅቱ እቅድ
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message...   (required)"
                                onChange={(e) => {
                                    setGoals(e.target.value);
                                }
                                }
                            ></textarea>
                        </div>
                        <div className="">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የድርጅቱ ታሪክ
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        {/* ////////////////////////////////////////////////////////////// */}
                        <Divider />

                        <div className="grid grid-cols-3 mb-4 pt-20">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                የድርጅቱ አርማ
                            </label>
                            <div className="col-span-2 grid grid-cols-2 dark:bg-gray-400 rounded-lg">
                                <input
                                    className="block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                                    aria-describedby="user_avatar_help"
                                    id="user_avatar"
                                    type="file"
                                />
                                <div>

                                    <input
                                        type="text"
                                        id="last_name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="link"
                                        required=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የድርጅቱ ሥራ ልምድ
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <div className="grid grid-cols-3 rounded-lg">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የድርጅት ስራ ፎቶዎች
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="user_avatar_help"
                                id="user_avatar"
                                type="file"
                            />
                            <div>

                                <input
                                    type="text"
                                    id="last_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="link"
                                    required=""
                                />
                            </div>
                        </div>
                        {/* ///////////////////////////////////////////////////////////////// */}
                        <Divider />

                        <div className="grid grid-cols-3 mb-8 pt-20">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                የድርጅቱ አርማ
                            </label>
                            <div className="col-span-2 grid grid-cols-2 dark:bg-gray-400 rounded-lg">
                                <input
                                    className="block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                                    aria-describedby="user_avatar_help"
                                    id="user_avatar"
                                    type="file"
                                />
                                <div>

                                    <input
                                        type="text"
                                        id="last_name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="link"
                                        required=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-2">

                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                                >
                                    የድርጅት መስራች
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="የድርጅት መስራች"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                                >
                                    የድርጅት CEO
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="የድርጅት CEO"
                                    required=""
                                />
                            </div>
                        </div>

                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                        >
                            የድርጅት ገለጻ
                        </label>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    facebook
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="facebook"
                                    required=""
                                    onChange={(e) => {
                                        setSocialFacebook(e.target.value);
                                    }
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    linkedin
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="linkedin"
                                    required=""
                                    onChange={(e) => {
                                        setSocialsLinkedin(e.target.value);
                                    }
                                    }
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    website
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="website"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    twitter
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="twitter"
                                    required=""
                                    onChange={(e) => {
                                        setSocialstwitter(e.target.value);
                                    }
                                    }
                                />
                            </div>
                        </div>
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

            </div >

        </div >

    )
}

export default ProfileBuilderAllinOne