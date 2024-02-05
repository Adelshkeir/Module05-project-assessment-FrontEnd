import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Productspage from "./pages/productspage";

import Login from "./pages/login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productspage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
