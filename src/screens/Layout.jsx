import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SmallSidebar from "./sidebar/SmallSidebar";
import AboutIndex from "../components/about";
import SkillsIndex from "../components/skills";
import Work from "../components/work";
import Contactindex from "../components/contact";
import Header from "../components/common/Header";
import Message from "../components/loaders/Message";
import HeroIndex from "../components/hero";
const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgb(51, 51, 51);
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
        <Message/>
        <Header />
        <SmallSidebar />
        <div className="container">
          <HeroIndex />
          <AboutIndex />
          <SkillsIndex />
          <Work />
          <Contactindex />
        </div>
      </div>
    </LayoutWrapper>
  );
}
