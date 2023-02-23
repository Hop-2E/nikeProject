import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserHome from './pages/UserHome';

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
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/:id" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
