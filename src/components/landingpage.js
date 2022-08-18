import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useNavigate, Link } from "react-router-dom";
import home1 from "../landing/pages/Home";

function LandingPage() {
  // const navigate = useNavigate();

  // const navigateToUserhome = () => {
  //   navigate('/userhome');
  // };

  return (
    
    <div className="h-screen p-20 bg-gray-300">
      <div className="grid grid-cols-2 bg-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 px-5 py-20 h-full">
        
        <div className="flex justify-center items-center gap-20 bg-gray-300">
          <a
            href="#"
            className="text-sky-800 bg-gray-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ገብተህ እይ
          </a>
          <Link
            to="/userhome"
            className="text-sky-800 bg-gray-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          // onClick={navigateToUserhome}

          >
            ጀምር
          </Link>
        </div>
      </div>
    </div>
     
    )

}

export default LandingPage;
