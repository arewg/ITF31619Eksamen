import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.p`
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e4e4e4;
`;

const Footer = () => (
  <FooterBar>Orgnr: 007 007 007 lg@lgror.no 99 00 00 00</FooterBar>
);

export default Footer;
