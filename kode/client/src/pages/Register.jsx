import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { create } from '../utils/userService';
import Header from '../components/Header.jsx';

const RegisterWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  border: 2px solid black;
  border-radius: 10px;
  height: 60px;
  margin-top: 10px;
  cursor: pointer;
  &:focus {
    transform: scale(1.01);
  }
`;

const Label = styled.h2`
  width: 100%-20px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 30px;
`;

const DisableBar = styled.div`
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.h2`
  color: red;
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
`;

const CreateUserButton = styled.button`
  width: 135px;
  height: 70px;
  margin-top: 10px;
  background-color: #127275;
  border-radius: 8px;
  font-size: 22px;
  font-weight: bold;
  color: white;
  &:hover {
    transform: scale(1.04);
    background-color: #169094;
  }
  &:disabled {
    background-color: #8f8f8f;
    transform: scale(1);
  }
`;

const Register = () => {
  const [disableState, setDisableState] = useState(true);
  const history = useHistory();
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    disableButton();
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
    disableButton();
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
    disableButton();
  };

  const disableButton = () => {
    if (
      nameValue === '' ||
      emailValue === '' ||
      passwordValue === '' ||
      passwordValue.length < 4
    ) {
      setDisableState(true);
    } else {
      setDisableState(false);
    }
  };

  const handleSubmit = () => {
    const Newuser = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      role: 'user',
    };

    const createUser = async () => {
      await create(Newuser);
    };
    createUser();
    history.push('/');
  };

  return (
    <>
      <Header title="Opprett bruker" />
      <RegisterWrapper>
        <Label>Navn</Label>
        <Input autoFocus onChange={handleNameChange} />
        <Label>E-post</Label>
        <Input onChange={handleEmailChange} />
        <Label>Passord</Label>
        <Input onChange={handlePasswordChange} type="password" />
        <DisableBar>
          <CreateUserButton
            disabled={disableState}
            onClick={() => {
              handleSubmit();
            }}
          >
            Opprett bruker
          </CreateUserButton>
          <ErrorMessage hidden={!disableState}>
            Vennligst fyll ut alle feltene
          </ErrorMessage>
        </DisableBar>
      </RegisterWrapper>
    </>
  );
};

export default Register;
