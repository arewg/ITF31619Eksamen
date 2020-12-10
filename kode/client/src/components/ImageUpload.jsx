/**
 * Komponenten er hentent fra Marius Wallins' 
 * forelesning 'Leksjon 13' og er blitt litt modifisert.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { upload } from '../utils/imageService';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 135px;
  height: 70px;
  margin-top: 10px;
  margin-left: 5px;
  background-color: #127275;
  font-size: 22px;
  font-weight: bold;
  color: white;
  &:hover {
    transform: scale(1.04);
    background-color: #a4adfa;
  }
`;

const ImageUpload = ({ setImageId }) => {
  const [file, setFile] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await upload(file);
    if (!data.success) {
      setError(data.message);
    } else {
      setImageId(data?.data?._id);
      setSuccess(true);
      setError(null);
    }
  };

  return (
    <>
      {success && <p>Bilde opplastet!</p>}
      {error && <p>Noe gikk galt med opplastingen</p>}
      <Wrapper encType="multipart/form-data" method="post">
        <input
          type="file"
          id="image"
          name="image"
          accept=".png, .jpg, .jpeg"
          onChange={(event) => {
            const imageFile = event.target.files[0];
            setFile(imageFile);
          }}
        />
        <Button onClick={handleSubmit}>Last opp</Button>
      </Wrapper>
    </>
  );
};

export default ImageUpload;
