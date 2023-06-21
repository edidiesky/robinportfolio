import React from "react";
import styled from "styled-components";
import { FaSearchPlus } from "react-icons/fa";
import { work } from "../../data/work";
import { Link } from "react-router-dom";



export default function Work() {
  return (
    <WorkContent id="work" className="flex w-100 column gap-3">
      <div className="w-85 auto hidden">
        <h3
          data-aos="fade-up"
          data-aos-duration="900"
          style={{ fontWeight: "normal" }}
          className="head text-dark text-start"
        >
          SOME OF MY WORKS
        </h3>
      </div>
      <div className="w-100 auto flex column gap-4 Workwp">
        {/* owl carousel section */}
        {work.map((x, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-dalay={index * 300}
              className="headerWrapper py-2 w-100"
              key={index}
            >
              <div className="imagegradient"></div>
              <img src={x.image} alt="" className="imageWrapper" />
              <div className="herowrapper h-100 flex justify-center column gap-3  ">
                <h4
                  style={{ fontWeight: "400" }}
                  className="family2  w-100 fs-16 text-secondary"
                >
                  A {x.type}
                </h4>
                <h2 className="fs-46 w-100 family2 text-light text-white">
                  {x.title}
                </h2>

                <h4 className="family1 w-100 fs-14 text-white">
                  {x.description}
                </h4>
                <div className="w-100 flex gap-1 column">
                  <h4 className="family1 fs-14 text-secondary">Tools</h4>
                  <div className=" w-100 flex worktools">
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
                  {x.link1 ? (
                    <Link
                      to={x.link1}
                      className="btn fs-14 family2 py-1"
                      target="_blank"
                    >
                      View project Demo
                    </Link>
                  ) : (
                    <div className="btn fs-14 family2 py-1" target="_blank">
                      Project Comming Soon
                    </div>
                  )}

                  <Link
                    to={"https://github.com/Vivixell/portfolioVictorRobin"}
                    className="btn fs-14 family2 py-1"
                    target="_blank"
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
  background-color: #fff;
  padding: 7rem 0;

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
    width: 80%;
    @media (max-width: 780px) {
      width: 90%;
    }
    @media (max-width: 480px) {
      width: 100%;
      gap: 1.2rem;
    }
    .tools {
      padding: 0.5rem 2rem;
      font-size: 1.4rem;
      background-color: #fff;
      font-weight: 600;
      text-transform: uppercase;
      transition: all 0.5s;
      cursor: pointer;
      border-radius: 40px;
      color: var(--dark-1);
      &:hover {
        background-color: var(--secondary);
        color: #fff;
      }
    }
  }
  .herowrapper {
    z-index: 6000;
    gap: 3rem;

    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    );
    width: clamp(50%, 200px, 100%);
    padding: 7rem 3rem;
    border-radius: 10px;
    h4 {
      width: 100%;
    }
    h2 {
      line-height: 49px;
      font-weight: 500;
      font-size: 60px;
      width: 100%;
      @media (max-width: 780px) {
        width: 100%;
        line-height: 50px;
        font-size: 40px;
      }
      @media (max-width: 480px) {
        /* width: 70%; */
        line-height: 40px;
        font-size: 45px;
        font-weight: normal;
      }
    }
  }
  .herowrapper {
    @media (max-width: 680px) {
      gap: 2rem;
      width: clamp(80%, 100%, 100%);
      padding: 5rem 2rem;
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
    padding: 16rem 7rem;
    display: grid;
    @media (max-width: 680px) {
      padding: 5rem 4rem;
    }
    @media (max-width: 380px) {
      padding: 5rem 2rem;
    }
  }
  .imagewrapper {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
