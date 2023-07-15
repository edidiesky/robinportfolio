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
    const textElement = textRef.current;
    const spanElements = lineElement.querySelectorAll(".span");
    gsap.set(textElement, { width: "100%" });
    spanElements.forEach((spanElement) => {
      gsap.to(spanElement, {
        width: "0%",
        duration: 1,
        delay: 0.8,
        scrollTrigger: {
          trigger: lineElement,
          start: "top center",
          end: "bottom center",
          scrub: 1.1,
        },
      });
    });
  }, []);

  return (
    <TetxIndexContent>
      <div className="line" ref={textRef}>
        <h2 id="text" ref={lineRef} className="w-100 text-extra-bold">
          {x}
          <div className="span"></div>
        </h2>
      </div>
    </TetxIndexContent>
  );
}

const TetxIndexContent = styled.div``;
