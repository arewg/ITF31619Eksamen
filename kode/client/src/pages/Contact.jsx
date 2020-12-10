import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthProvider.jsx';

import { getUserInfo } from '../utils/authService.js';
import { send, create } from '../utils/emailService';

import Header from '../components/Header.jsx';

const ContactForm = styled.section`
  margin: 0 auto;
  width: 60%;
  min-height: 900px;
`;

const Label = styled.label`
  width: 100%-20px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 30px;
`;

const TextArea = styled.textarea`
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

const SendButton = styled.button`
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
    background-color: #a4adfa;
  }
`;

const Contact = () => {
  const { isLoggedIn, user } = useAuthContext();
  const history = useHistory();
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await getUserInfo();
      if (error) {
        setError(error);
      } else {
        setEmailValue(data.data.email);
        setNameValue(data.data.name);
      }
    };
    fetchData();
  }, []);

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  };

  const handleSubmit = () => {
    const NewInquiry = {
      name: nameValue,
      email: emailValue,
      message: descriptionValue,
    };

    const sendEmail = async () => {
      await send(NewInquiry);
    };

    const createEmail = async () => {
      await create(NewInquiry);
    };
    sendEmail();
    createEmail();
    history.push('/');
  };

  return (
    <>
      <Header title="Kontakt oss" />
      <ContactForm>
        {!isLoggedIn && (
          <>
            <Label>E-post</Label>
            <Input onChange={handleEmailChange} />
          </>
        )}
        {(() => {
          switch (isLoggedIn) {
            case true:
              return (
                <>
                  <Label>Navn</Label>
                  <Input defaultValue={nameValue} onChange={handleNameChange} />
                </>
              );
            case false:
              return (
                <>
                  <Label>Navn</Label>
                  <Input onChange={handleNameChange} />
                </>
              );
            default:
              return (
                <>
                  <Label>Navn</Label>
                  <Input onChange={handleNameChange} />
                </>
              );
          }
        })()}
        <Label>Beskrivelse</Label>
        <TextArea onChange={handleDescriptionChange} />
        <SendButton
          onClick={() => {
            handleSubmit();
          }}
        >
          Send inn
        </SendButton>
      </ContactForm>
    </>
  );
};

export default Contact;
