import React, { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import styled from "styled-components";

export default function HeroIndex() {
  useLayoutEffect(() => {
    new SplitType(".heroText", { type: "chars" });
    gsap.fromTo(
      ".line .word",
      { skewY: 60, y: 670, opacity: 0 }, // Initial skewY value
      {
        skewY: 0,
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.6,
        ease: "easeOutExpo",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  return (
    <HeroWrapper data-scroll-section>
      <div
        data-scroll-section
        className="content_wrapper w-90 auto flex gap-4 column justify-center"
      >
        <div className="w-100 flex column item-start gap-4 justify-center">
          <div className="text_wrapper w-100 flex column gap-2">
            <span
              id="text_target3"
              style={{ letterSpacing: "7px" }}
              className="w-100 heroText span text-grey fs-14 text-light auto text-center"
            >
              VICTOR OKON
            </span>
            <h2 className="w-100 heroText auto uppercase text-center">
              Crafting <span className="text-secondary">innovative</span> web
              solutions
            </h2>
          </div>{" "}
        </div>
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  background-color: #151315;
  width: 100%;
  padding: 8rem 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  @media (max-width: 780px) {
    padding: 8rem 0;
  }
  .left {
    gap: 20px;
  }
  .word {
    /* transform: translateY(670px) scaleY(60); */
  }
  .line {
    overflow: hidden !important;
    &:nth-child(1) {
      .word {
        color: var() ();
      }
    }
  }
  /* 
  .char {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    transform: translateY(300px);
  } */

  .social {
    opacity: 0;
  }
  .content {
    width: 19rem;
    height: 25rem;
  }
  .wrapperlink {
    padding-top: 5rem;
  }
  h2 {
    font-size: 120px;
    font-weight: bolder;
    line-height: 1.2;
    text-align: center;
    padding: 0 5px;
    @media (max-width: 1080px) {
      font-size: 80px;
      width: 100%;
      line-height: 1;
      text-align: start;
      padding: 0;
    }
    @media (max-width: 780px) {
      font-size: 66px;
      line-height: 1;
      width: 100%;
    }
    @media (max-width: 580px) {
      font-size: 54px;
      line-height: 1;
      width: 100%;
    }
    @media (max-width: 480px) {
      font-size: 48px;
      line-height: 1;
      width: 100%;
    }
  }
`;
