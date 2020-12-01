import React, { useState, useContext} from 'react';
import styled from 'styled-components';
import { TitleContext } from '../contexts/TitleProvider';

const Title = styled.h1`
    width: 100%;
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #969696;
    font-weight: bold;
  font-size:25px;
`;

const Header = () => {
    const headerTitle = useContext(TitleContext);
    
    return (
    <Title>{headerTitle.state ? headerTitle.state : "Velkommen til FG Rørleggerservice AS"}</Title>
    )
};

export default Header;