import React, { useState } from "react";
import styled from "styled-components";
import { Head } from "../common";
import Input from "../forms/Input";

const Skills = [
  "./tech/css.png",
  "./tech/git.png",
  "./tech/html.png",
  "./tech/javascript.png",
  "./tech/mongodb.png",
  "./tech/nodejs.png",
  "./tech/reactjs.png",
  "./tech/redux.png",
];

export default function SkillsIndex() {
  const SkillsRight = () => {
    return (
      <div className="w-100">
        <img
          src="https://avada.website/resume/wp-content/uploads/sites/66/2016/07/contact_bg.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  };

  const SkillsLeft = () => {
    return (
      <div className="left w-90 auto h-100 flex column gap-3">
        <Head
          text={"Skills"}
          subtext={"RESULTS DRIVEN TECHNOLOGIES."}
          para={
            "As a full-stack developer I have expertise in both technologies which are client side related and server-side related"
          }
        />

        <div className="py-6 w-100 grid grid-gap1 grid-auto">
          {Skills.map((x, index) => {
            return (
              <div
                className="w-100 card"
                key={x.id}
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay={index * 150}
                style={{ height: "15rem" }}
              >
                <img src={x} alt="" className="image" />
                <div className="header w-100"></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <SkillsWrapper>
      <SkillsLeft />
      <SkillsRight />
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  background-color: var(--light-grey);
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 28vw;
  min-height: 100vh;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
  .card {
    position: relative;
    .image {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .left {
    padding: 7rem 0;
  }
  h1 {
    font-size: 10rem;
    font-weight: 700;
    color: #fff;
    .span1 {
      color: var(--dark-1);
      font-size: 40px;
    }
  }
  .para {
    font-size: 1.8rem;
    color: var(--grey-1);
    font-weight: 400;
    font-family: "Lato", sans-serif;
    width: 90%;
    line-height: 1.8;
  }
`;

// https://avada.website/resume/wp-content/uploads/sites/66/2016/07/contact_bg.jpg
