import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import  { TitleContext } from '../contexts/TitleProvider.jsx';
import AddCategoryModal from '../components/AddCategoryModal.jsx';


    const ArticleWrapper = styled.div`
        width: 60%;
        margin: 0 auto;
    `;

    const ArticleForm = styled.form`
        width: 100%;
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

    const TextArea = styled.textarea`
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

    const Dropdown = styled.select`
        width: 100%;
        border: 2px solid black;
        border-radius: 10px;
        height: 60px;
        margin-top: 10px;
        padding: 10px 12px;
        font-size: 20px;
        cursor: pointer; 
        &:focus{
            transform: scale(1.01);
        }
    `;

    const Label = styled.h2`
        width: 100%-20px;
        margin-top: 20px;
        font-weight: bold;
        font-size:30px;
    `;

    const CategoryBox = styled.div`
        display: grid;
        grid-template-columns: 7fr 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    `;

    const NewCategoryButton = styled.button`
        margin-top: 10px;
        margin-left: 5px;
        background-color: #127275;
        font-size: 22px;
        font-weight: bold;
        color: white;
        &:hover{
            transform: scale(1.04);
            background-color: #a7faa4
        }
    `;

    const CreateArticleButton = styled.button`
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

const NewArticle = () => {

    const [disableState, setDisableState] = useState(true);
    const { updateState } = useContext(TitleContext);
    const history = useHistory();
    const [ modal, setModal] = useState(false);
    const [ titleValue, setTitleValue] = useState("");
    const [ ingressValue, setIngressValue] = useState("");
    const [ contentValue, setContentValue] = useState("");
    const [ dateValue, setDateValue] = useState("");
    const [ categoryValue, setCategoryValue] = useState("Generelt");
    const [ authorValue, setAuthorValue] = useState("Lars Larsen");



    const handleRoute = (path) => {
        history.push(path)
    }

    const handleTitleChange = (e) => {
        setTitleValue(e.target.value);
        disableButton();
    }
    const handleIngressChange = (e) => {
        setIngressValue(e.target.value);
        disableButton();
    }
    const handleContentChange = (e) => {
        setContentValue(e.target.value);
        disableButton();
    }
    const handleDateChange = (e) => {
        setDateValue(e.target.value);
        disableButton();
    }
    const handleCategoryChange = (e) => {
        setCategoryValue(e.target.value);
        disableButton();
    }
    const handleAuthorChange = (e) => {
        setAuthorValue(e.target.value);
        disableButton();
    }

    const disableButton = () => {
        if(
            titleValue === "" ||
            ingressValue === "" ||
            contentValue === "" ||
            dateValue === "" ||
            categoryValue === "" ||
            authorValue === ""
        ){
            setDisableState(true);
        }
        else {
            setDisableState(false);
        }
    }

    const handleSubmit = () => {
        
        const newArticle = {
            tittel: titleValue,
            ingress: ingressValue,
            innhold: contentValue,
            dato: dateValue,
            kategori: categoryValue,
            forfatter: authorValue,
        };

        const createArticle = async () => {
            //await create(newArticle);
        }
        //createArticle();
        alert("Fagartikkel opprettet")

    }

    const showModal = (e) => {setModal(true); e.preventDefault();}

    const closeModal = () => {
        setModal(false);
    }


    return(
        <ArticleWrapper>
            <ArticleForm>
                <Label>Title</Label>
                <Input autoFocus={true} onChange={handleTitleChange}></Input>
                <Label>Ingress</Label>
                <Input onChange={handleIngressChange}></Input>
                <Label>Innhold</Label>
                <TextArea onChange={handleContentChange}></TextArea>
                <Label>Dato</Label>
                <Input onChange={handleDateChange}></Input>
                <Label>Kategori</Label>
                <CategoryBox>
                    <Dropdown onChange={handleCategoryChange} value={categoryValue}>
                    <option value="Generelt">Generelt</option>
                    <option value="Vannskade">Vannskade</option>
                    <option value="Varmtvannsbereder">Varmtvannsbereder</option>
                    <option value="Nytt kjøkken">Nytt kjøkken</option>
                    </Dropdown>
                    <NewCategoryButton onClick={showModal}>NY</NewCategoryButton>
                </CategoryBox>
                <Label>Forfatter</Label>
                <Dropdown onChange={handleAuthorChange} value={authorValue} >
                    <option value="Lars Larsen">Lars Larsen</option>
                    <option value="Gunn Gundersen">Gunn Gundersen</option>
                    <option value="Simen Simensen">Simen Simensen</option>
                </Dropdown>
            </ArticleForm>
            <DisableBar>
                <CreateArticleButton onClick={() => { handleSubmit(); handleRoute("/fagartikler"); updateState("Fagartikler")}} disabled={disableState}>CREATE</CreateArticleButton>
                <ErrorMessage hidden={!disableState}>Vennligst fyll ut alle feltene</ErrorMessage>
            </DisableBar>
            <AddCategoryModal modal={modal} close={closeModal} /> 
        </ArticleWrapper>
        
    );
};

export default NewArticle;