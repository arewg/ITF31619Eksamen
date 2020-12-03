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

const SingleArticle = () => {
    const [article, setArticle] = useState(article);
    const { state } = useContext(TitleContext);

    return (

<>
    <Title>Velkommen til {state}</Title>
    <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet
    </Text>
    <Title>Våre Ansatte</Title>
    <Grid>
        {article && article.map((article) => (
            <GridCard>
                <PictureBox></PictureBox>
                <CardItem>Ansatt {article.navn}</CardItem>
                <CardItem>{article.stilling}</CardItem> 
            </GridCard>
        ))}
    </Grid>
    <PhoneBox><Title>Kontakt oss på 69 99 00 00</Title></PhoneBox>
</>

    );

};

export default SingleArticle;