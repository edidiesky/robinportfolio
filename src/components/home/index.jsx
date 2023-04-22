import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Head } from "../common";
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

export default function WorkIndex() {
  const [letterclass, setLetterClass] = useState("text-animate");
  const WorkRight = () => {
    return (
      <div className="w-100 flex justify-center item-center hidden">
        <div
          className="layout flex justify-center item-center"
          data-aos="fade-left"
          data-aos-duration="1150"
          data-aos-delay="750"
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
            {/* <group>
      <primitive>
        <planeBufferGeometry attach={"geometry"} args={[100, 100]} />
      </primitive>
    </group> */}
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
        <Head text={"Hi,"} />
        <h2>
          <AnimatedLetters
            letterClass={letterclass}
            strArray={"Edidiong Essien.".split("")}
            idx={19}
          />
        </h2>
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
  .wrapper {
    width: 100%;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 35vw;
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
    }
    h1 {
      font-size: 8rem;
      font-weight: 700;
      width: 100%;
      color: var(--dark-1);
      .span1 {
        color: #fff;
        font-size: 40px;
      }
    }
    h2 {
      font-size: 6rem;
      font-weight: 700;
      width: 100%;
      color: #fff;
      width:100%;
            position:relative;
      .span1 {
        color: #fff;
        font-size: 40px;
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
  }
`;
