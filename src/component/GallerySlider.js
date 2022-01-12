import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import leftArrow from "../assets/images/leftarrow.png";
import rightArrow from "../assets/images/rightarrow.png";
import { fadeAllImages } from "../mockup";
import Gallery from "./Gallery";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const GallerySlider = () => {
  const properties = {
    duration: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    indicators: true,
  };
  const [imageCount, setImageCount] = React.useState(3);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowDimensions.width > 1024) {
      setImageCount(3);
    } else if (windowDimensions.width > 768) {
      setImageCount(2);
    } else {
      setImageCount(1);
    }
  }, [windowDimensions.width]);

  return (
    <div className="gallery-container">
      <Fade
        {...properties}
        prevArrow={
          <button className="nav default-nav">
            <img src={leftArrow} alt="left arrow" />
          </button>
        }
        nextArrow={
          <button className="nav default-nav">
            <img src={rightArrow} alt="right arrow" />
          </button>
        }
      >
        {}
        {fadeAllImages.map((image, index) => {
          return (
            <div className="nft-third-fade" key={`keyimg-${index}`}>
              {Math.pow(10, imageCount - 1)
                .toString()
                .split("")
                .map((oneitem, indexValue) => {
                  const i = fadeAllImages.length - 1 === index ? 0 : index;
                  const curIndex = indexValue + i;
                  const realIndex =
                    curIndex === fadeAllImages.length ? 0 : curIndex;
                  return (
                    <Gallery
                      source={fadeAllImages[index].url[indexValue]}
                      // title={fadeAllImages[realIndex].title}
                      key={`image-1-${index}-${Math.random()}`}
                    />
                  );
                })}
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default GallerySlider;
