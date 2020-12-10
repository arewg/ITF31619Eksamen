import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 40px;
`;

const GridCard = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding-left: 3px;
  background-color: whitesmoke;
  &:hover 
    transform: scale(1.02);
    cursor: pointer;
    background-color: #e7e7e7;
  }
`;

const CardItem = styled.ul`
  &:first-child {
    font-weight: bold;
  }
`;

const OfficeGrid = ({ list }) => {
  const history = useHistory();

  const handleClick = (e) => {
    history.push(`/kontorer/${e}`);
  };

  return (
    <Grid>
      {list.map((listElement) => (
        <GridCard
          key={listElement.id}
          value={listElement.id}
          onClick={() => {
            handleClick(`${listElement.id}`);
          }}
        >
          <CardItem>{listElement.navn}</CardItem>
          <CardItem>{listElement.adresse}</CardItem>
          <CardItem>{listElement.telefon}</CardItem>
          <CardItem>{listElement.epost}</CardItem>
        </GridCard>
      ))}
    </Grid>
  );
};

export default OfficeGrid;
