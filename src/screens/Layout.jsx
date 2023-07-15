import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { Link as Links } from "react-scroll";

import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import SmallSidebar from "./sidebar/SmallSidebar";
import AboutIndex from "../components/about";
import SkillsIndex from "../components/skills";

import Message from "../components/loaders/Message";
import HeroIndex from "../components/hero";
import AboutMeIndex from "../components/aboutme";
import { Footer } from "../components/common";
import WorkIndex from "../components/work";
import MottoIndex from "../components/motto";
import { useRef } from "react";
import Aos from "aos";
const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgb(51, 51, 51);

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
    left: 5%;
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
        {/* <SidebarIndex /> */}
        <div className="titleIcon">
          <h3 className="text-1 text family3 text-white text-light uppercase">
            VICTOR
          </h3>
          <h3 className="text-2 text family3 text-white text-light uppercase">
            ROBIN
          </h3>
        </div>
        <div className=" wrapperlink flex column gap-2">
          <Link
            to={"https://github.com/edidiesky"}
            target="_blank"
            className="social"
          >
            <BsGithub />
          </Link>
          <Link
            to={
              "https://twitter.com/DevtorCode/status/1660742554789335074?s=20"
            }
            target="_blank"
            className="social"
          >
            <BsTwitter />
          </Link>
          <Link
            to={"https://linkedin.com/in/robinvictoro"}
            target="_blank"
            className="social"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        <Message />
        {/* <Header /> */}
        <SmallSidebar />

        <div className="flex item-end justify-end column list flex-1">
          {data.map((x) => {
            return (
              <Links
                spy={true}
                smooth={true}
                duration={1000}
                className="linktext2 family3 linktext1 text-extra-bold fs-12 text-grey text-light"
                to={`${x.path}`}
                key={x.id}
              >
                {x.title}
              </Links>
            );
          })}
        </div>
        <div className="container">
          <HeroIndex />
          <AboutMeIndex />
          <AboutIndex />
          <WorkIndex />
          <SkillsIndex />
          <MottoIndex />
          <Footer />
        </div>
      </div>
    </LayoutWrapper>
  );
}
