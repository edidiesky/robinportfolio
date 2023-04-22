import React from "react";
import styled from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import {
  removeBagItem,
  increaseBagQty,
  decreaseBagQty,
  onCartAlert,
} from "../../Features";

export default function SmallCard({ x, type }) {
  const dispatch = useDispatch();
  const handleRemoveBagItem = () => {
    dispatch(removeBagItem(x));
  };
  const increaseQty = (item) => {
    dispatch(increaseBagQty({ item }));
  };
  const decreaseQty = (item) => {
    dispatch(decreaseBagQty({ item }));
  };
  if (type === "sidebar") {
    return (
      <SmallSidebarCardContent key={x._id}>
        <div className="SmallSidebarCard">
          <div className="imageWrapper1">
            {x?.image &&
              x?.image.map((x) => {
                return <img src={x?.image} alt="images" />;
              })}
          </div>

          <div className="cartSidebarCCenter">
            <h3>{x?.title}</h3>
            <div className="cartSidebarCBottom">
              <p>${x?.price}</p>
              <div className="btnWrapper">
                <button
                  className="cartBtn"
                  disabled={x?.quantity === x?.countInStock}
                  onClick={() => dispatch(increaseBagQty(x))}
                >
                  <BiPlus />
                </button>
                <h3>{x?.quantity}</h3>
                <button
                  className="cartBtn"
                  disabled={x?.quantity === 1}
                  onClick={() => dispatch(decreaseBagQty(x))}
                >
                  <BiMinus />
                </button>
              </div>
            </div>
          </div>

          <div className="cartCardSLeft">
            <div className="iconsWrapper">
              <RxCross2 className="icon" />
            </div>
            <p>${x?.price * x?.quantity}</p>
          </div>
        </div>
      </SmallSidebarCardContent>
    );
  }
  return (
    <SmallCardContent key={x._id}>
      <div className="cartProduct">
        <div className="iconsWrapper">
          <RxCross2 className="icon" />
        </div>
        <div className="imageWrapper">
          {x?.image &&
            x?.image.map((x) => {
              return <img src={x?.image} alt="images" />;
            })}
        </div>
        <h3>{x?.title}</h3>
        <p>${x?.price}</p>
        <div className="btnWrapper">
          <button
            className="cartBtn"
            disabled={x?.quantity === x?.countInStock}
            onClick={() => dispatch(increaseBagQty(x))}
          >
            <BiPlus />
          </button>
          <h3>{x?.quantity}</h3>
          <button
            className="cartBtn"
            disabled={x?.quantity === 1}
            onClick={() => dispatch(decreaseBagQty(x))}
          >
            <BiMinus />
          </button>
        </div>
        <p>${x?.price * x?.quantity}</p>
      </div>
    </SmallCardContent>
  );
}

const SmallSidebarCardContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  .SmallSidebarCard {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1.4rem;
    .cartCardSLeft {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .iconsWrapper {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 2rem;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background: var(--grey-3);
        &:hover {
          background: var(--grey-2);
        }

        .icon {
          width: 70%;
          height: 70%;
        }
      }
      p {
        font-size: 1.2rem;
        color: var(--grey);
        font-weight: 400;
      }
    }
    .cartSidebarCCenter {
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      flex-direction: column;
      width: 100%;
      h3 {
        font-size: 1.6rem;
        color: var(--dark-1);
        font-weight: 600;
      }
      .cartSidebarCBottom {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          font-size: 1.2rem;
          color: var(--grey);
          font-weight: 400;
        }
        .btnWrapper {
          border: 1px solid var(--grey-2);
          display: flex;
          width: 100px;
          align-items: center;
          height: 3rem;
          justify-content: center;
          margin: 0 auto;
          border-radius: 6px;
          h3 {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-color);
            flex: 1;
            text-align: center;
          }

          .cartBtn {
            border: none;
            outline: none;
            flex: 1;
            height: 100%;
            background: rgb(0 0 0 / 8%);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            &:hover {
              background: rgb(0 0 0 / 13%);
              .icon {
                color: var(--dark-1);
              }
            }
            .icon {
              width: 50%;
              height: 50%;
              color: var(--dark-1);
            }
          }
        }
      }
    }

    .imageWrapper1 {
      width: 14rem;
      position: relative;
      height: 10rem;
      border-radius: 5px;
      img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        left: 0;
        border-radius: 5px;
        object-fit: cover;
      }
    }
  }
`;

const SmallCardContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  .cartProduct {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    .iconsWrapper {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 2rem;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: var(--grey-2);
      }

      .icon {
        font-size: 2.2rem;
      }
    }
    p {
      font-size: 2.4rem;
      color: var(--grey);
      font-weight: 400;
    }
    .btnWrapper {
      border: 1px solid var(--grey-2);
      display: flex;
      width: 150px;
      align-items: center;
      height: 4.5rem;
      justify-content: center;
      margin: 0 auto;
      border-radius: 6px;
      h3 {
        fon-size: 1.4rem;
        font-weight: 600;
        color: var(--text-color);
        flex: 1;
        text-align: center;
      }

      .cartBtn {
        border: none;
        outline: none;
        flex: 1;
        height: 100%;
        background: rgb(0 0 0 / 8%);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background: rgb(0 0 0 / 13%);
          .icon {
            color: var(--dark-1);
          }
        }
        .icon {
          width: 2rem;
          height: 2rem;
          color: var(--dark-1);
        }
      }
    }

    .imageWrapper {
      width: 25rem;
      position: relative;
      height: 20rem;
      border-radius: 5px;
      img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        left: 0;
        border-radius: 5px;
        object-fit: cover;
      }
    }
  }
`;
