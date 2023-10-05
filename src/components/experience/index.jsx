import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import SplitType from "split-type";
import styled from "styled-components";
import useMousePosition from "../../hooks/useMousePosition";
import { useState } from "react";
import gsap from "gsap";

export default function Experience() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 20;
  useLayoutEffect(() => {
    const spitTexts = new SplitType(".experiencetext", { type: "chars" });
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
          amount: 0.2,
        },
        scrollTrigger: {
          trigger: ".experiencetext",
          start: "top 85%",
          end: "bottom 65%",
          scrub: true,
          container: ".left",
        },
      }
    );
  }, []);
  return (
    <ExperienceStyles
      data-scroll-section
      id="about"
      className="flex item-center column justify-center gap-2"
    >
      <div className="left w-100 flex item-center justify-center auto h-100 flex column gap-4">
        <div className="w-100 flex flex item-center justify-center maskWrapper column gap-3">
          <motion.div
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            className="w-100 w-100 h-100 flex item-center justify-center mask"
          >
            <h2
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className="family1 text-grey"
            >
              <div style={{ marginBottom: "30px" }} className="block fs-16">
                Experience
              </div>
              <span className="experiencetext">
                Well I have work a majority of my experience as a full stack
                devloper in free-lancing and obviously contributing to open
                sources with amazing devs.
              </span>
            </h2>
          </motion.div>
          <div className="mask_content w-100 h-100 flex item-center justify-center">
            <h2 className="family1 text text-grey">
              <div style={{ marginBottom: "30px" }} className="block fs-16">
                Experience
              </div>
              <span className="experiencetext">
                Devloping amazing projects and working with couple of developers
                in developing amazing interfaces and contributing to open source
              </span>
            </h2>
          </div>
        </div>
      </div>
    </ExperienceStyles>
  );
}

const ExperienceStyles = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;

  h4 {
    width: 1000px;
    padding: 30px 20px;
  }
  .maskWrapper {
    position: relative;
    height: 100%;
    .mask {
      position: absolute;
      mask-image: url("./mask.svg");
      background-color: var(--secondary);
      mask-repeat: no-repeat;
      cursor: default;
      z-index: 1000;
      h2 {
        color: var(--dark-1);
      }
    }
    .text {
      /* z-index: 20; */
    }
    .line {
      overflow: hidden !important;
    }
    h2 {
      font-size: 60px;
      line-height: 1;
      width: 1000px;
      padding: 30px 20px;
      width: 1000px;
      padding: 30px 20px;
      /* span {
        color: var(--secondary);
      } */
      @media (max-width: 980px) {
        font-size: 50px;
      }
      @media (max-width: 780px) {
        font-size: 40px;
      }
      @media (max-width: 580px) {
        font-size: 35px;
      }
    }
  }
`;
