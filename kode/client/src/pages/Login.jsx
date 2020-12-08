// Leksjon 13

import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header.jsx';

const Login = () => {
  return (
    <>
      <Header title="Logg inn" />
      <LoginForm />;
    </>
  );
};

/*const LoginWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const Input = styled.input `
    width: 100%;
    border: 2px solid black;
    border-radius: 10px;
    height: 60px;
    margin-top: 10px;
    cursor: pointer; 
    &:focus{
        transform: scale(1.01);
    }   
`;

const Label = styled.h2 `
    width: 100%-20px;
    margin-top: 20px;
    font-weight: bold;
    font-size:30px;
    `;

const LoginButton = styled.button`
    width: 135px;
    height: 70px;
    margin-top: 10px;
    margin-left: 5px;
    background-color: #84e6ff;
    font-size: 22px;
    font-weight: bold;
    color: white;
    &:hover{
        transform: scale(1.04);
        background-color: #a4adfa
    }
    &:disabled{
        background-color: #8f8f8f;
        transform: scale(1);
        cursor: none;            
    }
    `;

const Login = () =>  {
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    }

    const handleNameChange = (e) => {
        setNameValue(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    }

    const handleSubmit = () => {
        const userInfo = {
            name: nameValue,
            email: emailValue,
            password: passwordValue
        };
    }

    return(
        <LoginWrapper>
            <Label>Navn</Label>
            <Input autoFocus={true} onChange={handleNameChange}></Input>
            <Label>E-post</Label>
            <Input  onChange={handleEmailChange}></Input>
            <Label>Passord</Label>
            <Input  onChange={handlePasswordChange}></Input>
            <LoginButton onClick={() => { handleSubmit();}}>Logg inn</LoginButton>
        </LoginWrapper>
        
    );
};*/

export default Login;
