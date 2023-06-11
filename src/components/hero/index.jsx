import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import SplitType from "split-type";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Balls = () => {
  const primitive = useRef(null);
  const earth = useGLTF("./planet/scene.gltf");
  useFrame(
    () => (primitive.current.rotation.x = primitive.current.rotation.y += 0.01)
  );
  return (
    <primitive ref={primitive} scale={2.2} object={earth.scene}>
      <MeshWobbleMaterial />
    </primitive>
  );
};

export default function HeroIndex() {
  const WorkRight = () => {
    return (
      <div className="WorkRight flex justify-center item-center hidden">
        <div
          className="layout flex justify-center content item-center"
          style={{ width: "100%" }}
        >
          <Canvas camera={{ position: [-5, 2, 10], fov: 20 }}>
            <ambientLight intensity={0.4} />
            <directionalLight
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
              position={[0, 10, 0]}
              intensity={0.15}
            />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={0.15} />
            <Balls position={[1, 0, 1]} args={[2, 1, 1]} color="lightblue" />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    );
  };

  const WorkLeft = () => {
    return (
      <div className="flex-1">
        <div className="left w-100 h-100 flex column gap-2">
          <h4 className="flex fs-20 family1 herotext text-light item-center gap-1 text-secondary">
            Nice to meet you!
          </h4>
          <div className="flex textwrapper w-100 column">
            <h1 id="herotext1" className="text-white herotext hidden">
              I'm Victor Robin
            </h1>
            <div className="hidden w-100">
              <h2 id="herotext2" className="text-grey herotext2 block">
                I develop beautiful <br /> and functional websites
              </h2>
            </div>
          </div>
          <h4 className="family1 w-90 fs-24 social text-light text-grey">
            I’m working as a <span className="textActive">freelancer</span> and
            looking for various opportunities to create{" "}
            <span className="textActive">value to organization's</span> brands
            and product.{" "}
          </h4>
          <div className="w-100 wrapperlink flex gap-2">
            <Link
              to={"https://github.com/Vivixell/portfolioVictorRobin"}
              target="_blank"
              className="social"
            >
              <BsGithub color="var(--grey-1)" fontSize={"26px"} />
            </Link>
            <Link
              to={
                "https://twitter.com/DevtorCode/status/1660742554789335074?s=20"
              }
              target="_blank"
              className="social"
            >
              <BsTwitter color="var(--grey-1)" fontSize={"26px"} />
            </Link>
            <Link
              to={"https://linkedin.com/in/robinvictoro"}
              target="_blank"
              className="social"
            >
              <AiFillLinkedin color="var(--grey-1)" fontSize={"26px"} />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <WorkWrapper>
      <div className="wrapper w-85 auto flex item-center gap-6 justify-space">
        <WorkLeft />
        <WorkRight />
      </div>
    </WorkWrapper>
  );
}

const WorkWrapper = styled.div`
  background-color: var(--primary);
  width: 100%;
  padding: 15rem 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  @media (max-width: 780px) {
    padding: 8rem 0;
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
  .wrapper {
    gap: 4rem;
    @media (max-width: 780px) {
      flex-direction: column;
      gap: 6rem;
    }
  }
  h4 {
    line-height: 26px;
    font-size: 17px;
    @media (max-width: 780px) {
      font-size: 15px;
    }
  }
  h2 {
    font-size: 5rem;
    line-height: 40px;
    font-weight: 400;
  }
  h1 {
    font-size: 11.5rem;
    line-height: 110px;
    font-weight: normal;

    @media (max-width: 780px) {
      line-height: 100px;
      font-size: 12rem;
    }
    @media (max-width: 590px) {
      line-height: 95px;
      font-size: 10.5rem;
    }
    @media (max-width: 350px) {
      line-height: 90px;
      font-size: 9rem;
      &.text-grey {
        font-size: 4.5rem;
        line-height: 40px;
      }
    }
  }

  .WorkRight {
    flex: 0.5;
    @media (max-width: 1280px) {
      flex: 0.6;
    }
  }
  .social {
    transition: all 0.6s;
    &:hover {
      color: var(--secondary);
    }
  }
`;
