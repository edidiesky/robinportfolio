import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import SmallSidebar from "./sidebar/SmallSidebar";
import { useRef } from "react";
import Aos from "aos";
const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgb(51, 51, 51);
  .wrapperlink {
    position: fixed;
    bottom: 10%;
    left: 3%;
    z-index: 30000;
    height: 50vh;
    @media (max-width: 780px) {
      left: 1%;
      bottom: 0;
      /* display: none; */
    }
    .arrow {
      height: 500px;
      width: 0.2px;
      background-color: #b7ab9834;
    }
  }
  h5 {
    font-weight: lighter;
  }
  .card_btn {
    padding: 1.6rem 3rem;
    min-width: 18rem;
    min-height: 4rem;
    border-radius: 40px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.4);
    @media (max-width: 780px) {
      padding: 1.5rem;
      text-align: center;
      width: 100%;
    }
    .text1 {
      z-index: 10;
    }
    &:is(:hover, :focus-visible)::before {
      bottom: -10%;
      transform: translateX(-50%) scale(1.4);
      color: var(--dark-1);
    }
    &::before {
      content: "";
      position: absolute;
      bottom: -200%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 50%;
      border-radius: 100%;
      background-color: var(--secondary);
      /* Add more styles for the card here */
      transition: all 1s ease;
      z-index: 1;
      padding: 2rem;
    }
  }
  .topHeader {
    position: fixed;
    top: 0;
    background-color: inherit;
    backdrop-filter: blur(12px);
    padding: 2rem 0;
    z-index: 100000;
  }
  .social {
    svg {
      font-size: 16px;
      transition: all 0.5s ease;
      color: var(--grey-1);
      &:hover {
        transform: translateY(-10px);
        color: var(--secondary);
      }
      @media (max-width: 780px) {
        font-size: 16px;
      }
    }
  }
  .list {
    position: fixed;
    top: 6%;
    right: 5%;
    z-index: 30000;
    gap: 0.5rem;
    justify-content: flex-end;
    .linktext2 {
      font-weight: 700;
      transition: all 0.6s;
      @media (max-width: 480px) {
        font-size: 10px;
      }
      &:hover {
        transform: translateX(-10px);
      }
    }
  }
  .titleIcon {
    position: fixed;
    top: 5%;
    left: 3%;
    z-index: 3000000;
    overflow: hidden;
    min-width: 150px;
    height: 25px;
    background-color: inherit;
    @media (max-width: 380px) {
      left: -10%;
    }
    &:hover {
      .text-1 {
        top: 150%;
      }
      .text-2 {
        top: 50%;
      }
    }
    .text {
      font-size: 10px;
      letter-spacing: 5px;
      font-weight: bold;
      text-transform: uppercase;
      font-family: "Montserrat", sans-serif;
      color: var(--secondary);
      min-width: max-content;
      @media (max-width: 980px) {
        font-size: 10px;
      }
      /* transform: translateX(-50%, -50%); */
    }
    .text-1 {
      /* left: 0%; */
      /* transform: translate(-50%, -50%); */

      left: 30%;
      position: absolute;
      top: 50%;
      transform: translateX(-30%, -50%);
      transition: all 0.3s ease;
    }
    .text-2 {
      left: 30%;
      position: absolute;
      top: -100%;
      transition: all 0.4s ease;
      transform: translateX(-30%, -50%);
    }
  }
  .wrapperlink {
    position: fixed;
    bottom: 10%;
    left: 3%;
    z-index: 30000;
  }
  .LayoutContainer {
    width: 100%;
    .container {
      width: 100%;
      overflow: hidden;
    }
  }
`;

const data = [
  { id: 1, title: "About", path: "about" },
  { id: 3, title: "Work", path: "work" },
  { id: 5, title: "Contact", path: "contact" },
];

export default function Layout() {
  const [height, setHeight] = useState(0);

  const scrollRef = useRef(null);

  useEffect(() => {
    Aos.init({
      // once: true,
      duration: 4000,
    });
  }, []);

  useEffect(() => {
    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
    // Aos.refresh(); // Refresh AOS animations
  }, []);

  return (
    <LayoutWrapper className="based" style={{ height }}>
      <div className="LayoutContainer">
        <SmallSidebar />
        <Outlet />
      </div>
    </LayoutWrapper>
  );
}

