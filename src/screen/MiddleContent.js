import React from "react";
import { useInView } from "react-intersection-observer";

const MiddleContent = ({ content }) => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  return (
    <div
      className={inView ? "light-article-clone inview" : "light-article-clone"}
      ref={ref}
    >
      <h1>{content.title}</h1>
      <p>{content.text}</p>
    </div>
  );
};

export default MiddleContent;
