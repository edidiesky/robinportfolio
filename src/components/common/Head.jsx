import React from "react";

export default function Head({text, subtext, para}) {
  return (
    <div className="hidden">
      <h1
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
        className="text-extra-bold"
      >
       {text}
        <div className="hidden">
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="block uppercase span1"
          >
           {subtext}
          </span>
        </div>

        <div className="hidden">
          <span
            data-aos="fade-up"
            data-aos-duration="1050"
            data-aos-delay="450"
            className="block py-2 para para1"
          >
           {para}
          </span>
        </div>
      </h1>
    </div>
  );
}
