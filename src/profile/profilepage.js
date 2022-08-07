import { Button } from "@material-tailwind/react";
import { Divider } from "@mui/material";
function ProfilePage() {

    return (
        <div class="bg-gray-300">
            <div className="grid grid-cols-3 divider-2 h-screen">
                <div className="grid items-center">
                    <div class="flex flex-col items-center pb-10 ">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    </div>
                </div>
                <div class=" mx-20 justify-center my-14 col-span-2">
                    <div class="block rounded-lg shadow-lg bg-white text-center h-full bg-gradient-to-r from-sky-800 to-pink-800 grid grid-rows-8">
                        <div class="row-span-2 flex-col">
                            <h2>12k follow</h2>
                            <Button
                                className="h-fit w-fit bg-gray-200 hover:bg-gray-100 text-sky-800"
                                variant="filled"
                            >
                                ያንተ ገጥ
                            </Button>
                        </div>
                        <div class="row-span-6">
                            <h5 class="text-white text-xl font-semibold tracking-tight dark:text-white place-self-center">
                                Company Description
                            </h5>
                            <h3 class="text-white text-xl font-semibold tracking-tight dark:text-white place-self-center">
                                Who are you?
                            </h3>
                        </div>

                    </div>
                </div>

            </div>
            <Divider />
            <div class="grid grid-cols-3 my-20 px-32 gap-x-10">
                <a href="#" class="h-fit w-fit block p-6 bg-sky-800 rounded-lg border border-gray-200 shadow-md hover:bg-sky-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Goals</h5>
                    <p class="font-normal text-white dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>

                <a href="#" class="h-fit w-fit block p-6 bg-sky-800 rounded-lg border border-gray-200 shadow-md hover:bg-sky-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Mission</h5>
                    <p class="font-normal text-white dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>

                <a href="#" class="h-fit w-fit block p-6 bg-sky-800 rounded-lg border border-sky-900 shadow-md hover:bg-sky-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Story</h5>
                    <p class="font-normal text-white dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
            </div>
            <Divider />
            <div>
                <h5 class="mb-2 mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Team</h5>

                <div class="grid grid-cols-2 mt-12 gap-x-40">
                    <div class="flex flex-col items-end pb-10">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    </div>
                    <div class="flex flex-col items-start pb-10">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>

                    </div>
                </div>
            </div>
            <Divider />


        </div>

    );
}

export default ProfilePage;
