import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<Signin />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
