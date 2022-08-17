import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useNavigate, Link } from "react-router-dom";


function LandingPage() {
  // const navigate = useNavigate();

  // const navigateToUserhome = () => {
  //   navigate('/userhome');
  // };

  return (
    <div className="h-screen p-20 bg-gray-300">
      <div className="grid grid-cols-2 bg-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 px-5 py-20 h-full">
        <div className="grid grid-rows-3 gap-4">
          <a href="#">
            <h5 className="text-sky-900 text-xl font-semibold tracking-tight dark:text-white place-self-center">
              ድርጅቶች አና ስራዎች በአንድ ቦታ
            </h5>
          </a>
          <div className="place-self-center">
            <input
              type="text"
              id="search-navbar"
              className="block p-2 pl-10 mx-4 text-gray-900 bg-gray-300 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <div className="grid grid-cols-4 gap-4 content-start ...">
            <div
              className="text-white text-xl">
              ታዋቂ፡</div>
            <a
              href="#"
              className="text-sky-800 bg-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ብረታ ብረት
            </a>
            <Link
              to="/userhome"
              className="text-sky-800 bg-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            // onClick={navigateToUserhome}

            >
              ንግድ
            </Link>

          </div>

        </div>
        <div className="flex justify-center items-center gap-20 bg-gray-300">
          <a
            href="#"
            className="text-sky-800 bg-gray-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
          <Link
            to="/userhome"
            className="text-sky-800 bg-gray-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          // onClick={navigateToUserhome}

          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>)
}

export default LandingPage;
