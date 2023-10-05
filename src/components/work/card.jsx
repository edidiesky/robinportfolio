import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scaleAnimations } from "../../utils/framer";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ data, index }) {
  const [mouseposition, setMousePosition] = useState({
    x: 0,
    y: 0,
    active: false,
  });
  const { x, y } = mouseposition;
  const handleUpdateMousePosition = (e) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = clientX - rect.left - 80 / 2;
    const y = clientY - rect.top - 80 / 2;

    setMousePosition({ x: x, y: y, active: true });
  };
  const handleRemoveMousePosition = (e) => {
    setMousePosition({ x: 0, y: 0, active: false });
  };
  return (
    <div
      onMouseMove={handleUpdateMousePosition}
      onMouseLeave={handleRemoveMousePosition}
      className="card flex column gap-2"
      data-scroll
      data-scroll-speed={index * 0.1}
    >
      <motion.div
        animate={
          mouseposition.active
            ? {
                top: `${y}px`,
                left: `${x}px`,
                scale: 1,
              }
            : {
                scale: 0,
              }
        }
        transition={{ type: "tween", ease: "backOut", duration: 1 }}
        className="sidebar_icons flex item-center justify-center fs-16 text-light text-white"
      >
        <Link to={`/work/${data.text}`} className="text-white">
          View
        </Link>
      </motion.div>
      <StyledCard
        backgroundColor={data.color}
        className="card w-100 flex item-center justify-center"
      >
        <img
          style={{ width: "85%" }}
          src={data.image}
          className="auto "
          alt=""
        />
      </StyledCard>
      <div className="flex item-center card_text justify-space w-100">
        <h3 className="fs-30 text-bold">{data.subtitle}</h3>
      </div>
      <div className="card_bottom flex item-center justify-space w-100">
        <span className="fs-16 text-light text-grey">
          Frontend & Backend Devlopment
        </span>
        <span className="text-grey fs-16 text-light">2023</span>
      </div>
    </div>
  );
}

const StyledCard = styled.div`
  position: relative;
  z-index: 400;
  min-height: 40rem;
  background-color: ${(props) => props.backgroundColor || "white"};
  @media (max-width: 1080px) {
    min-height: 40rem;
  }
  @media (max-width: 480px) {
    min-height: 36rem;
  }
  /* Add more styles for the card here */
`;
