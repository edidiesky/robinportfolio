import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

export default function Contact() {
  const [user_email, setUser_Email] = useState("");
  const [user_name, setUser_Name] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const form = useRef();
  // console.log(form.current)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user_email || !subject || !user_name || !message || !subject) {
      alert("Fill in the required form data");
    } else {
      emailjs
        .sendForm(
          "service_ikss287",
          "template_jwbhpkj",
          form.current,
          "HvjUueCjGw8jnVKgB"
        )
        .then(
          (result) => {
            setUser_Email("");
            setUser_Name("");
            setMessage("");
            setSubject("");
            alert("Message has been delivered");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    // dispatch(loginCustomer(formdata));
  };

  return (
    <ContactWrapper id="contact" data-scroll-section>
      <div className="left w-90 auto h-100 flex column gap-4">
        <div className="flex top item-center w-85 auto">
          <div className="w-100 flex column gap-2">
            <h2 className="text-white w-100 family1 fs-45">
              Let's start a project together
            </h2>
          </div>
        </div>
        <div className="grid_wrapper w-85 auto" style={{ paddingTop: "4rem" }}>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex column relative"
            style={{ position: "relative" }}
          >
            {/* contact form */}
            <div className="form w-100 flex item-start gap-2">
              <div className="flex">
                <h4>01</h4>
              </div>
              <label htmlFor="user_name" className="flex column w-100 gap-2">
                <h3 className="fs-24 family3 text-white">What's your name?</h3>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  onChange={(e) => setUser_Name(e.target.value)}
                  value={user_name}
                  placeholder="John Doe *"
                  className="input family3"
                />
              </label>
            </div>{" "}
            {/* email */}
            <div className="form w-100 flex item-start gap-2">
              <div className="flex">
                <h4>02</h4>
              </div>
              <label htmlFor="user_email" className="flex column w-100 gap-2">
                <h3 className="fs-24 family3 text-white">What's your email?</h3>
                <input
                  type="text"
                  id="user_email"
                  name="user_email"
                  onChange={(e) => setUser_Email(e.target.value)}
                  value={user_email}
                  placeholder="JohnDoe@gmail.com *"
                  className="input family3"
                />
              </label>
            </div>{" "}
            {/* services */}
            <div className="form w-100 flex item-start gap-2">
              <div className="flex">
                <h4>03</h4>
              </div>
              <label htmlFor="subject" className="flex column w-100 gap-2">
                <h3 className="fs-24 family3 text-white">
                  What services are you looking for?
                </h3>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  placeholder="Web Development"
                  className="input family3"
                />
              </label>
            </div>{" "}
            {/* message */}
            <div
              style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
              className="form w-100 flex item-start gap-2"
            >
              <div className="flex">
                <h4>04</h4>
              </div>
              <label htmlFor="message" className="flex column w-100 gap-2">
                <h3 className="fs-24 family3 text-white">Your message</h3>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  id="message"
                  type="text"
                  placeholder="Hello Victor Robin, can you help me with.... *"
                  className="input family3"
                />
              </label>
            </div>
            <div onClick={handleSubmit} className="card_btn_wrapper2 family2 flex item-center justify-center">
              <div className="card_btn fs-14 flex justify-center item-center text-white text-light">
                <div className="text1 text-center">Contact Me</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;
  padding: 2rem 0;
  padding: 15rem 0;
  display: grid;
  place-items: center;
  z-index: 20000000;
  background-color: #1c1d20;
  .grid_wrapper {
    display: grid;
    grid-template-columns: 1fr 10vw;
    grid-gap: 5rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 780px) {
    font-size: 14px;
  }
  .form {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 4rem 0;
    gap: 6rem;
    &:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
  .card_btn_wrapper2 {
    
    .card_btn {
      padding: 1.6rem 3rem;
      min-width: 16rem;
      height: 16rem;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      background-color: var(--secondary);
      transition: all 0.7s ease;
      transform: translate(120%,-50%);

      border: 1px solid rgba(255, 255, 255, 0.1);
      .text1 {
        z-index: 10;
      }
      &:is(:hover, :focus-visible)::before {
        bottom: 20%;
        transform: translateX(-50%) scale(1.4);
      }
      &::before {
        content: "";
        position: absolute;
        bottom: -200%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 70%;
        border-radius: 100%;
        background-color: #3e4fbcc6;
        /* Add more styles for the card here */
        transition: all 1s ease;
        z-index: 1;
        padding: 2rem;
      }
    }
  }
  .top {
    padding-bottom: 4rem;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }
  }
  h3 {
    @media (max-width: 780px) {
      font-size: 20px;
    }
  }
  input {
    height: 5rem;
    background: transparent;
    padding: 0;
    width: 100%;
    border: none;
    outline: none;
    font-size: 2rem;
    font-weight: 400;
    transition: all 0.6s;
    color: #fff;
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
  textarea {
    height: 15rem;
    background: transparent;
    padding: 0;
    width: 100%;
    border: none;
    outline: none;
    font-size: 2rem;
    font-weight: 400;
    font-family: inherit;
    transition: all 0.6s;
    color: #fff;
    resize: none;
  }
  .image {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    object-fit: cover;
  }
  h2 {
    font-weight: light;
    font-size: 70px;
    position: relative;
    @media (max-width: 980px) {
      font-size: 45px;
    }
    .span {
      position: absolute;
      bottom: -100%;
      left: -30%;
    }
  }
`;
