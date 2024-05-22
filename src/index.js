import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Religion from './Component/Religion';
import Food from './Component/Food.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import CustomCarousel from './Component/Explore';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Component/Login.jsx';
import Footer from './Component/About.jsx';

const handleButtonClick = () => {
  alert('Button clicked!');
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <CustomCarousel />
    <br></br> <br></br>
   <Religion></Religion>
   <br></br>
   <br></br>
 <Food></Food>
 <br></br>
 <Login></Login>
 <br></br>
 <Footer></Footer>
  </React.StrictMode>
);

reportWebVitals();
