import React, { useState } from "react";
import styled from "styled-components";
import { AiFillWarning } from "react-icons/ai";

export default function Input({ id, onChange, errorMessage, index, ...props }) {
  const [touched, setTouched] = useState(false);
  const handleTouch = () => {
    setTouched(true);
  };
  return (
    <div className="w-100">
      <LabelContainer htmlFor={id} className="family2">
        <div className="inputWrapper flex column">
          <input
            {...props}
            onBlur={handleTouch}
            onFocus={() => (props.name === "password2" ? setTouched(true) : "")}
            focused={touched.toString()}
            onChange={onChange}
          />
          <div className="spantext">{id}</div>
          <div className="contactspan"></div>
          <span className="error flex gap-1">
            <AiFillWarning fontSize={"14px"} /> {errorMessage}
          </span>
        </div>
      </LabelContainer>
    </div>
  );
}

const LabelContainer = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  .inputWrapper {
    width: 100%;
    position: relative;
    gap: 2rem;
    .spantext {
      position: absolute;
      top: -60%;
      gap: 0.3rem;
      font-size: 1.7rem;
      color: #fff;
      text-transform: uppercase;
      font-family: inherit;
      font-weight: normal;
      letter-spacing: 1px;
      transition: all 0.6s ease;
    }
    input {
      height: 4rem;
      background: transparent;
      padding: 0;
      width: 100%;
      border: none;
      outline: none;
      font-size: 1.6rem;
      font-weight: 400;
      transition: all 0.6s;
      color: #fff;
      font-family: "Nunito", sans-serif;
      border-bottom: 1px solid #fff;
      &:focus {
        font-size: 1.8rem;
      }
      &:focus ~ .contactspan {
        width: 100%;
      }
      &:focus + .spantext {
        transform: translate3d(-10px, -10px, 0) scale(.8);
      }
      /* &.inputError {
      border: 1px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: flex;
    }
    &:invalid[focused="true"] {
      border: 1px solid var(--red);
    }
    &:valid[focused="true"] {
      border: 1px solid var(--green);
    } */
    }
    .contactspan {
      width: 0;
      background-color: var(--secondary);
      height: 1px;
      position: absolute;
      bottom: 0%;
      border-radius: 10px;
      transition: all 0.6s ease;
    }

    span {
      font-size: 1.2rem;
      color: #c61212;
      font-weight: 600;
      display: none;
    }
  }
`;
