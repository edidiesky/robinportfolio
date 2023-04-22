import React, { useState } from "react";
import styled from "styled-components";

export default function Input({ id, onChange, errorMessage, index, ...props }) {
  const [touched, setTouched] = useState(false);
  const handleTouch = () => {
    setTouched(true);
  };
  return (
    <div className="w-100 hidden">
      <LabelContainer
        htmlFor={id}
      >
        {id}
        <input
          {...props}
          onBlur={handleTouch}
          onFocus={() => (props.name === "password2" ? setTouched(true) : "")}
          focused={touched.toString()}
          onChange={onChange}
        />
        <span className="error">{errorMessage}</span>
      </LabelContainer>
      ''
    </div>
  );
}

const LabelContainer = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.3rem;
  color: #fff;
  font-weight: 500;
  text-transform: capitalize;

  input {
    height: 5.5rem;
    background: var(--dark-1);
    padding: 0 2.4rem;
    box-shadow: 0 1px 2px rgba(0,0,0,.3);
    width: 100%;
    border-radius: 3px;
    border: 1px solid var(--dark-1);
    outline: none;
    font-size: 1.4rem;
    font-weight: 400;
    transition: all 0.2s;
    color: #fff;
    &:hover {
      border: 1px solid #222;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
    }
    &:focus {
      border: 1px solid #222;
    }
    &.inputError {
      border: 1px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
    &:invalid[focused="true"] {
      border: 1px solid var(--red);
    }
    &:valid[focused="true"] {
      border: 1px solid var(--green);
    }
  }

  span {
    font-size: 1rem;
    color: #c61212;
    font-weight: 600;
    display: none;
  }
`;
