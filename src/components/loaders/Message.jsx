import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
import { useEffect } from "react";
import { clearUserAlertError } from "../../Features/user/userSlice";
export default function Message({
  showAlert,
  alertText,
  alertType,
  handleClearAlert,
}) {
  // dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    setTimeout(() => {
      dispatch(clearUserAlertError())
    }, 1000);
  },[])
  return (
    <MessageContent
      className={
        showAlert
          ? "family1 gap-1 flex item-center justify-space active"
          : alertType === "danger"
            ? "family1 gap-1 flex item-center active danger justify-space"
            : "family1 gap-1 flex item-center justify-space danger"
      }
    >
      {alertType === "danger" && <CgDanger className="fs-24" />}
      <div className="flex flex1">{alertText}</div>
      <div className="icon flex item-center justify-center" onClick={() => dispatch(clearUserAlertError())}>
        <RxCross1 />
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  width: 450px;
  padding: 1rem 2rem;
  min-height: 6rem;
  background-color: #222;
  position: fixed;
  z-index: 100000;
  left: 1%;
  bottom: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  transition: all 2s;
  /* transform: translate3d(0, -100px, 0); */
  left: -1000%;
  &.active {
    left: 1%;
  }
  &.danger {
    background-color: var(--red);
    color: #fff;
  }
  @media (max-width: 580px) {
    width: 300px;
    font-size: 1.4rem;
    justify-content: flex-start;
    min-height: 6rem;
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
    @media (max-width: 780px) {
      font-size: 17px;
      width: 3rem;
    height: 3rem;
  }
  }
`;
