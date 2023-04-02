import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div>You are home</div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/form">Form</Link>
    </div>
  );
};
