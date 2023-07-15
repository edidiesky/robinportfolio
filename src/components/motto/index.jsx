import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MottoIndex() {
  return (
    <WorkWrapper>
      <div className="w-85 auto flex item-center gap-6 justify-space">
        <div className="w-100 Motto">
          <div className="left w-100 h-100 flex justify-center item-center column gap-2">
            <h4 className="Mottotext">My Motto</h4>
            <div className="flex textwrapper gap-1 hidden w-100 column">
              <div className="hidden">
                {" "}
                <h2
                  data-aos="fade-up"
                  data-aos-duration="900"
                  className="text-grey Mottotext hidden text-center"
                >
                  SUSTAINABLE CODE
                </h2>
              </div>
              <div className="hidden">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={"250"}
                  className="text-secondary Mottotext hidden text-center"
                >
                  IS HONESTY
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkWrapper>
  );
}

const WorkWrapper = styled.div`
  background-color: var(--primary);
  background-color: #151315;

  width: 100%;
  padding: 10rem 0;

  display: grid;
  place-items: center;
  .hidden {
    overflow: hidden;
  }
  @media (min-width: 1080px) {
    padding: 5rem 0;
    padding: 10rem 0;
    min-height: 100vh;
  }
  @media (max-width: 780px) {
    padding: 10rem 0;
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
      width: 75%;
      margin: 0 auto;
      z-index: 300;
      background-attachment: fixed;
    }
  }
  .social {
    opacity: 0;
  }
  .content {
    width: 19rem;
    height: 25rem;
  }
  .wrapperlink {
    padding-top: 5rem;
  }
  h2 {
    font-size: 14rem;
    line-height: 120px;
    font-weight: 400;
    width: 90%;
    margin: 0 auto;
    letter-spacing: 0px;
    @media (max-width: 980px) {
      line-height: 100px;
      font-size: 10rem;
      width: 80%;
    }

    @media (max-width: 780px) {
      line-height: 100px;
      font-size: 14rem;
    }
    @media (max-width: 590px) {
      line-height: 70px;
      font-size: 10rem;
      width: 100%;
    }
    @media (max-width: 390px) {
      line-height: 70px;
      font-size: 9.8rem;
      width: 100%;
      font-weight: normal;
    }
  }
`;
