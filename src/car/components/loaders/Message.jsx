import React, {useContext, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {FaExclamationCircle, FaTimes} from 'react-icons/fa' 	 	
import Styled from 'styled-components'

export default function Alert2({form, alertText, alertType}) {
	return <Div>
	   <span className={`alert ${alertType}`}>{alertText}</span>
	</Div> 
}
const Div = Styled.div`
padding-bottom:1rem;
width:96%;
margin:0 auto;
.alert {
	display:flex;
	align-items:center;
    color:rgb(0 84 210 / 93%);
	border-radius:6px;
	font-size:1.5rem;
	font-weight:600;
	padding:2rem 3rem;
	transition:all .6s var(--transition-1);
	transform:translateY(20px);
	font-family:"Barlow", sans-serif;
	line-height:2;
	text-transform:uppercase;
	&.success {
        color: #053010;
		transform:translateY(0);
	    border:1px solid #053010;
	}
	&.danger {
		border:1.5px solid #c72e2e;
		color:#c72e2e;
			transform:translateY(0);
			
	}
}

`

