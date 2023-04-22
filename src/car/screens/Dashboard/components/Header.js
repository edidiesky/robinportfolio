import React, {useState, useEffect} from 'react'
import Styled from 'styled-components'
import {
	FaBell,
	FaSearch,
  FaSun
} from 'react-icons/fa'
import {
  ToggleSidebar
} from '../../../Features'
import {useSelector, useDispatch} from 'react-redux'
import {ToggleBtn} from '../../../components/common'
import {CgMenuRight} from 'react-icons/cg'
const HeaderWrapper = Styled.div`
background:var(--white);
position:sticky;
top:0;
z-index:1000;
height:96px;
display:flex;
align-items:center;
gap:1.2rem;
border-bottom:1px solid #ccc;
 
 .headerContainer {
  width:95%;
  margin:0 auto;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  
  
  .headerLeft {
    display:flex;
  align-items:center;
  gap:2rem;
  .Icon {
  display:flex;
  align-items:center;
  justify-content:center;
  @media (min-width:780px) {
    display:none;
  }
  svg {
    font-size:3.4rem;
  }
 }
 .imageIcon {
    width:auto;
    height:5rem;
  }
}
  h3 {
    font-size:2.4rem;
    font-weight:700;
    color:var(--dark-1);
    width:100%;
    text-align:start;
    padding:0 1rem;
    text-transform: uppercase;
    font-family: "Barlow", sans-serif;
    .span1 {
      display:block;
      color:var(--grey-2);
      font-size:1.3rem;
      font-weight:500;
      padding-top:1rem;
    }
  }

 }
`

export default function Header({text, subtext}) {

  const {thememode} = useSelector(store=> store.toggle)
  const {userInfo} = useSelector(store=> store.user)
  const dispatch = useDispatch()

  useEffect(()=> {
    document.documentElement.className = thememode
    localStorage.setItem('theme', thememode)
  }, [thememode])
	return (
		<HeaderWrapper>
		  <div className='headerContainer'>
      
       <h3>{text}
        <span className='span1'>{subtext}</span>
       </h3>
       
      
      <div className='headerLeft'>
      <div className='Icon' onClick={()=> dispatch(ToggleSidebar())}>
       <CgMenuRight/>
      </div>
       <img src='/profile_icon2.png' alt='images' className='imageIcon'/>
       </div>
		  </div>
     
		</HeaderWrapper>
		)
}