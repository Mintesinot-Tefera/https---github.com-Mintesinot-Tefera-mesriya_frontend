import UserHomeBottom from "./userhomebottom";
import UserHomeTop from "./userhometop";

function UserHomePage() {
 
  return (
    <div class="bg-gray-300 pt-8 pb-8">
      {/* <UserHomepageDetail/> */}
      <UserHomeTop />
      <div class="grid justify-center">
        <input
          type="text"
          id="search-navbar"
          class="block p-2 pl-10 mx-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
      <UserHomeBottom />

    </div>



  );
}

export default UserHomePage;
