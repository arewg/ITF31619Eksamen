import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import { WideWrapper } from '../styles/Styles.jsx';

const HomeSection = styled(WideWrapper)`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 1fr 1fr;
  gap: 50px 50px;
  grid-template-areas:
    '. .'
    '. .';
`;

const HomeCard = styled.article`
  background-color: #ebebeb;
  border-radius: 5px;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
&:hover{
  background-color: #127275;
  color: white;
  transform: scale(1.01);
  box-shadow: 1px 1px 10px black;
}

  &:nth-child(3) {
    grid-area: 2 / 1 / 3 / 3;
  }
`;

const Home = () => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };
  return (
    <>
      <Header title="Velkommen til LG Rørlegger AS" />
      <HomeSection>
        <HomeCard
          onClick={() => {
            handleClick('/kontorer');
          }}
        >
          Kontorer
        </HomeCard>
        <HomeCard
          onClick={() => {
            handleClick('/kontakt');
          }}
        >
          Kontakt
        </HomeCard>
        <HomeCard
          onClick={() => {
            handleClick('/fagartikler');
          }}
        >
          Se våre fagartikler om oppussing av bad
        </HomeCard>
      </HomeSection>
    </>
  );
};

export default Home;
