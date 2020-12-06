import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import  { TitleContext } from '../contexts/TitleProvider.jsx';
import AddCategoryModal from '../components/AddCategoryModal.jsx';
import { create } from '../utils/userService';
import { get } from '../utils/categoryService';

const RegisterWrapper = styled.div`
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

const DisableBar = styled.div`
    display:flex;
    align-items: center;
    `;

const ErrorMessage = styled.h2`

    color: red;
    font-size: 22px;
    font-weight: bold;
    margin-left:10px;
    `;

const CreateUserButton = styled.button`
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

const Register = () =>  {
    const [disableState, setDisableState] = useState(true);
    const history = useHistory();
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

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

    const handleRout = (path) => {
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

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
        disableButton();
    }

    const disableButton = () => {
        if (
            nameValue === "" ||
            emailValue === "" ||
            passwordValue === ""
        ) {
            setDisableState(true);
        }
        else {
            setDisableState(false);
        }
    }

    const handleSubmit = () => {
        const Newuser = {
            name: nameValue,
            email: emailValue,
            password: passwordValue,
            role: "user"
        };

        const createUser = async () => {
            await create(Newuser);
        }
        createUser();
    }

    return(
        <RegisterWrapper>
            <Label>Navn</Label>
            <Input autoFocus={true} onChange={handleNameChange}></Input>
            <Label>E-post</Label>
            <Input  onChange={handleEmailChange}></Input>
            <Label>Passord</Label>
            <Input  onChange={handlePasswordChange} type="password"></Input>
            <DisableBar>
                <CreateUserButton onClick={() => { handleSubmit();}}>Opprett bruker</CreateUserButton>
                <ErrorMessage hidden={!disableState}>Vennligst fyll ut alle feltene</ErrorMessage>
            </DisableBar>
        </RegisterWrapper>
        
    );
};

export default Register;