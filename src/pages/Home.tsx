import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = ({ authorized }: { authorized: boolean }) => {
  const [buttonText, setButtonText] = useState("button");

  return (
    <>
      <div>You are home</div>
      {authorized && <div>You are authorized</div>}
      <button onClick={() => setButtonText("clicked")}>{buttonText}</button>
      <Link to="/about">About</Link>
      <br />
      <Link to="/form">Form</Link>
    </>
  );
};
