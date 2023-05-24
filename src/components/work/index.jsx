import React from "react";
import styled from "styled-components";
import { FaSearchPlus } from "react-icons/fa";
import { work } from "../../data/work";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <WorkContent id="work" className="flex w-100 column gap-2">
      <div className="w-85 auto hidden">
        <h3
          data-aos="fade-up"
          data-aos-duration="1200"
          style={{ fontWeight: "normal" }}
          className="head text-white text-start"
        >
          SOME OF MY WORKS
        </h3>
      </div>
      <div className="w-100 auto gap-2 Workwp">
        {work.map((x, index) => {
          return (
            <div
              data-aos="fade"
              data-aos-duration="1900"
              data-aos-dalay={index * 350}
              className="headerWrapper w-100"
              key={index}
            >
              <div className="imagegradient"></div>
              <img src={x.image} alt="" className="imageWrapper" />
              <div className="herowrapper h-100 flex justify-center column gap-3 w-85 auto">
                <h4
                  style={{ fontWeight: "400" }}
                  className="family2 fs-16 text-secondary"
                >
                  A {x.type}
                </h4>
                <h2 className="fs-46 w-50 family2 text-light text-white">
                  {x.title}
                </h2>

                <h4 className="family1 fs-14 text-white">{x.description}</h4>
                <div className="w-100 flex gap-1 column">
                  <h4 className="family1 fs-14 text-secondary">Tools</h4>
                  <div className=" flex worktools">
                    {x.tools.map((x, index) => {
                      return (
                        <div className="tools family2" key={index}>
                          {x}
                        </div>
                      );
                    })}
                  </div>
                  ''
                </div>
                <div className="w-100 btnWrapper flex item-center gap-2">
                  <div className="btn fs-14 family2 py-1">
                    View project Demo
                  </div>
                  <Link
                    to={"https://github.com/Vivixell/portfolioVictorRobin"}
                    className="btn fs-14 family2 py-1"
                  >
                    View project Code
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </WorkContent>
  );
}
const WorkContent = styled.div`
  gap: 2rem;
  background-color: var(--primary);
  .title {
    font-family: "Bebas Neue", sans-serif;
  }
  .btn {
    padding: 1.2rem 3rem;
  }
  .btnWrapper {
    padding-top: 3rem;
    @media (max-width: 780px) {
      flex-direction: column;
      padding-top: 1.7rem;
      align-items: flex-start;
    }
  }
  .worktools {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    width: 40%;
    @media (max-width: 780px) {
      width: 60%;
    }
    @media (max-width: 480px) {
      width: 90%;
      gap:1.2rem;
    }
    .tools {
      padding: 0.5rem 2rem;
      font-size: 1.4rem;
      background-color: #fff;
      font-weight: 600;
      text-transform: uppercase;
      transition: all 0.5s;
      cursor: pointer;
      &:hover {
        background-color: var(--secondary);
        color: #fff;
      }
    }
  }
  .herowrapper {
    z-index: 6000;
    gap: 3rem;
    @media (max-width: 480px) {
      gap: 2rem;
    }
    h4 {
      width: 40%;
      @media (max-width: 780px) {
        width: 60%;
      }
      @media (max-width: 480px) {
        width: 90%;
      }
    }
    h2 {
      line-height: 49px;
      font-weight: 500;
      font-size: 60px;
      width: 50%;
      @media (max-width: 780px) {
        width: 60%;
        line-height: 50px;
        font-size: 40px;
      }
      @media (max-width: 480px) {
        width: 70%;
      }
    }
  }
  .WorkRight1 {
    height: 30rem;
    transition: all 0.7s;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    .gradient,
    .WorkRightCenter {
      opacity: 0;
      visibility: hidden;
      z-index: 3000;
      top: -100%;
      position: absolute;
      justify-content: center;
    }
    &:hover {
      .gradient,
      .WorkRightCenter {
        /* opacity: 1;
        visibility: visible;
        transition: all 0.7s;
        height: 100%; */
        top: 0;
        opacity: 1;
        visibility: visible;
        transition: all 0.7s;
      }
      .WorkRightBottom {
        bottom: 0%;
      }
    }

    .WorkRightC {
      width: 70%;
      z-index: 300;
    }
  }
  .WorkRightBottom {
    position: absolute;
    width: 100%;
    padding: 2rem 0;
    min-height: 5rem;
    background-color: #fff;
    bottom: -100%;
    z-index: 3000;
    transition: all 0.7s;
  }
  .headerWrapper {
    position: relative;
    min-height: 100vh;
    padding: 16rem 0;
    display: grid;
    place-items: center;
  }
  .imagewrapper {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .imagegradient {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 400;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    );
  }
`;
