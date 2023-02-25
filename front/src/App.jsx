import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import UserHome from './pages/UserHome';
import Products from './pages/Products';

export const instance = axios.create({
  baseURL: 'http://localhost:2000',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/:id" element={<UserHome />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
