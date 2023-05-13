import React, { useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { offSidebar } from "../../Features";

export default function SmallSidebar() {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((store) => store.toggle);
  const [togglesidebar, setToggleSidebar] = useState(false);
  return (
    <SmallSidebarContent className={sidebar ? "active" : ""}>
      <div className="barWrapper1" onClick={() => dispatch(offSidebar())}>
        <RxCross2 />
      </div>
      <div className="smallSidebarWrapper">
        <ul className="flex column">
          <li className="text-center w-100 gap-2 item-center px-2 py-1 family2 f-16 text-bold pt-2 text-blue">
            Home
          </li>
          <li className="text-center w-100 gap-2 item-center px-2 py-1 family2 f-16 text-bold pt-2 text-blue">
            About Me
          </li>
          <li className="text-center w-100 gap-2 item-center px-2 py-1 family2 f-16 text-bold pt-2 text-blue">
            MY Skills
          </li>
          <li className="text-center w-100 gap-2 item-center px-2 py-1 family2 f-16 text-bold pt-2 text-blue">
            Project Collections
          </li>
          <li className="text-center w-100 gap-2 item-center px-2 py-1 family2 f-16 text-bold pt-2 text-blue">
            Contact Me
          </li>
        </ul>
      </div>
    </SmallSidebarContent>
  );
}

const SmallSidebarContent = styled.div`
  position: fixed;
  left: 0;
  z-index: 2200;
  transition: all .5s;
  width: 100%;
  background: #fff;
  height: 100vh;
  top: -100%;
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
    @media (min-width: 780px) {
      display: none;
    }
    svg {
      width: 3rem;
      height: 3rem;
      color: #fff;
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
      li {
        font-size: 40px;
        font-weight: normal;
        color: var(--primary);
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
