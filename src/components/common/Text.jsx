import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function TextIndex({ x }) {
  const lineRef = useRef(null);
  const textRef = useRef(null);


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
