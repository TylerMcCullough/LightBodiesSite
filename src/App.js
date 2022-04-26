import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NFTCollections from "./pages/NFTCollections/NFTCollections";
import Footer from "./screen/Footer";
import HeadLogo from "./screen/HeadLogo/HeadLogo";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <HeadLogo />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/nftCollections" element={<NFTCollections />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
