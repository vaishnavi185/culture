import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Religion from './Component/Religion';
import Food from './Component/Food.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import CustomCarousel from './Component/Explore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Login.jsx';
import Footer from './Component/About.jsx';

const handleButtonClick = () => {
  alert('Button clicked!');
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <>
        <Home />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <CustomCarousel />
        <br /><br />
        <Religion />
        <br /><br />
        <Food />
        <br /><br />
        <Login></Login>
        <br></br> <br></br>
        <Footer />
        <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
     
    </BrowserRouter>
    </>
  </React.StrictMode>
);

reportWebVitals();
