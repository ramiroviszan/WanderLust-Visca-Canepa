import React from 'react';
import styled from 'styled-components';

const AddDestination = ({onClick}) => (
	<div>
		<Button type="button" onClick={(e) => onClick(e)}>add</Button>
	</div>
);

export default AddDestination;

const Button = styled.button`
	height: 45px;
    width: 45px;
    margin: 1%;
    font-size: 31px;
    color: white;
    background-color: #1e7f7e;
    border-radius: 50%;
    border: none;
    font-family: Material Icons;
    &:hover { 
  		box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    }
`;