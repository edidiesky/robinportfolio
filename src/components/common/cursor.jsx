import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Cursor = () => {
  const [screenX, setSreenX] = useState(0);
  const [screenY, setSreenY] = useState(0);
  const customeref = useRef();

  useEffect(() => {
    // console.log(customeref.current.clientWidth / 2);
    const widthX = customeref.current.clientWidth / 2;
    const widthY = customeref.current.clientHeight / 2;

    window.addEventListener("mousemove", (e) => {
      setSreenX(e.clientX - widthX);
      setSreenY(e.clientY - widthY);
    });
  }, []);
  return (
    <CursorContent
      ref={customeref}
      style={{
        left: screenX + `px`,
        top: screenY + `px`,
      }}
    ></CursorContent>
  );
};

const CursorContent = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: var(--secondary);
  position: fixed;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  z-index: 3000;
`;

export default Cursor;
