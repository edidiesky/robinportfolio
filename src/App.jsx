import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Pace from "pace-js";
import "pace-js/themes/yellow/pace-theme-minimal.css";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { Layout } from "./screens";

export default function App() {
  useEffect(() => {
    //  preloader
    Pace.on("done", () => {
      gsap
        .timeline()
        .add("p")
        .to(".pace", {
          duration: 0.4,
          delay: 0.8,
          ease: "power1.out",
        })
        .to(
          ".pace",
          {
            height: "100%",
            duration: 0.8,
            top: 0,
            visibility: "hidden",
          },
          "-=.3"
        )
        .to(
          ".preloader .loading_text",
          1.3,
          {
            delay: 0.2,
            duration: 6,
            opacity: 0,
            yPercent: -400,
            ease: "expo.inOut",
          },
          "p"
        )
        .to(
          ".preloader",
          {
            delay: 0.8,
            duration: 1,
            top: -10000,
            ease: "expo.inOut",
          },
          "p"
        )
        .from(
          ".textwrapper .text1",
          {
            delay: 1.2,
            duration: 1.2,
            y: 100,
            skewY: 7,
            ease: "power4.Out",
            stagger: {
              amount: 0.4,
            },
          },
          "p"
        );
    });
    AOS.init({
      once: true,
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
