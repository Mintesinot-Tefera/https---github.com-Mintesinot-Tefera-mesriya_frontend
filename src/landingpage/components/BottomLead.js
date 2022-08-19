import React from "react";

import { useNavigate, Link } from "react-router-dom";
const BottomLead = ({actionText, description, mainActionText, extraActionText}) => {
  return (
    <div className="flex flex-col justify-center h-screen bg-blue-800 lg:pt-24 lg:pb-14 lg:bg-cover lg:h-full lg:bg-action">
      <p className="p-5 text-5xl font-bold leading-normal text-center text-white lg:text-4xl lg:pt-10">{actionText}</p>
      <p className="pl-12 pr-12 text-xl leading-8 text-center text-gray-300 lg:text-gray-200 lg:font-medium">{description}</p>
      <div className="relative z-50 flex flex-col items-center justify-center h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
        
      <Link
          to="/tenderlistpublic"
            className="text-sky-800 bg-gray-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

          >
            ገብተህ እይ
          </Link>
          
          <Link
            to="/userhome"
            className="text-sky-800 bg-gray-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ጀምር
          </Link>
          
      </div>
    </div>
  );
};

export default BottomLead;
