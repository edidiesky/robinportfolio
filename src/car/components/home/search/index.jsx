import React from 'react'
import Styled from 'styled-components'
export default function SearchIndex() {
  return (
    <SearchContainer>
        <div className="searchWrapper">
            <h2 className="searchText">Search Vehicle Inventory</h2>
            <div className="searchinputcontainer">
                <input 
                placeholder='Car Make / keyword /Model'
                type="text" 
                className="search" 
                />
                <input 
                placeholder='Car Make / keyword /Model'
                type="text" 
                className="search" 
                />
                <input 
                placeholder='Car Make / keyword /Model'
                type="text" 
                className="search" 
                />
                <button className="btn">Search</button>
            </div>
        </div>
    </SearchContainer>
  )
}

const SearchContainer = Styled.div`
width:clamp(50%, 90%, 90%);
margin:0 auto;
z-index:1000;
 max-width:1600px;
margin:0 auto;
padding:2rem 0;
.searchWrapper {
display:flex;
align-items:center;
flex-direction:column;
gap:3rem;
background:var(--white);
box-shadow:0 2rem 4rem rgba(0,0,0,.1);
z-index:1000;
padding:4rem 0;
transform: translateY(-40px);
z-index: 1000;
position: relative;

 h2 {
    font-size: 4rem;
    font-weight: 600;
    padding: 0 2rem;
    color: var(--dark-1); 
    @media (max-width:480px) {
        padding:0 5rem;
        text-align:center;
        font-size:3rem;
    }
 }
 .searchinputcontainer {
    width:90%;
    padding:1rem 0;
   display:grid;
   grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
   grid-gap:1rem;
    .search {
        border:none;
        outline:none;
        border:1px solid rgba(0,0,0,.1);
        padding:2.4rem 3rem;
        font-size:1.6rem;
        transition:all .2s;
        &:focus {
            border:1.5px solid rgba(0,0,0,.6);
        }
    }
          .btn {
                padding:2.3rem;
                 @media (max-width:480px) {
                    padding:1.8rem 2.3rem;
                 }
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
`