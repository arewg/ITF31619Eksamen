// Leksjon 11
import React from 'react';
import { Box } from '@chakra-ui/core';
import styled from 'styled-components';
import Nav from '../components/Nav.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const StyledHeader = styled.header`
width: 100%;
float: center;

`;
const StyledNavbar = styled.div`
    display: flex;
  background: #fff;
  box-shadow: 1px 1px 2px #f5f5f5;
  width: 100%;
`;

const Logo = styled.h1`
    align-self: center;
    padding-left: 20px;
    `; 

const MainLayout = ({ children }) => (
  <Box>
      <StyledHeader>
        <StyledNavbar>
            <Logo>FG</Logo>
            <Nav />
        </StyledNavbar>
        <Header />
    </StyledHeader>
    <Box w="100%" padding="20px 20px" margin="0 auto">
      {children}
    </Box>
    <Footer />
  </Box>
);

export default MainLayout;