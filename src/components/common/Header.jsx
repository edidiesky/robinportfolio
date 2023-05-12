import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {HiBars4} from 'react-icons/hi2'
const data = [
  { id: 1, title: "About", path: "About" },
  { id: 2, title: "Passion", path: "Passion" },
  { id: 3, title: "Experience", path: "Experience" },
  { id: 3, title: "Work", path: "Work" },
  { id: 5, title: "Contact", path: "contact" },
];
export default function Header() {
  return (
    <HeaderContent className="w-100">
      <div className="w-85 auto flex item-center justify-space">
        <Link to={'/'} className="uppercase flex-1 family2 text-white fs-30 text-light">
          EDIDIONG ESSIEN
        </Link>
        <div className="icon">
          <HiBars4 fontSize={'24px'} color="#fff"/>
        </div>
        <div className="flex item-center list flex-1 gap-1">
          {data.map((x) => {
            return (
              <Link
                className="link fs-18 uppercase text-white family2"
                to={`${x.path}`}
                key={x.id}
              >
                {x.title}
              </Link>
            );
          })}
        </div>
      </div>
    </HeaderContent>
  );
}

const HeaderContent = styled.div`
  background-color:var(--dark-3);
  padding:2rem 0;
  z-index: 4000;
  a {
    padding: 0 1.7rem;
    transition: all .4s ease;
    &:hover {
      color: var(--secondary);
    }
  }
  .icon {
    @media (min-width: 980px) {
      display: none;
    }
  }
  .list {
    justify-content: flex-end;
    @media (max-width: 980px) {
      display: none;
    }
  }
`;
