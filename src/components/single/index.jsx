import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { projectdata } from "../../data/projectdata";
import { HiArrowUpRight } from "react-icons/hi2";

const SingleWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 15rem 0;
  overflow: hidden;
  background-color: #151315;
  .top_center {
    margin: 6rem 0;
    margin-top: 8rem;
  }
  .roles {
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .cardImage {
    min-height: 70rem;
    padding: 7rem;
    margin: 4rem 0;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      /* position: absolute; */
      object-fit: cover;
    }
  }

  .card_btn {
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    position: absolute;
    top: -25%;
    right: 5%;
    background-color: #f4a70f;
    transition: all 0.7s ease;
    transform: translateY(70%);
    @media (max-width: 780px) {
      transform: translateY(45%);
    }

    @media (max-width: 380px) {
      transform: none;
    }

    border: 1px solid rgba(255, 255, 255, 0.1);
    .text1 {
      z-index: 10;
    }
    &:is(:hover, :focus-visible)::before {
      bottom: 20%;
      transform: translateX(-50%) scale(1.4);
      color: #fff;
      .text1 {
        color: #fff !important;
      }
    }
    &::before {
      content: "";
      position: absolute;
      bottom: -200%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 70%;
      border-radius: 100%;

      background-color: #d19826c0;
      /* Add more styles for the card here */
      transition: all 1s ease;
      z-index: 1;
      padding: 2rem;
    }
  }

  .fs-22 {
    font-size: 22px;
    @media (max-width: 580px) {
      font-size: 17px !important;
    }
  }
  .subtext {
    /* flex: 0.6; */
    line-height: 1.5;
    position: relative;
    transform: translateX(14%);

    @media (max-width: 980px) {
      transform: translateX(20%);
    }

    &::after {
      position: absolute;
      width: 90px;
      height: 1px;
      background-color: var(--grey-1);
      content: "";
      top: 50%;
      left: -14%;
      transform: translateY(-50%);
      @media (max-width: 980px) {
        /* left: -10%; */
        width: 50px;
      }
    }
  }
  h2 {
    font-size: 75px;
    @media (max-width: 980px) {
      font-size: 50px;
    }
  }
  .dropdownHeader {
    padding-bottom: 4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .grid_auto {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    /* grid-gap: 4rem; */
    grid-gap: 2rem;
    @media (max-width: 680px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 4rem;
    }
  }
  .grid_wrappers {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    display: grid;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
  .grid_wrappers_2 {
    grid-template-columns: 20vw 1fr;
    grid-gap: 2rem;
    display: grid;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }

  li {
    line-height: 1.4;
    /* color: rgba(98, 98, 98, 0.652); */
  }
  .image_wrapper {
    position: relative;
    /* height: 100vh; */
    width: 100%;
    img {
      /* position: absolute; */
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const StyledCard = styled.div`
  position: relative;
  z-index: 400;
  min-height: 30rem;
  padding: 2rem 0;
  background-color: ${(props) => props.backgroundColor || "white"};
  /* Add more styles for the card here */
`;

export default function SingleIndex() {
  const { id } = useParams();
  // get teh project detials
  const projectdetails = projectdata.find((x) => x.text === id);
  console.log(projectdetails);
  return (
    <SingleWrapper data-scroll-section>
      <div className="w-100 flex column gap-4">
        <div className="w-90 auto flex column gap-4">
          <div className="top gap-2 w-90 auto">
            <h2 className=" w-100 text-bold ">
              <span
                style={{ fontWeight: "300", lineHeight: "1.7" }}
                className="fs-16 subtext w-100 block auto text-light"
              >
                Programmming & Website
              </span>

              {projectdetails?.title}
            </h2>
            <div
              style={{ flexWrap: "wrap" }}
              className="w-100 top_center grid grid_auto item-center gap-2"
            >
              <div className="flex flex-1 column gap-2">
                <h5 className="fs-12 roles uppercase text-light text-grey">
                  Role & Services
                </h5>
                <h4
                  style={{ fontWeight: "lighter", paddingTop: "1.5rem" }}
                  className="fs-16 text-light"
                >
                  Frontend Development & Backend Development
                </h4>
              </div>
              <div className="flex flex-1 column gap-2">
                <h5 className="fs-12 roles uppercase text-light text-grey">
                  Code Repsitory
                </h5>
                <Link
                  target="_blank"
                  style={{
                    textDecoration: "underline",
                    fontWeight: "lighter",
                    paddingTop: "1.5rem",
                  }}
                  to={projectdetails?.github}
                  className="block text-light text-grey fs-16"
                >
                  {projectdetails?.github}
                </Link>
              </div>
              <div className="flex flex-1 column gap-2">
                <h5 className="fs-12 roles uppercase text-light text-grey">
                  Year
                </h5>
                <h4
                  style={{ fontWeight: "lighter", paddingTop: "1.5rem" }}
                  className="fs-14 text-light"
                >
                  2023
                </h4>
              </div>
            </div>
          </div>
          {/* main Image */}
          <div
            style={{ backgroundColor: `${projectdetails.color}` }}
            className="cardImage w-100 auto flex item-center justify-center"
          >
            <img src={projectdetails.image} className="auto " alt="" />

            <Link
              to={"/contact"}
              className="card_btn fs-16 flex justify-center item-center text-light"
            >
              <div className="text1 flex text-white itemcenter gap-1 text-center">
                Live Site
                <HiArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
        {/* research planning  */}
        <div
          style={{ margin: "5rem auto" }}
          className="w-85 auto flex column gap-4"
        >
          <div className="w-90 auto flex column gap-4 item-start gap-3">
            <div className="fs-16 flex column gap-2 item-start text-grey">
              <h5 className="block dropdownHeader text-grey fs-30 text-bold">
                Features
              </h5>
              <div className="flex column w-100 gap-1">
                <ul className="flex column" style={{ gap: "1.5rem" }}>
                  {projectdetails?.features.map((x, index) => {
                    return (
                      <li className="block text-light fs-18">
                        <div className="text-bold text-grey fs-18 flex item-center gap-1">
                          <span style={{ marginLeft: "-10px" }}>
                            {index + 1}.
                          </span>{" "}
                          {x.text}
                        </div>
                        <div className="text-grey w-100 family1 fs-16">
                          {x.description}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* role */}
            <div className="fs-16 flex column gap-2 item-start text-grey">
              <h5 className="block dropdownHeader text-grey fs-30 text-bold">
                Role
              </h5>
              <div className="flex column w-100 gap-1">
                <div className="flex column" style={{ gap: "2rem" }}>
                  {projectdetails?.role.map((x, index) => {
                    return (
                      <div className=" flex column gap-1 text-light fs-18">
                        <div className="text-bold text-grey flex item-center gap-1">
                          <span style={{ marginLeft: "-10px" }}>
                            {index + 1}.
                          </span>{" "}
                          {x.text}
                        </div>
                        <ul
                          style={{ listStyleType: "disc" }}
                          className="text-grey flex column gap-1 fs-16"
                        >
                          {x.subtext.map((x) => {
                            return (
                              <li
                                style={{ marginRight: "-100px" }}
                                className="family1 w-100 text-grey"
                              >
                                {x}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* galleries */}
        {/* <div
          style={{ margin: "5rem auto" }}
          className="w-100 py-2 grid_auto grid item-center"
        >
          {projectdata2.map((data, index) => {
            return (
              <StyledCard
                key={index}
                backgroundColor={data.color}
                className="card w-100 flex item-center justify-center"
              >
                <img
                  style={{ width: "90%" }}
                  src={data.image}
                  className="auto "
                  alt=""
                />
              </StyledCard>
            );
          })}
        </div> */}
      </div>
    </SingleWrapper>
  );
}
