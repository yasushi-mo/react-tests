import { ChangeEvent, FC, useState } from "react";

export const ImageUpload: FC = () => {
  const [image, setImage] = useState("");

  const handleChooseImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0)
      return alert("Failed to choose image");

    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleChooseImage} />
      <button disabled={!image}>Image Upload</button>
      <br />
      {image ? <img src={image} alt="chosen" /> : <p>No Image Chosen</p>}
    </div>
  );
};
