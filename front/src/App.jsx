import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import UserHome from './pages/UserHome';
import JordanHome from './pages/JordanHome';
import SignUp from './pages/SignUp';

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
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/:id" element={<UserHome />} />
          <Route path="/jordan" element={<JordanHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
