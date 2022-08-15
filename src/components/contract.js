import { Button } from "@material-tailwind/react";
function Contract() {
  return (
    <div className="grid grid-cols-3">
      <div>
        <p>minte</p>
      </div>
      <div className=" mx-20 justify-center my-14 col-span-2">
        <div className="block rounded-lg shadow-lg bg-white text-center h-fit">
          <div className="p-6 h-full">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
            የድርጅት ውል መፈራረሚያ ቅጽ

            </h5>

            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
               
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ቀጥል
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contract;
