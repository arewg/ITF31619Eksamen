import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NarrowWrapper } from '../styles/Styles.jsx';
import { useAuthContext } from '../contexts/AuthProvider.jsx';
import { list } from '../utils/emailService.js';
import Header from '../components/Header.jsx';

const ReportBox = styled.div`
  margin-top: 50px;
  display: grid;
`;

const TextBox = styled.div`
  display: grid;
  background-color: #dbdbdb;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Name = styled.p`
  width: 100%-20px;
  margin: 15px 0px 0px 20px;
  font-weight: bold;
  font-size: 25px;
  grid-area: 1 / 1 / 2 / 2;
`;

const Email = styled.p`
  height: 90%;
  width: 90%;
  justify-self: center;
  align-self: center;
  grid-area: 2 / 1 / 3 / 2;
`;

const Message = styled.p`
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  height: 47%;
  grid-area: 3 / 1 / 4 / 2;
  font-size: 19px;
  font-weight: 475;
`;

const Report = () => {
  const [reports, setReports] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setReports(data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header title="Henvendelser" />
      <NarrowWrapper>
        {reports &&
          reports.map((report) => (
            <ReportBox key={report.id}>
              <TextBox>
                <Name>Navn: {report.name}</Name>
                <Email>E-post: {report.email}</Email>
                <Message>{report.message}</Message>
              </TextBox>
            </ReportBox>
          ))}
      </NarrowWrapper>
    </>
  );
};

export default Report;
