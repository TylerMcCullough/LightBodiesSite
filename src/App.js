import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import Header from "./screen/Header";
import Content from "./screen/Content";
import Attributes from "./screen/Attributes";
import MiddleContent from "./screen/MiddleContent";
import Factions from "./screen/Factions";
import Galleries from "./screen/Galleries";
import Footer from "./screen/Footer";
import { contents } from "./mockup";
import { initImmutableX, getBalances } from "./immutableXfunctions";
import HeadLogo from "./screen/HeadLogo/HeadLogo";
import FrontHeader from "./screen/FrontHeader/FrontHeader";
import RoadMap from "./screen/RoadMap";
import DescSection from "./screen/DescSection";

function App() {
  const [userAddress, setUserAddress] = useState(
    localStorage.getItem("WALLET_ADDRESS")
  );
  const [balances, setBalances] = useState({
    imxBalance: "",
    preparingBalance: "",
    withdrawableBalance: "",
    nfts: [],
  });

  const getUserBalances = async (address) => {
    let result;
    if (address) {
      result = await getBalances(address);
    } else { 
      result = await getBalances(userAddress);
    }

    if (result) {
      setBalances(result);     
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let address = await initImmutableX();
      if (address) {
        setUserAddress(address);
        localStorage.setItem("WALLET_ADDRESS", address);
        getUserBalances(address);
      }
    } else {
      window.alert("You need to have metamask to connect with the site");
    }
  };

  const checkWallet = async () => {
    console.log("checking account");
    if (window.ethereum) {
      if (window.ethereum.selectedAddress !== userAddress) {
        setUserAddress("");
      }
    } else {
      setUserAddress("");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <HeadLogo />
      <Header
        userAddress={userAddress}
        balances={balances}
        connectWallet={connectWallet}
        getUserBalances={getUserBalances}
      />
      <Content content={contents.who} />
      {/* <Attributes /> */}
      <MiddleContent content={contents.what} />
      <MiddleContent content={contents.how} />
      <MiddleContent content={contents.community} />
      <RoadMap />
      <Factions content={contents.factions} />
      <DescSection />
      <Galleries />
      <Footer />
    </div>
  );
}

export default App;
