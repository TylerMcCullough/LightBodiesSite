import React from "react";
import { useInView } from "react-intersection-observer";

const Content = ({ content }) => {
  const [isShow, setIsShow] = React.useState(true);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
    rootMargin: "0px",
  });
  return (
    <div
      // className={inView ? "light-content inview" : "light-content"}
      className="light-content inview"
      ref={ref}
    >
      <h3>
        TRAIN TO GAIN
        <br /> FITNESS
      </h3>

      <div className="light-article">
        {/* <h1>{content.title}</h1> */}
        <p>{content.text}</p>
      </div>
    </div>
  );
};

export default Content;
