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
        font-weight: bold;
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
    margin-bottom: 10px;
    font-weight: bold;
    font-size:30px;
`;

const DivButtonAndError = styled.div `
margin-top: 20px;
display: flex;
align-items: center;
`

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

const ErrorMessage = styled.h2`

color: red;
font-size: 22px;
font-weight: bold;
margin-left:10px;

`;
const AddCategoryModal = ({ modal, close }) => {

    const [disableState, setDisableState] = useState(true);
    const [ newCategory, setNewCategory ] = useState("");

    const handleNewCategory = (e) => {
        setNewCategory(e.target.value);
        disableButton();
    }

    const disableButton = () => {
        if (newCategory === ""){
            setDisableState(true);
        } else {
            setDisableState(false);
        }
    }

    const handleSubmit= () => {
        const data = {
            kategori: newCategory
        }

        setNewCategory("");
        setDisableState(true);
        close();
    }

    return (   
modal ? (
    <Modal>
        <CloseButton onClick={() => {setNewCategory(""); close()}}>X</CloseButton>
        <Label>Skriv inn ny kategori</Label>
        <Input onChange={handleNewCategory}></Input>
        <div>
        <DivButtonAndError>
            <CreateCategoryButton disabled={disableState} onClick={handleSubmit}>Opprett</CreateCategoryButton>
            <ErrorMessage hidden={!disableState}>Feltet kan ikke være tomt</ErrorMessage>
        </DivButtonAndError>
        </div>  
    </Modal>
) : (null));};

export default AddCategoryModal;