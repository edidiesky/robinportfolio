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
  const AboutLeft = () => {
    return (
      <div className="left w-85 auto h-100 flex column gap-3">
        <div className="w-100 auto">
          <h3
            style={{ fontWeight: "normal" }}
            className="head text-dark text-center"
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
                    data-aos-delay={index * 450}
                    style={{ height: "15rem" }}
                  >
                    <div className="top flex item-center gap-2">
                      <img src={x.icon} alt="" className="icon1" />
                      <h3 className="fs-20 family4 uppercase text-dark">
                        {x.title}
                      </h3>
                    </div>
                    <h4 className="family1 fs-14 text-light text-dark">
                      {x.description}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SkillsWrapper>
      <AboutLeft />
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;
  padding: 5rem 0;
  display: grid;
  background-color: #F0F0F0;
  place-items: center;
  .text1,
  .head {
    width: 60%;
    margin: 0 auto;
    @media (max-width: 580px) {
      width: 90%;
      text-align: start;
      margin: 0;
    }
  }
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-gap: 8rem;
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
        font-size: 20px;
        @media (max-width: 480px) {
          font-size: 16px;
        }
      }
    }
    /* &:nth-child(1) {
      border-right: 1px solid #fff;
    }
    &:nth-child(3) {
      border-right: 1px solid #fff;
    } */
    &:hover {
      h4 {
        color: var(--secondary);
      }
      .icon1 {
        filter: brightness(100%);
      }
    }
  }
  h4 {
    font-weight: 300;
    line-height: 1.7;
    font-size: 16px;
    transition: all 0.6s ease;
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
  .icon1 {
    filter: brightness(50%);
    transition: all 0.6s ease;
  }
  img {
    width: 5rem;
    @media (max-width: 480px) {
      width: 4rem;
    }
  }
  .left {
    padding: 7rem 0;
  }
`;

// https://avada.website/resume/wp-content/uploads/sites/66/2016/07/contact_bg.jpg
