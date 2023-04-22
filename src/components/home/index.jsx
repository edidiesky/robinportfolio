import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef, useState } from "react";
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

export default function WorkIndex() {
  const [letterclass, setLetterClass] = useState("text-animate");
  const WorkRight = () => {
    return (
      <div className="w-100 flex justify-center item-center hidden">
        <div
          className="layout flex justify-center content item-center"
          data-aos="fade-left"
          data-aos-duration="1150"
          data-aos-delay="750"
          style={{width:"100%"}}
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
      <div className="left w-90 auto h-100 flex column gap-3">
        <h2>CLEAR THINKING MADE VISUAL.</h2>
        <h3 className="flex item-center gap-1">
          EDIDIONG ESSIEN<span className="span">Full Stack Developer</span>
        </h3>
        <div className="w-100 flex gap-2 hidden">
          <Link
            to={"/contact"}
            className="btn fs-18 py-2 px-4 text-white text-bold"
            style={{ padding: "1.4rem 4rem" }}
          >
            Contact Me
          </Link>
        </div>
      </div>
    );
  };

  return (
    <WorkWrapper>
      <div className="wrapper w-90 auto">
        <WorkLeft />
        <WorkRight />
      </div>
    </WorkWrapper>
  );
}

const WorkWrapper = styled.div`
  background-color: var(--dark-3);
  width: 100%;
  min-height: 100vh;
  .content {
    width: 20rem;
    height: 30rem;
  }
  .wrapper {
    width: 100%;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 25vw;
    min-height: 100vh;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
    .grid-auto {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .layout {
      width: 100%;
      height: 50vh;
    }
    .card {
      position: relative;
      background-color: var(--dark-1);
      padding: 1.4rem;
      border-radius: 10px;
      .image {
        width: 100%;
        object-fit: cover;
      }
    }
    .left {
      padding: 7rem 0;
      align-items: center;
      padding: 7rem 0px;
      display: flex;
      /* place-items: center; */
      height: 100%;
      justify-content: center;
    }
    h1 {
      font-size: 8rem;
      font-weight: 700;
      width: 100%;
      color: var(--dark-1);
      .span {
        color: #fff;
        font-size: 40px;
      }
    }
    h2 {
      font-size: 6rem;
      font-weight: 700;
      width: 100%;
      color: #fff;
      width: 100%;
      position: relative;

      .span {
        color: #fff;
        font-size: 40px;
      }
    }
    h3 {
      font-size: 2rem;
      color: #fff;
      line-height: 1.6;
      position: relative;
      width: 100%;
      @media (max-width: 380px) {
        flex-direction: column;
        align-items: flex-start;
      }
      .span {
        position: relative;
        transform: translateX(25px);
        @media (max-width: 380px) {
          transform: translateX(15px);
        }
        &::after {
          width: 0.7rem;
          height: 0.7rem;
          position: absolute;
          left: -8%;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          background-color: var(--secondary);
          content: "";
          @media (max-width: 380px) {
          }
        }
      }
    }
    .para {
      font-size: 1.8rem;
      color: var(--grey-1);
      font-weight: 400;
      font-family: "Lato", sans-serif;
      width: 90%;
      line-height: 1.8;
    }
  }
`;
