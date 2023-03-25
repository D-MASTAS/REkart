import React from 'react'
import { useState } from 'react';
import Chatbot from './Chatbot';

const Repurpose = () => {
    const [showChatbot, setShowChatbot] = useState(false);

    const handleChatbotToggle = () => {
        setShowChatbot(!showChatbot);
    };
    return (
        <div className="flex justify-center items-center bg-froly-400 min-h-screen">
            <section>
                <div>
                    <div class="flex">

                        <div class="flex-1 w-64 ... gap-2 h-80  py-12">
                            <img src="aboutus1.png" class="h-80 px-18" alt=""></img>
                        </div>
                        <div class="flex-1 w-32 hover:flex-1 ...">
                            <h1 class="pt-20 pb-4 text-3xl text-gray-900  font-bold  md:text-4xl  animate-pulse ">What is Repurposing?</h1>
                            <p class=" mr-10 font-light text-left text-gray-600 dark:text-gray-400 ">The process of repurposing involves taking an object or material that was initially designed for a specific use and repurposing it for another function. This can entail adapting the item to suit a new purpose or using it in its existing state for an alternative use. By repurposing, it is possible to be innovative and eco-friendly by prolonging the lifespan of goods, reducing waste, and conserving resources.</p>
                        </div>
                    </div></div>
                <div>
                    <div class="flex  ">

                        <div class="flex-1 w-64 ... py-8 px-12">
                            <h1 class="pt-20 pb-4 text-3xl text-gray-900  font-bold  md:text-4xl  animate-pulse "> But,How it works?</h1>
                            <p class="font-light text-left text-gray-600 dark:text-gray-400 ">Hey.. what's that..can you hear it too? That empty bottle of glass, those worn-out clothes, those handle-less cups, and all such waste items are calling you to repurpose them. But you don’t know how? Don’t worry, REKART’s here for your rescue. Here, you can find the most innovative and beautiful ways, to repurpose all your everyday items that will not only save this planet but turn your place into an Eco-heaven.
</p>
                        </div>
                        <div class="flex-1 w-32 ...">
                            <img src="Reuse.png" class="h-80 px-10" alt=""></img>
                        </div>
                    </div></div>
                    {showChatbot && <Chatbot />}
                <section>

                    <section class="dark:bg-gray-800 dark:text-gray-500">
                        <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">

                            <h2 class="font-bold  font-serif text-3xl md:text-3xl lg:text-4xl font-heading text-center pt-4 pb-8 ">Frequently Asked Questions</h2>
                            <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                                <details>
                                    <summary class="py-2 outline-none cursor-pointer font-serif font-semibold text-sea_green-900">Turn A Broken Picture Frame Into An Earring Holder</summary>
                                    <div class="px-4 pb-4">
                                        <p class="font-light text-left text-gray-600 dark:text-gray-400 font-serif">Just run the wire across the frame and then hang up your earrings. This is a great gift idea for girls of all ages and you can run as much wire, making as many levels, as you want. If you have longer earrings that dangle, make longer levels.</p>
                                    </div>
                                </details>
                                <details>
                                    <summary class="py-2 outline-none cursor-pointer font-serif font-semibold text-sea_green-900">Create a Recycling Center with an Old Basket</summary>
                                    <div class="px-4 pb-4">
                                        <p class="font-light text-left text-gray-600 dark:text-gray-400 font-serif">ou simply place waste baskets inside the wicker basket for your recycling and then label the sections so you know where everything goes. Not only does this help you to put that torn up basket to good use, it gives you a really attractive place to store your recyclables.</p>
                                    </div>
                                </details>
                               
                               
                            </div>
                        </div>
                    </section>
                </section>
                <div className="h-full p-3 rounded-lg w-full bg-white">
                    <p className="font-semibold text-xl mt-2 text-cascade-800 text-center">
                        You can also Take Help Of Our AI Assistance
                    </p>
                    <div className="mt-4 w-full flex flex-col">
                        <div className="flex gap-2 w-full"></div>
                    </div>

                    <div className="flex mt-3 gap-2"></div>

                    <div className="my-4 flex justify-center">
                        <button
                            className="buttons bg-acapulco-400 rounded-2xl p-2 "
                            onClick={handleChatbotToggle}
                        >
                            {showChatbot ? "Close Chatbot" : "Open Chatbot"}
                        </button>
                    </div>
                </div>
                <section>
                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                        <div
                            class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-Sheen_green-50 dark:bg-gray-800"
                        >
                            <div class="p-4 flex items-center">
                                <div
                                    class="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4"
                                >
                                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Total clients
                                    </p>
                                    <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        89
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-Sheen_green-50 dark:bg-gray-800"
                        >
                            <div class="p-4 flex items-center">
                                <div
                                    class="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4"
                                >
                                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Account balance
                                    </p>
                                    <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        222.22
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-Sheen_green-50 dark:bg-gray-800"
                        >
                            <div class="p-4 flex items-center">
                                <div
                                    class="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4"
                                >
                                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                                        <path
                                            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        New sales
                                    </p>
                                    <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        34
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-Sheen_green-50 dark:bg-gray-800"
                        >
                            <div class="p-4 flex items-center">
                                <div
                                    class="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4"
                                >
                                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Pending contacts
                                    </p>
                                    <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">35</p>
                                </div>
                            </div>

                        </div>
                    </div></section>
            </section>

        </div>



    );
}

export default Repurpose