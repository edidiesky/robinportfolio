import React from 'react'
import Styled from 'styled-components'

export default function Heroindex() {
  return (
    <HeroContainer>
        <div className="herowrapper">
            <img src="/images/heroImage.jpg" alt="" className="heroImage" />
            <div className="herogradient"></div>
            <div className="heroSection">
                <h1>Dreams Come True</h1>
                <h2>Buy Your Dream Car Today <br /> Starting From $2,000</h2>
                <div className="btnwrapper">
                    <button className="btn">Search</button>
                    <button className="btn btn-1">Learn More</button>
                </div>
            </div>
        </div>
        
    </HeroContainer> 
  )
}

const HeroContainer = Styled.section`
width:100%; 
.herowrapper {
    width:100%;
    position:relative;
    min-height:45rem;
     @media (max-width:780px){
     min-height:70rem;
    }
    .heroImage {
        width:100%;
        position:absolute;
        top:0;
        left:0;
        height:100%;
        object-fit:cover;
    }
    .herogradient {
        background:linear-gradient(to right, #081B36, #4B172F);
        position:absolute;
        top:0;
        opacity:.8;
        width:100%;
        height:100%;
        z-index:50;
    }
    .heroSection {
        width:60%;
        max-width:1100px;
        margin:0 auto;
        z-index:60;
        display:flex;
        justify-content:center;
        padding:8rem 0;
        flex-direction:column;
        gap:1.7rem;
        @media (max-width:1080px){
        width:90%;
    }
         @media (max-width:780px){
        width:90%;
    }
        h1 {
            color:var(--white);
            font-size:6.5rem;
            font-weight:700;
            z-index: 500;
            text-align:start;
              @media (max-width:780px){
                    font-size:9rem;
             }
        }
        h2 {
           color: var(--white);
            font-size: 4rem;
            font-weight: 300;
            z-index: 500;
            line-height:1.2;
            font-family:"Roboto Condensed", sans-serif;
             @media (max-width:780px){
                 font-size:5rem;
             }
        }
        .btnwrapper {
            width:100%;
            display:flex;
            align-items:center;
            gap:2rem;
            padding:2rem 0;
             @media (max-width:480px){
               flex-direction:column;
               align-items:flex-start;
             }
            .btn {
                width:200px;
                padding:2.3rem;
                cursor:pointer;
                font-size:2rem;
                font-weight:400;
                color:var(--white);
                background:var(--red);
                border:none;
                outline:none;
                z-index:400;
                text-transform:uppercase;
                transition:all .3s;

                &.btn-1 {
                    background:var(--white);
                    color:var(--dark-1);
                }
                &:hover {
                    background:var(--blue-1);
                    color:var(--white);
                }
            }
        }
    }
}
`
