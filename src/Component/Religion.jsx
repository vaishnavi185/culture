import React from 'react';
import './Rel.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Religion() {
  const videos = [
    { src: 'video1.mp4', title: 'Lorem ipsum ', description: 'Lorem ipsum dolor sit' },
    { src: 'video2.mp4', title: 'Lorem ipsum ', description: '. Nullam vel purus diam. D.' },
    { src: 'video3.mp4', title: 'Lorem ipsum ', description: 'et, ultrices nulla. Nulla f.' },
    { src: 'video4.mp4', title: 'Lorem ipsum ', description: 'This is the fourth video.' },
    { src: 'video5.mp4', title: 'Lorem ipsum ', description: 'This is the fifth video.' },
    { src: 'video6.mp4', title: 'Lorem ipsum ', description: 'This is the sixth video.' }
  ];

  return (
    <section id='religion' className='religion-section'>
      <div className='overlay'>
        <div className='container-1'>
          <p className='h1'>SnapShots of nature</p>
        </div>
        <div className='carousel-container'>
          <Carousel 
            showThumbs={false} 
            showStatus={false} 
            infiniteLoop 
            useKeyboardArrows 
            centerMode 
            centerSlidePercentage={33.33}
          >
            {videos.map((video, index) => (
              <div key={index} className="carousel-slide">
                <div className="video-container">
                  <video controls style={{ width: '100%' }}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="carousel-content">
                  <h3>{video.title}</h3>
                  <p >{video.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

      </div>
    
    </section>
  );
}
