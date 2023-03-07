import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import UserHome from "./pages/UserHome";
import Products from "./pages/Products";
import Bag from "./pages/Bag";
import JordanHome from "./pages/JordanHome";
import Women from "./pages/Women";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Favourite from './pages/Favourite';
import Map from './pages/Map';

export const instance = axios.create({
  baseURL: "http://localhost:2000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JordanHome" element={<JordanHome />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/:id" element={<UserHome />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/:id/Products" element={<Products />} />
          <Route path="/Bag" element={<Bag />} />
          <Route path="/Women" element={<Women />}></Route>
          <Route path="/favourites" element={<Favourite />}></Route>
          <Route path="/retail" element={<Map />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
