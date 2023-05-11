import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import { Canvas, useFrame } from "@react-three/fiber";
import "aos/dist/aos.css";
import "animate.css";
import { Layout } from "./screens";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}></Route>
      </Routes>
    </div>
  );
}
