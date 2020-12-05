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

const Logo = styled.h1`
    align-self: center;
    font-weight: bold;
    font-size: 25px;
    padding-left: 20px;
    //fjerner logoen når skjermen er mindre enn 800px
    @media screen and (max-width: 800px) {
      display: none;
    }
    `; 

const StyledNavbar = styled.div`
    display: flex;
  background: #fff;
  box-shadow: 1px 1px 2px #f5f5f5;
  width: 100%;

//Breakepoints for når skjermen er mindre enn 500px, større enn 500px, og over 800px
  @media screen and (max-width: 800px) {
          background-color: #89b69a;
        }
  @media screen and (max-width: 500px) {
          background-color: red;
          display: none;
        }  
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