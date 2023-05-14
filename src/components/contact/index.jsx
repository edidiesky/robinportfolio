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
  {
    id: 3,
    name: "subject",
    placeholder: "Name",
    type: "name",
    text: "subject",
    errorMessage: "It should be a valid subject",
    required: true,
  },
];

export default function ContactIndex() {
  const [formdata, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
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
  const ContactLeft = () => {
    return (
      <div className="contactLeft w-90 auto item-center justify-center h-100 flex column gap-4">
        <div className="w-85 auto">
          <h3
            style={{ fontWeight: "normal" }}
            className="head text-white text-center"
          >
            Get In Touch
          </h3>
          <span
            className="block fs-16 py-1 text1 text-white text-center w-85 auto family1"
            style={{ fontWeight: "300" }}
          >
            Have an interesting work in mind for me? Feel free to send me your
            message!
          </span>
        </div>
        <div className="w-100">
          <form className="authContentFormWrapper flex column gap-4">
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
                <div htmlFor="message">Message</div>
                <textarea
                  name=""
                  className="area"
                  placeholder="How can we help"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div className="w-100 py-6 flex gap-2 item-center justify-center hidden">
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
      <img
        src="https://v2.brittanychiang.com/img/bg-contact/contact-xl.jpg"
        alt=""
        className="w-100 h-100 image"
      />
      <div className="imagegradient w-100 h-100"></div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  position: relative;
  padding: 6rem 0;
  display: grid;
  place-items: center;
  .head::after {
    left: 50%;
    transform: translateX(-45%);
  }
  .text1,
  h3 {
    width: 60%;
    @media (max-width: 580px) {
      width: 90%;
      text-align: start;
      margin: 0;
    }
  }
  .imagegradient {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.61),
      rgba(0, 0, 0, 0.61),
      rgba(0, 0, 0, 0.61),
      rgba(0, 0, 0, 0.61),
      rgba(0, 0, 0, 0.61)
    );
  }
  .image,
  .imagegradient {
    position: absolute;
  }
  .contactLeft {
    z-index: 400;
    gap: 10rem;
  }
  .authContentFormWrapper {
    width: 40%;
    margin: 0 auto;
    @media (max-width: 980px) {
      width: 70%;
    }
    @media (max-width: 580px) {
      width: 90%;
    }
  }
`;
