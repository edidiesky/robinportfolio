import React from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ x, index }) {
  // console.log(x?.image?.length);
  return (
    <CardContent
      className=""
      key={index}
      style={{
        minheight: "50rem",
        padding: "1rem 0",
      }}
    >
      <div className="w-100 wrapper">
        <div className="gradient">
          <Link
            to={"/"}
            className="flex item-center fs-12 text-white text-bold"
            style={{ gap: ".5rem" }}
          >
            <BiCart className="fs-16" />
            Add to cart
          </Link>

          <Link
            to={"/"}
            className="flex item-center fs-12 text-white text-bold"
            style={{ gap: ".5rem" }}
          >
            <BiCart className="fs-16" />
            Details
          </Link>
        </div>
        <div to={"/product"}>
          {x?.image?.length > 1 ? (
            <img src={x?.image[1]} alt="" style={{ width: "100%" }} />
          ) : (
            <img src={x?.image} alt="" style={{ width: "100%" }} />
          )}
        </div>
      </div>
      <div className="w-85 auto py-1">
        <h4 className="fs-16 text-extra-bold">
          {x?.name}
          <span className="fs-16 text-primary text-light block">
            ${x?.price}
          </span>
        </h4>
      </div>
    </CardContent>
  );
}

const CardContent = styled.div`
.wrapper {
  position: relative;
  overflow: hidden;
  height: 39rem;
  &:hover {
    .gradient {
      top: 0;
    }
  }
  .gradient {
    background-image: linear-gradient(
      to top,
      #ff966d 0,
      hsla(215, 61%, 54%, calc(100% - 7.5%)) 100%
    );
    position: absolute;
    top: 100%;
    left: 0;
    height: 100%;
    transition: all 0.5s;
    width: 100%;
    display: flex;
    z-index: 1000;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
}
`;
