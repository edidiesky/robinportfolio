import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import TextIndex from "../common/Text";
import useMousePosition from "../../hooks/useMousePosition";
import SplitType from "split-type";
import { useState } from "react";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function AboutMeIndex() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 20;

  useEffect(() => {
    const spitTexts = new SplitType(".aboutmetext", { type: "words, chars" });
    gsap.fromTo(
      spitTexts.chars,
      { skewY: 65, y: 670 }, // Initial skewY value
      {
        skewY: 0,
        y: 0,
        duration: 1.2,
        delay: 1.5,
        ease: "easeOutExpo",
        stagger: {
          amount: 0.1,
        },
        scrollTrigger: {
          trigger: ".aboutmetext",
          start: "top 80%",
          end: "bottom 65%",
          scrub: true,
          container: ".left",
        },
      }
    );
  }, []);
  return (
    <SkillsWrapper
      id="about"
      data-scroll-section
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
              className=" family1 text-grey"
            >
              <div style={{ marginBottom: "30px" }} className="block fs-16">
                ABOUT ME
              </div>
              <div className="aboutmetext">
                No cap I can help sky-rocket your web product distinctively by
                introducing high quality product which dependes on the pay-check
              </div>
            </h2>
          </motion.div>
          <div className="mask_content w-100 h-100 flex item-center justify-center">
            <h2 className="family1 family1 text-grey">
              <div style={{ marginBottom: "30px" }} className="block fs-16">
                ABOUT ME
              </div>

              <div className="aboutmetext">
                I am a full stack web developer with a keen focus in helping
                organization's products stand distinctively by producing high
                quality product and an impactful user experience
              </div>
            </h2>
          </div>
        </div>
      </div>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  position: relative;

  height: 100vh;
  h4 {
    width: 1000px;
    padding: 30px 20px;
  }
  .line {
    overflow: hidden !important;
    font-kerning: none;
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

    h2 {
      font-size: 60px;
      line-height: 1;
      width: 1100px;
      padding: 30px 20px;
      font-kerning: none;
      span {
        color: var(--secondary);
        font-kerning: none;
      }
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
