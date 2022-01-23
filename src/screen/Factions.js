import React, { useState, useEffect } from "react";
import "../App.css";
import {
  Slideshow,
  NftSelect,
  NftRaritySelect,
  SlideMercenary,
  SlideMonarch,
} from "../component";
import MiddleContent from "./MiddleContent";
import "react-slideshow-image/dist/styles.css";
import {
  effects,
  effectsMonarch,
  effectsMercenary,
  nftTypes,
  fadeImages,
  fadeMercenaryImages,
  fadeMonarchImages,
} from "../mockup";
import { allRarity } from "../mockup/rarity";
import divinerMetadata from "../assets/metadata/diviner.json";
import mercenaryMetadata from "../assets/metadata/mercenary.json";
import monarchMetadata from "../assets/metadata/monarch.json";

const Factions = ({ content }) => {
  const [images, setImages] = useState({
    diviner: fadeImages,
    mercenary: fadeMercenaryImages,
    monarch: fadeMonarchImages,
  });
  const [divinerAttribute, setDivinerAttribute] = useState({
    layer: "Layers",
    rarity: "Rarity",
  });
  const [mercenaryAttribute, setMercenaryAttribute] = useState({
    layer: "Layers",
    rarity: "Rarity",
  });
  const [monarchAttribute, setMonarchAttribute] = useState({
    layer: "Layers",
    rarity: "Rarity",
  });

  const getImages = async (faction) => {
    let result = [];
    if (faction === "Diviner") {
      let file;
      if (divinerAttribute.rarity === "Common") {
        file = allRarity["divinerRarity"].Common[divinerAttribute.layer];
      } else if (divinerAttribute.rarity === "Rare") {
        file = allRarity["divinerRarity"].Rare[divinerAttribute.layer];
      } else if (divinerAttribute.rarity === "Epic") {
        file = allRarity["divinerRarity"].Epic[divinerAttribute.layer];
      } else {
        return setImages({
          ...images,
          diviner: fadeImages,
        });
      }
      file.map((item) => {
        let temp = [];
        for (let z = 0; temp.length < 2; z++) {
          let value;
          divinerMetadata[z]?.attributes?.map((i) => {
            if (i.trait_type === divinerAttribute.layer) {
              value = i.value;
            }
          });
          if (value === item) {
            console.log(value, "value");
            divinerMetadata[z].url = divinerMetadata[z].image;
            divinerMetadata[z].trait = value;
            divinerMetadata[z].trait_type = divinerAttribute.layer;
            divinerMetadata[z].rarity = divinerAttribute.rarity;

            temp.push(divinerMetadata[z]);
          } else if (z > 3333) {
            temp.push(divinerMetadata[0], divinerMetadata[1]);
            return;
          }
        }
        result.push(temp[0], temp[1]);
      });
      console.log(result, "result");
      setImages({
        ...images,
        diviner: result,
      });
    } else if (faction === "Mercenary") {
      let file;
      if (mercenaryAttribute.rarity === "Common") {
        file = allRarity["MercenaryRarity"].Common[mercenaryAttribute.layer];
      } else if (mercenaryAttribute.rarity === "Rare") {
        file = allRarity["MercenaryRarity"].Rare[mercenaryAttribute.layer];
      } else if (mercenaryAttribute.rarity === "Epic") {
        file = allRarity["MercenaryRarity"].Epic[mercenaryAttribute.layer];
      } else {
        return setImages({
          ...images,
          mercenary: fadeMercenaryImages,
        });
      }
      file.map((item) => {
        let temp = [];
        for (let z = 0; temp.length < 2; z++) {
          let value;
          mercenaryMetadata[z]?.attributes?.map((i) => {
            if (i.trait_type === mercenaryAttribute.layer) {
              value = i.value;
            }
          });

          if (value === item) {
            mercenaryMetadata[z].url = mercenaryMetadata[z].image;
            mercenaryMetadata[z].trait = value;
            mercenaryMetadata[z].trait_type = mercenaryAttribute.layer;
            mercenaryMetadata[z].rarity = mercenaryAttribute.rarity;
            temp.push(mercenaryMetadata[z]);
          } else if (z > 3333) {
            temp.push(mercenaryMetadata[0], mercenaryMetadata[1]);
            return;
          }
        }
        result.push(temp[0], temp[1]);
      });
      setImages({
        ...images,
        mercenary: result,
      });
    } else {
      let file;
      if (monarchAttribute.rarity === "Common") {
        file = allRarity["MonarchRarity"].Common[monarchAttribute.layer];
      } else if (monarchAttribute.rarity === "Rare") {
        file = allRarity["MonarchRarity"].Rare[monarchAttribute.layer];
      } else if (monarchAttribute.rarity === "Epic") {
        file = allRarity["MonarchRarity"].Epic[monarchAttribute.layer];
      } else {
        return setImages({
          ...images,
          monarch: fadeMonarchImages,
        });
      }
      file.map((item) => {
        let temp = [];
        for (let z = 0; temp.length < 2; z++) {
          let value;
          monarchMetadata[z]?.attributes?.map((i) => {
            if (i.trait_type === monarchAttribute.layer) {
              value = i.value;
            }
          });

          if (value === item) {
            monarchMetadata[z].url = monarchMetadata[z].image;
            monarchMetadata[z].trait = value;
            monarchMetadata[z].trait_type = monarchAttribute.layer;
            monarchMetadata[z].rarity = monarchAttribute.rarity;
            temp.push(monarchMetadata[z]);
          } else if (z > 3333) {
            temp.push(monarchMetadata[0], monarchMetadata[1]);
            return;
          }
        }
        result.push(temp[0], temp[1]);
      });
      console.log(result, "result");
      setImages({
        ...images,
        monarch: result,
      });
    }
  };

  useEffect(() => {
    console.log(allRarity.divinerRarity);
  }, []);

  useEffect(() => {
    if (
      divinerAttribute.layer !== "Layers" &&
      divinerAttribute.rarity !== "Rarity"
    ) {
      getImages("Diviner");
    } else {
      setImages({
        ...images,
        diviner: fadeImages,
      });
    }
    console.log(divinerAttribute);
  }, [divinerAttribute]);

  useEffect(() => {
    if (
      mercenaryAttribute.layer !== "Layers" &&
      mercenaryAttribute.rarity !== "Rarity"
    ) {
      getImages("Mercenary");
    } else {
      setImages({
        ...images,
        mercenary: fadeMercenaryImages,
      });
    }
    console.log(mercenaryAttribute);
  }, [mercenaryAttribute]);

  useEffect(() => {
    if (
      monarchAttribute.layer !== "Layers" &&
      monarchAttribute.rarity !== "Rarity"
    ) {
      getImages("Monarch");
    } else {
      setImages({
        ...images,
        monarch: fadeMonarchImages,
      });
    }
    console.log(monarchAttribute);
  }, [monarchAttribute]);

  return (
    <>
      <div className="light-article">
        <h1>{content.title}</h1>
        <h3> {content.text[0].title}</h3>
        <div className="frac-main-left">
          <img src={require("../assets/images/"+content.text[0].img).default} alt={content.text[0].img} />
          <div className="frac-content">
            <p>{content.text[0].text}</p>
          </div>
        </div>
        <div className="light-attribute">
          <h3>attributes</h3>
          <div className="light-attribute-content">
            <div className="light-nft-detail">
              <Slideshow data={images.diviner} />
            </div>
            <div className="light-nft-category">
              <div className="nft-option-container">
                <div className="light-nft-select">
                  <NftSelect
                    info={divinerAttribute}
                    setAttribute={setDivinerAttribute}
                    options={effects}
                  />
                </div>
                <div className="light-nft-select">
                  <NftRaritySelect
                    info={divinerAttribute}
                    setType={setDivinerAttribute}
                    options={nftTypes}
                  />
                </div>
              </div>
              <div className="nft-categories">
                {images.diviner.map((item, index) => {
                  return (
                    <div className="light-nft-one" key={`nft-${index}`}>
                      <img src={item.url} alt="nfts" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <h3> {content.text[1].title}</h3>
        <div className="frac-main-right">
          <img src={require("../assets/images/"+content.text[1].img).default} alt={content.text[1].img} />
          <div className="frac-content">
            <p>{content.text[1].text}</p>
          </div>
        </div>
        <div className="light-attribute">
          <h3>attributes</h3>
          <div className="light-attribute-content">
            <div className="light-nft-detail">
              <Slideshow data={images.mercenary} />
            </div>
            <div className="light-nft-category">
              <div className="nft-option-container">
                <div className="light-nft-select">
                  <NftSelect
                    info={mercenaryAttribute}
                    setAttribute={setMercenaryAttribute}
                    options={effectsMercenary}
                  />
                </div>
                <div className="light-nft-select">
                  <NftRaritySelect
                    info={mercenaryAttribute}
                    setType={setMercenaryAttribute}
                    options={nftTypes}
                  />
                </div>
              </div>
              <div className="nft-categories">
                {images.mercenary.map((item, index) => {
                  return (
                    <div className="light-nft-one" key={`nft-${index}`}>
                      <img src={item.url} alt="nfts" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <h3> {content.text[2].title}</h3>
        <div className="frac-main-left">
          <img src={require("../assets/images/"+content.text[2].img).default} alt={content.text[2].img} />
          <div className="frac-content">
            <p>{content.text[2].text}</p>
          </div>
        </div>
        <div className="light-attribute">
          <h3>attributes</h3>
          <div className="light-attribute-content">
            <div className="light-nft-detail">
              <Slideshow data={images.monarch} />
            </div>
            <div className="light-nft-category">
              <div className="nft-option-container">
                <div className="light-nft-select">
                  <NftSelect
                    info={monarchAttribute}
                    setAttribute={setMonarchAttribute}
                    options={effectsMonarch}
                  />
                </div>
                <div className="light-nft-select">
                  <NftRaritySelect
                    info={monarchAttribute}
                    setType={setMonarchAttribute}
                    options={nftTypes}
                  />
                </div>
              </div>
              <div className="nft-categories">
                {images.monarch.map((item, index) => {
                  return (
                    <div className="light-nft-one" key={`nft-${index}`}>
                      <img src={item.url} alt="nfts" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="light-article">
          <MiddleContent content={{
            title: "The Life Course That Only Ends When You Sell",
            text: "Fill your personal success binder with incredible lessons, challenges, and worksheets from the smartest minds on the planet! Helping and guiding you through your life's journey of growth and success!"
          }} />
      </div>
      <div className="light-gradient" />
    </>
  );
};

export default Factions;
