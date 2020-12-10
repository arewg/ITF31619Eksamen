import React, { useEffect, useState } from 'react';
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
    history.replace(`/fagartikler/${path}`);
  };

  const fetchArticlesByCategory = async (id) => {
    const { data, error } = await listByCategory(id);
    if (error) {
      setError(error);
    } else {
      setArticles(data);
    }
  };

  const fetchArticlesBySearch = async (searchWord) => {
    const { data, error } = await listBySearchWord(searchWord);
    if (error) {
      setError(error);
    } else {
      setArticles(data);
    }
  };

  const fetchAllArticles = async () => {
    const { data, error } = await list();

    if (error) {
      setError(error);
    } else {
      setArticles(data.data);
    }
  };

  const handleFilterByCategory = (e) => {
    const categoryId = e.target.value;

    if (e.target.value === 'alle') {
      fetchAllArticles();
    } else {
      fetchArticlesByCategory(categoryId);
    }
  };

  const handleSeachByTitle = (e) => {
    const searchWord = e.target.value;
    if (searchWord === '') {
      fetchAllArticles();
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
          <Input placeholder=" Søk..." onChange={handleSeachByTitle} />
        </ButtonBar>
        {(() => {
          switch (isLoggedIn) {
            case true:
              return <AllArticles articles={articles} />;
            case false:
              return <OpenArticles articles={articles} />;
            default:
              return <AllArticles articles={articles} />;
          }
        })()}
      </NarrowWrapper>
    </>
  );
};

export default ArticleView;
