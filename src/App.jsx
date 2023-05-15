import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Pace from "pace-js";
import "pace-js/themes/yellow/pace-theme-minimal.css";
import gsap from "gsap";
import AOS from "aos";
import { Canvas, useFrame } from "@react-three/fiber";
import "aos/dist/aos.css";
import "animate.css";
import { Layout } from "./screens";
import Preloader from "./gsap";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    Pace.on("done", () => {
      gsap
        .timeline()
        .add("p")
        .to(".pace", {
          transform: "scale(10,1)",
          duration: 3,
        }, "+=.3")
        .to(
          ".pace",
          {
            height: "100%",
            duration: 0.9,
            top: 0,
          }, "-=.3"
        )
        .to(
          ".pace",
          {
            height: "100%",
            duration: 0.9,
            top: 0,
            background: "none",
            visibility:'hidden'
          }, "-=.3"
        )
        .to(
          ".preloader .loading_text",
          {
            delay: 0.2,
            duration: 4,
            opacity: 0,
            yPercent: -400,
            ease: "expo. inOut",
          },
          "p"
        ).to(
          ".preloader",
          {
            delay: 0.2,
            duration: 8,
            opacity: 0,
            visibility:'hidden'
          }
        );
    });
  }, []);
  const [height, setHeight] = useState(0);


  return (
    <div className="based" style={{ height }}>
      {/* <Preloader /> */}
      <div className="preloader">
        <div className="loading_text family1 fs-12 text-white text-light ">
          LOADING
        </div>
      </div>
      <Routes>
        <Route path={"/"} element={<Layout />}></Route>
      </Routes>
    </div>
  );
}
