import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowDownLeft } from "react-icons/hi2";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper data-scroll-section id="contact">
      <div className="left w-90 auto h-100 flex column gap-4">
        <div className="flex top item-center w-85 auto">
          <div className="w-100 flex column gap-2">
            <h2 className="text-white w-100 family1 fs-45">
              Let's work <span className="block">together</span>
            </h2>
          </div>
          <Link
            to={"/contact"}
            className="card_btn_wrapper2 family2 flex item-center justify-center"
          >
            <div className="card_btn fs-14 flex justify-center item-center text-white text-light">
              <div className="text1 text-center">Contact Me</div>
            </div>
          </Link>
          <div
            className="flex-1 flex fs-30 text-white justify-end item-center"
            style={{ justifyContent: "flex-end" }}
          >
            {" "}
            <HiArrowDownLeft />
          </div>
        </div>
        <div className="flex bottom w-85 auto item-center gap-4">
          <div className="card_btn_wrapper family2 flex item-center justify-center">
            <div className="card_btn fs-16 flex justify-center item-center text-white text-light">
              <div className="text1">essienedidiong1000@gmail.com</div>
            </div>
          </div>

          <div className="card_btn_wrapper family2 flex item-center justify-center">
            <div className="card_btn fs-16 flex justify-center item-center text-white text-light">
              <div className="text1">0812 710 7270</div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;
  padding: 2rem 0;
  padding: 15rem 0;
  display: grid;
  place-items: center;
  z-index: 20000000;
  background-color: #1c1d20;
  .left {
    width: 96%;
  }
  .grid_wrapper {
    display: grid;
    grid-template-columns: 1fr 10vw;
    grid-gap: 5rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
  .bottom {
    @media (max-width: 780px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }
  }
  @media (max-width: 780px) {
    font-size: 14px;
  }
  .card_btn_wrapper2 {
    .card_btn {
      min-width: 16rem;
      min-height: 16rem;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      background-color: var(--secondary);
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
        background-color: #3e4fbcc6;
        /* Add more styles for the card here */
        transition: all 1s ease;
        z-index: 1;
        padding: 2rem;
      }
    }
  }
  .card_btn_wrapper {
    @media (max-width: 780px) {
      width: 100%;
    }
    .card_btn {
      padding: 3rem;
      min-width: 18rem;
      min-height: 5rem;
      border-radius: 40px;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      transition: all 0.7s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
      @media (max-width: 780px) {
        padding: 4rem 3rem;
        text-align: center;
        width: 100%;
      }
      .text1 {
        z-index: 10;
      }
      &:is(:hover, :focus-visible)::before {
        bottom: -10%;
        transform: translateX(-50%) scale(1.4);
      }
      &::before {
        content: "";
        position: absolute;
        bottom: -200%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 50%;
        border-radius: 100%;
        background-color: var(--secondary);
        /* Add more styles for the card here */
        transition: all 1s ease;
        z-index: 1;
        padding: 2rem;
      }
    }
  }
  .top {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 4rem;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }
  }
  h3 {
    @media (max-width: 780px) {
      font-size: 20px;
    }
  }
  .cardw {
    position: absolute;
    display: grid;
    place-items: center;
    width: 17rem;
    height: 17rem;
    border-radius: 50%;
    bottom: -15%;
    right: -10%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    /* font-size: 12px; */
    z-index: 3000;
    overflow: hidden;
    cursor: pointer;
    transition: all 1s ease;
    background-color: #455ce9;
    color: #fff;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 4px 13px rgba(0, 0, 0, 0.1);
    }
    .text-2 {
      position: absolute;
      top: -100%;
      left: 50%;
      transform: translateX(-50%);
      min-width: max-content;

      transition: all 0.7s ease;
    }
    .text-1 {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translateX(-50%);
      min-width: max-content;

      transition: all 0.1s;
    }
    &:is(:hover, :focus-visible)::before {
      bottom: -50%;
    }
    &:is(:hover, :focus-visible) .text-2 {
      top: 45%;
    }
    &:is(:hover, :focus-visible) .text-1 {
      top: -100%;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 200%;
      height: 200%;
      border-radius: 50%;
      background-color: rgba(168, 151, 123, 0.228);
      transition: all 0.7s ease;
      z-index: -1;
      padding: 2rem;
    }
    @media (max-width: 780px) {
      font-size: 19px;
      bottom: -5%;
      right: -20%;
    }
    @media (max-width: 380px) {
      width: 100px;
      font-size: 14px;
      height: 100px;
    }
  }
  .image {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    object-fit: cover;
  }
  h2 {
    font-weight: light;
    font-size: 70px;
    position: relative;
    @media (max-width: 980px) {
      font-size: 45px;
    }
    .span {
      position: absolute;
      bottom: -100%;
      left: -30%;
    }
  }
`;
