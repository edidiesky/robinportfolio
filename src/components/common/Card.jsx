import React from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Card({ x, index }) {
  // console.log(x?.image?.length);
  return (
    <div
      className=""
      key={index}
      style={{
        border: "1px solid rgba(0,0,0,.08)",
        minheight: "50rem",
        padding: "1rem 0",
      }}
    >
      <Link to={"/product"}>
        {x?.image?.length > 1 ? (
          <img src={x?.image[1]} alt="" style={{ width: "100%" }} />
        ) : (
          <img src={x?.image} alt="" style={{ width: "100%" }} />
        )}
      </Link>
      <div className="w-85 auto py-1">
        <h4 className="fs-16 text-extra-bold">
          {x?.name}
          <span className="fs-16 text-primary text-light block">${x?.price}</span>
        </h4>
      </div>
      <div
        className="w-90 auto py-2 flex column gap-1"
        style={{ paddingTop: "3rem" }}
      >
        <div
          className=""
          style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}
        ></div>
        <div
          className=""
          style={{ borderBottom: "1px solid rgba(0,0,0,.08)" }}
        ></div>
      </div>
      <div className="w-90 auto flex item-center justify-space">
        <Link to={'/'} className="flex item-center fs-12 text-dark text-light" style={{gap:'.5rem'}}>
          <BiCart className="fs-16"/>
          Add to cart
        </Link>

        <Link to={'/'} className="flex item-center fs-12 text-dark text-light" style={{gap:'.5rem'}}>
          <BiCart className="fs-16"/>
          Details
        </Link>
      </div>
    </div>
  );
}
