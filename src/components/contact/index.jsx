import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserAlertError,
  handleMessage,
  handleform,
} from "../../Features/user/userSlice";
import Message from "../loaders/Message";
import { useEffect } from "react";
import { useRef } from "react";

export default function ContactIndex() {
  const [formdata, setFormData] = useState({
    user_email: "",
    user_name: "",
    message: "",
    subject: "",
  });
  const form = useRef();
  const dispatch = useDispatch();
  const { user_email, user_name, message, subject } = formdata;
  const { showAlert, alertText, alertType } = useSelector(
    (store) => store.user
  );
  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // performing form submission to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user_email || !subject || !user_name || !message) {
      dispatch(handleform(formdata));
    } else {
      emailjs
        .sendForm(
          "service_5qrqvgj",
          "template_j0u5e1n",
          form.current,
          "QWKTEx5C0Fp0YpDNp"
        )
        .then(
          (result) => {
            setFormData({
              user_email: "",
              user_name: "",
              message: "",
              subject: "",
            });
            dispatch(handleMessage("Message has been sucessfully sent"));
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    // dispatch(loginCustomer(formdata));
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(clearUserAlertError());
    }, 1000);
  }, []);

  return (
    <ContactWrapper id="contact">
      <Message
        alertText={alertText}
        alertType={alertType}
        showAlert={showAlert}
      />
      <div className="image"></div>
      <div className="imagegradient w-100 h-100"></div>
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
          <form
            ref={form}
            className="authContentFormWrapper flex column gap-4"
            onSubmit={handleSubmit}
          >
            {/* name */}
            <label htmlFor="name" className="label">
              <div className="inputWrapper w-100">
                <div className="spantext">Name</div>
                <input
                  onChange={onChange}
                  value={user_name}
                  name="user_name"
                  id="name"
                  type="text"
                  className="input"
                />
                <div className="contactspan"></div>
              </div>
            </label>
            {/* email */}
            <label htmlFor="email" className="label">
              <div className="inputWrapper w-100">
                <div className="spantext">Email</div>
                <input
                  onChange={onChange}
                  value={user_email}
                  name="user_email"
                  id="email"
                  type="email"
                  className="input"
                />
                <div className="contactspan"></div>
              </div>
            </label>
            {/*  */}
            <label htmlFor="subject" className="label">
              <div className="inputWrapper w-100">
                <div className="spantext">Subject</div>
                <input
                  onChange={onChange}
                  value={subject}
                  name="subject"
                  id="subject"
                  type="text"
                  className="input"
                />
                <div className="contactspan"></div>
              </div>
            </label>
            <label htmlFor="message" className="label">
              <div className="inputWrapper w-100 area">
                <div className="spantext">message</div>
                <textarea
                  onChange={onChange}
                  name="message"
                  value={message}
                  id="message"
                  type="text"
                  className="area"
                />
                <div className="contactspan"></div>
              </div>
            </label>
            <div className="w-100 bntWrapper flex gap-2 item-center justify-center hidden">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn fs-24 py-2 px-4 text-white text-bold"
                style={{ padding: ".8rem 4rem", fontWeight: "normal" }}
              >
                Lets Talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  padding: 10rem 0;
  z-index: 40;
  .bntWrapper {
    padding: 4rem 0;
  }
  .head::after {
    left: 50%;
    transform: translateX(-45%);
  }
  .text1,
  h3 {
    width: 60%;
    @media (max-width: 780px) {
      width: 90%;
      text-align: center;
    }
  }
  .imagegradient {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    );
  }
  .image {
    background-size: cover;
    background-image: url("chat_1.jpg");
    position: absolute;
    background-position: center;
    width: 100%;
    z-index: -1;
    height: 100%;
    background-attachment: fixed;
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
  .label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.8rem;
    font-family: "Nunito", sans-serif;
    z-index: 400;
    .inputWrapper {
      width: 100%;
      position: relative;
      gap: 2rem;
      /* &.area {
      height: 7rem;
    } */
      .spantext {
        position: absolute;
        top: -60%;
        gap: 0.3rem;
        font-size: 1.4rem;
        color: #fff;
        text-transform: uppercase;
        font-family: inherit;
        font-weight: 600;
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
        &:focus ~ .contactspan {
          width: 100%;
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
  }
`;
