
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/" element={<Netflix />} />
    </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;

