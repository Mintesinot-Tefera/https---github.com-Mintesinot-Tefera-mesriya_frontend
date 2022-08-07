import { Button } from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";
function UserHomeTop() {
  const navigate = useNavigate();

  const navigateToProfilepage = () => {
    navigate('/profilepage');
  };
  return (
    <div className="bg-gradient-to-r from-pink-800 to-sky-800 shadow-lg rounded mx-8 mb-4 p-8  md:bg-orange h-35 grid grid-cols-8 ">
      <div class="text-center columns-2 col-span-2 ">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          class="rounded-full w-20 mb-4 mx-auto "
          alt="Avatar"
        />
        <h5 class="text-xl text-white font-medium leading-tight mb-2">John Doe</h5>
        <p class="text-white">Web designer</p>
      </div>

      <Button
        className="h-fit w-fit bg-gray-200 hover:bg-gray-100 text-sky-800 col-end-9"
        variant="filled"
        onClick={navigateToProfilepage}
      >
        ያንተ ገጥ
      </Button>
    </div>
  );
}

export default UserHomeTop;
