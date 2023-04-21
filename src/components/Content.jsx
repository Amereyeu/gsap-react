import React, { useRef, useEffect } from "react";

function Content({ timeline }) {
  let h2 = useRef(null);
  let pText = useRef(null);

  useEffect(() => {
    timeline.from(
      [h2, pText],
      1,
      {
        opacity: 0,
        y: "100",
        skewY: 10,
        stagger: {
          amount: 0.4,
        },
      },
      "-=1"
    );
  });

  return (
    <div className="container__text">
      <h2 ref={(el) => (h2 = el)}>
        <div>INTERIORS</div>
      </h2>
      <p ref={(el) => (pText = el)}>
        Cupiditate voluptates veritatis rerum velit sunt placeat sit animi
        reprehenderit ipsa, saepe odit? Eligendi totam dolore explicabo,
        dignissimos quasi autem veniam sapiente? Autem eius quo quibusdam maxime
        tenetur laborum hic officia aliquid quaerat facere.
      </p>
    </div>
  );
}

export default Content;

