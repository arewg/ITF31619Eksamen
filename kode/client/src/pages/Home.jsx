import React, { useContext } from 'react';
import styled from 'styled-components';

    const HomeSection = styled.section`
        display: grid;
        grid-template-columns: 0.5fr 1.5fr;
        grid-template-rows: 1fr 1fr;
        gap: 50px 50px;
        grid-template-areas:
            ". ."
            ". .";
    `;
    
    const HomeCard = styled.article`
        background-color: #aaaaaa;
        padding-top: 80px;
        padding-bottom: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
  
        &:nth-child(3){
            grid-area: 2 / 1 / 3 / 3;
        }
    `;


const Home = () => (

        <HomeSection>
            <HomeCard>Kontorer</HomeCard>
            <HomeCard>Kontakt</HomeCard> 
            <HomeCard>Se våre fagartikler om oppussing av bad</HomeCard> 
        </HomeSection>
        
);

export default Home;