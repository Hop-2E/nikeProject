import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import axios from 'axios';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
