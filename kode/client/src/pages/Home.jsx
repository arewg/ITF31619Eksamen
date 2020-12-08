import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header.jsx';

const HomeSection = styled.section`
  padding: 20px 20px;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 1fr 1fr;
  gap: 50px 50px;
  grid-template-areas:
    '. .'
    '. .';
`;

const HomeCard = styled.article`
  background-color: #cecece;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
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
      <Header title="Velkommen til FG Rørlegger AS" />
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
