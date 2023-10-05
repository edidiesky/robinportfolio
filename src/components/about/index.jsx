import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import TextIndex from "../common/Text";
import { HiArrowDownRight } from "react-icons/hi2";
import gsap from "gsap";
import SplitType from "split-type";

const whatIdoData = ["Responsive design", "Api development", "Animations"];

export default function AboutIndex() {
  useLayoutEffect(() => {
    const spitTexts = new SplitType(".doText", { type: "chars" });
    gsap.fromTo(
      spitTexts.chars,
      { y: 670, opacity: 0 }, // Initial skewY value
      {
        y: 0,
        opacity: 1,
        duration: 1.6,
        delay: 2,
        ease: "easeOutExpo",
        stagger: {
          amount: 0.8,
        },
        scrollTrigger: {
          trigger: ".doText",
          start: "top 80%",
          end: "bottom 25%",
          scrub: true,
          container: ".left",
        },
      }
    );
  }, []);
  return (
    <SkillsWrapper data-scroll-section id="about">
      <div className="left w-100  h-100 flex column">
        <h4 className=" w-85 auto family1 text-grey">
          Here is what I can I do
          <div
            className="flex fs-30 text-white justify-start item-center"
            style={{
              justifyContent: "flex-start",
              marginLeft: "250px",
              marginTop: "20px",
            }}
          >
            {" "}
            <HiArrowDownRight />
          </div>
        </h4>
        <div className="w-100 grid">
          <div className="left flex item-start column">
            {whatIdoData.map((x, index) => {
              return (
                <div className="w-100 hidden">
                  <h2
                    key={index}
                    className="text-grey w-100 doText uppercase text-center"
                  >
                    <div className="w-85 text-start auto">{x}</div>
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  padding: 6rem 0;
  padding-top: 6rem;
  transform-style: inherit;
  .line {
    overflow: hidden !important;
  }
  h4 {
    letter-spacing: 1px;
    font-weight: bolder;
    font-size: 16px;
    transition: all 0.6s;
  }
  h2 {
    letter-spacing: 1px;
    font-weight: bolder;
    font-size: 90px;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    color: var(--grey-1);

    @media (max-width: 1080px) {
      font-size: 90px;
      /* font-weight: bold; */
    }
    @media (max-width: 780px) {
      font-size: 70px;
      /* font-weight: bold; */
    }
    @media (max-width: 380px) {
      font-size: 55px;
    }
  }

  .icon1 {
    filter: brightness(100%);
    transition: all 0.6s ease;
  }
  img {
    width: 4rem;
    @media (max-width: 480px) {
      width: 4rem;
    }
  }
  .left {
    padding: 3rem 0;
  }
`;
