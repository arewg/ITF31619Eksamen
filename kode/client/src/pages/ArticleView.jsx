import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import  { TitleContext } from '../contexts/TitleProvider.jsx';
import ArticleData from './ArticleData.jsx'

    const ArticleWrapper = styled.div`
        width: 60%;
        margin: 0 auto;
    

    `;
    const ButtonBar = styled.div`
     width: 100%;
     min-height: 35px;
     display: flex;

     &::after{
         color:red;
     }
    `;

    const Buttons = styled.button`
        background-color: #cfcfcf;
        border-radius:8px;
        margin: 0px 0px 0px 10px;
        width: 125px;

        &:hover{
            background-color: #cac5c6;
            transform: scale(1.02);
        }

    &:first-child{
        background-color: #127275;
        color: white;
        margin-left: 0px;
        margin-right: 65%; 

        &:hover{
            background-color: #179397;
            transform: scale(1.02); 
        }
    }


    `;

    const ArticleBox = styled.div`
        margin-top: 50px;
        display: grid;
        grid-template-columns: 200px 1fr;
        grid-template-rows: 200px;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        cursor: pointer;
        &:hover{
            transform: scale(1.01);
            border: 0.3px solid #cecece;
            box-shadow: 0px 2px 3px #cecece;
        }
    `;

    const TextBox = styled.div`
        display: grid;
        grid-template-columns: 1fr 350px;
        grid-template-rows: 80px 250px;
    
    `;

    const Ingress = styled.p`
        padding-left: 20px;
        padding-top: 20px;
        padding-right: 20px;
        height: 47%;
        grid-area: 2 / 1 / 3 / 6;
        font-size: 19px;
        font-weight: 475;
    
    `;

    const ArticleImage = styled.div`
        height: 90%;
        width: 90%;
        justify-self: center;
        align-self: center;
        background-color:#dbdbdb;
    `;

    const Title = styled.h1`
        width: 100%-20px;
        margin: 15px 0px 0px 20px;
        font-weight: bold;
        font-size:50px;
    `;

    const Category = styled.h2`
        width: 100%-20px;
        margin: 20px 20px 0px 0px;
        font-weight: bold;
        font-size: 15px;
        display: flex;
        justify-content: flex-end;

    `;


const ArticleView = () => {

    const [articles, setArticles] = useState(ArticleData)
    const { updateState } = useContext(TitleContext);
    const history = useHistory();

    
    const handleClick = (id) => {
        history.push("/fagartikler/"+id)
    }
    return(
        <ArticleWrapper>
            <ButtonBar>
                <Buttons onClick={() => {handleClick("/fagartikler/nyartikkel"); updateState("Ny artikkel");}}>Ny artikkel</Buttons>
                <Buttons>Filtrer</Buttons>
                <Buttons>Søk</Buttons>
            </ButtonBar>
            {articles.map((article) => (  
            <ArticleBox onClick={() => {handleClick(article.id); updateState(article.tittel)}}>
                <ArticleImage></ArticleImage>
                
                    <TextBox>
                        <Title>{article.tittel}</Title>
                        <Category>{article.kategori}</Category>
                        <Ingress>{article.ingress}</Ingress>
                    </TextBox>
            </ArticleBox>
                ))}
        </ArticleWrapper>
    );
};

export default ArticleView;