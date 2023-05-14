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
        },"+=.3")
        .to(
          ".pace",
          {
            height: "100%",
            duration: 0.9,
            top: 0,
          },"-=.3"
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
        );
    });
  }, []);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
    // gsap.to("body", 0, { css: { visibility: "true" } });
    // //  create a timeline
    // const tl = gsap.timeline();
    // tl.to(".top_content", 1.6, {
    //   height: 0,
    //   ease: "expo. inOut",
    //   stagger: 0.4,
    // }).to(".bottom_content", 1.6, {
    //   width: 0,
    //   ease: "expo. inOut",
    //   delay: -0.8,
    //   stagger: {
    //     amount: 0.4,
    //   },
    // });
  }, []);
  return (
    <div className="based" style={{ height }}>
      <Preloader />
      <Routes>
        <Route path={"/"} element={<Layout />}></Route>
      </Routes>
    </div>
  );
  // return (
  //   <div className="based" style={{ height }}>
  //     <Preloader />
  //   </div>
  // );
}
