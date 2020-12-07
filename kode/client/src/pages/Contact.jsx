import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import  { TitleContext } from '../contexts/TitleProvider.jsx';
import { send } from '../utils/emailService';

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
    const [disableState, setDisableState] = useState(true);
    const { updateState } = useContext(TitleContext);
    const history = useHistory();
    const [nameValue, setNameValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await get();
            if (error) {
                setError(error);
            }
            else {
                console.log(data);
            }
        };
        fetchData();
    }, []);
    
    const handleClick = (path) => {
        history.push(path)

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
            //email: //her må jeg hente mail får innlogget bruker,
            description: descriptionValue
        };

        console.log(NewInquiry);
        const sendEmail = async () => {
            await send(NewInquiry);
        }
        sendEmail();
    }

    return(
        <ContactForm>
            <Label>Navn</Label>
            <Input autoFocus={true} onChange={handleNameChange}></Input>
            <Label>Beksrivelse</Label>
            <Input autoFocus={true} onChange={handleDescriptionChange}></Input>
            <SendButton onClick={() => { handleSubmit();}}>Send inn</SendButton>
        </ContactForm>
    );
};

export default Contact;