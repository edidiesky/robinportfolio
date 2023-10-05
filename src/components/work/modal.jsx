import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import { projectdata } from "../../data/projectdata";
import { scaleAnimations } from "../../utils/framer";



export default function Modal({ modal, projects }) {
  const { index, active } = modal;
  const [path, setPath] = useState({});
  const modalContainer = useRef(null);
  const cursorContainer = useRef(null);
  const labelContainer = useRef(null);
  useEffect(() => {

    let ModalContainerX = gsap.quickTo(modalContainer?.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let ModalContainerY = gsap.quickTo(modalContainer?.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    let labelContainerX = gsap.quickTo(labelContainer?.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let labelContainerY = gsap.quickTo(labelContainer?.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    let xTo = gsap.quickTo(cursorContainer.current, "left", {
        duration: 0.6,
        ease: "power3",
      }),
      yTo = gsap.quickTo(cursorContainer.current, "top", {
        duration: 0.6,
        ease: "power3",
      });

    const handlePosition = (e) => {
      const { pageX, pageY} = e;
      ModalContainerX(pageX);
      ModalContainerY(pageY );
      labelContainerX(pageX);
      labelContainerY(pageY);
      xTo(pageX);
      yTo(pageY);
    };

    window.addEventListener("mousemove", handlePosition);
    return () => window.removeEventListener("mousemove", handlePosition);
  }, []);

  return (
    <>
      <ModalWrapper
        ref={modalContainer}
        as={motion.div}
        variants={scaleAnimations}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="flex item-center justify-center gap-2"
      >
        <div style={{ top: index * -100 + "%" }} className="modal_slider">
          {projectdata.map((data) => {
            // setPath(data.text)
            return (
              <StyledCard
                style={{ background: `${data.color}` }}
                className="cardImage w-100 flex item-center justify-center"
              >
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={data.image}
                  className=""
                  alt=""
                />
              </StyledCard>
            );
          })}
        </div>
      </ModalWrapper>
      <CursorWrapper
        as={motion.div}
        variants={scaleAnimations}
        initial="initial"
        animate={active ? "enter" : "closed"}
        ref={cursorContainer}
      ></CursorWrapper>
      <LabelWrapper
        as={motion.div}
        variants={scaleAnimations}
        initial="initial"
        animate={active ? "enter" : "closed"}
        ref={labelContainer}
      >
        <Link to={`/work/${projectdata[index].text}`}>View</Link>
      </LabelWrapper>
    </>
  );
}

const ModalWrapper = styled(motion.div)`
  position: absolute;
  height: 350px;
  width: 450px;
  background-color: #fff;
  overflow: hidden;
  pointer-events: none;
  .modal_slider {
    height: 100%;
    width: 100%;
    position: absolute;
    transition: top 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }
`;
const StyledCard = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px;
  transition: top 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CursorWrapper = styled(motion.div)`
  background-color: var(--secondary);
  height: 80px;
  position: absolute;
  width: 80px;
  border-radius: 50%;
  color: var(--dark-1);
`;

const LabelWrapper = styled(motion.div)`
  font-size: 20px;
  color: #fff;
  position: absolute;
  a {
    color: #fff;
    &:hover {
      text-decoration: none;
    }
  }
`;
