import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

const Skills = [
  "https://v1.brittanychiang.com/img/skills/html.png",
  "https://v1.brittanychiang.com/img/skills/css.png",
  "https://v1.brittanychiang.com/img/skills/js.png",
  "https://v1.brittanychiang.com/img/skills/node.png",
  "https://v1.brittanychiang.com/img/skills/mongodb.png",
  "https://v1.brittanychiang.com/img/skills/github.png ",
  "./tech/redux.png",
  "https://v1.brittanychiang.com/img/skills/js.png",
  "https://v1.brittanychiang.com/img/skills/linux.png",
  "./tech/nodejs.png",
  "./tech/reactjs.png",
  "./tech/typescript.png",
  "./tech/tailwind.png",
  "./tech/git.png",

];

const tools = ["Command Line", "Post Man", "Git + Github", "Chrome DevTools"];

const tools2 = ["Redux", "Redux Dev tool", "Context Api"];

export default function SkillsIndex() {
  const SkillsLeft = () => {
    return (
      <div className="left w-85 auto h-100 flex column gap-3">
        <div className="w-100 auto">
          <h2
            style={{ fontWeight: "normal" }}
            className="head text-dark family1 text-start"
          >
            Skills
          </h2>
        </div>
        <div className="w-100 grid grid-wrapper">
          <div className="left flex column gap-4">
            <div className="flex item-center gap-3">
              <img
                src="https://v2.brittanychiang.com/img/icons/settings.png"
                alt=""
                className="icon1"
              />
              <h3
                style={{ fontWeight: "normal" }}
                className="fs-20 family1 text uppercase text-dark"
              >
                SOME TECHNOLOGIES I'VE WORKED WITH:
              </h3>
            </div>
            <div className="w-100 grid grid-auto">
              {Skills.map((x, index) => {
                return (
                  <div
                    className="w-100 card"
                    key={x.id}
                    data-aos="fade"
                    data-aos-duration="1200"
                    data-aos-delay={index * 150}
                  >
                    <img src={x} alt="" className="image" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="left flex column gap-4">
            <div className="flex item-center gap-3">
              <img
                src="https://v2.brittanychiang.com/img/icons/repair-tools.png"
                alt=""
                className="icon1"
              />
              <h3
                style={{ fontWeight: "normal" }}
                className="fs-20 family1 uppercase text-dark"
              >
                Tools
              </h3>
            </div>
            <div className="flex column gap-1">
              {tools.map((x, index) => {
                return (
                  <div
                    className="w-100 fs-16 text-dark text-extra-bold family1 flex item-center gap-1"
                    key={x.id}
                    data-aos="fade"
                    data-aos-duration="1200"
                    data-aos-delay={index * 150}
                  >
                    <BiChevronRight fontSize={"24px"} /> {x}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="left flex column gap-4">
            <div className="flex item-center gap-3">
              <imgdark
                src="https://v2.brittanychiang.com/img/icons/light-bulb.png"
                alt=""
                className="icon1"
              />
              <h3
                style={{ fontWeight: "normal" }}
                className="fs-20 family1 uppercase text-dark"
              >
                Knowledge
              </h3>
            </div>
            <div className="flex column gap-1">
              {tools2.map((x, index) => {
                return (
                  <div
                    className="w-100 fs-16 text-dark text-extra-bold family1 flex item-center gap-1"
                    key={x.id}
                    data-aos="fade"
                    data-aos-duration="1200"
                    data-aos-delay={index * 150}
                  >
                    <BiChevronRight fontSize={"24px"} /> {x}
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
    <SkillsWrapper id="skills">
      <SkillsLeft />
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;
  padding: 5rem 0;
  display: grid;
  place-items: center;
  background-color: var(--primary);
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-row-gap: 4rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
    }
    @media (max-width: 580px) {
      grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
      grid-row-gap: 5rem;
    }
  }
  .text {
  }
  .fs-16 {
    font-size: 15px;
    @media (max-width:780px) {
      font-size: 14px;
    }
  }
  .fs-20 {
    font-size: 18px;
    font-weight: 900;
   
  }
  h3 {
    font-weight: 700;
  }
  .grid-wrapper {
    grid-template-columns: 1fr 15vw 15vw;
    grid-gap: 8rem;
    grid-row-gap: 6rem;
    grid-column-gap: 7rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  .icon1 {
    filter: brightness(0%);
    width: 35px;
    height: auto;
    transition: all 0.6s ease;
    @media (max-width: 580px) {
      width: 30px;
    }
    &:hover {
      filter: brightness(80%);
    }
  }
  .card {
    position: relative;
    display: grid;
    place-items: center;
    .image {
      width: 70px;
      /* height: auto; */
      filter: grayscale(10);
      @media (max-width: 580px) {
        width: 45px;
      }
      transition: all 0.6s ease;
      &:hover {
        filter: brightness(100%);
      }
    }
  }
  .left {
    padding: 4rem 0;
  }
`;
