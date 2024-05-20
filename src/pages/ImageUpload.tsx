import { ChangeEvent, FC, useState } from "react";

const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "test";
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "test";

export const ImageUpload: FC = () => {
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const handleChooseImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0)
      return alert("Failed to choose image");

    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleUploadImage = async () => {
    try {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", UPLOAD_PRESET);
      data.append("cloud_name", CLOUD_NAME);

      const response = await fetch(
        // ref. https://cloudinary.com/documentation/upload_images#basic_uploading
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        },
      );
      const jsonData = await response.json();
      setUploadedImage(jsonData.url);
    } catch (error) {
      alert("Failed to image upload");
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleChooseImage} />
      <button onClick={handleUploadImage} disabled={!image}>
        Image Upload
      </button>
      <hr />
      <h3>Chosen Image</h3>
      {image ? <img src={image} alt="chosen" /> : <p>No Image Chosen</p>}
      <hr />
      <h3>Uploaded Image</h3>
      <p>{uploadedImage}</p>
    </div>
  );
};
