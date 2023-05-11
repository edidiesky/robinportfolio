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
      <div className="WorkRight flex justify-center item-center hidden">
        <div
          className="layout flex justify-center content item-center"
          data-aos="fade-left"
          data-aos-duration="1150"
          data-aos-delay="750"
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
        <div className="left w-100 h-100 flex column gap-3">
          <h4 className="flex fs-16 family2 text-light item-center gap-1 text-secondary">
            Hi, there<span className="span">my name is</span>
          </h4>
          <div className="flex column gap-2">
            <h1 className="text-white family1">EDIDIONG ESSIEN</h1>
            <h1 className="text-white family1 active">
              I create habitation for things on the web.
            </h1>
          </div>
          <h4 className="family2 w-85 fs-18 text-light text-white">
            I’m a full stack developer specializing in building server and
            client side section of the web with exceptional digital experiences
            for the user. Currently, I’m working as a freelancer and looking for
            various opportunities to add value to organizations brands and
            product.{" "}
          </h4>
          <div className="w-100 flex gap-2 hidden">
            <Link
              to={"/contact"}
              className="btn fs-16 py-2 px-4 text-white text-bold"
              style={{ padding: "1.4rem 4rem" }}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <WorkWrapper>
      <div className="wrapper w-85 auto flex item-center gap-3 justify-space">
        <WorkLeft />
        <WorkRight />
      </div>
    </WorkWrapper>
  );
}

const WorkWrapper = styled.div`
  background-color: var(--dark-3);
  width: 100%;
  padding: 7rem 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  .content {
    width: 20rem;
    height: 30rem;
  }
  .wrapper {
    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
  h4 {
    line-height: 25px;
  }
  h1 {
    font-size: 6rem;
    line-height: 50px;
    font-family: "Roboto Slab", sans-serif;
    &.active {
      color: #ffffff7a;
      font-size: 5rem;
    }
    @media (max-width: 780px) {
      font-size: 4.7rem;
    }
  }
  .WorkRight {
    flex: 0.5;
  }
`;
