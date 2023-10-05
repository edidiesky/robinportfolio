import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SplitType from "split-type";
import "pace-js/themes/yellow/pace-theme-minimal.css";
import { Contact, Home, Layout, Single } from "./screens";
import LoaderIndex from "./components/loaders";
import { Suspense } from "react";
export default function App() {
  const [height, setHeight] = useState(0);
  
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            path=""
            element={
              <Suspense fallback={<LoaderIndex />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="work/:id"
            element={
              <Suspense fallback={<LoaderIndex />}>
                <Single />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<LoaderIndex />}>
                <Contact />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
