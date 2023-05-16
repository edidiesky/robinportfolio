import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import styled from "styled-components";
import { Link } from "react-router-dom"
import AnimatedLetters from "../common/Animatedletters";

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
  const [letterclass, setLetterClass] = useState("text-animate");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLetterClass('text-bounce')
  //   }, 4000);
  // }, [setLetterClass])
  const WorkRight = () => {
    return (
      <div className="WorkRight flex justify-center item-center hidden">
        <div
          className="layout flex justify-center content item-center"
          data-aos="fade-left"
          data-aos-duration="1250"
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
          <h4 className="flex fs-20 family1 text-light item-center gap-1 text-secondary">
            <AnimatedLetters
              strArray={"Nice to meet you!".split("")}
              idx={12}
              letterClass={letterclass}
            />
          </h4>
          <div className="flex w-100 column">
            <h1 className="text-white">
              <AnimatedLetters
                strArray={"I'm Victor Robin,".split("")}
                idx={12}
                letterClass={letterclass}
              />
            </h1>
            <h1 className="text-grey">
              <AnimatedLetters
                strArray={"I develop beautiful".split("")}
                idx={24}
                letterClass={letterclass}
              />
            </h1>
            <h1 className="text-grey">
              <AnimatedLetters
                strArray={"and functional websites".split("")}
                idx={38}
                letterClass={letterclass}
              />
            </h1>
          </div>
          <h4 className="family1 w-90 fs-20 text-light text-grey">
            {/* I’m a full stack developer specializing in building server and
            client side section of the web with exceptional digital experiences
            for the user. Currently, I’m working as a{" "} */}
            I’m working as a <span className="textActive">freelancer</span> and
            looking for various opportunities to create{" "}
            <span className="textActive">value to organization's</span> brands
            and product.{" "}
          </h4>
          <div className="w-100 wrapperlink py-2 flex gap-2 hidden">
            {/* <Link
              to={"/contact"}
              className="btn fs-16 py-2 px-4 text-white text-bold"
              style={{ padding: "1.4rem 4rem" }}
            >
              Contact Me
            </Link> */}
            <Link to={"/"}>
              <BsInstagram color="var(--grey-1)" fontSize={"24px"} />
            </Link>
            <Link to={"/"}>
              <BsGithub color="var(--grey-1)" fontSize={"24px"} />
            </Link>
            <Link to={"/"}>
              <BsTwitter color="var(--grey-1)" fontSize={"24px"} />
            </Link>
            <Link to={"/"}>
              <AiFillLinkedin color="var(--grey-1)" fontSize={"24px"} />
            </Link>
            <Link to={"/"}>
              <GrFacebook color="var(--grey-1)" fontSize={"24px"} />
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
  background-color:var(--primary);
  width: 100%;
  padding: 15rem 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  @media (max-width: 780px) {
    padding: 8rem 0;
  }
  .content {
    width: 16rem;
    height: 20rem;
  }
  .wrapperlink {
    animation: fadeInUp 1s 2s backwards;
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
    animation: fadeIn 10s 2s backwards;
    @media (max-width: 780px) {
      font-size: 15px;
    }
  }
  h1 {
    font-size: 4.5rem;
    line-height: 56px;
    font-weight: normal;
    &.text-grey {
      font-size: 4rem;
    }
    @media (max-width: 780px) {
      font-size: 3.5rem;
      font-weight: 400;
    }
  }
  .WorkRight {
    flex: 0.5;
    @media (max-width: 1280px) {
      flex: 0.6;
    }
  }
  a {
    transition: all 0.6s;
    &:hover {
      opacity: 0.7;
    }
  }
`;




