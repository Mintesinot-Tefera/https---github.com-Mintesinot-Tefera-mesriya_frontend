function TenderCreatorOpen4() {
    return (
        // <div className="grid grid-cols-3">

        <div className=" mx-20 justify-center my-2 ">

            <div className="block rounded-lg shadow-lg bg-white text-center h-fit">
                <div className="p-6 h-full">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                        ክፍት ጨረታ
                    </h5>
                    <form>
                        <div className="mb-6">
                            <label
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
                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
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
                    </form>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default TenderCreatorOpen4;


