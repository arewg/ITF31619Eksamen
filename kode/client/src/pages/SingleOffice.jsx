import React, { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { TitleContext } from '../contexts/TitleProvider'
import EmployeeData from './EmployeeData.jsx';

const Title = styled.h1`
font-weight: bold;
font-size: 35px;
margin-top: 50px;
`;

const Text = styled.p`
width: 60%;
min-width: 300px;
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

const SingleOffice = () => {
    const [employees, setEmployees] = useState(EmployeeData);
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
        {employees.map((employee) => (
            <GridCard>
                <PictureBox></PictureBox>
                <CardItem>Ansatt {employee.navn}</CardItem>
                <CardItem>{employee.stilling}</CardItem> 
            </GridCard>
        ))}
    </Grid>
</>

    );

};

export default SingleOffice;