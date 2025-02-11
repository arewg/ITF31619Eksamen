import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { NarrowWrapper } from '../styles/Styles.jsx';
import moment from 'moment';

import AddCategoryModal from '../components/AddCategoryModal.jsx';
import { create } from '../utils/articleService';
import { get } from '../utils/categoryService';
import { useAuthContext } from '../contexts/AuthProvider.jsx';
import ImageUpload from '../components/ImageUpload.jsx';
import Header from '../components/Header.jsx';


const ArticleForm = styled.form`
  width: 100%;
`;

const AlertText = styled.label`
  font-size: 14px;
  color: red;
`;

const Input = styled.input`
  width: 100%;
  border: 2px solid black;
  border-radius: 10px;
  height: 60px;
  margin-top: 10px;
  cursor: pointer;
  &:focus {
    transform: scale(1.01);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 2px solid black;
  border-radius: 10px;
  height: 60px;
  margin-top: 10px;
  cursor: pointer;
  &:focus {
    transform: scale(1.01);
  }
`;

const Dropdown = styled.select`
  width: 100%;
  border: 2px solid black;
  border-radius: 10px;
  height: 60px;
  margin-top: 10px;
  padding: 10px 12px;
  font-size: 20px;
  cursor: pointer;
  &:focus {
    transform: scale(1.01);
  }
`;

const Label = styled.h2`
  width: 100%-20px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 30px;
`;

const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const NewCategoryButton = styled.button`
  margin-top: 10px;
  margin-left: 5px;
  background-color: #127275;
  font-size: 22px;
  font-weight: bold;
  color: white;
  &:hover {
    transform: scale(1.04);
    background-color: #a7faa4;
  }
`;

const CreateArticleButton = styled.button`
  width: 135px;
  height: 70px;
  margin-top: 10px;
  margin-left: 5px;
  background-color: #84e6ff;
  font-size: 22px;
  font-weight: bold;
  color: white;
  &:hover {
    transform: scale(1.04);
    background-color: #a4adfa;
  }
  &:disabled {
    background-color: #8f8f8f;
    transform: scale(1);
    cursor: none;
  }
`;

