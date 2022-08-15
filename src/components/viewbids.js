import { useNavigate } from "react-router-dom";
function ViewBids() {
    const navigate = useNavigate();

    const navigateToMessages = () => {
        navigate('/messages');
    };
    return (
        <div className=" px-20 justify-center py-14 bg-gray-300">
            <h5 className="text-sky-900 text-xl font-medium mb-2">
                የገቡ ማመልከቻዎች
            </h5>
            <div className="grid grid-cols-12 border-2 mb-2 bg-gray-100">
                <div className=" col-span-6">
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">የአመልካች ስም</h5>
                        <p className="text-gray-700 text-base mb-4">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                        <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    </div>

                </div>
                <div className="p-6 col-span-2">
                    <h3 className="text-gray-900 text-l font-medium mb-2">ብር መጠን</h3>
                    <p className="text-gray-700 text-base mb-4">
                        $400
                    </p>
                </div>
                <div className="p-6 col-span-2">
                    <h3 className="text-gray-900 text-l font-medium mb-2">ጊዜ መጠን</h3>
                    <p className="text-gray-700 text-base mb-4">
                        10 months
                    </p>
                </div>
                <div className="space-y-3 grid grid-rows-3 col-span-2 mr-10 my-4">
                    <button type="button" className="inline-block px-6 py-2.5 bg-sky-800 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >ወደ ገጽ ሂድ </button>
                    <button type="button" className="inline-block px-6 py-2.5 bg-sky-800  text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={navigateToMessages}
                    >መልእክት ላክ</button>
                    <button type="button" className="inline-block px-6 py-2.5 bg-sky-800  text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ምረጥ</button>
                </div>
            </div>
            <div className="grid grid-cols-12 border-2 bg-gray-100">
                <div className="col-span-6">
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">የአመልካች ስም</h5>
                        <p className="text-gray-700 text-base mb-4">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                        <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    </div>

                </div>
                <div className="p-6 col-span-2">
                    <h3 className="text-gray-900 text-l font-medium mb-2">ብር መጠን</h3>
                    <p className="text-gray-700 text-base mb-4">
                        $400
                    </p>
                </div>
                <div className="p-6 col-span-2">
                    <h3 className="text-gray-900 text-l font-medium mb-2">ጊዜ መጠን</h3>
                    <p className="text-gray-700 text-base mb-4">
                        10 months
                    </p>
                </div>
                <div className="space-y-3 grid grid-rows-3 col-span-2 mr-10 my-4">
                    <button type="button" className="inline-block px-6 py-2.5 bg-sky-800 text-white text-lg font-medium leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ወደ ገጽ ሂድ </button>
                    <button type="button" className="inline-block px-6 py-2.5 bg-sky-800 text-white text-lg font-medium leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">መልእክት ላክ</button>
                    <button type="button" className="inline-block px-6 py-2.5 bg-sky-800 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ምረጥ</button>
                </div>
            </div>
        </div>

    );
}

export default ViewBids;
