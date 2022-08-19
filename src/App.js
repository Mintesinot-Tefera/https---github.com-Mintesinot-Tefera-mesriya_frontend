import "./App.css";
import SignIn from "./authentication/signin";
import FooterPublic from "./components/footerpublic";
import LandingPage from "./components/landingpage";
import Navbar2 from "./components/navbarpublic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./authentication/signup";
import ForgotPassword from "./authentication/forgotpassword";
import Navbar3 from "./components/navbar3";
import Navbar4 from "./components/navbaruser";
import FooterUser from "./components/footeruser";
import NavbarUser from "./components/navbaruser";
import ProfileBuidlerPage1 from "./profile/profilebuilderpage1";
import ProfileBuidlerPage2 from "./profile/profilebuilderpage2";
import ProfileBuidlerPage3 from "./profile/profilebuilderpage3";
import ProfileBuidlerPage4 from "./profile/profilebuilderpage4";
import TenderDose from "./proposals/biddingform";
import NavbarPublic from "./components/navbarpublic";
import Contract from "./components/contract";
import GeekStepper from "./components/geekstepper";
import Checkout from "./components/stepper";
import TenderCreatorStepper from "./tendercreator/tendercreatorstepper";
import TenderCreator2 from "./tendercreator/tendercreator2";
import TenderCreator1 from "./tendercreator/tendercreator1";
import TenderCreatorOpen3 from "./tendercreator/tendercreatoropen3";
import TenderCreatorOpen4 from "./tendercreator/tendercreatoropen4";
import TenderCreatorClose3 from "./tendercreator/tendercreatorclose3";
import TenderCreatorClose4 from "./tendercreator/tendercreatorclose4";
import Messages from "./components/messages"
import Compliant from "./components/compliant";
import Blog from "./components/blog";
import ProfileBuidlerPage from "./profile/profilebuilderpage";
import ProfileBuilderStepper from "./profile/profilebuilderstepper";
import ProfilePageMine from "./profile/profilepagemine";
import UserHome from "./userpages/userhomepage";
import BiddingForm from "./proposals/biddingform";
import TenderDetail from "./tender/tenderdetail";
import { setContext } from '@apollo/client/link/context';

import Notfoundpage from "./not_found/404";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import ProfilePageOthers from "./profile/profilepageothers";
import ProposalListMine from "./proposals/proposallistmine";
import ProposalDetail from "./proposals/proposaldetails";
import TenderListMine from "./tender/tenderlistmine";
import TenderDetailsMine from "./tender/tenderdetailsmine";
import ProfileBuilderAllinOne from "./profile/profilebuidlerallinone";
import TenderCreatorAllinOne from "./tendercreator/tendercreatorallinone";
import ProposalListToMyTender from "./proposals/proposallisttomytender";
import App1 from "./admin-panel/App1";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    // uri: 'http://localhost:8080/v1/graphql'
    uri: 'https://relaxing-loon-62.hasura.app/v1/graphql'

  }),
]);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": "myadminsecretkey",
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});


function App() {

  // const useridfromlocalstorage = window.localStorage.getItem("userid");
  // const companyidfromlocalstorage= window.localstor.getItem("companyid");

  // console.log(useridfromlocalstorage);

  const isLoggedIn = localStorage.getItem('userid') !== null;
  const hasCompanyPage = localStorage.getItem('companyid') !== null;
  
  // const loggedInNoCompanyPage = null
  
  // if((isLoggedIn === true) && (hasCompanyPage === true)) {
  //   loggedInandhasCompanyPage  = true;
  // }
  
  console.log(isLoggedIn);

  return (
    <ApolloProvider client={client}>

      <Router>
        <div className="App">
          {isLoggedIn ? <NavbarUser /> : <NavbarPublic />}
          {/* <NavbarUser /> */}

          {/* <GeekStepper/> */}
          {/* <PostTenderStepper/> */}
          {/* <TenderCreatorOpen3/> */}
          {/* <TenderCreatorClose4/> */}
          {/* <Messages/> */}
          {/* <ViewBids/> */}
          {/* <Compliant/> */}
          {/* <Blog/> */}
          {/* <ProfileBuilderAllinOne/> */}
          {/* <ProfilePageMine /> */}
          {/* <UserHome/> */}
          {/* <TenderCreatorAllinOne/> */}
          {/* <TenderCreatorStepper /> */}
          {/* <TenderDetail/> */}
          {/* <Contract/> */}
          {/* <TenderDose/> */}
          {/* <BiddingForm/> */}
          {/* <LandingPage/> */}
          {/* <ProposalDetail/> */}
          {/* <TenderListMine/> */}
          {/* <ProposalListMine/> */}

        


          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            {/* <Route path="/admin" element={<App1/>} /> */}
            
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/userhome" element= {isLoggedIn ? <UserHome /> : <SignIn />} />
            <Route path="/myproposals" element={hasCompanyPage ? <ProposalListMine />: <ProfileBuilderAllinOne />} />
            <Route path="/tendercreator" element={hasCompanyPage ? <TenderCreatorAllinOne />: <ProfileBuilderAllinOne/>} />
            <Route path="/messages" element={hasCompanyPage ? <Messages />: <SignIn/>} />
            <Route path="/tenderdetail" element={<TenderDetail />} />
            <Route path="/profilepagemine" element={hasCompanyPage ? <ProfilePageMine />: <SignIn/>} />
            <Route path="/profilepageothers" element={ <ProfilePageOthers />} />
            <Route path="/biddingform" element={hasCompanyPage ? <BiddingForm />: <SignIn/>} />
            <Route path="/proposaldetails" element={hasCompanyPage ? <ProposalDetail /> : <SignIn/>} />
            <Route path="/insertproposal" element={hasCompanyPage ? <BiddingForm /> : <SignIn/>} />
            <Route path="/mytenders" element={hasCompanyPage ? <TenderListMine /> : <SignIn/>} />
            <Route path="/mytendersdetail" element={hasCompanyPage ? <TenderDetailsMine /> : <SignIn/>} />
            <Route path="/profilebuilder" element={hasCompanyPage ? <ProfileBuilderAllinOne /> : <SignIn/>} />
            <Route path="/proposalslisttomytender" element={hasCompanyPage ? <ProposalListToMyTender /> : <SignIn/>} />

            
            
            <Route path="*" element={<Notfoundpage />} />
          </Routes>
          {isLoggedIn ? <FooterUser /> : <FooterPublic />}

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
