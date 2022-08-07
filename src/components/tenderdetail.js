import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function TenderDetail() {
  const navigate = useNavigate();

  const navigateToProfilePage = () => {
    navigate('/profilepage');
  };
  const navigateToBiddingForm = () => {
    navigate('/biddingform');
  };

  return (
    <div>
      <div class="px-20 justify-center py-14 bg-gray-300">
        <div class="block rounded-lg shadow-lg bg-white text-center h-fit border-2 p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              ተጨማሪ ዝርዝር መረጃ
            </h5>

            <div className="grid xs:rows-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7  h-full ">
              
              <p class="sm:col-span-3 md:col-span-3 lg:col-span-6 text-gray-700 text-base mb-4">

               <strong> ORGANIZATION FOR WELFARE AND DEVELOPMENT IN ACTION

                INVITATION TO BID</strong><br/>

                Organization for Welfare and Development in Action (OWDA) is a non-governmental humanitarian organization, 
                established in 1999 in Jigjiga, 
                Ethiopia, with the objective of serving pastoral and agro-pastoral communities in the Somali Regional State. 
                The ORGANIZATION FOR WELFARE AND DEVELOPMENT IN ACTION (OWDA) has received a project entitled emergency project 
                to provide food assistance for drought-affected people in the Somali region of Ethiopia. The project will prioritize 
                highly vulnerable community members, including pregnant and lactating women, elderly and children, female-headed households, 
                IDPs, and people with disabilities in the Somali Region.
              </p>
              <div className="flex flex-col space-y-8">
                <Button
                  className="-fit bg-blue-600 text-white col-end-9"
                  variant="filled"
                  onClick={navigateToBiddingForm}
                >
                  ማመልከቻ አስገባ
                </Button>
                <Button
                  className="bg-blue-600 text-white col-end-9"
                  variant="filled"
                >
                  አጋራ
                </Button>
                <Button
                  className="bg-blue-600 text-white col-end-9"
                  variant="filled"
                  onClick={navigateToProfilePage}
                >
                  የድርጅቱ ገጽ ሂድ
                </Button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default TenderDetail;
