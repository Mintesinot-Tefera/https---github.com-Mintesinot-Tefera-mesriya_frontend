import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { INSERT_PROPOSAL } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

function BiddingForm() {

  const companyidfromlocalstorage = window.localStorage.getItem("companyid");
  const tenderidfromlocalstorage = window.localStorage.getItem("tenderid");

  const [proposalBodyText, setProposalBodyText] = useState("");
  const [proposedtime, setProposedtime] = useState("");
  const [grade, setGrade] = useState("");
  const [ftnumber, setFTnumber] = useState("");
  const [cponumber, setCPOnumber] = useState("");
  const [extras, setExtras] = useState("");
  const [otherFileLink, setOtherFileLink] = useState("");
  const [proposedAmountofMoney, setProposedAmountofMoney] = useState("");
  const [financialProposalFileLink, setFinancialProposalFileLink] = useState("");
  const [bankname, setBankName] = useState("");
  const [technicalProposalFileLink, setTechnicalProposalFileLink ] = useState("");

  

  const [insert_proposal, { error }] = useMutation(INSERT_PROPOSAL)

  const navigate = useNavigate();

  const navigateToUserHome = () => {
    navigate(`/userhome`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var x = insert_proposal({
      variables: {
        CPO_number: cponumber,
        Extra: extras,
        Proposal_body_text: proposalBodyText,
        amount_of_money_proposed: proposedAmountofMoney,
        financial_proposal_file_link: financialProposalFileLink,
        grade: grade,
        proposing_company_id: companyidfromlocalstorage,
        other_file_link: otherFileLink,
        tender_fee_FT_number: ftnumber,
        tender_id: tenderidfromlocalstorage,
        proposed_time: proposedtime,
        bank_name:bankname,
        technical_proposal_file_link: technicalProposalFileLink
      }
    });
    if(x){
      navigateToUserHome()
    } }


  return (
    <div className="px-20  bg-gray-300">
      <h5 className="text-gray-900 text-xl font-medium pb-2 pt-8 ">የጨረታ መወዳደሪያ ዶሴ</h5>
      <form>
        <div className="block rounded-lg shadow-lg bg-white text-center h-fit">
          <div className="p-6 h-full">
            <div>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="የስራ መረጃ ዝርዝር"
                onChange={(e) => {
                  setProposalBodyText(e.target.value);
                }
                }
              ></textarea>
            </div>
          </div>
        </div>
        <div className="justify-center my-14 col-span-2">
          <div className="block rounded-lg shadow-lg bg-white text-center h-fit">
            <div className="p-6 h-full">
              <h5 className="text-gray-900 text-xl font-medium mb-2">ቴክኒካል መረጃ</h5>

              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                  >
                    ስራው የሚፈጅብህ ጊዜ
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ስራው የሚፈጅብህ ጊዜ"
                    required=""
                  onChange={(e) => {
                    setProposedtime(e.target.value);
                  }
                  }
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                  >
                    የእቃ ጥራት
                  </label>
                  <input
                    type="text"
                    maxLength={1}
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="የእቃ ጥራት"
                    required=""
                    onChange={(e) => {
                      setGrade(e.target.value);
                    }
                    }
                  />
                </div>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                  >
                    መወዳደሪያ ክፍያ ባንክ FTnumber
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="FTnumber"
                    required=""
                    onChange={(e) => {
                      setFTnumber(e.target.value);
                    }
                    }
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                  >
                    የስራ ማስያዣ cpo ቁጥር
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="cpo"
                    required=""
                    onChange={(e) => {
                      setCPOnumber(e.target.value);
                    }
                    }
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                >
                  ማመልከቻ
                </label>
                <textarea
                  id="message"
                  rows="2"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ማመልከቻ"

                ></textarea>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                >
                  ተጫማሪ
                </label>
                <textarea
                  id="message"
                  rows="2"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ተጫማሪ"
                  onChange={(e) => {
                    setExtras(e.target.value);
                  }
                  }
                ></textarea>
              </div>

              <div className="grid grid-cols-3 mb-8">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  ተጨማሪ ዶክመንቶች
                </label>
                <div className="col-span-2 grid grid-cols-2 dark:bg-gray-400 rounded-lg">
                  <input
                    className="block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ሊንክ"
                    required=""
                    onChange={(e) => {
                      setTechnicalProposalFileLink(e.target.value);
                    }
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block rounded-lg shadow-lg bg-white text-center h-fit justify-center mt-14 pb-8 col-span-2">
          <div className="p-6 h-full">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              ፋይናንስ መረጃ
            </h5>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
              >
                ስራው የሚፈጅብህ ገንዘብ

              </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ስራው የሚፈጅብህ ገንዘብ "
                  required=""
                  onChange={(e) => {
                    setProposedAmountofMoney(e.target.value);
                  }
                  }
                />
              </div>
              <div>
                <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
              >
                Bank name

              </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ስራው የሚፈጅብህ ገንዘብ "
                  required=""
                  onChange={(e) => {
                    setBankName(e.target.value);
                  }
                  }
                />
              </div>

            </div>

            <div className="grid grid-cols-3 mb-8">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                ተጨማሪ ዶክመንቶች
              </label>
              <div className="col-span-2 grid grid-cols-2 dark:bg-gray-400 rounded-lg">
                <input
                  className="block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  type="file"
                />
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ሊንክ"
                  required=""
                  onChange={(e) => {
                    setFinancialProposalFileLink(e.target.value);
                  }
                  }
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
              >
                other link

              </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ስራው የሚፈጅብህ ገንዘብ "
                  required=""
                  onChange={(e) => {
                    setOtherFileLink(e.target.value);
                  }
                  }
                />
              </div>
            
              </div>
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
            onClick={ handleSubmit }
          >
            ላክ
          </button>
        </div>
      </form>
    </div>
  );
}

export default BiddingForm;
