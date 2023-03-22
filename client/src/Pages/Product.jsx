import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Navigation from "../Items/Navigation";
import Section from "../Items/Section";
import Products from '../Items/Products'

import ABI from "../abis/Rekart.json";

const Product = () => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [rekart, setRekart] = useState(null);
  const [electroncis, setElectroncis] = useState(null);
  const [clothing, setClothing] = useState(null);
  const [toys, setToys] = useState(null);
  const [item, setItem] = useState({});
  const [toggle, setToggle] = useState(false);

  const togglePop = (item) => {
    setItem(item);
    toggle ? setToggle(false) : setToggle(true);
  };

  const load = async () => {
    if (window.ethereum) {
      window.web3 = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.enable();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    const rekart = new ethers.Contract(
      "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      ABI,
      provider
    );
    setRekart(rekart);

    const items = [];
    for (var i = 0; i < 9; i++) {
      const item = await rekart.items(i + 1);
      items.push(item);
    }

    const electroncis = items.filter(
      (items) => items.category === "electronics"
    );
    const clothing = items.filter((items) => items.category === "clothing");
    const toys = items.filter((items) => items.category === "toys");
    setElectroncis(electroncis);
    setClothing(clothing);
    setToys(toys);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      {electroncis && clothing && toys && (
        <>
          <Section
            title={"Clothing & Jewelry"}
            items={clothing}
            togglePop={togglePop}
          />
          <Section
            title={"Electronics & Gadgets"}
            items={electroncis}
            togglePop={togglePop}
          />
          <Section title={"Toys & Gaming"} items={toys} togglePop={togglePop} />
        </>
      )}

      {toggle && (
        <Products
          item={item}
          provider={provider}
          account={account}
          rekart={rekart}
          togglePop={togglePop}
        />
      )}
    </div>
  );
};

export default Product;
