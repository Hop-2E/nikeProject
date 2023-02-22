import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Signin from './pages/Signin';
import UserHome from './pages/UserHome';
import JordanHome from './pages/JordanHome';

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
          <Route path="/SignIn" element={<Signin />} />
          <Route path="/:id" element={<UserHome />} />
          <Route path="/jordan" element={<JordanHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
