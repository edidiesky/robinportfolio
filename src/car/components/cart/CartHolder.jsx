

import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Styled from 'styled-components'
import {calculateBagItem} 
from '../../Features'
export default function CartHolder() {
    const dispatch = useDispatch()
    const {productDetails} = useSelector(store=>store.product)
    const {
        bag,
        totalPrice,
         totalQuantity,
         shippingPrice,
         estimatedTax,
         TotalShoppingPrice
    } = useSelector(store=>store.bag)

    useEffect(()=> {
        dispatch(calculateBagItem())
    }, [productDetails?.quantity, bag])
  return (
    <CartHolderContainer>
        <h2>Cart Holder</h2>
        <h3 className='subtotal'>Subtotal <span className="subspan">${totalPrice}</span></h3>
        <h3 className='total'>Total <span className="subspan span1">${TotalShoppingPrice}</span></h3>
        <div className="btnWrapper">
            <Link to={'/billing'} className="btn">Proceed to Checkout</Link>
        </div>
    </CartHolderContainer>
  )
}


const CartHolderContainer = Styled.div`
padding:4rem;
border:1px solid var(--grey-2);
width:clamp(45%, 220px, 90%);
display:flex;
flex-direction:column;
gap:2rem;
margin-bottom:2rem;
@media (max-width:980px) {
  width:100%;
}
 h2 {
  font-size:5rem;
  font-weight:700;
  color:var(--dark-1);
 }

 .btnWrapper {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    .btn {
        border:none;
      outline:none;
      padding:2rem 4rem;
      background:var(--red);
      color:#fff;
      font-size:1.9rem;
      text-align:center;
      cursor:pointer;
      &:hover {
        background:var(--blue-1);
      }
      @media (max-width:980px){
        padding:1.6rem 4rem;

      }
    }
 }

 h3 {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:2.4rem;
    font-weight:700;
    color:var(--dark-1);
    padding:1.6rem 0;
    &.subtotal {
    border-top:1px solid var(--grey-2);
    border-bottom:1px solid var(--grey-2); 
    padding:2rem 0;
    }
    

    .subspan {
        font-size:2rem;
        font-weight:400;
        color:var(--grey);
        &.span1 {
            color:var(--blue-2);
            font-weight:700;
        }
    }
 }

`