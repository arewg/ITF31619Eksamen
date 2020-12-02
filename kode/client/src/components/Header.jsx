import React, { useState, useContext} from 'react';
import styled from 'styled-components';
import { TitleContext } from '../contexts/TitleProvider';

const Title = styled.h1`
    width: 100%;
    padding-top: 110px;
    padding-bottom: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ebebeb;
    font-weight: bold;
    font-size: 45px;
`;

const Header = () => {
    const headerTitle = useContext(TitleContext);
    
    return (
    <Title>{headerTitle.state ? headerTitle.state : "Velkommen til FG Rørleggerservice AS"}</Title>
    )
};

export default Header;