import React, { useState } from 'react';
import styled from 'styled-components';
import { WideWrapper } from '../styles/Styles.jsx';
import Icon from '@material-ui/core/Icon';
import OfficeData from '../data/OfficeData';
import OfficeGrid from '../components/OfficeGrid.jsx';
import OfficeList from '../components/OfficeList.jsx';
import Header from '../components/Header.jsx';


const FilterButtonDiv = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  flex-direction: row-reverse;
  margin-bottom: 20px;
`;

const DropdownFilter = styled.select`
  background-color: #ebebeb;
  display: inline-block;
  text-align: center;
  padding: 10px 12px;
  text-decoration: none;
  cursor: pointer;
`;

const GridOrList = styled.span`
  width: 40px;
  margin-left: 20px;
  margin-top: 12px;
`;

const Offices = () => {
  const [offices, setOffices] = useState(OfficeData);
  const [filter, setFilter] = useState(filter || OfficeData);
  const [gridOrView, setGridOrView] = useState();

  const handleFilter = (e) => {
    if (e.target.value === '0') {
      setFilter(offices);
      return;
    }
    const filteredOffices = offices.filter(
      (office) => office.kategori === e.target.value
    );
    setFilter(filteredOffices);
  };

  const switchMethod = (value) => {
    setGridOrView(value);
  };

  return (
    <>
      <Header title="Kontorer" />
      <WideWrapper>
        <FilterButtonDiv>
          <GridOrList onClick={() => switchMethod('2')}>
            <Icon>reorder</Icon>
          </GridOrList>
          <GridOrList onClick={() => switchMethod('1')}>
            <Icon>view_module</Icon>
          </GridOrList>
          <DropdownFilter id="selectFilter" onChange={handleFilter}>
            <option value="0">Filter</option>
            <option value="1">Fredrikstad</option>
            <option value="2">Sarpsborg</option>
            <option value="3">Moss</option>
            <option value="4">Oslo</option>
          </DropdownFilter>
        </FilterButtonDiv>
        {(() => {
          switch (gridOrView) {
            case '1':
              return <OfficeGrid list={filter} />;
            case '2':
              return <OfficeList list={filter} />;
            default:
              return <OfficeGrid list={filter} />;
          }
        })()}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </WideWrapper>
    </>
  );
};

export default Offices;
