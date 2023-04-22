import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Meta } from "../components/common";
import Input from "../components/forms/Input";
import { loginCustomer } from "../Features/user/userReducer";

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
    name: "password",
    placeholder: "Minimum 8 Characters",
    type: "password",
    text: "password",
    errorMessage:
      "Password should be 8-20 characters Long and should include 1 letter and 1 special Character",
    required: true,
    pattern:
      "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[#$@!%&*?])[a-zA-Z0-9!#$@!%&*]{8,30}$",
  },
];

export default function Login() {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  // performing form submission to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginCustomer(formdata));
  };
  return (
    <>
      <Meta title="Login - Retail" />
      <div className="w-100 py-6">
        <div
          className="w-90 auto py-3 flex column gap-2 item-start"
          style={{ border: "1px solid rgba(0,0,0,.1)", padding: "3rem" }}
        >
          <h2
            className="py-2 fs-40 text-bold text-dark"
            style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
          >
            Login
          </h2>
          <div className="w-100 py-3">
            <form
              className="authContentFormWrapper flex column gap-2"
              onSubmit={handleSubmit}
            >
              {inputData.map((input) => {
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
                    required={input.required}
                    pattern={input.pattern}
                    errorMessage={input.errorMessage}
                  />
                );
              })}
              <div className="w-100 flex gap-2">
                <button
                  className="btn fs-16 py-2 px-4 radius4 text-white text-bold"
                  style={{ padding: "1.4rem 4rem" }}
                >
                  SignUp with Avanda
                </button>
              </div>
              <p className="fs-14 text-bold text-grey">
                Not yet a Member? <Link to={"/register"}>Register Now</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
