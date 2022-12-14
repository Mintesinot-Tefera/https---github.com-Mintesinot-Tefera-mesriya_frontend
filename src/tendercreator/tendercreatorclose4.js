import AddIcon from '@mui/icons-material/Add';
function TenderCreatorClose4() {
    return (
        <div className="grid grid-cols-2">
            <div>minte</div>
            <div className=" mx-20 justify-center my-2 ">
                <div className="p-3 h-full">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                        ዝግ ጨረታ
                    </h5>
                    <form className='grid grid-cols-8'>
                        <div className="mb-6 col-span-7">
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
                        <div className='self-center'>
                        <AddIcon/>
                        </div>
                  
                       
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TenderCreatorClose4;


