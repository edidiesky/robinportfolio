import React, { useState } from "react";
import styled from "styled-components";
import { Head } from "../common";

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
      <div className="left w-90 auto h-100 flex column gap-2">
        <div className="flex column">
          <Head text={"About."} subtext={"INSPIRED TO MAKE A DIFFERENCE."} />
          <div className="hidden">
            <p
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              className="para"
            >
              As a full stack developer, I am committed to delivering robust and
              scalable solutions that exceed client expectations. With expertise
              in both client side and server side development, I possess a deep
              understanding of how to create applications that are both visually
              stunning and highly functional to your company.
            </p>
          </div>
        </div>
        <div className="hidden">
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            className="para"
          >
            My passion for programming and problem-solving drives me to
            continuously expand my knowledge and stay up-to-date with the latest
            trends and technologies in the industry. Whether it's building
            dynamic web applications or developing custom software solutions, I
            take pride in delivering top-quality results that meet the unique
            needs of each client.
          </p>
        </div>
        <div className="hidden">
          <p
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="300"
            className="para"
          >
            I am skilled in a variety of programming languages, including HTML,
            CSS, JavaScript as well as several popular frameworks such as React,
            Nextjs, Expressjs and Nodejs, I am also experienced in database
            design and management making using of mongoDb as my database
            refernce, as well as cloud deployment and server administration.
          </p>
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
    width: 90%;
    line-height: 1.8;
  }
  .para1 {
    font-size: 2.2rem;
    color: var(--grey-1);
    font-weight: 400;
    font-family: "Lato", sans-serif;
    width: 90%;
    line-height: 1.8;
  }
`;

// https://avada.website/resume/wp-content/uploads/sites/66/2016/07/contact_bg.jpg
