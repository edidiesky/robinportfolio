import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";

export default function PixelBackground() {
  const getPixelBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const pixelBlockSize = innerWidth * 0.05;
    const amountOfPixelBlocks = Math.ceil(innerHeight / pixelBlockSize);
    return [...Array(amountOfPixelBlocks)].map((x, index) => {
      return <div className="blocks"></div>;
    });

    // console.log(amountOfPixelBlocks)
  };
  useLayoutEffect(() => {
    gsap
      .timeline()
      .fromTo(
        ".columns .blocks",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          visibility: "hidden",
          // width: 0,
          duration: 0.008,
          delay: 0.7,
          ease: "easeOutExpo",
          stagger: {
            each: 0.004,
            from: "random",
          },
        }
      )
      .fromTo(
        ".pixelsBlock",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          visibility: "hidden",
          delay: 0.3,
          ease: "easeOutExpo",
        }
      );
  }, []);
  return (
    <PixelStyles className="flex pixelsBlock">
      {[...Array(20)].map((x, index) => {
        return <div className="columns">{getPixelBlocks()}</div>;
      })}
    </PixelStyles>
  );
}

const PixelStyles = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  /* background-color: var(--secondary); */
  z-index: 2000000000000;
  .columns {
    width: 5vw;
    height: 100%;
    .blocks {
      width: 100%;
      height: 5vw;
      background-color: #f4a70f;
    }
  }
`;
