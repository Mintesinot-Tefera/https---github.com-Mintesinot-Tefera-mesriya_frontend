import { Button } from "@material-tailwind/react";
function ProfileBuilderPage3() {
  return (
    <div>
      <div class=" mx-5 justify-center mt-5">
          <div class="p-6 h-full">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              የድርጅት ድረ ገጽ መፍጠሪያ ቅጽ
            </h5>

            <form>
              <div className="grid grid-cols-3 mb-4 ">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 "
                  for="user_avatar"
                >
                  የድርጅቱ አርማ
                </label>
                <div className="col-span-2 grid grid-cols-2 dark:bg-gray-400 rounded-lg">
                  <input
                    class="block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                  <div>
                    <label
                      for="last_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600 "
                    >
                      የድርጅት አይነት
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                >
                  የድርጅቱ ሥራ ልምድ
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="grid grid-cols-2 rounded-lg">
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                >
                  የድርጅት አይነት
                </label>
                <input
                    class="block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
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
