import React, { useState } from "react";
import styled from "styled-components";
import Head from "../common/Head";
import Input from "../forms/Input";

const inputData = [
  {
    id: 1,
    name: "email",
    placeholder: "example@site.com",
    type: "email",
    text: "Email",
    errorMessage: "It should be a valid email",
    required: true,
  },
  {
    id: 2,
    name: "name",
    placeholder: "Name",
    type: "name",
    text: "Name",
    errorMessage: "It should be a valid name",
    required: true,
  },
];

export default function () {
  const [formdata, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  // performing form submission to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(loginCustomer(formdata));
  };
  const ContactRight = () => {
    return (
      <div className="w-100">
        <img
          src="https://avada.website/resume/wp-content/uploads/sites/66/2016/07/contact_bg.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  };

  const ContactLeft = () => {
    return (
      <div className="left w-90 auto h-100 flex column gap-3">
        <Head text={"Contact"} subtext={"Lets Talk."} />
        <div className="w-100 py-4 hidden">
          <form
            className="authContentFormWrapper flex column"
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-duration="950"
            data-aos-delay="400"
          >
            {inputData.map((input, index) => {
              return (
                <Input
                  id={input.text}
                  onChange={onChange}
                  placeholder={input.placeholder}
                  type={input.type}
                  name={input.name}
                  value={formdata[input.name]}
                  input={input}
                  key={input.id}
                  index={index}
                  required={input.required}
                  pattern={input.pattern}
                  errorMessage={input.errorMessage}
                />
              );
            })}
            <div className="w-100 hidden">
              <div className="w-100 flex column gap-1">
                <label htmlFor="message">Message</label>
                <textarea
                  name=""
                  className="area"
                  placeholder="How can we help"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div className="w-100 py-6 flex gap-2 hidden">
              <button
                className="btn fs-16 py-2 px-4 text-white text-bold"
                style={{ padding: "1.4rem 4rem" }}
              >
                Lets Talk
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <ContactWrapper>
      <ContactLeft />
      <ContactRight />
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  width: 100%;
  background-color: var(--dark-3);
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 28vw;
  min-height: 100vh;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
  .area {
    height: 20rem;
    width: 100%;
    border: none;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem;
    color: #fff;
    font-family: inherit;
    background-color: var(--dark-1);
    font-size: 1.4rem;
    font-family: "Karla", sans-serif;
    &:hover {
      border: 1px solid #222;
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
  .left {
    padding: 7rem 0;
  }
  h1 {
    font-size: 10rem;
    font-weight: 700;
    width: 90%;
    color: var(--dark-1);
    .span1 {
      color: #fff;
      font-size: 40px;
    }
  }
  label {
    font-size: 1.3rem;
    color: #fff;
    font-weight: 500;
    text-transform: capitalize;
  }
  p {
    font-size: 1.3rem;
    color: #fff;
    line-height: 1.6;
  }
  .para {
    font-size: 1.8rem;
    color: var(--grey-1);
    font-weight: 400;
    font-family: "Lato", sans-serif;
    width: 90%;
    line-height: 1.8;
  }
`;

// https://avada.website/resume/wp-content/uploads/sites/66/2016/07/contact_bg.jpg
