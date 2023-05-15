import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
export default function Message({
  showAlert,
  alertText,
  alertType,
  handleClearAlert,
}) {
  // dispatch
  const dispatch = useDispatch();

  return (
    <MessageContent
      className={
        showAlert
          ? "family1 gap-1 flex item-center justify-space active"
          : alertType === "danger"
            ? "family1 gap-1 flex item-center danger justify-space"
            : "family1 gap-1 flex item-center justify-space"
      }
    >
      {alertType === "danger" && <CgDanger className="fs-24" />}
      <div className="flex flex1">{alertText}</div>
      <div className="icon flex item-center justify-center" onClick={() => dispatch(handleClearAlert())}>
        <RxCross1 />
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  width: 450px;
  padding: 1rem 2rem;
  min-height: 7rem;
  background-color: #222;
  position: fixed;
  z-index: 100000;
  left: 1%;
  bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  transition: all 1.3s;
  /* transform: translate3d(0, -100px, 0); */
  left: -100%;
  &.active {
    left: 1%;
  }
  &.danger {
    background-color: var(--red);
    color: #fff;
    top: 20px;
  }
  @media (max-width: 780px) {
    min-width: 300px;
    justify-content: flex-start;
  }
  .flex1 {
    flex: 1;
  }
  .icon {
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    &:hover {
      background-color: #6c6868;
    }
    svg {
      font-size: 20px;
      color: var(--grey-2);
    }
  }
`;
