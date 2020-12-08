import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { download } from '../utils/imageService.js';
import AddCategoryModal from '../components/AddCategoryModal.jsx';
import { get, update } from '../utils/articleService';
import categoryService from '../utils/categoryService';
import Header from '../components/Header.jsx';
import ImageUpload from '../components/ImageUpload.jsx';

const ArticleWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const ArticleForm = styled.form`
  width: 100%;
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
`;

const ButtonBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const ErrorMessage = styled.h2`
  color: red;
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
`;

const UpdateArticle = () => {
  const [error, setError] = useState();
  const [article, setArticle] = useState();
  const [categories, setCategories] = useState();
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [titleValue, setTitleValue] = useState();
  const [ingressValue, setIngressValue] = useState();
  const [contentValue, setContentValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [authorValue, setAuthorValue] = useState();
  const [classifiedArticle, setClassifiedArticle] = useState();
  const [imageId, setImageId] = useState();
  const [src, setSrc] = useState();
  const { id } = useParams();

  const downloadImage = async (id) => {
    const { data } = await download(id);
    const imgUrl = `${process.env.BASE_URL}/${data?.data?.imagePath}`;
    console.log(`dette er image url:  ${imgUrl}`);
    setSrc(imgUrl);
    console.log(`dette er src${src}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await get(id);
      if (error) {
        setError(error);
      } else {
        console.log(data);
        setArticle(data);
        downloadImage(data.image);
      }
    };
    const fetchCategories = async () => {
      const { data, error } = await categoryService.get();
      if (error) {
        setError(error);
      } else {
        setCategories(data);
      }
    };
    fetchData();
    fetchCategories();
  }, []);

  const handleRoute = (path) => {
    history.push(path);
  };

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };
  const handleIngressChange = (e) => {
    setIngressValue(e.target.value);
  };
  const handleContentChange = (e) => {
    setContentValue(e.target.value);
  };
  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthorValue(e.target.value);
  };
  const handleClassifiedArticleChange = async (e) => {
    setClassifiedArticle(e.target.value);
  };

  const handleSubmit = () => {
    const updatedArticle = {
      title: titleValue,
      ingress: ingressValue,
      content: contentValue,
      date: dateValue,
      category: categoryValue,
      author: authorValue,
      image: imageId,
      classified: classifiedArticle,
    };

    const updateArticle = async () => {
      console.log("ARTIKKELID SOM SKAL OPPDATERES FRA UPDATEARTICLE.JSX: " + id)
      await update(id, updatedArticle);
    };
    updateArticle();
    alert('Fagartikkel oppdatert');
  };

  const showModal = (e) => {
    setModal(true);
    e.preventDefault();
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <Header title="Oppdater artikkel" />
      {article && (
        <ArticleWrapper>
          <ArticleForm>
            <Label>Title</Label>
            <Input onChange={handleTitleChange} defaultValue={article.title} />
            <Label>Ingress</Label>
            <Input
              onChange={handleIngressChange}
              defaultValue={article.ingress}
            />
            <Label>Innhold</Label>
            <TextArea
              onChange={handleContentChange}
              defaultValue={article.content}
            />
            <Label>Dato</Label>
            <Input
              type="date"
              onChange={handleDateChange}
              defaultValue={article.date}
            />
            <Label>Kategori</Label>
            <CategoryBox>
              <Dropdown onChange={handleCategoryChange} value={categoryValue}>
                <option value={article.category.id}>
                  Behold kategori: {article.category.category}
                </option>
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
            <Dropdown onChange={handleAuthorChange} value={authorValue}>
              <option value={article.author}>
                Behold forfatter: {article.author}
              </option>
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
              <option value="">
                Behold klassifisering: {article.classified}
              </option>
              <option value="åpen">Åpen</option>
              <option value="hemmelig">Hemmelig</option>
            </Dropdown>
            <Label>Bilde</Label>
            <ImageUpload
              setImageId={(e) => setImageId(e)}
              id={imageId}
            />
          </ArticleForm>
          <ButtonBar>
            <CreateArticleButton
              onClick={() => {
                handleSubmit();
                handleRoute('/fagartikler');
              }}
            >
              UPDATE
            </CreateArticleButton>
            <div>
              <Label>Nåværende bilde</Label>
              <div
                style={{
                  backgroundImage: `url(${src})`,
                  width: '100%',
                  height: '200px',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />{' '}
            </div>
          </ButtonBar>
          <AddCategoryModal modal={modal} close={closeModal} />
        </ArticleWrapper>
      )}
    </>
  );
};

export default UpdateArticle;
