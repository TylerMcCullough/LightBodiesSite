import React from "react";
import { useInView } from "react-intersection-observer";
import promotionUser from "../assets/Videos/first-promotion.mp4";

const RoadMap = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  return (
    <div className={"roadmap light-article-clone inview"} ref={ref}>
      <h1>RoadMap</h1>
      <p>
        <video
          className="promotion_Video"
          src={promotionUser}
          alt="Road Map"
          controls
          autoPlay
        />
      </p>
    </div>
  );
};

export default RoadMap;
