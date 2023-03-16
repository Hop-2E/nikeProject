import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { createContext, useContext, useState } from "react";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import UserHome from "./pages/UserHome";
import Products from "./pages/Products";
import Bag from "./pages/Bag";
import JordanHome from "./pages/JordanHome";
// import Men from ".pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Map from "./pages/Map";
import Favourite from "./pages/Favourite";
import Map from "./pages/Map";
import Sale from "./pages/Sale";
import JoinUs from "./pages/JoinUs";
import LoggedAdminHome from "./pages/LoggedPages/LoggedAdminHome";
import LoggedProduct from "./pages/LoggedPages/LoggedProduct";
export const LogContext = createContext();

export const instance = axios.create({
  baseURL: "http://localhost:2000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

function App() {
  const [userId, setUserId] = useState("");

  return (
    <>
      <LogContext.Provider value={{ userId, setUserId }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/JordanHome" element={<JordanHome />} />
            <Route path="/Sale" element={<Sale />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/women" element={<Women />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/Favourite" element={<Favourite />} />
            <Route path="/joinus" element={<JoinUs />} />

            {/* after logged */}

            <Route path="/:id" element={<UserHome />} />
            <Route path="/:id/ProductsLogged" element={<LoggedProduct />} />
            <Route path="/:id/Bag" element={<Bag />} />
            <Route path="/:id/AdminHome" element={<LoggedAdminHome />} />
          </Routes>
        </BrowserRouter>
      </LogContext.Provider>
    </>
  );
}

export default App;