const DisableBar = styled.div`
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.h2`
  color: #ae0000;
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
`;

const NewArticle = () => {
  const history = useHistory();
  const { user } = useAuthContext();
  const [error, setError] = useState();
  const [disableState, setDisableState] = useState(true);
  const [categories, setCategories] = useState();
  const [modal, setModal] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [ingressValue, setIngressValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const [classifiedArticle, setClassifiedArticle] = useState('');
  const [imageId, setImageId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await get();
      if (error) {
        setError(error);
      } else {
        setCategories(data);
      }
    };
    fetchData();
    setDateValue(moment(Date.now()).format('YYYY-MM-DD'));
  }, []);

  const showModal = (e) => {
    setModal(true);
    e.preventDefault();
  };

  const closeModal = () => {
    setModal(false);
  };

  const disableButton = () => {
    if (
      titleValue === '' ||
      titleValue <= 3 ||
      ingressValue === '' ||
      ingressValue.length <= 10 ||
      contentValue === '' ||
      contentValue.length <= 10 ||
      categoryValue === '' ||
      authorValue === '' ||
      imageId === ''
    ) {
      setDisableState(true);
    } else {
      setDisableState(false);
    }
  };

  const handleRoute = (path) => {
    history.push(path);
  };

  const handleTitleChange = async (e) => {
    setTitleValue(e.target.value);
    disableButton();
  };
  const handleIngressChange = async (e) => {
    setIngressValue(e.target.value);
    disableButton();
  };
  const handleContentChange = async (e) => {
    setContentValue(e.target.value);
    disableButton();
  };
  const handleDateChange = async (e) => {
    setDateValue(e.target.value);
    disableButton();
  };
  const handleCategoryChange = async (e) => {
    setCategoryValue(e.target.value);
    disableButton();
  };
  const handleAuthorChange = async (e) => {
    setAuthorValue(e.target.value);
    disableButton();
  };
  const handleClassifiedArticleChange = async (e) => {
    setClassifiedArticle(e.target.value);
    disableButton();
  };

  const handleSubmit = () => {
    const newArticle = {
      title: titleValue,
      ingress: ingressValue,
      content: contentValue,
      date: dateValue,
      category: categoryValue,
      author: authorValue,
      user: user.id,
      image: imageId,
      classified: classifiedArticle,
    };

    const createArticle = async () => {
      await create(newArticle);
    };
    createArticle();
    alert('Fagartikkel opprettet');
  };

  return (
    <>
      <Header title="Ny artikkel" />
      <NarrowWrapper>
        <ArticleForm>
          <Label>Tittel</Label>
          <Input autoFocus onChange={(e) => handleTitleChange(e)} />
          <AlertText>
            {titleValue.length > 0 && titleValue.length < 4
              ? 'Tittel må være mer enn 3 bokstaver'
              : ''}
            {titleValue.length > 100
              ? 'Tittel kan ikke overskride 100 bokstaver'
              : ''}
          </AlertText>
          <Label>Ingress</Label>
          <Input onChange={(e) => handleIngressChange(e)} />
          <AlertText>
            {ingressValue.length > 0 && ingressValue.length < 11
              ? 'Ingress må være mer enn 10 bokstaver'
              : ''}
            {ingressValue.length > 150
              ? 'Ingress kan ikke overskride 150 bokstaver'
              : ''}
          </AlertText>
          <Label>Innhold</Label>
          <TextArea onChange={(e) => handleContentChange(e)} />
          <AlertText>
            {contentValue.length > 0 && contentValue.length < 11
              ? 'Innhold må være mer enn 10 bokstaver'
              : ''}
            {contentValue.length > 10000
              ? 'Innhold kan ikke overskride 10 000 bokstaver'
              : ''}
          </AlertText>
          <Label>Dato</Label>
          <Input
            type="date"
            defaultValue={moment(Date.now()).format('YYYY-MM-DD')}
            onChange={(e) => handleDateChange(e)}
          />
          <Label>Kategori</Label>
          <CategoryBox>
            <Dropdown
              onChange={(e) => handleCategoryChange(e)}
              value={categoryValue}
            >
              <option value="">Velg kategori</option>
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category}
                  </option>
                ))}
            </Dropdown>
            <NewCategoryButton onClick={showModal}>NY</NewCategoryButton>
          </CategoryBox>
          <Label>Forfatter</Label>
          <Dropdown onChange={(e) => handleAuthorChange(e)} value={authorValue}>
            <option value="">Velg forfatter</option>
            <option value="Marius Wallin">Marius Wallin</option>
            <option value="Vanja Vannlekkasje">Vanja Vannlekkasje</option>
            <option value="Fredrik Flom">Fredrik Flom</option>
            <option value="Preben Plumber">Preben Plumber</option>
            <option value="Ove Oversvømmelse">Ove Oversvømmelse</option>
            <option value="Sissel Sluk">Sissel Sluk</option>
          </Dropdown>
          <Label>Klassifisering</Label>
          <Dropdown
            onChange={(e) => handleClassifiedArticleChange(e)}
            value={classifiedArticle}
          >
            <option value="">Velg klassifisering</option>
            <option value="åpen">Åpen</option>
            <option value="hemmelig">Hemmelig</option>
          </Dropdown>
        </ArticleForm>
        <Label>Bilde</Label>
        <ImageUpload
          handleChange={disableButton}
          setImageId={(e) => setImageId(e)}
          id={imageId}
        />
        <DisableBar>
          <CreateArticleButton
            onClick={() => {
              handleSubmit();
              handleRoute('/fagartikler');
            }}
            disabled={disableState}
          >
            CREATE
          </CreateArticleButton>
          <ErrorMessage hidden={!disableState}>
            Vennligst fyll ut alle feltene.
          </ErrorMessage>
        </DisableBar>
        <AddCategoryModal modal={modal} close={closeModal} />
      </NarrowWrapper>
    </>
  );
};

export default NewArticle;
