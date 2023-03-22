import { useEffect, useState } from "react";
import { ethers } from "ethers";
import close from "./assest/close.svg";

const Products = ({ item, provider, account, rekart, togglePop }) => {
  const [time, setTime] = useState(null);
  const [hasBought, setHasBought] = useState(false);

  const buyHandler = async () => {
    const signer = await provider.getSigner();

    // Buy item...
    let transaction = await rekart
      .connect(signer)
      .buy(item.id, { value: item.cost });
    await transaction.wait();
    const currentUnixTimestamp = Math.floor(Date.now() / 1000);
    const dateObj = new Date(currentUnixTimestamp * 1000); // convert Unix timestamp to JavaScript timestamp by multiplying with 1000
    const formattedDateString = dateObj.toLocaleDateString(undefined, {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    setTime(formattedDateString);
    setHasBought(true);
  };

  return (
    <>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-black bg-opacity-70">
        <div className="flex flex-row justify-center max-w-full h-100 pl-10 pt-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white">
          <div className="max-w-xl mx-auto my-4">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="h-80 pl-10">
            <h2 className="mb-3">{item.name}</h2>
            <hr className="mb-3 bg-green-500" />
            <h2 className="mb-3 ">
              {ethers.utils.formatUnits(item.cost.toString(), "ether")} ETH
            </h2>
            <hr className="mb-6 bg-green-500" />
            <h2 className="mb-1">Overview</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              quia magnam placeat, ipsum natus, saepe odio tempora possimus
              illum molestiae accusamus nihil neque aut excepturi, consectetur
              aperiam nemo animi sit.
            </p>
          </div>
          <div className="max-w-300 h-90 border-1 border-gray-400 pl-10 pr-20">
            <h1>
              {ethers.utils.formatUnits(item.cost.toString(), "ether")} ETH
            </h1>

            <p>
              FREE delivery <br />
              <strong>
                {new Date(Date.now() + 345600000).toLocaleDateString(
                  undefined,
                  { weekday: "long", month: "long", day: "numeric" }
                )}
              </strong>
            </p>

            {item.stock > 0 ? <p>In Stock.</p> : <p>Out of Stock.</p>}

            <button
              className="w-235 h-10 p-2 bg-green-500 text-black 
              border-none rounded-xl font-semibold 
              text-md cursor-pointer"
              onClick={buyHandler}
              disabled={hasBought}
            >
              Buy Now
            </button>

            <div class="text-sm">
              <p class="text-green-500">
                <small>Ships from</small> Rekart
              </p>
              <p class="text-green-500">
                <small>Sold by</small> Rekart
              </p>
              {hasBought && (
                <div className="bg-gray-100 p-4 rounded-md">
                  <p className="font-medium mb-2">Item bought:</p>
                  <p className="text-lg font-bold">{time}</p>
                </div>
              )}
            </div>

            <button
              onClick={togglePop}
              className="absolute top-2 right-2 w-3 h-3 bg-white border-none cursor-pointer"
            >
              <img src={close} alt="Close" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
