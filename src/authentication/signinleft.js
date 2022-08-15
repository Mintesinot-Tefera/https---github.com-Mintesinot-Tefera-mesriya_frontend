import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function SignInLeft() {
  return (
    <div className="m-20">
    <div className="max-w-lg bg-gray-100 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-700 h-full">
      <div className="flex items-center mt-2.5 mb-5" />

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl text-sky-800 font-semibold tracking-tight dark:text-white">
            አንኳን መጣችሁ
          </h5>
        </a>
        <a href="#">
          <h5 className="text-xl tracking-tight text-sky-800  dark:text-white">
            ስትመዘገቡ ከምታገኙት ጥቅሞች
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5" />

        <div className="flex items-center">
          <span className="text-3xl font-bold text-sky-800 dark:text-white">
            <div>{"\u2713"}</div>
          </span>
          <a
            href="#"
            className="text-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
          >
            ጨረታዎችን በጊዜ በቀላሉ ማግኘት
          </a>
        </div>
        <div className="flex items-center mt-2.5 mb-5" />

        <div className="flex items-center">
          <span className="text-3xl font-bold text-sky-800  dark:text-white">
            <div>{"\u2713"}</div>
          </span>
          <a
            href="#"
            className="text-sky-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
          >
            ጨረታዎችን ከቤታችሁ መወዳደር
          </a>
        </div>
        <div className="flex items-center mt-2.5 mb-5" />

        <div className="flex items-center">
          <span className="text-3xl font-bold text-sky-800  dark:text-white">
            <div>{"\u2713"}</div>
          </span>
          <a
            href="#"
            className="text-sky-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center "
          >
            ጨረታዎች ሙሉ በሙሉ ሚስጥራዊና ከማታለል ንጻ ናቸውናቸው
          </a>
        </div>
      </div>
    </div>
    </div>


    //     <Card className="mt-6 w-96">
    //   <CardHeader color="blue" className="relative h-56">
    //     <img
    //       src="/img/blog.jpg"
    //       alt="img-blur-shadow"
    //       className="h-full w-full"
    //     />
    //   </CardHeader>
    //   <CardBody className="text-center">
    //     <Typography variant="h5" className="mb-2">
    //       Cozy 5 Stars Apartment
    //     </Typography>
    //     <Typography>
    //       The place is close to Barceloneta Beach and bus stop just 2 min by
    //       walk and near to "Naviglio" where you can enjoy the main night life in
    //       Barcelona.
    //     </Typography>
    //   </CardBody>
    //   <CardFooter divider className="flex items-center justify-between py-3">
    //     <Typography variant="small">$899/night</Typography>
    //     <Typography variant="small" color="grey" className="flex gap-1">
    //       <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
    //       Barcelona, Spain
    //     </Typography>
    //   </CardFooter>
    // </Card>
  );
  {
    /* <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <a href="#">
          <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt=""/>
      </a>
      <div className="p-5">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
      </div>
  </div> */
  }
}
export default SignInLeft;
