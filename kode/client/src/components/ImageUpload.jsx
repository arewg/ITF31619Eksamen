import React, { useState } from 'react';
import { upload } from '../utils/imageService';

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
      <div encType="multipart/form-data" method="post">
        <label htmlFor="image">Last opp bilde</label>
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
        <button onClick={handleSubmit}>Lagre</button>
      </div>
    </>
  );
};

export default ImageUpload;
