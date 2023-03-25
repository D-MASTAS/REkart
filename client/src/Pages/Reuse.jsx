import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Reuse = () => {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setToggle(false);
  };

  const handleClick = () => {
    setToggle(true);
  };

  const deliveryDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days after current time

  const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex justify-center items-center bg-froly-400 min-h-screen">
      <div className="h-[650px] my-10 w-96 md:w-4/5 bg-white rounded-lg md:rounded-lg">
        <div className="flex h-full w-full">
          <div className="h-full hidden md:block relative rounded-lg overflow-hidden bg-[url('https://imgur.com/2hR32WP.jpg')] w-full">
            <img
              className="h-1/2 w-full object-cover pl-4 pt-4 pb-4 pr-4 rounded-lg"
              src="Reuse.png"
            />
            <h2 className="mb-4 text-4xl tracking-tight font-medium text-center text-cascade-800">
              RE-Use
            </h2>
            <p className="px-4 text-cascade-800 font-medium">Our Mission</p>
            <p className="mt-4 px-4 text-gray-500">
            Hey, wait up!! are you going to discard those things? Don't you know that person's trash "one person's trash is another person's treasure"? Rather than throwing away unused furniture, tools, or clothing, you can donate them to those who can still benefit from them.
And with REKART on the scene, donating has never been easier. Donate all the reusable stuff in just a few clicks.

            </p>
          </div>

          <div className="h-full p-3 rounded-lg w-full bg-white">
            <p className="font-semibold text-xl mt-2 text-cascade-800 text-center">
              Help reduce waste and Donate goods today
            </p>
            <div className="mt-4 w-full flex flex-col">
              <div className="flex gap-2 w-full">
                <input
                  class="appearance-none"
                  type="radio"
                  name="select_option"
                  id="select_option1"
                />
                <label class="w-full" for="select_option1">
                  <div class="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
                    <p class="text-sm text-blue-800 font-semibold">Clothes</p>
                  </div>
                </label>

                <input
                  class="appearance-none"
                  type="radio"
                  name="select_option"
                  id="select_option2"
                />
                <label class="w-full" for="select_option2">
                  <div class="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
                    <p class="text-sm text-blue-800 font-semibold">Books</p>
                  </div>
                </label>
              </div>

              <div class="flex gap-2 w-full mt-4">
                <input
                  class="appearance-none"
                  type="radio"
                  name="select_option"
                  id="select_option3"
                />
                <label class="w-full" for="select_option3">
                  <div class="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
                    <p class="text-sm text-blue-800 font-semibold">
                      Accesories
                    </p>
                  </div>
                </label>

                <input
                  class="appearance-none"
                  type="radio"
                  name="select_option"
                  id="select_option4"
                />
                <label class="w-full" for="select_option4">
                  <div class="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
                    <p class="text-sm text-blue-800 font-semibold">Others</p>
                  </div>
                </label>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-5">
              {" "}
              We are incredibly grateful for your generous donations. Your
              contribution will not only help reduce waste, but also make a
              positive impact in the lives of those who receive them. Thank you
              for your kindness and support!
            </p>

            <p className="mt-3 font-semibold text-cascade-800">Add Address</p>

            <input
              type="text"
              className="w-full py-2 border border-black rounded mt-3 px-3"
              placeholder="Enter your address here"
            />

            <p className="mt-3 font-semibold text-cascade-800">Add Phone Number</p>
            <input
              type="number"
              className="w-full py-2 border border-black rounded mt-3 px-3"
              placeholder="Enter your phone number here"
            />

            <hr className="my-4" />

            <div className="my-4 flex justify-between">
              <button
                className="buttons bg-acapulco-400 rounded-2xl p-2"
                onClick={handleClick}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {toggle && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blue-100">
          <div className="relative w-full max-w-md mx-auto rounded-md overflow-hidden">
            <div className="bg-white p-6">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Waste Pickup
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  We will pick up your waste for reuse and contact you as soon
                  as possible.
                </p>
              </div>
              <Link
                to="/"
                onClick={handleCloseModal}
                className="py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200 ease-in-out"
              >
                Close
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reuse;
