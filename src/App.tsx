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
import { BackgroundColorChangingButton } from "./pages/playwright/toHaveCSS/BackgroundColorChangingButton";
import { HeadingFontSize } from "./pages/playwright/toHaveCSS/HeadingFontSize";
import { HoverButton } from "./pages/playwright/toHaveCSS/HoverButton";
import { FadeInText } from "./pages/playwright/toHaveCSS/HadeInText";
import { PdfExportSample } from "./pages/html2canvas-jspdf/PdfExportSample";
import { PdfExportWithPageSplitting } from "./pages/html2canvas-jspdf/PdfExportWithPageSplitting";
import PdfExportWithHeaderFooter from "./pages/html2canvas-jspdf/PdfExportWithHeaderFooter";
import { Flex } from "./pages/css/Flex";
import { Snapshot } from "./pages/Snapshot";
import ChoiceViewer from "./pages/ChoiceViewer";

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
      <Route
        path="/playwright/to-have-css/background-color-changing-button"
        element={<BackgroundColorChangingButton />}
      />
      <Route
        path="/playwright/to-have-css/heading-font-size"
        element={<HeadingFontSize />}
      />
      <Route
        path="/playwright/to-have-css/hover-button"
        element={<HoverButton />}
      />
      <Route
        path="/playwright/to-have-css/fade-in-text"
        element={<FadeInText />}
      />
      <Route path="/html2canvas-jspdf" element={<PdfExportSample />} />
      <Route
        path="/html2canvas-jspdf/page-splitting"
        element={<PdfExportWithPageSplitting />}
      />
      <Route
        path="/html2canvas-jspdf/header-footer"
        element={<PdfExportWithHeaderFooter />}
      />
      <Route path="/css/flex" element={<Flex />} />
      <Route path="/snapshot" element={<Snapshot />} />
      <Route path="/choice-viewer" element={<ChoiceViewer />} />
      <Route path="*" element={<NotFount />} />
    </Routes>
  );
}

export default App;
