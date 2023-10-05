import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Project({ setModal, title, index }) {
  const handleUpdateMousePosition = (e) => {
    setModal({ active: true, index: index });
  };
  return (
    <ProjectWrapper
      onMouseOver={handleUpdateMousePosition}
      onMouseLeave={() => setModal({ active: false, index: 0 })}
      className="card flex w-90 auto item-center justify-space gap-2"
    >
      <h2 className="capitalize">{title}</h2>
      <span className="family1 ">Frontend & Backend development</span>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  transition: all 0.4s;
  padding: 50px 100px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  &:hover {
    opacity: 0.5;
    h2 {
      transform: translateX(-10px);
    }
    span {
      transform: translateX(10px);
    }
  }
  &:nth-child(4) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  h2 {
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 400;
    transition: all 0.4s;
  }
  span {
    font-size: 14px;
    transition: all 0.4s;
    font-weight: 400;
  }
`;
