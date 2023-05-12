import React from "react";
import styled from "styled-components";
import { FaSearchPlus } from "react-icons/fa";
import { work } from "../../data/work";

export default function News() {
  return (
    <NewsContent className="flex w-100 column gap-4">
      <div className="w-85 auto ">
        <h3
          style={{ fontWeight: "normal" }}
          className="head text-white text-start"
        >
          SOME OF MY WORKS
        </h3>
      </div>
      <div
        data-aos="fade"
        data-aos-duration="1600"
        className="w-100 auto gap-2 newswp"
      >
        <div className="headerWrapper w-100">
          <div className="imagegradient"></div>
          <img
            src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b57ecf81371d7ac0ac7f304_boosted-2018-bg.jpg"
            alt=""
            className="imageWrapper"
          />
          <div className="herowrapper h-100 flex justify-center column gap-3 w-85 auto">
            <h4
              style={{ fontWeight: "400" }}
              className="family2 fs-16 text-grey"
            >
              Ful-Stack Development
            </h4>
            <h2 className="fs-46 w-50 family2 text-light text-white">
              WHERE TRAVEL MEETS PHOTOGRAPHY
            </h2>
            <h4 className="family1 fs-14 text-white">
              I was lucky enough to work with the good people at Moment to
              explore ways to improve booking trips on their travel site.
            </h4>
            <div className="w-100 flex item-center gap-2">
              <div className="btn fs-16 family2 py-1">View Demo</div>
              <div className="btn fs-16 family2 py-1">View Code</div>
            </div>
          </div>
        </div>
      </div>
    </NewsContent>
  );
}
const NewsContent = styled.div`
  padding: 4rem 0;
  gap: 7rem;
  background-color: var(--primary);
  .title {
    font-family: "Bebas Neue", sans-serif;
  }
  .btn {
    padding: 0.6rem 2rem;
  }
  .herowrapper {
    z-index: 6000;
    h4 {
      width: 40%;
      @media (max-width: 780px) {
        width: 60%;
      }
      @media (max-width: 480px) {
        width: 70%;
      }
    }
    h2 {
      line-height: 44px;
      font-weight: 500;
      font-size: 60px;
      width: 50%;
      @media (max-width: 780px) {
        width: 60%;
      }
      @media (max-width: 480px) {
        width: 70%;
      }
    }
  }
  .NewsRight1 {
    height: 30rem;
    transition: all 0.7s;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    .gradient,
    .NewsRightCenter {
      opacity: 0;
      visibility: hidden;
      z-index: 3000;
      top: -100%;
      position: absolute;
      justify-content: center;
    }
    &:hover {
      .gradient,
      .NewsRightCenter {
        /* opacity: 1;
        visibility: visible;
        transition: all 0.7s;
        height: 100%; */
        top: 0;
        opacity: 1;
        visibility: visible;
        transition: all 0.7s;
      }
      .NewsRightBottom {
        bottom: 0%;
      }
    }

    .NewsRightC {
      width: 70%;
      z-index: 300;
    }
  }
  .NewsRightBottom {
    position: absolute;
    width: 100%;
    padding: 2rem 0;
    min-height: 5rem;
    background-color: #fff;
    bottom: -100%;
    z-index: 3000;
    transition: all 0.7s;
  }
  .headerWrapper {
    position: relative;
    min-height: 100vh;
    padding: 6rem 0;
    display: grid;
    place-items: center;
  }
  .imagewrapper {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .imagegradient {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 400;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
  /* 
  .newswp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
    .imageContent {
      flex: 1;
    }
    .NewsRight {
      flex: 1;
      padding: 15rem 0;
      background-color: #000;
      transition: all 0.7s;
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
      }
      .NewsRightC {
        width: 70%;
      }
    }
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  } */

  .CriticsBottom {
    display: grid;
    padding-top: 10rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 5rem;
  }
`;

// return (
//   <NewsContent className="flex w-100 column gap-4">
//     <div className="w-85 auto ">
//       <h3
//         style={{ fontWeight: "normal" }}
//         className="head text-white text-center"
//       >
//         SOME OF MY WORKS
//       </h3>
//     </div>
//     <div
//       data-aos="fade"
//       data-aos-duration="1600"
//       className="w-85 auto gap-2 newswp"
//     >
//       {work.map((x, index) => {
//         return (
//           <div
//             className="NewsRight1 w-100 flex item-center justify-center"
//             key={index}
//           >
//             <div className="gradient"></div>
//             <img alt="" src={x.image} className="imagewrapper w-100" />
//             <div className="NewsRightCenter w-100 h-100 flex column gap-1">
//               <div className="icon flex item-center justify-center">
//                 <FaSearchPlus color="#Fff" fontSize={"28px"} />
//               </div>
//             </div>
//             <div className="NewsRightBottom flex column item-center justify-center gap-1 w-100">
//               <h3 className="fs-24 w-100 text-light title text-center text-white">
//                 {x.title}
//               </h3>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </NewsContent>
// );
