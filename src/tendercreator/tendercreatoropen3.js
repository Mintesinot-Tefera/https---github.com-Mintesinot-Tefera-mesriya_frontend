function TenderCreatorOpen3() {
    return (
        // <div className="grid grid-cols-3">

        <div class=" mx-20 justify-center my-2 ">
                <div class="p-3 h-full">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">
                    ክፍት ጨረታ
                    </h5>
                    <form>
                        <div class="mb-6">
                            <label
                                for="message"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የድርጅቱ ራዕይ
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <div>
                            <label
                                for="first_name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የድርጅት ስም
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                required=""
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                for="message"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                            >
                                የድርጅቱ ራዕይ
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default TenderCreatorOpen3;


