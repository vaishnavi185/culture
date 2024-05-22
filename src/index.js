import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import CustomCarousel from './Component/Explore';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

const handleButtonClick = () => {
  alert('Button clicked!');
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <CustomCarousel />
   
  </React.StrictMode>
);

reportWebVitals();
