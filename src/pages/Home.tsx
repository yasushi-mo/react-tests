import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = ({ authorized }: { authorized: boolean }) => {
  const [buttonText, setButtonText] = useState("button");

  return (
    <>
      <div>You are home</div>
      {authorized && <div>You are authorized</div>}
      <button onClick={() => setButtonText("clicked")}>{buttonText}</button>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/form">Form</Link>
      <br />
      <Link to="/local-storage">localStorage</Link>
      <br />
      <Link to="/crypto">Crypto</Link>
      <br />
      <Link to="/a11y">A11Y</Link>
      <br />
      <Link to="/image-upload">Image Upload</Link>
      <br />
      <Link to="/link-and-button">Link and Button</Link>
      <br />
      <Link to="/barcode">Barcode</Link>
      <br />
      <Link to="/pdf">PDF</Link>
      <br />
      <Link to="/bar-charts">BarCharts</Link>
      <br />
      <Link to="/zoom-pan-pinch">ZoomPanPinch</Link>
      <br />
      <Link to="/dompurify/safe">DOMPurify Safe</Link>
      <br />
      <Link to="/dompurify/unsafe">DOMPurify Unsafe</Link>
      <br />
      <Link to="/foreign-objects/without">SvgWithoutForeignObject</Link>
      <br />
      <Link to="/foreign-objects/with">SvgWithForeignObject</Link>
      <br />
      <Link to="/playwright/to-have-css/background-color-changing-button">
        BackgroundChangingButton
      </Link>
    </>
  );
};
