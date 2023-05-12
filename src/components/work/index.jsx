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
      <div className="w-100 auto gap-2 newswp">
        {work.map((x, index) => {
          return (
            <div
              data-aos="fade"
              data-aos-duration="1600"
              data-aos-dalay={index * 300}
              className="headerWrapper w-100"
              key={index}
            >
              <div className="imagegradient"></div>
              <img src={x.image} alt="" className="imageWrapper" />
              <div className="herowrapper h-100 flex justify-center column gap-3 w-85 auto">
                <h4
                  style={{ fontWeight: "400" }}
                  className="family2 fs-16 text-secondary"
                >
                  Ful-Stack Development
                </h4>
                <h2 className="fs-46 w-50 family2 text-light text-white">
                  {x.title}
                </h2>
                <h4 className="family1 fs-14 text-white">{x.description}</h4>
                <div className="w-100 flex item-center gap-2">
                  <div className="btn fs-14 family2 py-1">View project Demo</div>
                  <div className="btn fs-14 family2 py-1">View project Code</div>
                </div>
              </div>
            </div>
          );
        })}
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
    padding: 1.2rem 3rem;
  }
  .herowrapper {
    z-index: 6000;
    gap: 3rem;
    @media (max-width: 480px) {
      gap: 5rem;
    }
    h4 {
      width: 40%;
      @media (max-width: 780px) {
        width: 60%;
      }
      @media (max-width: 480px) {
        width: 90%;
      }
    }
    h2 {
      line-height: 49px;
      font-weight: 500;
      font-size: 60px;
      width: 50%;
      @media (max-width: 780px) {
        width: 60%;
        line-height: 50px;
        font-size: 40px;
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
    padding: 16rem 0;
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
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    );
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
