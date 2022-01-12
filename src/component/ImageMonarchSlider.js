import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { fadeMonarchImages } from "../mockup";

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade
        prevArrow={
          <button className="nav default-nav">
            <FiChevronLeft color="white" size="60" />
          </button>
        }
        nextArrow={
          <button className="nav default-nav">
            <FiChevronRight color="white" size="60" />
          </button>
        }
      >
        {fadeMonarchImages.map((fadeImage, index) => {
          return (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={fadeImage.url} className="nft-images" alt="nfts" />
              </div>
              <div className="main-description">
                <p>{fadeImage.title}</p>
                <p>{fadeImage.kind}</p>
              </div>
              <div className="sub-description">
                <p>{fadeImage.description}</p>
                <p>{fadeImage.type}</p>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default Slideshow;
