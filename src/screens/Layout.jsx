import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import SidebarIndex from "./sidebar/index";
const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .LayoutContainer {
    width: 100%;
    .container {
      width: 100%;
      overflow: hidden;
    }
  }
`;

export default function Layout() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <LayoutWrapper className="based" style={{ height }}>
      <div className="LayoutContainer">
        {/* <SidebarIndex /> */}
        <div className="container">
          <Outlet />
        </div>
      </div>
    </LayoutWrapper>
  );
}
