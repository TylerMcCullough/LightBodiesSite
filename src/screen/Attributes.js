import React from "react";
import "../App.css";
import { Slideshow, NftSelect } from "../component";
import "react-slideshow-image/dist/styles.css";
// import { effects, nftTypes, nftList } from "../mockup";

const Attributes = () => {
  return (
    <>
      <div className="light-attribute">
        {/* <h3>attributes</h3>
        <div className="light-attribute-content">
          <div className="light-nft-detail">
            <Slideshow />
          </div>
          <div className="light-nft-category">
            <div className="nft-option-container">
              <div className="light-nft-select">
                <NftSelect options={effects} />
              </div>
              <div className="light-nft-select">
                <NftSelect options={nftTypes} />
              </div>
            </div>
            <div className="nft-categories">
              {nftList.map((item, index) => {
                return (
                  <div className="light-nft-one" key={`nft-${index}`}>
                    <img src={item.url} alt="nfts" />
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Attributes;
