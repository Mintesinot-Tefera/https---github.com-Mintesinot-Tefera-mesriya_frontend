import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import MyLogo from '../img/logo.png';
import MyLogos from '../img/logo2.png';

export default function NavbarUser() {
  const useridfromlocalstorage = window.localStorage.getItem("userid")



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorEpdd, setAnchorEpdd] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClickProfiledd = (event) => {
    setAnchorEpdd(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const handleCloseProfiledd = () => {
    setAnchorEpdd(null);
  };

  const navigate = useNavigate();

  const navigateToMyProposals = () => {
    navigate('/myproposals');
    setAnchorEl(null);
  };
  const navigateToProfilePageMine = () => {
    navigate('/profilepagemine');
    setAnchorEl(null);
  };

  const navigateToTenderCreator = () => {
    navigate('/tendercreator');
    setAnchorE2(null);
  };

  const navigateToMyTenders = () => {
    navigate('/mytenders');
    setAnchorE2(null);

  };

  const handleSignout = () => {
    window.localStorage.setItem("userid", null)
    window.localStorage.setItem("companyid", null)

    navigate('/login');
    setAnchorEpdd(null);

  };

  // const navigateToBids= () => {
  //   navigate('/bids');
  // };





  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <nav className="bg-sky-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src={MyLogos}
                alt="????????????"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src={MyLogo}
                alt="????????????"
              />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block p-2 pl-10 mx-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/*  */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <button
                  className="text-white hover:bg-sky-900 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  aria-controls="simple-menu1"
                  aria-haspopup="true"
                  onClick={handleClick1}
                >
                  ?????????????????? ??????
                </button>
                <Menu
                  id="simple-menu1"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose1}
                >
                  <MenuItem onClick={navigateToMyProposals}>?????????????????????</MenuItem>
                  <MenuItem onClick={navigateToMyProposals}>??????????????????</MenuItem>
                  <MenuItem onClick={navigateToProfilePageMine}>?????? ??????</MenuItem>
                </Menu>

                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                <button
                  className="text-white hover:bg-sky-900 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  aria-controls="simple-menu2"
                  aria-haspopup="true"
                  onClick={handleClick2}
                >
                  ?????????????????? ?????????
                </button>
                <Menu
                  id="simple-menu2"
                  anchorEl={anchorE2}
                  keepMounted
                  open={Boolean(anchorE2)}
                  onClose={handleClose2}
                >
                  <MenuItem onClick={navigateToMyTenders}>?????? ???????????????</MenuItem>
                  <MenuItem onClick={navigateToTenderCreator}>????????? ?????????</MenuItem>
                  <MenuItem onClick={handleClose2}>????????????</MenuItem>
                </Menu>
              </div>
            </div>

            <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
              {/* <!-- Heroicon name: outline/bell --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
              {/* <!-- Heroicon name: outline/bell --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* <!-- Profile dropdown --> */}
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-controls="simple-menu-profiledd"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={handleClickProfiledd}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              <Menu
                id="simple-menu-profiledd"
                anchorEl={anchorEpdd}
                keepMounted
                open={Boolean(anchorEpdd)}
                onClose={handleCloseProfiledd}
              >
                <MenuItem onClick={handleClickProfiledd}>Your Profile</MenuItem>
                <MenuItem onClick={handleClickProfiledd}>Settings</MenuItem>
                <MenuItem onClick={handleSignout}>Sign out</MenuItem>
              </Menu>

              {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
              {/* <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              > */}
              {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
              {/* <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            ?????????????????? ??????
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            ?????????????????? ?????????
          </a>
        </div>
      </div>
    </nav>
  );
}
