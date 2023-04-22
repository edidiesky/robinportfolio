import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaExclamationCircle, FaTimes } from "react-icons/fa";
import styled from "styled-components";

export default function Alert2({ form, alertText, alertType }) {
  return (
    <Div>
      <span className={`alert ${alertType}`}>{alertText}</span>
    </Div>
  );
}
const Div = styled.div`
  padding-bottom: 1rem;
  width: 95%;
  margin: 0 auto;
  .alert {
    display: flex;
    align-items: center;
    color: rgb(0 84 210 / 93%);
    border-radius: 10px;
    font-size: 1.4rem;
    font-weight: 600;
    border: 1px solid rgb(0 84 210 / 93%);
    padding: 2rem 4rem;
    transition: all 0.6s var(--transition-1);
    line-height: 2;
    text-transform: uppercase;
    &.success {
      color: #02761f;
      background: #ecf4ee;
      transform: translateY(0);
      border: 1px solid #096921;
    }
    &.danger {
      border: 1.5px solid #c72e2e;
      background-color: #f8efef;
      color: #c72e2e;
      transform: translateY(0);
    }
  }
`;
