import { useEffect, useState } from "react";
import { ethers } from "ethers";
import close from "./assest/close.svg";
import { Link } from "react-router-dom";


const Products = ({ item, provider, account, rekart, togglePop }) => {
  const [hasBought, setHasBought] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [items, setItems] = useState({});
  const buyHandler = async () => {
    const signer = await provider.getSigner();

    const togglePop = (item) => {
      setItems(item);
      toggle ? setToggle(false) : setToggle(true);
    };

    // Buy item...
    let transaction = await rekart
      .connect(signer)
      .buy(item.id, { value: item.cost });
    await transaction.wait();
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
            <h2 className="mb-3 text-green-600 font-bold">
              {ethers.utils.formatUnits(item.cost.toString(), "ether")} ETH
            </h2>
            <hr className="mb-6 bg-green-500" />
            <h2 className="mb-1 font-bold text-gray-800">Overview</h2>
            <p className="text-gray-700">
              Sawdust is a byproduct of woodworking that has various applications. It can be compressed into wood pellets, which are used as fuel for heating, cooking, and generating electricity.
            </p>
          </div>
          <div className="max-w-300 h-90 border-1 border-gray-400 pl-10 pr-10">

            <p className="text-gray-700">
              FREE delivery <br />
              <strong className="text-green-600">
                {new Date(Date.now() + 345600000).toLocaleDateString(
                  undefined,
                  { weekday: "long", month: "long", day: "numeric" }
                )}
              </strong>
            </p>

            {item.stock > 0 ? <p className="text-green-600 font-bold">In Stock.</p> : <p className="text-red-600 font-bold">Out of Stock.</p>}

            { !hasBought &&
              (<button
              className="w-235 h-10 p-2 bg-green-500 text-white 
              border-none rounded-xl font-semibold 
              text-md cursor-pointer"
              onClick={buyHandler}
            >
              Buy
            </button>)
            }

              {hasBought && togglePop && (
                <>
                <Link to='/Cart' className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-1 rounded">Cart</Link>
                </>
              )}
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
