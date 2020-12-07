import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { TitleContext } from '../contexts/TitleProvider';
import { get } from '../utils/articleService';
import { useAuthContext } from '../contexts/AuthProvider';
import {download} from '../utils/imageService.js';

const DetailText = styled.p`
  margin-bottom: 50px;
  font-size: 15px;
  font-weight: bold;
`;

const ContentText = styled.p`
  width: 100%;
  min-width: 300px;
  margin-bottom: 50px;
  font-size: 21px;
  &::first-letter {
    font-weight: bold;
    font-size: 24px;
  }
`;

const DivAuthorAndDate = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentsArticle = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const DivButton = styled.div`
  display: flex;
`;

const DeleteButton = styled.button`
  background-color: red;
  margin-top: 10px;
  margin-right: 10px;
  padding: 5px 15px 5px 15px;
  align-self: flex-end;
  font-size: 20px;
  color: white;
  border-radius: 8px;
  &:hover {
    transform: scale(1.02);
    background-color: #b8b8b8;
  }
`;

const EditButton = styled.button`
  background-color: green;
  margin-top: 10px;
  margin-right: 10px;
  padding: 5px 15px 5px 15px;
  align-self: flex-end;
  font-size: 20px;
  color: white;
  border-radius: 8px;
  &:hover {
    transform: scale(1.02);
    background-color: #b8b8b8;
  }
`;

const SingleArticle = () => {
  const [article, setArticle] = useState();
  const [src, setSrc] = useState(null);
  const { setImageUrl } = useContext(TitleContext);
  const { id } = useParams();
  const history = useHistory();
  
  const downloadImage = async (id) => {
    const {data} = await download(id);
    const imgUrl = `${process.env.BASE_URL}/${data?.data?.imagePath}`;
    console.log("dette er image url:  "+imgUrl);
    setImageUrl(imgUrl);
    setSrc(imgUrl);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await get(id);
      console.log('Dette er id i useEffect single article ' + id);
      if (error) {
        setError(error);
      } else {
        console.log(data);
        setArticle(data);
        downloadImage(data.image);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (artikkel) => {
    history.push('oppdater/' + artikkel);
  };

  const { isLoggedIn, isAdmin } = useAuthContext();

  return (
    <>
      {article && (
        <ContentsArticle>
            {src && <img alt="my" src={src} />}
          <DivAuthorAndDate>
            <DetailText>Av: {article.author}</DetailText>
            <DetailText>{article.date}</DetailText>
          </DivAuthorAndDate>
          <ContentText>{article.content}</ContentText>
          <DetailText>{article.category.category}</DetailText>
          {isLoggedIn && isAdmin && (
            <DivButton>
              <DeleteButton>Slett</DeleteButton>
              <EditButton onClick={() => handleEdit(article.id)}>
                Rediger
              </EditButton>
            </DivButton>
          )}
        </ContentsArticle>
      )}
    </>
  );
};

export default SingleArticle;
