import React from 'react'
import styled from 'styled-components/macro'

const data = [
    {id:1, icon:'../images/logo-brand-1.png'},
    {id:2, icon:'../images/logo-brand-2.png'},
    {id:3, icon:'../images/logo-brand-3.png'},
    {id:4, icon:'../images/logo-brand-4.png'},
    {id:5, icon:'../images/logo-brand-5.png'},
    {id:6, icon:'../images/logo-brand-6.png'},
    {id:7, icon:'../images/logo-brand-7.png'},
    {id:8, icon:'../images/logo-brand-8.png'}
]
export default function Brandindex() {
  return (
    <BrandContainer>
      <div className="brandWrapper">
        <div className="brandTopWrapper">
             <img src='/images/car-dealer-footer-logo-2x.png' className='sidebarIcon' alt='sidebarIcon'/>
            <h2 data-aos="fade-up">Explore Popular Brands</h2>
            <p data-aos="zoom-in">Incididunt labore dolore magna aliqua enim veniam quis nostrud tempor tempor
              adispecing miny exercitation ullamco laboris nisiut aliquip.
            </p>
        </div>
        <div className="brandIconWrapper">
            {data.map(x=> {
            return <div className="iconwrapper"  data-aos="zoom-in" data-aos-duration='600' key={x.id}>
                  <img src={x.icon} className='iconWrapperimage' alt='Brand-icon'/>
                </div>
        })}
        </div>
        
      </div>
    </BrandContainer>
  )
}




const BrandContainer = styled.div`
width:100%;
padding:16rem 0;
min-height:100vh;
background:var(--gradient1);
.brandWrapper {
    width:90%;
    margin:0 auto;
    max-width:1600px;
    display:flex;
    flex-direction:column;
    gap:7rem;
    .brandTopWrapper {
        width:100%;
        display:flex;
        align-items:center;
        flex-direction:column;
        width:100%;
        gap:2rem;
        justify-content:center;
        .sidebarIcon {
            height:8rem;
        }
        h2 {
            font-size:5.5rem;
            font-weight:700;
            color:var(--white);
            width:100%;
            text-align:center;
        }
        
        p {
            font-size:1.88rem;
            color:var(--grey);
            font-weight:400;
            line-height:2;
            width:70%;
            margin:0 auto;
            text-align:center;
            @media (max-width:780px) {
                line-height:1.7;
                width:95%;
            }
        }
 
    }
    .brandIconWrapper {
        width:100%;
        margin:0 auto;
        display:grid;
        grid-template-columns:repeat(4, 1fr);
        @media (max-width:980px) {
  grid-template-columns:repeat(auto-fit, minmax(200px,1fr));
}
        .iconwrapper {
            border:1px solid rgba(255,255,255,.1);
            height:17rem;
            display:flex;
            align-items:center;
            justify-content:center;
            .iconWrapperimage {
                width:7.8rem;
                color:#333;
            }
        }
    }
}
`
