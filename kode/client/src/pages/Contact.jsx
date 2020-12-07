import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../contexts/AuthProvider.jsx';
import  { TitleContext } from '../contexts/TitleProvider.jsx';
import { getUserInfo } from '../utils/authService.js';
import { send, create } from '../utils/emailService';

    const ContactForm = styled.section`
     width: 100%;
     min-height: 900px;
    `;

    const Label = styled.label`
     width: 100%-20px;
    margin-top: 20px;
    font-weight: bold;
    font-size:30px;
    `;

    const Input = styled.input`
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

    const SendButton = styled.button`
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
    



const Contact = () => {
    const { isLoggedIn, user } = useAuthContext();
    const [disableState, setDisableState] = useState(true);
    const { updateState } = useContext(TitleContext);
    const history = useHistory();
    const [nameValue, setNameValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getUserInfo();
            if (error) {
                setError(error);
            }
            else {
                console.log("Data" + JSON.stringify(data));
                console.log("Data name" + data.data.name);
                setEmailValue(data.data.email);
                setNameValue(data.data.name);
            }
        };
        fetchData();
    }, []);
    
    const handleClick = (path) => {
        history.push(path)

    }

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
        disableButton();
    }

    const handleNameChange = (e) => {
        setNameValue(e.target.value);
        disableButton();
    }

    const handleDescriptionChange = (e) => {
        setDescriptionValue(e.target.value);
        disableButton();
    }

    const disableButton = () => {
        if (
            nameValue === "" ||
            descriptionValue === ""
        ){
            setDisableState(true);
        }
        else {
            setDisableState(false);
        }
    }

    const handleSubmit = () => {
        const NewInquiry = {
            name: nameValue,
            email: emailValue, 
            description: descriptionValue
        };

        console.log(NewInquiry);
        const sendEmail = async () => {
            await send(NewInquiry);
        }

        const createEmail = async () => {
            await create(NewInquiry);
        }
        sendEmail();
        createEmail();
    }

    return(
        <ContactForm>
            {!isLoggedIn &&
            <>
            <Label>E-post</Label>
            <Input autoFocus={true} onChange={handleEmailChange}></Input>
            </>}
            {(() => {
                   switch (isLoggedIn) {
                    case true:
                        return (<><Label>Navn</Label>
                            <Input autoFocus={true} defaultValue={nameValue} onChange={handleNameChange}></Input></>);
                    case false:
                        return(<><Label>Navn</Label>
                            <Input autoFocus={true} onChange={handleNameChange}></Input></>);
                    default:
                        return (<><Label>Navn</Label>
                            <Input autoFocus={true} onChange={handleNameChange}></Input></>);
                } 
                })()}
            <Label>Beksrivelse</Label>
            <Input autoFocus={true} onChange={handleDescriptionChange}></Input>
            <SendButton onClick={() => { handleSubmit();}}>Send inn</SendButton>
        </ContactForm>
    );
};

export default Contact;