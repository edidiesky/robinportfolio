import React from 'react'
import Styled from 'styled-components'
import CollectionIndex from './collection'
import {Link} from 'react-router-dom'

export default function InventoryIndex() {
  return (
   <InventoryContainer>
     <div className="inventoryWrapper">
        <div className="inventoryTop">
            <h1 data-aos="fade-right">Latest Inventory
            <span>
                    <img src='/images/heading-separator.png' alt='title-image' className='titleIcon'/>
                </span>
            </h1>
            <p data-aos="fade-left">Incididunt labore dolore magna aliqua 
                enim veniam quis nostrud tempor tempor 
                adispecing miny exercitation ullamco laboris nisiut aliquip.</p>
        </div>
        <CollectionIndex/>
        <div className='inventoryBtnWrapper' data-aos="slide-up" data-aos-duration='700'>
        <Link to={'/avada/product'} className='inventoryBtn'>Search for all Cars</Link>
        </div>
     </div>
   </InventoryContainer>
  )
}


const InventoryContainer = Styled.div`
width:100%;
 .inventoryWrapper {
    width:95%;
    margin:0 auto;
     max-width:1600px;
    display:flex;
    flex-direction:column;
    gap:1.8rem;
    padding:6rem 0;
    .inventoryBtnWrapper {
        width:100%;
        display:flex;
        aliign-items:center;
        justify-content:center;
    .inventoryBtn {
        padding:2rem 4rem;
        border:none;
        outline:none;
        font-size:1.9rem;
        cursor:pointer;
        font-weight:600;
        color:var(--red);
        border:1px solid var(--red);
        background:transparent;
        &:hover {
            background:var(--red);
            color:#fff;
            border:1px solid var(--red);
        }
    }
}
    .inventoryTop {
        display:flex;
        aliign-items:center;
        justify-content:space-between;
        width:100%;
         @media (max-width:780px){
           flex-direction:column;
           gap:4rem;
         }
        h1 {
            font-size:5rem;
            font-weight:700;
            color:var(--dark-1);
            width:100%;
            span {
                display:block;
                .titleIcon {
                    width:9rem;
                }
            }
            @media (max-width:980px){
              font-size:5rem;
    }
        }
        
        p {
            font-size:2.2rem;
            color:var(--grey);
            font-weight:400;
            line-height:2;
            font-family:"Barlow", sans-serif;
            @media (max-width:480px) {
                font-size:1.8rem;
                line-height:1.7;
            }
        }
    }
 }
`