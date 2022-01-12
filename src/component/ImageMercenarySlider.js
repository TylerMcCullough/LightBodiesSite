import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { fadeMercenaryImages } from "../mockup";

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
        {fadeMercenaryImages.map((fadeMercenaryImages, index) => {
          return (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img
                  src={fadeMercenaryImages.url}
                  className="nft-images"
                  alt="nfts"
                />
              </div>
              <div className="main-description">
                <p>{fadeMercenaryImages.title}</p>
                <p>{fadeMercenaryImages.kind}</p>
              </div>
              <div className="sub-description">
                <p>{fadeMercenaryImages.description}</p>
                <p>{fadeMercenaryImages.type}</p>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default Slideshow;
