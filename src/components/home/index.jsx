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
      <div className="flex-1 flex justify-center item-center hidden">
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
        <div className="left w-100 h-100 flex column gap-1">
          <h4 className="flex fs-16 family2 text-light item-center gap-1 text-secondary">
            Hi, there<span className="span">my name is</span>
          </h4>
          <h1 className="text-white family1">EDIDIONG ESSIEN</h1>
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
  .content {
    width: 20rem;
    height: 30rem;
  }
  h1 {
    font-size: 8rem;
    line-height: 1.3;
    font-family: "Roboto Slab", sans-serif;
  }
`;
