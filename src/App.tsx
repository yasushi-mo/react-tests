import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Crypto } from "./pages/crypto/Crypto";
import { Form } from "./pages/Form";
import { Home } from "./pages/Home";
import { LocalStorage } from "./pages/LocalStorage";
import { NotFount } from "./pages/NotFound";
import { Sum } from "./pages/Sum";

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
      <Route path="*" element={<NotFount />} />
    </Routes>
  );
}

export default App;
