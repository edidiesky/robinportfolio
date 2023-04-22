import React from 'react'
import Styled from 'styled-components'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest
} from 'react-icons/fa'

const iconsListData = [
  {id:1, icon:<FaFacebook/>},
  {id:2, icon:<FaInstagram/>},
  {id:3, icon:<FaYoutube/>},
  {id:4, icon:<FaPinterest/>}
]

const data = [
  {id:1, title:'Home', path:''},
  {id:2, title:'Product', path:'/product'},
  {id:3, title:'About Us', path:""},
  {id:4, title:'Latest News', path:"auto-news"},
  {id:5, title:'Contact', path:'avada/contact'},
  {id:6, title:'Car Buying Guide', path:'avada/contact'},
]

export default function Footer() {
  return (
    <FooterContainer>
        <div className="footerWrapper">
            <div className="footerTop">
              <button className='callBtn' data-aos="slide-up">Call (3033) 1155-20999</button>
              <img src="../images/car-dealer-footer-logo-2x.png" alt="images" data-aos="slide-up" data-aos-duration='500'/>
              <ul className="socialListWrapper">
                 {iconsListData.map(x=> {
                  return <li className='icons' key={x.id} data-aos="slide-up" data-aos-duration='700'>{x.icon}</li>
                 })}
              </ul>
            </div>
            <ul className="footerCenter">
              <div className="footerCenterWrapper">
              {data.map(x=> {
                return <li key={x.id}>{x.title}</li>
              })}
              </div>
            </ul>
            <div className="footerBottom"></div>
        </div>
    </FooterContainer>
  )
}

const FooterContainer = Styled.div`
width:100%;
background:var(--gradient1);
z-index:70;
 padding-top:6rem;
.footerWrapper {
    width:90%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    gap:2rem;
    .footerCenter {
      width:100%;
      padding:4rem 0;
      border-bottom:.7px solid #777;
      .footerCenterWrapper {
        width:100%;
        margin:0 auto;
        padding:0 7rem;
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(150px, 1fr));
        grid-gap:1rem;
        grid-row-gap:2rem;
        @media (max-width:780px) {
          width:95%;
          padding:0;
        }
      li {
        font-size:1.8rem;
        font-weight:400;
        color:#fff;
        text-align:start;
        width:100%;
        font-family:"Roboto Condensed", sans-serif;
      }
    }
    }
    .footerTop {
      padding:6rem 0;
      border-bottom:.7px solid #777;
      display:grid;
      grid-template-columns:repeat(auto-fit, minmax(300px,1fr));
      grid-gap:3rem;

      .callBtn {
  border:none;
  outline:none;
  border-radius:40px;
  background:transparent;
  font-size:2.5rem;
  font-weight:700;
  color:#fff;
  transition:all .5s;
  cursor:pointer;
  text-align:start;
  font-family:inherit;
   
}
.socialListWrapper {
  display:flex;
  align-items:center;
  gap:2rem;
  justify-content:flex-end;
  @media (max-width:1080px) {
    justify-content:flex-start;
      }
    .icons {
       width:4rem;
       height:4rem;
       display:flex;
       align-items:center;
       justify-content:center;
       border-radius:3px;
       background:var(--blue-2);
       font-size:2.7rem;
       @media (max-width:780px) {
        width:3.5rem;
       height:3.5rem;
      }
       &:nth-child(2) {
        background:#55acee;
       }
       &:nth-child(3) {
        background:#3f729b;
       }
       &:nth-child(4) {
        background:var(--red);
       }
       svg {
        color:#fff;
        width:50%;
        height:50%;
       }
       &::child(1) {
        background:#fff;
       }
    }
  }
    img {
      height:8rem;
      margin:0 auto;
       @media (max-width:1080px) {
        margin:0;
      }
      @media (max-width:780px) {
        width:10rem;
      }
    }
    }
}
`
