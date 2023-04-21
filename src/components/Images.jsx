import React, { useRef, useEffect } from "react";

function Images({ timeline, ease }) {
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);
  let image4 = useRef(null);
  useEffect(() => {
    timeline
      .from(
        image1,
        1.2,
        {
          y: 1200,
          ease: ease,
          opacity: 0,
        },
        "-=1"
      )
      .from(
        image1,
        2,
        {
          scale: 1.6,
          ease: ease,
        },
        "-=1.2"
      );

    timeline
      .from(
        image2,
        1.2,
        {
          y: 1200,
          ease: ease,
          opacity: 0,
        },
        "-=1"
      )
      .from(
        image2,
        2,
        {
          scale: 1.6,
          ease: ease,
        },
        "-=1"
      );

    timeline
      .from(
        image3,
        1.2,
        {
          y: 1200,
          ease: ease,
          opacity: 0,
        },
        "-=1"
      )
      .from(
        image3,
        2,
        {
          scale: 1.6,
          ease: ease,
        },
        "-=1"
      );

    timeline
      .from(
        image4,
        1.2,
        {
          y: 1200,
          ease: ease,
          opacity: 0,
        },
        "-=1.2"
      )
      .from(
        image4,
        2,
        {
          scale: 1.6,
          ease: ease,
        },
        "-=1.2"
      );
  });
  return (
    <div className="container__images">
      <div className="grid">
        <img
          src="../images/image1.jpg"
          className="image-0"
          ref={(el) => (image1 = el)}
        />
        <img
          src="../images/image2.jpg"
          className="image-1"
          ref={(el) => (image2 = el)}
        />
        <img
          src="../images/image3.jpg"
          className="image-2"
          ref={(el) => (image3 = el)}
        />
        <img
          src="../images/image4.jpg"
          className="image-3"
          ref={(el) => (image4 = el)}
        />
      </div>
    </div>
  );
}

export default Images;

