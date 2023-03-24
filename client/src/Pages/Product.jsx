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
  const [sawdust, setSawdust] = useState(null);
  const [organic, setOrganic] = useState(null);
  const [bamboo, setBamboo] = useState(null);
  const [scrapmetal, setScrapMetal] = useState(null);
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
      "0xD5ac451B0c50B9476107823Af206eD814a2e2580",
      ABI,
      provider
    );
    setRekart(rekart);
    

    const items = [];
    for (var i = 0; i < 20; i++) {
      const item = await rekart.items(i + 1);
      console.log(item);
      items.push(item);
    }
    const sawdusts = items.filter(
      (items) => items.category === "sawdust"
    );
    const bamboo = items.filter(
      (items) => items.category === "bamboo"
    );
    const organic = items.filter(
      (items) => items.category === "organic"
    );
    const scrapmetal = items.filter(
      (items) => items.category === "scrapmetal"
    );
   
    setSawdust(sawdusts);
    setOrganic(organic);
    setBamboo(bamboo);
    setScrapMetal(scrapmetal);
    // console.log(sawdust);
    // console.log(organic);
    // console.log(bamboo);
    // console.log(scrapmetal);
    console.log(items);
  };

  useEffect(() => {
    load();
  }, []);


  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      {sawdust && organic && bamboo && scrapmetal && (
       <>
          <Section
            title={"Sawdust"}
            items={sawdust}
            togglePop={togglePop}
          />
          <Section
            title={"Bamboo"}
            items={bamboo}
            togglePop={togglePop}
          />
          <Section
            title={"Organic"}
            items={organic}
            togglePop={togglePop}
          />
          <Section
            title={"Scrap Metal"}
            items={scrapmetal}
            togglePop={togglePop}
          />
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
