import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import gsap from "gsap";

const Cursor = () => {
  const cursorContainer = useRef(null);
  useEffect(() => {
    gsap.set(cursorContainer.current, { xPercent: -45, yPercent: -45 });
    let xTo = gsap.quickTo(cursorContainer.current, "x", {
        duration: 0.6,
        ease: "power3",
      }),
      yTo = gsap.quickTo(cursorContainer.current, "y", {
        duration: 0.6,
        ease: "power3",
      });

    window.addEventListener("mousemove", (e) => {
      // xTo(e.pageX);
      // yTo(e.pageY);
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);
  return (
    <CursorContent>
      <motion.div
        ref={cursorContainer}
       
        className="family3 ball fs-60 text-grey"
      ></motion.div>
    </CursorContent>
  );
};

const CursorContent = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 999;
  top: 0;
  .ball {
    background-color: var(--secondary);
    height: 20px;
    position: absolute;
    width: 20px;
    border-radius: 50%;
    color: var(--dark-1);
    /* transition: all 1s; */
  }
`;

export default Cursor;
