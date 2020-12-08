import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../contexts/AuthProvider.jsx';
import { list } from '../utils/emailService.js';
import Header from '../components/Header.jsx';

const ReportWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const Superadmin = () => {
    const { isLoggedIn, isSuperadmin } = useAuthContext();

    return (
        <>
        <Header title="Superadmin side" />
        <ReportWrapper>
            Side for superadmin
        </ReportWrapper>
        </>
    );
};

export default Superadmin;