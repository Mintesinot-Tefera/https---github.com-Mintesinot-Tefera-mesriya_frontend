import { Button } from "@material-tailwind/react";
function ProfileBuilderPage1() {
  return (

      <div className=" mx-5 justify-center mt-5">
          <div className="pt-6 h-full">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
            የድርጅት ድረ ገጽ መፍጠሪያ ቅጽ
            </h5>

            <form>
              <div className="grid gap-x-6 gap-y-2 mb-4 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                  >
                    የድርጅት ስም
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
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
                <div>
                  <label
                    for="company"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                  >
                    የተቀጣሪ ብዛት
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Flowbite"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="company"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                  >
                    መገኛ ቦታዎች
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Flowbite"
                    required=""
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  for="message"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                >
                  የድርጅት ገለጻ
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                  >
                    ተዛማጅ ድርጅቶች
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-black-600"
                  >
                    የሥራ ዘርፎች
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
            </form>
          </div>
        </div>
  );
}

export default ProfileBuilderPage1;
