import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
position: absolute;
    top:550px;
    left:25vmax;
    z-index: 2000;
    height:300px;
    width:50%;
    min-width: 500px;
    background-color: white;
    border-radius: 8px;
    border: 3px solid black;
    box-shadow: 1px 1px 7px 5555px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

    const Input = styled.input`
        width: 95%;
        border: 2px solid black;
        border-radius: 10px;
        align-self: center;
        height: 60px;
        cursor: pointer; 
        &:focus{
            transform: scale(1.01);
        }
    `;

    const CloseButton = styled.button`
        background-color:#d6d6d6;
        margin-top:10px;
        margin-right: 10px;
        padding: 5px 15px 5px 15px;
        align-self: flex-end;
        font-size: 25px;
        border-radius: 8px;
        border: 1px solid black;
        &:hover{
            transform: scale(1.02);
            background-color: #b8b8b8
        }
    
    `;
    const Label = styled.h2`
    width: 100%-20px;
    margin-top: 20px;
    margin-left: 35px;
    font-weight: bold;
    font-size:30px;
`;

const CreateCategoryButton = styled.button`
        margin-bottom: 15px;
        margin-left: 30px;
        background-color: #127275;
        font-size: 22px;
        font-weight: bold;
        color: white;
        border-radius: 8px;
        border: 1px solid black;
        height: 80px;
        width: 140px;
        &:hover{
            transform: scale(1.02);
            background-color: #179397
        }
    `;
const AddCategoryModal = ({ modal, close }) => {


return (   
modal ? (
    <Modal>
        <CloseButton onClick={close}>Lukk Modal</CloseButton>
        <Label>Skriv inn ny kategori</Label>
        <Input></Input>
        <CreateCategoryButton>Opprett</CreateCategoryButton>  
    </Modal>
) : (null));};

export default AddCategoryModal;