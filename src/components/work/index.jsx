// import React from "react";
// import styled from "styled-components";
// import { HiArrowDownRight } from "react-icons/hi2";
// import Card from "./card";
// import { projectdata } from "../../data/projectdata";
// import Cursor from "../common/cursor";
// import Project from "./project";
// import { useState } from "react";
// import Modal from "./modal";

// export default function WorkIndex() {
//   const [modal, setModal] = useState({ active: false, index: 0, x: 0, y: 0 });

//   return (
//     <>
//       <SkillsWrapper data-scroll-section id="about">
//         <div className="left w-100 h-100 flex gap-4 column">
//           <div className=" w-85 gap-4 work_top auto flex justify-space item-center">
// <h4 className=" w-90 auto family1 text-grey">
//   Some of my <span className="block">recent projects.</span>
//   <div
//     className="flex fs-30 text-white justify-start item-center"
//     style={{
//       justifyContent: "flex-start",
//       marginLeft: "250px",
//       marginTop: "20px",
//     }}
//   >
//     {" "}
//     <HiArrowDownRight />
//   </div>
// </h4>
//           </div>
//           <div
//             style={{ marginTop: "4rem" }}
//             className="w-100 flex item-center justify-center auto"
//           >
//             <div className="flex column w-100 auto">
//               {projectdata.map((data, index) => {
//                 return (
//                   <Project
//                     setModal={setModal}
//                     key={index}
//                     index={index}
//                     title={data.text}
//                   />
//                 );
//               })}
//             </div>
//             <Modal modal={modal} projects={projectdata} />
//           </div>
//         </div>
//       </SkillsWrapper>
//     </>
//   );
// }

// const SkillsWrapper = styled.div`
// width: 100%;
// position: relative;
// display: grid;
// place-items: center;
// background: #1c1c1c;
// padding: 10rem 0;
// min-height: 100vh;
// overflow: hidden;
//   .card {
//     position: relative;
//     &:hover {
//       .sidebar_icons,
//       .cardImage {
//         opacity: 1;
//         visibility: visible;
//       }
//     }
//   }
//   .sidebar_icons {
//     width: 150px;
//     height: 150px;
//     border-radius: 50%;
//     background-color: #455ce9;
//     box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
//     cursor: pointer;
//     position: absolute;
//     opacity: 0;
//     visibility: hidden;
//     @media (max-width: 680px) {
//       width: 100px;
//       height: 100px;
//       a {
//         font-size: 17px;
//       }
//     }

//     &:hover {
//       a {
//         color: #fff;
//       }
//     }
//   }
//   h3 {
//     @media (max-width: 480px) {
//       font-size: 24px !important;
//     }
//   }
//   .work_top {
//     @media (max-width: 880px) {
//       flex-direction: column;
//       align-items: flex-start;
//     }

//     h5 {
//       flex: 0.6;
//       transform: translateX(100px);
//       position: relative;
//       @media (max-width: 580px) {
//         transform: translateX(60px);
//       }
//       &::after {
//         position: absolute;
//         width: 60px;
//         height: 2px;
//         background-color: #000;
//         content: "";
//         top: 50%;
//         left: -20%;
//         transform: translateY(-50%);
//         @media (max-width: 980px) {
//           left: -50%;
//           width: 50px;
//         }
//       }
//     }
//   }
//   .grid_auto {
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 4rem;
//     grid-row-gap: 6rem;

//     @media (max-width: 680px) {
//       grid-template-columns: repeat(1, 1fr);
//       grid-gap: 4rem;
//       width: 90%;
//     }
//   }
//   .card_text {
//     padding: 1.2rem 0;
//     border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//   }
// h4 {
//   letter-spacing: 1px;
//   font-weight: bolder;
//   font-size: 16px;
//   transition: all 0.6s;
// }

//   .icon1 {
//     filter: brightness(100%);
//     transition: all 0.6s ease;
//   }
//   /* img {
//     width: 4rem;
//     @media (max-width: 480px) {
//       width: 4rem;
//     }
//   } */
//   .left {
//     padding: 3rem 0;
//   }
// `;

import React from "react";
import styled from "styled-components";
import { HiArrowDownRight } from "react-icons/hi2";
import Card from "./card";
import { projectdata } from "../../data/projectdata";

export default function WorkIndex() {
  return (
    <SkillsWrapper data-scroll-section id="about">
      <div className="left w-100  h-100 flex gap-4 column">
        <div className=" w-85 gap-4 work_top auto flex justify-space item-center">
          <h4 className=" w-90 auto family1 text-grey">
            Some of my <span className="block">recent projects.</span>
            <div
              className="flex fs-30 text-white justify-start item-center"
              style={{
                justifyContent: "flex-start",
                marginLeft: "250px",
                marginTop: "20px",
              }}
            >
              {" "}
              <HiArrowDownRight />
            </div>
          </h4>
        </div>
        <div style={{ marginTop: "4rem" }} className="w-90 auto grid">
          <div className="grid_auto w-90 auto grid">
            {projectdata.map((data, index) => {
              return <Card data={data} index={index} key={index} />;
            })}
          </div>
        </div>
      </div>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  background: #1c1c1c;
  padding: 10rem 0;
  min-height: 100vh;
  overflow: hidden;
  .card {
    position: relative;
    &:hover {
      .sidebar_icons {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  .sidebar_icons {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #455ce9;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    @media (max-width: 680px) {
      width: 100px;
      height: 100px;
      a {
        font-size: 17px;
      }
    }

    &:hover {
      a {
        color: #fff;
      }
    }
  }
  h3 {
    @media (max-width: 480px) {
      font-size: 24px !important;
    }
  }
  h4 {
    letter-spacing: 1px;
    font-weight: bolder;
    font-size: 16px;
    transition: all 0.6s;
  }
  .grid_auto {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    grid-row-gap: 6rem;

    @media (max-width: 680px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 4rem;
      width: 90%;
    }
  }
  .card_text {
    padding: 1.2rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  h2 {
    letter-spacing: 1px;
    font-weight: normal;
    font-size: 60px;
    transition: all 0.6s;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 0;
  }
`;
