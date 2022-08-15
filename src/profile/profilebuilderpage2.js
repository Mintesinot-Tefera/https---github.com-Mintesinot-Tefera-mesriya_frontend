import { Button } from "@material-tailwind/react";
function ProfileBuilderPage2() {
  return (
    <div>
      <div className=" mx-5 justify-center mt-5">
          <div className="pt-6 h-full">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              የድርጅት ድረ ገጽ መፍጠሪያ ቅጽ
            </h5>
            <form>
              <div className="mb-4">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                >
                  የድርጅቱ ራዕይ
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                >
                  የድርጅቱ እቅድ
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                >
                  የድርጅቱ ታሪክ
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default ProfileBuilderPage2;
