import { Button } from "@material-tailwind/react";
function Blog() {
    return (
        <div>

            <div className=" mx-20 justify-center my-14 col-span-2">
                <div className="block rounded-lg shadow-lg bg-white text-center h-fit">
                    <div className="p-6 h-full">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">
                            መማሪያ
                        </h5>

                        <form>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label
                                        for="first_name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                                    >
                                        ርእስ
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
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                                    >
                                        አይነት
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
                            <div className="mb-6">
                                <label
                                    for="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-600"
                                >
                                    ጽሁፍ
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                ላክ
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
