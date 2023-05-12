import React, { useEffect } from "react";
import Styled from "styled-components";
import "./letter.scss";

export default function AnimatedLetters({ letterClass, strArray, idx }) {
  // body...
  return (
    <span>
      {strArray.map((x, i) => {
        return (
          <span key={x + i} className={`${letterClass} _${i + idx}`}>
            {x}
          </span>
        );
      })}
    </span>
  );
}
