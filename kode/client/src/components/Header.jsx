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
`;

const Header = () => {
    const headerTitle = useContext(TitleContext);
    
    return (
    <Title>{headerTitle.state}</Title>
    )
};

export default Header;