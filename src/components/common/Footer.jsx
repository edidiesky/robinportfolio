import React from "react";
import { BsFacebook, BsInstagram, BsTwitch, BsTwitter } from "react-icons/bs";
import styled from "styled-components";

const ratedData = [
  {
    name: "Spring Printed Dress",
    price: 47,
    image: [
      "https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/spring_printed_dress.jpg",
    ],
  },
  {
    name: "Modern Love Tee",
    price: 27,
    image: [
      "https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/modern_love_tee.jpg",
    ],
  },
  {
    name: "Black Jacket",
    price: 27,
    image: [
      "https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/black_elegant_leather_jacket.jpg",
    ],
  },
  {
    name: "Hipster Black Top",
    price: 47,
    image: [
      "https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/hipster_black_top.jpg",
    ],
  },
];

const BlogData = [
  {
    name: "Aenean lobortis sapien enim viverra",
    tags: ["Markup", "News", "Trends"],
    image: [
      "https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/post_img_12-700x441.jpg",
    ],
  },
  {
    name: "Modern Love Tee",
    tags: ["Fashion", "News", "Special Offers"],
    image: [
      "https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/post_img_11-700x441.jpg",
    ],
  },
];

const Tagdata = [
  "black",
  "boots",
  "brown",
  "casual",
  "D&G",
  "fabric",
  "flowers",
  "grey",
  "hat",
  "hipster",
  "lines",
  "multi-pirpose",
  "new york",
  "outdoors",
  "red",
  "responsive",
];

export default function Footer() {
  return (
    <FooterContainer>
      <div className="w-90 container auto">
        <div className="w-100 flex column gap-4">
          <img
            className="imageIcon"
            src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/classic_shop_logo_footer-200x54.png"
            alt="images"
          />
          <div className="w-100 flex column gap-1">
            <p className="text-light text-white fs-16 text-extra-bold">
              12345 North Main Street, New York,
            </p>
            <p className="text-light text-white fs-16 text-extra-bold">
              NY 555555 Phone: 1.800.555.6789
            </p>
            <p className="text-light text-white fs-16 text-extra-bold">
              Email: info@company.com Web: Theme-fusion.com
            </p>
          </div>
          <div className="w-100 flex item-center gap-1 py-2">
            <BsFacebook className="fs-24 text-white" />
            <BsTwitch className="fs-24 text-white" />
            <BsTwitter className="fs-24 text-white" />
            <BsInstagram className="fs-24 text-white" />
          </div>
        </div>
        <div className="w-100 flex column gap-4">
          <h4 className="fs-14 text-white text-light">TOP RATED PRODUCTS</h4>
          <div className="w-100 py-2 column flex gap-2">
            {ratedData.map((x) => {
              return (
                <div
                  className="w-100 flex gap-2"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,.1)",
                    paddingBottom: "1.6rem",
                    height:'10rem'
                  }}
                >
                  <div className="w-100 flex column gap-1">
                    <h5 className="text-white text-light fs-14">{x.name}</h5>
                    <h6 className="fs-14 text-extra-bold text-white">${x.price}</h6>
                  </div>
                  <div className="w-100">
                  <img src={x.image} alt="" style={{height:"100%"}} />
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-100 flex column gap-4">
          <h4 className="fs-14 text-white text-light">TOP RATED PRODUCTS</h4>
          <div className="column w-100 py-2 gap-2 flex">
            {BlogData.map((x) => {
              return (
                <div className="w-90 flex column gap-2">
                  <img src={x.image} alt="" />
                  <div className="w-100 flex column">
                    <h4 className="text-white fs-14 text-bold">{x.name}</h4>
                    <div className="flex w-100 fs-12 gap-1">
                      {x.tags.map((x) => {
                        return <div className="text-white fs-12">{x}</div>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-100 flex column gap-4">
          <h4 className="fs-14 text-white text-light">Tags</h4>
          <div className="py-2 flex tag">
            {Tagdata.map((x, index) => {
              return <span key={index}>{x}</span>;
            })}
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: rgb(43, 46, 50);
  padding: 10rem 0;
  .tag {
    flex-wrap: wrap;
    span {
      display: inline-block;
      margin: 0.8rem;
      border: 1px solid #fff;
      padding: 1rem 1.4rem;
      font-size: 1.2rem;
      color: #fff;
      background: transparent;
      &:hover {
        background-color: var(--secondary);
        border: 1px solid var(--secondary);
      }
    }
  }
  .imageIcon {
    width: 16rem;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-gap: 2rem;
  }
`;
