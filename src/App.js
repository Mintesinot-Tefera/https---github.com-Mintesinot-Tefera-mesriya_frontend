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
import TenderDose from "./components/biddingform";
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
import ViewBids from "./components/viewbids";
import Compliant from "./components/compliant";
import Blog from "./components/blog";
import ProfileBuidlerPage from "./profile/profilebuilderpage";
import ProfileBuilderStepper from "./profile/profilebuilderstepper";
import ProfilePage from "./profile/profilepage";
import UserHome from "./userpages/userhomepage";
import BiddingForm from "./components/biddingform";
import TenderDetail from "./components/tenderdetail";
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
  return (
    <ApolloProvider client={client}>

      <Router>
        <div className="App">
          <NavbarUser />
          {/* <GeekStepper/> */}
          {/* <PostTenderStepper/> */}
          {/* <TenderCreatorOpen3/> */}
          {/* <TenderCreatorClose4/> */}
          {/* <Messages/> */}
          {/* <ViewBids/> */}
          {/* <Compliant/> */}
          {/* <Blog/> */}
          {/* <ProfileBuilderStepper/> */}
          {/* <ProfilePage /> */}
          {/* <UserHome/> */}
          {/* <TenderCreatorStepper /> */}
          {/* <TenderDetail/> */}
          {/* <Contract/> */}
          {/* <TenderDose/> */}
          {/* <BiddingForm/> */}
          {/* <LandingPage/> */}


          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/userhome" element={<UserHome />} />
            <Route path="/viewbids" element={<ViewBids />} />
            <Route path="/tendercreator" element={<TenderCreatorStepper />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/tenderdetail/:id" element={<TenderDetail />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/biddingform" element={<BiddingForm />} />
            <Route path="*" element={<Notfoundpage />} />
          </Routes>
          <FooterUser />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
