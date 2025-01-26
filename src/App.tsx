import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Crypto } from "./pages/crypto/Crypto";
import { Form } from "./pages/Form";
import { Home } from "./pages/Home";
import { LocalStorage } from "./pages/LocalStorage";
import { NotFount } from "./pages/NotFound";
import { Sum } from "./pages/Sum";
import { A11Y } from "./pages/A11Y";
import { ImageUpload } from "./pages/ImageUpload";
import { AnchorAndButton } from "./pages/AnchorAndButton";
import { BarcodeLibraries } from "./pages/BarcodeLibraries";
import { PDF } from "./pages/PDF";
import { BarCharts } from "./pages/BarCharts";
import { ZoomPanPinchImg } from "./pages/ZoomPanPinchImg";
import { ZoomPanPinchH1 } from "./pages/ZoomPanPinchH1";
import { ZoomPanPinch } from "./pages/ZoomPanPinch";
import { Safe } from "./pages/dompurify/Safe";
import { Unsafe } from "./pages/dompurify/Unsafe";
import SvgWithoutForeignObject from "./pages/foreignObjects/SvgWithoutForeignObject";
import SvgWithForeignObject from "./pages/foreignObjects/SvgWithForeignObject";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home authorized={true} />} />
      <Route path="/about" element={<About />} />
      <Route path="/form" element={<Form />} />
      <Route path="/sum" element={<Sum num1={2} num2={3} />} />
      <Route path="/local-storage" element={<LocalStorage />} />
      <Route path="/crypto" element={<Crypto />} />
      <Route path="/a11y" element={<A11Y />} />
      <Route path="/image-upload" element={<ImageUpload />} />
      <Route path="/link-and-button" element={<AnchorAndButton />} />
      <Route path="/barcode" element={<BarcodeLibraries />} />
      <Route path="/pdf" element={<PDF />} />
      <Route path="/bar-charts" element={<BarCharts />} />
      <Route path="/zoom-pan-pinch" element={<ZoomPanPinch />} />
      <Route path="/zoom-pan-pinch-h1" element={<ZoomPanPinchH1 />} />
      <Route path="/zoom-pan-pinch-img" element={<ZoomPanPinchImg />} />
      <Route path="/dompurify/safe" element={<Safe />} />
      <Route path="/dompurify/unsafe" element={<Unsafe />} />
      <Route
        path="/foreign-objects/without"
        element={<SvgWithoutForeignObject />}
      />
      <Route path="/foreign-objects/with" element={<SvgWithForeignObject />} />
      <Route path="*" element={<NotFount />} />
    </Routes>
  );
}

export default App;
