import React from "react";

const Gallery = (props) => {
  const { source, title } = props;
  return (
    <div className="gallery-nft">
      <img src={source} alt="nft-gallery" />
      {/* <div>{title}</div> */}
    </div>
  );
};

export default Gallery;
