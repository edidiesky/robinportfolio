import React, { useEffect } from "react";
import styled from "styled-components";
import { addProductToCart } from "../../Features";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { productCardAnimation } from "../animations";
export default function Card({ x, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (x) => {
    const payload = {
      title: x.title,
      _id: x._id,
      image: x.image,
      price: x.price,
      countInstock: x.countInstock,
      brand: x.brand,
      quantity: 1,
    };
    dispatch(addProductToCart(payload));
  };

  return (
    <div className="w-100 hidden">
      <CardContainer
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-delay={index * 400}
      >
        <div
          className="cardWrapper"
        >
          <div className="FeatImage">
            {x?.image && (
              <img
                src={x?.image[0]?.image}
                className="cardImage"
                alt="card-images"
              />
            )}
            <div className="imageGradient"></div>
            <div className="cardOptions">
              <div className="cardSpanWrapper">
                <div onClick={() => handleAddToCart(x)} className="cardspan">
                  <FaShoppingCart />
                </div>
                <div className="Cartspan">Add to Cart</div>
              </div>
              <div className="cardSpanWrapper">
                <Link
                  to={`/avada/product/${x._id}?category=${x.category}`}
                  className="cardspan"
                >
                  <FaEye />
                </Link>
                <div className="Cartspan">View Product</div>
              </div>
            </div>
          </div>
          <header>
            <Link className="titleDetails" to={`/avada/product/${x._id}`}>
              {x?.title}
            </Link>
            <div className="category">
              <span className="tagspan">
                {x?.capacity ? x?.capacity : ""} mil
              </span>
              {x?.tags.map((x) => {
                return (
                  <span className="tagspan" key={x?._id}>
                    {x}
                  </span>
                );
              })}
            </div>
            <div className="cardBottom">
              <p className="cardPrice">
                Price: <span className="pricespan">${x?.price}</span>
                {x?.percentage ? (
                  <span className="percentageSpan">
                    {x?.percentage && x?.percentage}% off
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
          </header>
        </div>
      </CardContainer>
    </div>
  );
}

const CardContainer = styled.div`
  width: 100%;
  .cardWrapper {
    width: 100%;

    &:hover .FeatImage .imageGradient {
      top: 0;
    }
    &:hover .FeatImage .cardOptions {
      opacity: 1;
      visibility: visible;
      .cardSpanWrapper {
        opacity: 1;
        visibility: visible;
        .cardspan {
          transform: translate3d(0, -30px, 0);
        }
      }
    }
    &:hover .FeatImage .contentBackground .content {
      opacity: 1;
      visibility: visible;
    }
    .FeatImage {
      position: relative;
      width: 100%;
      overflow: hidden;
      transition: all 0.6s var(--transition-1);

      display: grid;
      place-items: center;
      position: relative;
      height: 40rem;
      .cardImage {
        width: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
      }
      .cardOptions {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        .cardSpanWrapper {
          position: relative;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s;
          &:hover .Cartspan {
            opacity: 1;
            visibility: visible;
            bottom: -70%;
          }
          .Cartspan {
            position: absolute;
            bottom: -150%;
            left: 50%;
            transform: translateX(-50%);
            padding: 0.7rem;
            border-radius: 5px;
            min-width: 100px;
            font-size: 1.3rem;
            font-weight: 600;
            text-align: center;
            color: #fff;
            text-transform: uppercase;
            background: var(--blue-1);
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s;
            &::after {
              width: 1rem;
              height: 1rem;
              content: "";
              position: absolute;
              top: -5px;
              left: 50%;
              background: var(--blue-1);
              transform: rotate(-45deg);
            }
          }
          .cardspan {
            width: 4rem;
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border-radius: 50%;
            opacity: 1;
            background: var(--red);
            transform: translate3d(0, 30px, 0);
            transition: all 0.6s;
            cursor: pointer;
            position: relative;
            z-index: 500;
            box-shadow: 0 5px 2rem rgba(0, 0, 0, 0.5);

            svg {
              width: 40%;
              height: 40%;
              color: #fff;
            }
          }
        }
      }
      .imageGradient {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to right, #0d2041b3, #00050de3);
        display: flex;
        top: 100%;

        align-items: center;
        justify-content: center;
        transition: all 0.3s;
      }
    }

    header {
      width: 90%;
      padding: 3rem;
      background: var(--white);
      transform: translateY(-45px);
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media (max-width: 980px) {
        padding: 4rem 2rem;
      }
      .titleDetails {
        font-size: 2.4rem;
        font-weight: 700;
        color: var(--text-color);
        &:hover {
          text-decoration: underline;
        }
      }
      .category {
        padding: 1.2rem 0;
        .tagspan {
          font-size: 1.8rem;
          font-weight: 500;
          color: var(--grey);
          margin: 0.6rem 0.8rem;
          font-family: "Barlow", sans-serif;
          display: inline-block;
          @media (max-width: 480px) {
            font-size: 2rem;
          }
          position: relative;
          &::after {
            position: absolute;
            top: 50%;
            transform: translateY(-40%);
            width: 0.4rem;
            border-radius: 50%;
            left: -8px;
            height: 0.4rem;
            background: var(--grey);
            content: "";
          }
        }
      }
      .cardBottom {
        padding: 2rem 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 2rem;
        @media (max-width: 360px) {
          flex-direction: column;
          align-items: flex-start;
        }
        .cardPrice {
          font-size: 1.6rem;
          color: var(--grey);
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
          @media (max-width: 480px) {
            flex-direction: column;
            align-items: flex-start;
          }
          .percentageSpan {
            display: inline-block;
            padding: 0.6rem 1rem;
            font-size: 1.6rem;
            font-weight: 600;
            border: 1px solid var(--blue-1);
            color: var(--blue-1);
            font-family: "Barlow", sans-serif;
          }
          .pricespan {
            font-size: 2.4rem;
            color: var(--red);
            font-weight: 600;
            display: inline-block;
            @media (max-width: 380px) {
              margin-left: 6px;
              font-size: 3.5rem;
            }
          }
        }
      }
    }
  }
`;
