import React from 'react';
import { useInView } from "react-intersection-observer";

const RoadMap = () => {
    const { ref, inView, entry } = useInView({
        threshold: 1,
      });
    return (
        <div
        className={"roadmap light-article-clone inview"}
        ref={ref}
        >
            <h1>RoadMap</h1>
            <p><video src={require("../assets/Videos/first-promotion.mp4").default} alt="Road Map" /></p>
        </div>
    );
};

export default RoadMap;
