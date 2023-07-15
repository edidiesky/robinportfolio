import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = ({ text, subtext, type, path }) => {
  if (type === "link") {
    return (
      <Link to={`${path}`} target="_blank">
        <LinkWrapper className={"fs-16 family3 tag"}>
          <span className="text-1 text">{text}</span>
          <span className="text-2 text">{text}</span>
        </LinkWrapper>
      </Link>
    );
  }
  return (
    <ButtonWrapper
      className={type === "button" ? "fs-16 family3 active" : "fs-16 family3"}
    >
      <span className="text-1 text">{text}</span>
      <span className="text-2 text">{text}</span>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border: 1px solid var(--grey-1);
  padding: 1.7rem 2.5rem;
  font-size: 1.1rem;
  letter-spacing: 3px;
  font-weight: 600;
  border-radius: 4px;
  color: var(--grey-1);
  text-transform: uppercase;
  background-color: transparent;
  transition: all 0.4s;
  overflow: hidden;
  position: relative;
  min-width: 170px;
  height: 5rem;
  &:is(:hover, :focus-visible)::before {
    bottom: -50%;
  }
  &:is(:hover, :focus-visible) .text-2 {
    top: 50%;
  }
  &:is(:hover, :focus-visible) .text-1 {
    top: -100%;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 200%;
    height: 200%;
    border-radius: 50%;
    background-color: var(--grey-1);
    transition: all 0.4s;
    z-index: -1;
  }
  .text {
    transition: all 0.4s;
  }
  .text-2 {
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
    min-width: max-content;
    color: #000;
  }
  .text-1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: max-content;
    color: var(--grey-1);
    transition: all 0.6s;
  }
`;
const LinkWrapper = styled.div`
  border: 1px solid var(--grey-1);
  padding: 1.7rem 2.5rem;
  font-size: 1.1rem;
  letter-spacing: 3px;
  font-weight: 600;
  border-radius: 4px;
  color: var(--grey-1);
  text-transform: uppercase;
  background-color: transparent;
  transition: all 0.4s;
  overflow: hidden;
  position: relative;
  min-width: 170px;
  height: 5rem;
  &:is(:hover, :focus-visible)::before {
    bottom: -50%;
  }
  &:is(:hover, :focus-visible) .text-2 {
    top: 50%;
  }
  &:is(:hover, :focus-visible) .text-1 {
    top: -100%;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 200%;
    height: 200%;
    border-radius: 50%;
    background-color: var(--grey-1);
    transition: all 0.4s;
    z-index: -1;
  }
  .text {
    transition: all 0.4s;
  }
  .text-2 {
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
    min-width: max-content;
    color: #000;
  }
  .text-1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: max-content;
    color: var(--grey-1);
    transition: all 0.6s;
  }
`;

export default Button;
