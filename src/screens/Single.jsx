import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import LocomotiveScroll from "locomotive-scroll";
import PixelBackground from "../components/common/PixelBackground";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import SingleIndex from "../components/single";
const SingleWrapper = styled.div`
  min-height: "100vh";
  overflow: hidden;
`;

export default function Single() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const singleref = useRef(null);
  useEffect(() => {
    let locoScroll;
    const locomotive = new LocomotiveScroll({
      el: singleref?.current,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
      smoothMobile: true,
    });
    new ResizeObserver(() => locomotive.update()).observe(singleref?.current);
    return () => {
      locomotive.destroy();
    };
  }, []);
  return (
    <>
      <PixelBackground />
      <div className="topHeader flex item-center justify-space w-100">
        <div className="w-90 flex item-center justify-space auto">
          <Link to={'/'} className="fs-16 text-grey text-light">@ Code By Victor</Link>
          <div className="flex item-center justify-end gap-1">
            <div className="card_btn_wrapper family2 flex item-center justify-center">
              <div className="card_btn fs-18 flex justify-center item-center text-white text-light">
                <h5 className="text1">
                  <Link to={"/contact"} className="text-light text-grey">
                    Contact Me
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" wrapperlink flex item-center column gap-2">
        <Link
          to={"https://github.com/edidiesky"}
          target="_blank"
          className="social"
        >
          <BsGithub />
        </Link>
        <Link
          to={"https://twitter.com/DevtorCode/status/1660742554789335074?s=20"}
          target="_blank"
          className="social"
        >
          <BsTwitter />
        </Link>
        <Link
          to={"https://linkedin.com/in/robinvictoro"}
          target="_blank"
          className="social"
        >
          <FaLinkedinIn />
        </Link>
        <div className="arrow"></div>
      </div>
      <SingleWrapper
        ref={singleref}
        style={{ perspective: "1px", minHeight: "100vh" }}
        data-scroll-section
        className="home_container"
      >
        <SingleIndex />
      </SingleWrapper>
    </>
  );
}
