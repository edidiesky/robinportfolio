import React, { useState } from "react";
import styled from "styled-components";
import { Head } from "../common";
import Input from "../forms/Input";
import { BiChevronRight } from "react-icons/bi";

const Skills = [
  "https://v1.brittanychiang.com/img/skills/html.png",
  "https://v1.brittanychiang.com/img/skills/css.png",
  "https://v1.brittanychiang.com/img/skills/js.png",
  "https://v1.brittanychiang.com/img/skills/node.png",
  "https://v1.brittanychiang.com/img/skills/mongodb.png",
  "https://v1.brittanychiang.com/img/skills/github.png ",
  "https://v1.brittanychiang.com/img/skills/angular.png",
  "./tech/redux.png",
  "https://v1.brittanychiang.com/img/skills/python.png",
  "https://v1.brittanychiang.com/img/skills/js.png",
];

const tools = [
  {
    description:
      "I strive to create pixel-perfect websites and applications that not only look great but also have a solid foundation of clean, modular, and efficient code.I am committed to maintaining a semantic structure and implementing the DRY (Don't Repeat Yourself) principle, ensuring scalability and maintainability of the projects I work on.    ",
    title: "WEB DEVELOPMENT",
    icon: "https://v2.brittanychiang.com/img/icons/html.png",
  },
  {
    description:
      "With a deep understanding of media queries, I ensure that the websites and applications I develop adapt flawlessly to various platforms. By utilizing key concepts in grid and flex, I streamline the development process, allowing me to create responsive UIs that are not only aesthetically pleasing but also perform optimally on any device.",
    title: "KEEN IN RESPONSIVE DEVELOPMENT",
    icon: "https://v2.brittanychiang.com/img/icons/pencil.png",
  },
  {
    description:
      "As a developer I seek to create satisfaction in delivering efficient products, nothwithstanding I also seek that I keep to the set time for the project completion.",
    title: "STICKS TO DEADLINE",
    icon: "https://v2.brittanychiang.com/img/icons/internet.png",
  },
  {
    description:
      "Versed and passionate in the application of modern technology, I believe that these technologies can lead to a more better and faster innovative solutions to problems in the industry. ",
    title: "VERSED IN MODERN TECHNOLOGIES",
    icon: "https://v2.brittanychiang.com/img/icons/ux-design.png",
  },
];

export default function AboutIndex() {
  return (
    <SkillsWrapper id="about">
      <div className="imageWrapper"></div>
      <div className="imagegradient"></div>
      <div className="left w-85 auto h-100 flex column gap-3">
        <div className="w-100">
          <h3
            style={{ fontWeight: "normal" }}
            className="head text-white text-start"
          >
            What I Do
          </h3>
        </div>
        <div className="w-100 grid grid-wrapper">
          <div className="left flex column gap-2">
            <div className="w-100 grid grid-auto">
              {tools.map((x, index) => {
                return (
                  <div
                    className="w-100 flex column card gap-2"
                    key={x.id}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay={index * 350}
                  >
                    <div className="top flex item-center gap-2">
                      <img src={x.icon} alt="" className="icon1" />
                      <h3 className="fs-20 uppercase text-white">{x.title}</h3>
                    </div>
                    <h4 className="family1 fs-14 text-light text-white">
                      {x.description}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  padding: 6rem 0;
  transform-style: inherit;
  .imagegradient {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
    z-index: 200;
  }
  .imageWrapper,
  .imagegradient {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .imageWrapper {
    background-image: url("coding_1.jpg");
    background-size: cover;
    position: absolute;
    background-position: center;
    width: 100%;
    z-index: -1;
    height: 100%;
    background-attachment: fixed;
  }
  .text1,
  .head {
    @media (max-width: 580px) {
      width: 90%;
      text-align: start;
      margin: 0;
    }
  }
  .left {
    z-index: 300;
    display: grid;
    place-items: center;
  }
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-gap: 4rem;
    grid-row-gap: 6rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      grid-row-gap: 6rem;
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
  .heads::after {
    position: absolute;
    width: 100px;
    height: 2px;
    background-color: var(--secondary);
    bottom: -25%;
    left: 0%;
    content: "";
  }
  .card {
    .top {
      h3 {
        font-size: 30px;
        font-weight: normal;
      }
    }
    &:hover {
      h4 {
        color: var(--secondary);
      }
      .icon1 {
        filter: brightness(80%);
      }
    }
  }
  h4 {
    font-weight: 300;
    line-height: 1.7;
    transition: all 0.6s ease;
  }
  .icon1 {
    filter: brightness(100%);
    transition: all 0.6s ease;
  }
  img {
    width: 4rem;
    @media (max-width: 480px) {
      width: 4rem;
    }
  }
  .left {
    padding: 3rem 0;
  }
`;
