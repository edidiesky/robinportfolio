import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaChartBar, FaPhoneAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Dropdown from "./Dropdown";

const SidebarWrapper = styled.div`
  width: 16rem;
  background: var(--primary);

  @media (max-width: 980px) {
    display: inline-block;
    position: fixed;
    top: 0;
    left: -100%;
    display: none;
  }

  .sidebarContainer {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: sticky;
    background: var(--primary);
    left: 0;
    top: 10%;
    li:hover {
      color: var(--secondary);
    }
    li {
      padding:1.8rem;
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.09);
      .nav-link {
        font-size: 16px;
        font-weight: 600;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        color: var(--gradient-3);
        &:hover {
          color: var(--secondary);
        }
        &.active {
          color: var(--secondary);
        }
        svg {
          font-size: 18px;
        }
      }
    }
    /* .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-family: "Karla", sans-serif;
      gap: 1rem;
      .nav-link {
        padding: 14px 20px;
        font-size: 1.3rem;
        height: 3rem;
        font-weight: 600;
        margin: 0 auto;
        width: 100%;
        color: var(--grey-1);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.3rem;
        transition: all 0.5s;
        border-radius: 4px;
        font-family: "Karla", sans-serif;

        &:hover {
          color: var(--secondary);
          transform: translateX(-10px);
        }
        svg {
          font-size: 2rem;
        }
      }
    } */
  }
`;

const sidebarData = [
  { id: 1, text: "Home", icon: <FaHome />, path: "" },
  { id: 2, text: "About", icon: <FaUser />, path: "about" },
  { id: 7, text: "Work", icon: <MdWork />, path: "work" },
  { id: 3, text: "Skills", icon: <FaChartBar />, path: "skills" },
  { id: 4, text: "Contact", icon: <FaPhoneAlt />, path: "contact" },
];

export default function SidebarIndex() {
  const [togglesidebar, setToggleSidebar] = useState(false);
  return (
    <SidebarWrapper>
      <div className="sidebarContainer">
        <ul className="flex column gap-1">
          {sidebarData.map((x, index) => {
            return (
              <li key={x.id} className="hidden">
                <NavLink
                  key={x.id}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to={`/${x.path}`}
                >
                  {x.icon} {x.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </SidebarWrapper>
  );
}
