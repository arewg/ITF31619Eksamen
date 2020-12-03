import React, { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { TitleContext } from '../contexts/TitleProvider'

const Title = styled.h1`
font-weight: bold;
font-size: 35px;
`;

const Text = styled.p`
width: 60%;
min-width: 300px;
margin-bottom: 50px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 700px;
  margin-top: 40px;
`;

const GridCard = styled.div`
flex-grow: 1;
width: 14%;
height: 30%;
flex-wrap: wrap;
`; 

const CardItem = styled.ul`
`;

const PictureBox = styled.div`
width: 160px;
height: 160px;
background-color:#c7c7c7;
`;

const PhoneBox = styled.div`
width: 100%;
background-color: #cecece;
height: 220px;
display: flex;
align-items: center;
    justify-content: center;
`;

const DivAuthorAndDate = styled.div `
display:flex;

`

const ContentsArticle = styled.div `

`

const DeleteButton = styled.button `
background-color: red;
margin-top:10px;
margin-right: 10px;
padding: 5px 15px 5px 15px;
align-self: flex-end;
font-size: 20px;
color: white;
border-radius: 8px;
&:hover{
    transform: scale(1.02);
    background-color: #b8b8b8
}
`

const EditButton = styled.button `
background-color: green;
margin-top:10px;
margin-right: 10px;
padding: 5px 15px 5px 15px;
align-self: flex-end;
font-size: 20px;
color:white;
border-radius: 8px;
&:hover{
    transform: scale(1.02);
    background-color: #b8b8b8
}
`

const SingleArticle = () => {
    const [article, setArticle] = useState(article);
    const { state } = useContext(TitleContext);

    return (

<>
    <ContentsArticle>
        <DivAuthorAndDate>
            <Text>Av: Forfatternavn</Text>
            <Text>Dato: </Text>
        </DivAuthorAndDate>
        <Text>Innhold kommer her</Text>
        <Text>Kategorinavn</Text>
        <DeleteButton>Slett</DeleteButton>
        <EditButton>Rediger</EditButton>
    </ContentsArticle>
    <Grid>
        {article && article.map((article) => (
            <GridCard>
                <PictureBox></PictureBox>
                <CardItem>Ansatt {article.navn}</CardItem>
                <CardItem>{article.stilling}</CardItem> 
            </GridCard>
        ))}
    </Grid>
</>

    );

};

export default SingleArticle;