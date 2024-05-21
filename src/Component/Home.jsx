import React from 'react';
import './home.css';

export default function Home() {
  return (
    <>
      <section id='home'>
        <div className='hommi'>
          <img src='./n.jpg' className='ho' />
          <div className='welcome-text'>WELCOME to Nanital</div> {/* Removed extra space */}
          <div className='welcome-text2'>Relax and reconnect with nature.</div>
        </div>
        <div className='content'>
            <h1><i>...lets explore more...</i> </h1>
           
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ex vel aut, soluta adipisci delectus dolore. Consequuntur aperiam necessitatibus quas omnis rem aliquid harum laudantium nemo dicta error..</p>
      </section>
    </>
  );
}