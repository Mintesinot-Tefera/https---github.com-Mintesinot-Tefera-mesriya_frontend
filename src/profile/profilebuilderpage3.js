import { Button } from "@material-tailwind/react";
function ProfileBuilderPage3() {
  return (
    <div>
      <div className=" mx-5 justify-center mt-5">
          <div className="p-6 h-full">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              የድርጅት ድረ ገጽ መፍጠሪያ ቅጽ
            </h5>

            <form>
              <div className="grid grid-cols-3 mb-4 ">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  የድርጅቱ አርማ
                </label>
                <div className="col-span-2 grid grid-cols-2 dark:bg-gray-400 rounded-lg">
                  <input
                    className="block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600 "
                    >
                      የድርጅት አይነት
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                >
                  የድርጅቱ ሥራ ልምድ
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="grid grid-cols-2 rounded-lg">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                >
                  የድርጅት አይነት
                </label>
                <input
                    className="block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
              </div>
              
            </form>
            
          </div>
        </div>
      </div>
  );
}

export default ProfileBuilderPage3;
