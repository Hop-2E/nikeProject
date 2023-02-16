import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';

import JordanHome from './pages/JordanHome';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignUp />} />

          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
          <Route path="/jordan" element={<JordanHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
