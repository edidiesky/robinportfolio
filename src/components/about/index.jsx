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
      "Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.",
    title: "WEB DEVELOPMENT",
    icon: "https://v2.brittanychiang.com/img/icons/html.png",
  },
  {
    description:
      "Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.",
    title: "RESPONSIVE UI DESIGN",
    icon: "https://v2.brittanychiang.com/img/icons/pencil.png",
  },
  {
    description:
      "Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.",
    title: "EXPERIENCE DESIGN",
    icon: "https://v2.brittanychiang.com/img/icons/internet.png",
  },
  {
    description:
      "Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.",
    title: "DIVERSITY IN TECH",
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
                    data-aos="fade"
                    data-aos-duration="1500"
                    data-aos-delay={index * 350}
                    style={{ height: "15rem" }}
                  >
                    <div className="top flex item-center gap-2">
                      <img src={x.icon} alt="" className="icon1" />
                      <h3 className="fs-18 family2 uppercase text-white">
                        {x.title}
                      </h3>
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
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
  padding:14rem 0;
  transform-style: inherit;
  .imagegradient {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.61),
      rgba(0, 0, 0, 0.61),
      rgba(0, 0, 0, 0.61),
      rgba(0, 0, 0, 0.61),
      rgba(0, 0, 0, 0.61)
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
    background-image: url("https://v2.brittanychiang.com/img/bg-services/services-lg.jpg");
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
  }
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-gap: 4rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      grid-row-gap: 10rem;
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
    min-height: 20rem;
    .top {
      h3 {
        font-size: 24px;
        font-weight: normal;
        @media (max-width: 480px) {
          font-size: 24px;
        }
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
    font-size: 15px;
    transition: all 0.6s ease;
    @media (max-width: 480px) {
      font-size: 14px;
    }
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
