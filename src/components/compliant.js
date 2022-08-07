function Compliant() {
    return (
        <div>
            <div class=" mx-20 justify-center my-2 ">
                <div class="p-3 h-full">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">
                        ያጋጠሙ ችግሮች ማመልከቻዎች
                    </h5>
                    <form>
                        <div class="mb-6">
                            <textarea
                                id="message"
                                rows="5"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            ላክ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Compliant;


