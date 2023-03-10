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
import Favourite from "./pages/Favourite";
import Map from "./pages/Map";
import LoggedAdminHome from "./pages/loggedPages/LoggedAdminHome";
import HomeLogged from "./pages/loggedPages/HomeLogged";

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
          <Route path="/Products" element={<Products />} />
          <Route path="/Bag" element={<Bag />} />
          <Route path="/Women" element={<Women />}></Route>
          <Route path="/favourites" element={<Favourite />}></Route>
          <Route path="/retail" element={<Map />}></Route>
          {/* logged pages */}
          <Route path="/loggedHome/:id" element={<HomeLogged />} />
          <Route path="/:id/adminPage" element={<LoggedAdminHome />} />
          <Route path="/:id/Products" element={<Products />} />
          <Route path="/:id" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
