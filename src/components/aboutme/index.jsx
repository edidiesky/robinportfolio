import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import TextIndex from "../common/Text";
import useMousePosition from "../../hooks/useMousePosition";
import { useState } from "react";

export default function AboutMeIndex() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 20;
  return (
    <SkillsWrapper
      id="about"
      className="flex item-center column justify-center gap-2"
    >
      {/* <div className="w-100">
        <h4
          style={{ fontWeight: "normal" }}
          className="text-grey family1 text-start flex item-center gap-2"
        >
          <img
            alt=""
            className="icon1"
            src="https://v2.brittanychiang.com/img/icons/light-bulb.png"
          />
          About Me
        </h4>
      </div> */}
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
              className="family3 fs-60 text-grey"
            >
              No cap I can help sky-rocket your web product distinctively by
              introducing high quality product which dependes on the pay-check
            </h2>
          </motion.div>
          <div className="mask_content w-100 h-100 flex item-center justify-center">
            <h2 className="family3 text fs-60 text-grey">
              I am a <span>full stack web developer</span> with a keen focus in
              helping organization's products stand distinctively by producing
              high quality product and an impactful user experience
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
  .maskWrapper {
    position: relative;
    height: 100%;
    .mask {
      position: absolute;
      mask-image: url("./mask.svg");
      background-color: var(--red);
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
      font-size: 50px;
      line-height: 1.07;
      font-weight: 700;
      width: 1000px;
      padding: 30px 20px;
      span {
        color: var(--secondary);
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
