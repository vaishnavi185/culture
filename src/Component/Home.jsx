import React from 'react';
import './home.css';
import NavBar from './NavBar';
import CustomCarouse from './Explore'
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import CustomCarousel from './Explore';
export default function Home() {
  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    </BrowserRouter>
      <section id='home'>
        <div className='hommi'>
          <img src='./n.jpg' className='ho' />
          <div className='welcome-text'>WELCOME to Nanital</div> {/* Removed extra space */}
          <div className='welcome-text2'>Relax and reconnect with nature.</div>
        </div>
        
      </section>

    </>
  );
}