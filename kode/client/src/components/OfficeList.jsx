// Leksjon 11
import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { TitleContext } from '../contexts/TitleProvider';

const List = styled.ul``;

const ListItem = styled.li`
  width: 60%;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
    background-color: #e0e0e0;
  }
`;

const StyledListItem = styled.a`
  margin-right: 19px;
  font-size: 20px;
  &:first-child {
    font-weight: bold;
  }
`;

const OfficeList = ({ list }) => {
  const history = useHistory();

  const handleClick = (e) => {
    history.push(`/kontorer/${e}`);
  };

  return (
    <List>
      {list.map((listeobjekter) => (
        <ListItem
          key={listeobjekter.id}
          onClick={() => {
            handleClick(`${listeobjekter.id}`);
            updateState(`${listeobjekter.navn}`);
          }}
        >
          <StyledListItem>{listeobjekter.navn}</StyledListItem>
          <StyledListItem>{listeobjekter.adresse}</StyledListItem>
          <StyledListItem>{listeobjekter.telefon}</StyledListItem>
          <StyledListItem>{listeobjekter.epost}</StyledListItem>
        </ListItem>
      ))}
    </List>
  );
};

export default OfficeList;
