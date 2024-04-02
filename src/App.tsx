import "./App.css";
import "./components/button/button.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Hotels from "./pages/hotels/hotels";
import NoPage from "./pages/nopage/nopage";
import Destinations from "./pages/destinations/destinations";
import Login from "./pages/login/login";
import Signin from "./pages/signin/signin";
import Panel from "./pages/panel/panel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinations />} />
        <Route path="/hoteis" element={<Hotels />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Signin />} />
        <Route path="/painel" element={<Panel />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
