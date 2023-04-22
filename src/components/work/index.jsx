import React, { useState } from "react";
import styled from "styled-components";
import { Head } from "../common";
import { work } from "../../data";
export default function WorkIndex() {
  const WorkRight = () => {
    return (
      <div className="w-100 right">
        <img
          src="https://avada.website/resume/wp-content/uploads/sites/66/2016/07/contact_bg.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  };

  const WorkLeft = () => {
    return (
      <div className="left w-90 auto h-100 flex column gap-3">
        <Head
          text={"My Work & Skills"}
          subtext={"Recent Projects."}
          para={
            "The following work show-case my skills and experience via real world examples. Each projects is being made access with links to my github repositories and live demonstration of each projects. This projects aim to show my problem solving skills with reference to modern day technologies and my management of each of the problem efficiently"
          }
        />

        <div className="py-6 w-100 grid grid-auto">
          {work.map((x, index) => {
            return (
              <div
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay={index * 400}
              >
                <div
                  className="w-100 card flex column gap-3"
                  key={x.id}
                  options={{ max: 45, scale: 1, speed: 450 }}
                >
                  <img src={x.image} alt="" className="image" />
                  {/* <header className="flex column gap-2">
                    <h3 className="uppercase fs-20 text-bold text-white">
                      {x.text}
                    </h3>
                    <p className="fs-14 text-light">{x.description}</p>
                    <div className="view flex gap-1 item-center">
                      <Link to={""} className="link">
                        <FaGithub />
                      </Link>
                      <Link to={""} className="link">
                        <FaEye />
                      </Link>
                    </div>
                    <div className="w-100 tech">
                      {x.tech?.map((x) => {
                        return <div className="techlist">#{x}</div>;
                      })}
                    </div>
                  </header> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
// 90D3B0
// DBD2C9
// C4CCDF
  return (
    <WorkWrapper>
      <WorkLeft />
      <WorkRight />
    </WorkWrapper>
  );
}

const WorkWrapper = styled.div`
  background-color: var(--dark-3);
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 28vw;
  min-height: 100vh;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
  .right {
    @media (max-width: 980px) {
      display: none;
    }
  }
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
  .card {
    position: relative;
    padding: 1.4rem;
    padding-bottom: 2rem;
    border-radius: 10px;
    .view {
      position: absolute;
      top: 10%;
      right: 10%;
      .link {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #333;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.04);
        display: grid;
        place-items: center;
        SVG {
          width: 50%;
          height: 50%;
          color: #fff;
        }
      }
    }
    .tech {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
      .techlist {
        font-weight: 600;
        color: var(--secondary);
        font-size: 1.1rem;
      }
    }
    .image {
      width: 100%;
      object-fit: cover;
    }
  }
  .left {
    padding: 7rem 0;
  }
  h1 {
    font-weight: 700;
    width: 85%;
    color: var(--dark-1);
    .span1 {
      color: #fff;
    }
  }
  p {
    font-size: 1.3rem;
    color: #fff;
    line-height: 1.6;
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
