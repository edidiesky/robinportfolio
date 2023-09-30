import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function TextIndex({ x }) {
  const lineRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lineElement = lineRef.current;
    gsap.to("h2", {
      backgroundPositionX: "0%",
      duration: 1.4,
      stagger: 2,
      scrollTrigger: {
        trigger: lineElement,
        start: "top center",
        end: "bottom center",
        scrub: 1.1,
      },
    });
    // spanElements.forEach((spanElement) => {
    //   gsap.to(spanElement, {
    //     width: "0%",
    // duration: 1,
    // delay: 0.8,
    // scrollTrigger: {
    //   trigger: lineElement,
    //   start: "top center",
    //   end: "bottom center",
    //   scrub: 1.1,
    // },
    //   });
    // });
  }, []);

  return (
    <TetxIndexContent>
      <h2 id="text" ref={lineRef} className="w-100 text-extra-bold">
        {x}
      </h2>
    </TetxIndexContent>
  );
}

const TetxIndexContent = styled.div`
  h2 {
    background: linear-gradient(
      to right,
      rgb(255, 255, 255) 50%,
      rgb(37, 37, 37) 50%
    );
    background-size: 200% 100%;
    background-position-x: 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
`;
