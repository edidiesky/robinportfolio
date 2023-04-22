import React, {useState} from 'react'
import styled from 'styled-components'



export default function Input({id,onChange,errorMessage, ...props}) {
  const [touched, setTouched] = useState(false)
  const handleTouch = ()=> {
    setTouched(true)
  }
  return (
    <LabelContainer htmlFor={id}>
        {id}
        <input
          {...props}
          onBlur={handleTouch}   
          onFocus={()=> props.name === 'password2'? setTouched(true):''}
          focused={touched.toString()}    
          onChange={onChange} 
        />
        <span className='error'>{errorMessage}</span>
    </LabelContainer>
    
  )
}

const LabelContainer = styled.label`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    font-size: 1.3rem;
    color: var(--dark-1);
    font-weight: 600;
    text-transform: capitalize;
    
    input {
        height: 4.5rem;
        border-radius: 2px;
        background:var(--white);
        padding: 0 2.4rem;
        width: 100%;
        border: 1px solid var(--grey-2);
        outline: none;
        font-size: 1.4rem;
        font-weight: 400;
        font-family:"Barlow", sans-serif;

        &::placeholder {
          font-size:1.5rem;
          font-family:"Barlow", sans-serif;
        }
        &:focus {
            border: 1.7px solid #222;
        }
        &.inputError {
          border: 2px solid var(--red);
        }
        &:invalid[focused='true'] ~ span {
          display:block;
        }
        &:invalid[focused='true']{
          border-bottom: 2px solid var(--red);
        }
        &:valid[focused='true']{
          border-left: 3px solid var(--green);
        }
    }

    span {
      font-size: 1.3rem;
      color: #c61212;
      font-weight: 600;
      display:none;
    }
`
