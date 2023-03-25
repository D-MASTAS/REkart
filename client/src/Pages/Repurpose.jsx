import React, { useState } from "react";
import Chatbot from "./Chatbot";

const Repurpose = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotToggle = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="flex justify-center items-center bg-froly-400 min-h-screen">
      <div className="h-[650px] my-10 w-96 md:w-4/5 bg-white rounded-lg md:rounded-lg">
        <div className="flex h-full w-full">
          <div className="h-full hidden md:block relative rounded-lg overflow-hidden bg-[url('https://imgur.com/2hR32WP.jpg')] w-full">
            <img
              className="h-1/2 w-full object-cover pl-4 pt-4 pb-4 pr-4 rounded-lg"
              src="Repurpose.png"
            />
            <h2 className="mb-4 text-4xl tracking-tight font-medium text-center text-cascade-800">
              Re-Purpose
            </h2>
            <p className="px-4 text-cascade-800 font-medium">Our Mission</p>
            <p className="mt-4 px-4 text-gray-500">
              Reduce, Reuse, Recycle: Try to reduce the amount of waste you
              generate by using reusable items like cloth bags, water bottles,
              and containers. Recycle items like paper, plastic, glass, and
              metal.
            </p>
          </div>

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
        </div>
      </div>

      {showChatbot && <Chatbot />}
    </div>
  );
};

export default Repurpose;
