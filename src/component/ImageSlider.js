import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slideshow = (props) => {
  const { data } = props;
  return (
    <div className="slide-container">
      <Carousel
        showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        renderIndicator={false}
      >
        {data.map((fadeImage, index) => {
          return (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={fadeImage.image} className="nft-images" alt="nfts" />
              </div>
              <div className="main-description">
                <p>{fadeImage.trait}</p>
                <p>{fadeImage.trait_type}</p>
              </div>
              <div className="sub-description">
                <p>{fadeImage.name}</p>
                <p>{fadeImage.rarity}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slideshow;
