import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderContent className='w-100'>
        <div className="w-85 auto flex item-center justify-space">
            <h4 className="uppercase family2 text-white fs-18 text-light">EDIDIONG ESSIEN</h4>
        </div>
    </HeaderContent>
  )
}

const HeaderContent = styled.div`
    background-color: #000000;
    padding: 1.4rem 0;
    position: sticky;
    top: 0;
    z-index: 4000;
`