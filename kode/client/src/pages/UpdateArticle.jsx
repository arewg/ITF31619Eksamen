import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import  { TitleContext } from '../contexts/TitleProvider.jsx';
import AddCategoryModal from '../components/AddCategoryModal.jsx';
import articleService from '../utils/articleService';
import categoryService from '../utils/categoryService';


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

const UpdateArticle = () => {

    const [disableState, setDisableState] = useState(true);
    const { updateState } = useContext(TitleContext);
    const [ article, setArticle ] = useState();
    const [ categories, setCategories ] = useState();
    const history = useHistory();
    const [ modal, setModal] = useState(false);
    const [ titleValue, setTitleValue] = useState();
    const [ ingressValue, setIngressValue] = useState();
    const [ contentValue, setContentValue] = useState();
    const [ dateValue, setDateValue] = useState();
    const [ categoryValue, setCategoryValue] = useState();
    const [ authorValue, setAuthorValue] = useState();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
          const { data, error } = await articleService.get(id);
          if (error) {
            setError(error);
          } else {
            console.log(data);
            setArticle(data);
          }
        };
        const fetchCategories = async () => {
            const { data, error } = await categoryService.get();
            if (error) {
              setError(error);
            } else {
              setCategories(data);
            }
        };
        fetchData();
        fetchCategories();
      }, []);


    const handleRoute = (path) => {
        history.push(path)
    }

    const handleTitleChange = (e) => {
        setTitleValue(e.target.value);
    }
    const handleIngressChange = (e) => {
        setIngressValue(e.target.value);
    }
    const handleContentChange = (e) => {
        setContentValue(e.target.value);
    }
    const handleDateChange = (e) => {
        setDateValue(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setCategoryValue(e.target.value);
    }
    const handleAuthorChange = (e) => {
        setAuthorValue(e.target.value);

    }


    const handleSubmit = () => {
        
        const updatedArticle = {
            title: titleValue,
            ingress: ingressValue,
            content: contentValue,
            date: dateValue,
            category: categoryValue,
            author: authorValue,
        };

        const updateArticle = async () => {
            await articleService.update(id, updatedArticle);
        }
        updateArticle();
        alert("Fagartikkel oppdatert")

    }

    const showModal = (e) => {setModal(true); e.preventDefault();}

    const closeModal = () => {
        setModal(false);
    }


    return(
      <>
      {article &&  
        <ArticleWrapper>
            <ArticleForm>
                <Label>Title</Label>
                <Input autoFocus={true} onChange={handleTitleChange} defaultValue={article.title}></Input>
                <Label>Ingress</Label>
      <Input onChange={handleIngressChange} defaultValue={article.ingress}></Input>
                <Label>Innhold</Label>
      <TextArea onChange={handleContentChange} defaultValue={article.content}></TextArea>
                <Label>Dato</Label>
      <Input onChange={handleDateChange} defaultValue={article.date}></Input>
                <Label>Kategori</Label>
                <CategoryBox>
                    <Dropdown onChange={handleCategoryChange} value={categoryValue}>
                    <option value={article.category}>{article.category}</option>
                    {categories && categories.map((category) => (
                        <option key={category.id} value={category.category}>{category.category}</option>
                    ))}
                    </Dropdown>
                    <NewCategoryButton onClick={showModal}>NY</NewCategoryButton>
                </CategoryBox>
                <Label>Forfatter</Label>
                <Dropdown onChange={handleAuthorChange} value={authorValue}>
                    <option value={article.author}>Behold forfatter {article.author}</option>
                    <option value="Marius Wallin">Marius Wallin</option>
                    <option value="Vanja Vannlekkasje">Vanja Vannlekkasje</option>
                    <option value="Fredrik Flom">Fredrik Flom</option>
                    <option value="Preben Plumber">Preben Plumber</option>
                    <option value="Ove Oversvømmelse">Ove Oversvømmelse</option>
                </Dropdown>
            </ArticleForm>
            <DisableBar>
                <CreateArticleButton onClick={() => { handleSubmit(); handleRoute("/fagartikler"); updateState("Fagartikler")}}>UPDATE</CreateArticleButton>
            </DisableBar>
            <AddCategoryModal modal={modal} close={closeModal} /> 
        </ArticleWrapper>
}
    </>
    );
};

export default UpdateArticle;