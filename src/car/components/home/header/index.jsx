import React from 'react'
import HeaderBottom from './HeaderBottom'
import HeaderTop from './HeaderTop'
import styled from 'styled-components/macro'

function HeaderIndex() {
  return (
    <HeaderIndexContainer>
    <HeaderBottom/>
    <HeaderTop/>
    </HeaderIndexContainer>
  )
}
const HeaderIndexContainer = styled.div`
width:100%;
`
export default HeaderIndex