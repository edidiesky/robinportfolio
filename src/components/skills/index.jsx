import React from "react";
import styled from "styled-components";

const newskills = [
  "Reactjs",
  "Nextjs",
  "Typescriptjs",
  "Expressjs",
  "Nodejs",
  "Redux",
  "git",
  "Tailwind",
  "Gsap",
  "MongoDb",
];

export default function SkillsIndex() {
  const SkillsLeft = () => {
    return (
      <div className="left w-85 auto item-center justify-center h-100 flex column gap-1">
        <div className="flex w-100 flex column gap-1">
          <h4
            style={{ fontWeight: "normal", zIndex: 2000 }}
            className="text-white family3 text-start flex item-center gap-2"
          >
            <img
              src="https://v2.brittanychiang.com/img/icons/settings.png"
              alt=""
              className="icon1"
            />
            Skills
          </h4>
          <div className="w-100 grid grid-wrapper">
            <div className="left  h-100 gap-4">
              <div className="w-100 grid grid-auto">
                {newskills.map((x, index) => {
                  return (
                    <div
                      className="w-100 cardw family3 text-grey uppercase"
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={index * 250}
                    >
                     {x}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SkillsWrapper id="skills">
      <div className="imageWrapper flex item-center justify-center">
        <img
          src="https://minhpham.design/assets/images/planet-1-1.png"
          className="images"
          alt=""
        />
      </div>
      <SkillsLeft />
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;
  padding: 5rem 0;
  padding-top: 15rem;
  @media (max-width: 780px) {
    padding-top: 7rem;
    width: 100%;
  }
  /* display: grid;
  place-items: center; */
  background-color: #fff;
  background-color: #151315;
  /* z-index: 200000; */
  .wrapper {
    z-index: 3000;
    background-color: transparent;
  }
  .image {
    background-size: cover;
    background-image: url("chat_1.jpg");
    position: absolute;
    background-position: center;
    width: 100%;
    z-index: -1;
    height: 100%;
    background-attachment: fixed;
  }

  .imageWrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    /* z-index: 300; */

    object-fit: cover;
    .images {
      object-fit: cover;
      position: absolute;
      width: 65%;
      margin: 0 auto;
      z-index: 300;
      background-attachment: fixed;
      @media (max-width: 780px) {
        width: 100%;
      }
    }
  }

  .grid-auto {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 580px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
    }
  }
  .text {
  }
  .fs-16 {
    font-size: 15px;
    @media (max-width: 780px) {
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
    filter: brightness(100%);
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
  .cardw {
    position: relative;
    display: grid;
    place-items: center;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    letter-spacing: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    font-size: 12px;
    z-index: 3000;
    overflow: hidden;
    transition: all 1s ease;
   
    @media (max-width: 780px) {
      width: 18rem;
      height: 18rem;
      font-size: 9px;
    }
    @media (max-width: 580px) {
      width: 15rem;
      height: 15rem;
      font-size: 9px;
    }
  }
  .left {
    padding: 4rem 0;
  }
`;
