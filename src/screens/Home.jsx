import React from 'react'
import { Meta } from '../components/common';
import HomeIndex from '../components/home';
import styled from 'styled-components'

export default function Home() {
  return (
    <>
     <Meta/>
    <HomeContainer>
      <HomeIndex/>
    </HomeContainer>
    </>
  )
}


const HomeContainer = styled.div`
width:100%;
overflow:hidden;
`
