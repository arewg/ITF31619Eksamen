import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../contexts/AuthProvider.jsx';
import {
  list,
  listBySearchWord,
  listByCategory,
} from '../utils/articleService.js';
import { NarrowWrapper } from '../styles/Styles.jsx';
import { get } from '../utils/categoryService';
import Header from '../components/Header.jsx';
import AllArticles from '../components/AllArticles.jsx';
import OpenArticles from '../components/OpenArticles.jsx';

const ButtonBar = styled.div`
  width: 100%;
  min-height: 35px;
  display: flex;

  &::after {
    color: red;
  }
`;

const Buttons = styled.button`
  background-color: #cfcfcf;
  border-radius: 8px;
  margin: 0px 0px 0px 10px;
  width: 125px;

  &:hover {
    background-color: #cac5c6;
    transform: scale(1.02);
  }

  &:first-child {
    background-color: #127275;
    color: white;
    margin-left: 0px;
    margin-right: 45%;

    &:hover {
      background-color: #179397;
      transform: scale(1.02);
    }
  }
`;
const DropdownFilter = styled.select`
  background-color: #cfcfcf;
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  padding: 10px 12px;
  text-decoration: none;
  cursor: pointer;
`;

const Input = styled.input`
  width: 150px;
  background-color: #cfcfcf;
  border-radius: 10px;
  margin-left: 5px;
  cursor: text;
  &:focus {
    transform: scale(1.01);
    background-color: #eaeaea;
    border: 0px;
  }
  &::placeholder {
    color: black;
  }
`;

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

const ArticleView = () => {
  const [articles, setArticles] = useState();
  const [error, setError] = useState();
  const history = useHistory();
  const [categories, setCategories] = useState();
  const { isLoggedIn, isAdmin } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        console.log(data);
        setArticles(data.data);
      }
    };
    const fetchCategories = async () => {
      const { data, error } = await get();
      if (error) {
        setError(error);
      } else {
        setCategories(data);
      }
    };
    fetchData();
    fetchCategories();
  }, []);

  const handleNewArticleClick = (path) => {
    history.replace('/fagartikler/' + path);
  };

  const fetchArticlesByCategory = async (id) => {
    console.log('ID I FETCHARTICLESBYCATEGORY: ' + id);
    const { data, error } = await listByCategory(id);
    if (error) {
      setError(error);
    } else {
      setArticles(data);
    }
  };

  const fetchArticlesBySearch = async (searchWord) => {
    console.log('sewarchword I FETCHARTICLESBYCATEGORY: ' + searchWord);
    const { data, error } = await listBySearchWord(searchWord);
    if (error) {
      setError(error);
    } else {
      setArticles(data);
    }
  };

  const fetchData = async () => {
    const { data, error } = await list();
    if (error) {
      setError(error);
    } else {
      setArticles(data);
    }
  };

  const handleFilterByCategory = (e) => {
    const categoryId = e.target.value;
    console.log(categoryId);

    if (e.target.value === 'alle') {
      fetchData();
    } else {
      fetchArticlesByCategory(categoryId);
    }
  };

  const handleSeachByTitle = (e) => {
    const searchWord = e.target.value;

    if (searchWord === '') {
      fetchData();
    } else {
      fetchArticlesBySearch(searchWord);
    }
  };

  return (
    <>
      <Header title="Fagartikler"/>
      <NarrowWrapper>
        <ButtonBar>
          {isLoggedIn && isAdmin && (
            <Buttons
              onClick={() => {
                handleNewArticleClick('nyartikkel');
              }}
            >
              Ny artikkel
            </Buttons>
          )}
          <DropdownFilter onChange={handleFilterByCategory}>
            <option value="alle">Alle artikler</option>
            {categories &&
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category}
                </option>
              ))}
          </DropdownFilter>
          <Input placeholder=" Søk..." onChange={handleSeachByTitle}></Input>
        </ButtonBar>
        {(() => {
          switch (isLoggedIn) {
            case true:
              return <AllArticles articles={articles} />;
            case false:
              return <OpenArticles articles={articles} />;
            default:
              return <OfficeGrid list={filter} />;
          }
        })()}
      </NarrowWrapper>
    </>
  );
};

export default ArticleView;
