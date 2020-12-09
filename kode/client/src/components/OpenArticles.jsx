import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ArticleBox = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 200px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    border: 0.3px solid #cecece;
    box-shadow: 0px 2px 3px #cecece;
  }
`;

const TextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-template-rows: 80px 250px;
`;

const Ingress = styled.p`
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  height: 47%;
  grid-area: 2 / 1 / 3 / 6;
  font-size: 19px;
  font-weight: 475;
`;

const ArticleImage = styled.div`
  height: 90%;
  width: 90%;
  justify-self: center;
  align-self: center;
  background-color: #dbdbdb;
`;

const Title = styled.h1`
  width: 100%-20px;
  margin: 15px 0px 0px 20px;
  font-weight: bold;
  font-size: 25px;
`;

const Category = styled.h2`
  width: 100%-20px;
  margin: 20px 20px 0px 0px;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  justify-content: flex-end;
`;

const OpenArticles = ({ articles }) => {
  const history = useHistory();

  const handleArticleClick = (path) => {
    history.push('/fagartikler/' + path);
    console.log("DENNE ARTIKKELIDEN BLE TRYKKET PÅ I OPENARTICLES" + path)
  };

  return (
    <>
      {articles &&
        articles.map((article) => (
          <>
            {article.classified === 'åpen' && (
              <ArticleBox
                key={article.id}
                onClick={() => {
                  handleArticleClick(article.id);
                }}
              >
                <ArticleImage></ArticleImage>
                <TextBox>
                  <Title>{article.title}</Title>
                  <Category>{article.category.category}</Category>
                  <Ingress>{article.ingress}</Ingress>
                </TextBox>
              </ArticleBox>
            )}
          </>
        ))}
    </>
  );
};

export default OpenArticles;
