import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { WideWrapper } from '../styles/Styles.jsx';
import EmployeeData from '../data/EmployeeData.jsx';
import Header from '../components/Header';


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

const CardItem = styled.ul``;

const PictureBox = styled.div`
  width: 160px;
  height: 160px;
  background-color: #c7c7c7;
`;

const PhoneBox = styled.div`
  width: 100%;
  background-color: #cecece;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SingleOffice = () => {
  const [employees, setEmployees] = useState(EmployeeData);
  const kontor = useParams();

  return (
    <>
      <Header title={`Kontor Rørlegger ${kontor[0]}`} />
      <Wrapper>
        <Title>Velkommen til Rørlegger {kontor[0]}</Title>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet
        </Text>
        <Title>Våre Ansatte</Title>
        <Grid>
          {employees.map((employee) => (
            <GridCard>
              <PictureBox />
              <CardItem>Ansatt {employee.navn}</CardItem>
              <CardItem>{employee.stilling}</CardItem>
            </GridCard>
          ))}
        </Grid>
        <PhoneBox>
          <Title>Kontakt oss på 69 99 00 00</Title>
        </PhoneBox>
      </WideWrapper>
    </>
  );
};

export default SingleOffice;
