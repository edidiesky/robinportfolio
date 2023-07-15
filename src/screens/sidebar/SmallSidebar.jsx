import React, { useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { offSidebar } from "../../Features";
import { Link } from "react-scroll";
const data = [
  { id: 1, title: "Home", path: "about" },
  { id: 2, title: "About Me", path: "about" },
  { id: 3, title: "MY Skills", path: "skills" },
  { id: 3, title: "Project Collections", path: "work" },
  { id: 5, title: "Contact Me", path: "contact" },
];
export default function SmallSidebar() {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((store) => store.toggle);
  return (
    <SmallSidebarContent className={sidebar ? "active" : ""}>
      <div className="barWrapper1" onClick={() => dispatch(offSidebar())}>
        <RxCross2 />
      </div>
      <div className="smallSidebarWrapper">
        <ul className="flex column">
          {data.map((x) => {
            return (
              <Link
                spy={true}
                onClick={() => dispatch(offSidebar())}
                smooth={true}
                offset={50}
                duration={1000}
                className="text-center w-100 li gap-2 item-center px-2 py-1 family2 f-16 text-bold pt-2 text-dark"
                to={`${x.path}`}
                key={x.id}
              >
                {x.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </SmallSidebarContent>
  );
}

const SmallSidebarContent = styled.div`
  position: fixed;
  left: 0;
  z-index: 2200;
  transition: all 0.5s;
  width: 100%;
  background: #fff;
  height: 100vh;
  top: -150%;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
  &.active {
    top: 0;
  }
  @media (min-width: 980px) {
    display: none;
  }
  .barWrapper1 {
    width: 100%;
    position: absolute;
    top: 5%;
    right: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 8rem;
    height: 8rem;
    background-color: var(--primary);
    @media (min-width: 980px) {
      display: none;
    }
    svg {
      width: 3rem;
      height: 3rem;
      color: #000;
    }
  }
  .smallSidebarWrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    z-index: 400;
    margin: 0 auto;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      .li {
        font-size: 40px;
        font-weight: normal;
        /* color: var(--primary); */
        padding: 0.5rem 3rem;
        transition: all 0.5s;
        cursor: pointer;
        @media (max-width: 360px) {
          font-size: 35px;
        }
        &:hover {
          background-color: #f7f7f7;
        }
      }
    }
  }
`;
