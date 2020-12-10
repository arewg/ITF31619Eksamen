import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { NarrowWrapper } from '../styles/Styles.jsx';
import { list, listTopTen } from '../utils/articleService.js';
import Header from '../components/Header.jsx';
import { useAuthContext } from '../contexts/AuthProvider.jsx';

const ReportWrapper = styled(NarrowWrapper)`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 1px solid black;
  padding: 10px 10px;
  border-radius: 8px;
`;

const ReportBox = styled.div`
  margin-top: 50px;
  display: grid;
  border: 1px solid black;
  border-radius: 8px;
`;

const Label = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-weight: bold;
  font-size: 50px;
`;

const TextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Name = styled.p`
  width: 100%-20px;
  margin: 15px 0px 0px 20px;
  font-weight: bold;
  font-size: 30px;
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
  padding-right: 20px;
  padding-bottom: 10px;
  height: 47%;
  grid-area: 3 / 1 / 4 / 2;
  font-size: 30px;
  font-weight: bold;
`;

const Superadmin = () => {
  const { isLoggedIn, isSuperadmin } = useAuthContext();
  const [topTen, setTopTen] = useState();
  const [articles, setArticles] = useState();
  const [error, setError] = useState();

  let i = 1;

  useEffect(() => {
    const fetchTopTen = async () => {
      const { data, error } = await listTopTen();
      if (error) {
        setError(error);
      } else {
        setTopTen(data);
      }
    };
    const fetchAllViews = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setArticles(data.data);
      }
    };
    fetchTopTen();
    fetchAllViews();
  }, []);

  return (
    <>
      {' '}
      {isLoggedIn && isSuperadmin && (
        <>
          <Header title="Rapport for superadmin" />
          <ReportWrapper>
            <Label>Top 10</Label>
            {topTen &&
              topTen.map((article) => (
                <ReportBox
                  style={{ backgroundColor: `#dbbd${i - 1}d` }}
                  key={article.id}
                >
                  <TextBox>
                    <Name>
                      #{i++} Tittel: {article.title}
                    </Name>
                    <Email>Kategori: {article.category.category}</Email>
                    <Message>Antall visninger: {article.view}</Message>
                  </TextBox>
                </ReportBox>
              ))}
          </ReportWrapper>
          <ReportWrapper>
            <Label>Antall visninger for alle artikler</Label>
            {articles &&
              articles.map((article) => (
                <ReportBox
                  style={{ backgroundColor: `#e4e4e4` }}
                  key={article.id}
                >
                  <TextBox>
                    <Name>Tittel: {article.title}</Name>
                    <Email>Kategori: {article.category.category}</Email>
                    <Message>Antall visninger: {article.view}</Message>
                  </TextBox>
                </ReportBox>
              ))}
          </ReportWrapper>
        </>
      )}
      {!isSuperadmin && (<h1>403 Forbidden</h1>)}
    </>
  );
};

export default Superadmin;
