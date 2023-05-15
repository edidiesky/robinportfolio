import React from "react";
import styled from "styled-components";

export default function Preloader() {
  return (
    <PreloaderContent>
      {/* <div className="top">
      </div> */}
      <div className="preloader">
        <div className="loading_text family1 fs-12 text-white text-light ">
          LOADING
        </div>
      </div>
    </PreloaderContent>
  );
}

const PreloaderContent = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--primary);
  .text {
    font-weight: normal;
    z-index: 4;
  }
  .preloader {
    position: fixed;
    width: 100%;
    height: 100vh;
    display: grid;
    background-color: var(--primary);
    place-items: center;
    z-index: 5;
    .loading_text {
      font-weight: normal;
      letter-spacing: 30px;
      pointer-events: none;
      user-select: none;
    }
  }
  /* .top {
    height: 50vh;
    width: 100%;
    position: absolute;
    z-index: 4;
    .top_content {
      position: absolute;
      width: 33.333vw;
      height: 100%;
      background-color: var(--primary);
      bottom: 0;
      left: 0;
      right: 0;
      &:nth-child(2) {
        left: 33.333%;
      }
      &:nth-child(3) {
        left: 66.666%;
      }
    }
  }
  .bottom {
    height: 50vh;
    width: 100%;
    position: absolute;
    z-index: 700;
    bottom: 0;
    left: 0;
    .bottom_content {
      position: absolute;
      width: 33.333vw;
      height: 100%;
      background-color: var(--primary);
      top: 0;
      &:nth-child(2) {
        left: 33.333%;
      }
      &:nth-child(3) {
        left: 66.666%;
      }
    }
  } */
`;
