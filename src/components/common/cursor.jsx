import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import styled from "styled-components";

const Cursor = () => {
  const [mouseposition, setMousePosition] = useState({ x: 0, y: 0 });
  const { x, y } = mouseposition;
  const handleUpdateMousePosition = (e) => {
    const { clientX, clientY } = e;
    const rect = e.target.getBoundingClientRect();
    const x = clientX;
    const y = clientY;

    //  const x = clientX - rect.left;
    //  const y = clientY - rect.top;
    setMousePosition({ x: x, y: y });
  };
  const handleRemoveMousePosition = (e) => {
    setMousePosition({ x: 0, y: 0 });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleUpdateMousePosition);
    return () => {
      window.removeEventListener("mousemove", handleRemoveMousePosition);
    };
  }, [setMousePosition]);
  return (
    <CursorContent>
      <motion.div
        animate={{
          top: `${y - 10}px`,
          left: `${x - 10}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        className="family3 mask1 fs-60 text-grey"
      ></motion.div>
    </CursorContent>
  );
};

const CursorContent = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 999;
  .mask1 {
    background-color: var(--red);
    height: 20px;
    position: absolute;
    width: 20px;
    border-radius: 50%;
    color: var(--dark-1);
    /* transition: all 1s; */
  }
`;

export default Cursor;
