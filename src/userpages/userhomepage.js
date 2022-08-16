import SignIn from "../authentication/signin";
import SignUp from "../authentication/signup";
import LandingPage from "../components/landingpage";
import UserHomeBottom from "./userhomebottom";
import UserHomeTop from "./userhometop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import NavbarPublic from "../components/navbarpublic"
import FooterPublic from "../components/footerpublic";

function UserHomePage() {
  const useridfromlocalstorage = window.localStorage.getItem("userid")

  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   link: authLink.concat(link),
  // });
  

  // if (useridfromlocalstorage) {
  //   return (<ApolloProvider>
  //     <Router>
  //       <div className="App">
  //         <NavbarPublic />
  //         <Routes>
  //           <Route path="userhome/" element={<LandingPage/>} />
  //           <Route path="/login" element={<SignIn />} />
  //           <Route path="/register" element={<SignUp />} />

  //         </Routes>
  //         <FooterPublic />
  //       </div>
  //     </Router>
  //   </ApolloProvider>
  //   );
  // }
 
  return (
    <div className="bg-gray-300 pt-8 pb-8">
      {/* <UserHomepageDetail/> */}
      <UserHomeTop />
      <div className="grid justify-center">
        <input
          type="text"
          id="search-navbar"
          className="block p-2 pl-10 mx-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
      <UserHomeBottom />

    </div>



  );
}

export default UserHomePage;
