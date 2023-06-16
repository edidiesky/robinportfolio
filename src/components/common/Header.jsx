import React from "react";
import styled from "styled-components";
import { HiBars4 } from "react-icons/hi2";
import { onSidebar } from "../../Features";
import { useDispatch } from "react-redux";
import { Link } from "react-scroll";

const data = [
  { id: 1, title: "About", path: "about" },
  { id: 2, title: "Passion", path: "about" },
  { id: 3, title: "Experience", path: "skills" },
  { id: 3, title: "Work", path: "work" },
  { id: 5, title: "Contact", path: "contact" },
];
export default function Header() {
  const dispatch = useDispatch();
  return (
    <HeaderContent className="w-100">
      <div className="w-85 auto flex item-center justify-space">
        <Link
          to={"/"}
          className="uppercase linktext2 flex-1 family2 text-dark fs-30 text-light"
        >
          VICTOR ROBIN
        </Link>
        <div className="icon" onClick={() => dispatch(onSidebar())}>
          <HiBars4 fontSize={"30px"} color="#222" />
        </div>
        <div className="flex item-center list flex-1 gap-4">
          {data.map((x) => {
            return (
              <Link
                spy={true}
                smooth={true}
                duration={1000}
                className="linktext2 linktext1 text-extra-bold fs-18 uppercase text-dark family2"
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
  background-color: var(--primary);
  padding: 2rem 0;
  z-index: 400;
  position: sticky;
  top: 0;
  .linktext2.linktext1 {
    padding: 0 1.7rem;
    font-weight: normal;
    &:hover {
      color: var(--secondary);
    }
  }
  .linktext2 {
    /* opacity: 0;
    transform: translate3d(0, -100px, 0); */
    opacity: 0;
    transform: translateY(-100px);
  }
  .linktext2 {
    padding: 0;
    @media (max-width: 780px) {
      font-size: 3rem;
      font-weight: 400;
    }
  }
  .icon {
    text-align: start;
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
