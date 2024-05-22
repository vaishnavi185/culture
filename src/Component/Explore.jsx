import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './CustomCarousel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CustomCarousel = () => {
  const items = [
    { img: './image1.png', description: 'Nani lake ' },
    { img: './image2.png', description: 'Nanda Devi temple' },
    { img: './image3.png', description: 'Nanital at Night' },
    { img: './image4.jpg', description: 'Tea Plantation' },
    { img: './image5.jpg', description: 'ZOO' },
    { img: './image6.png', description: 'Lake views' },
    // Add more items as needed
  ];

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <section id='gallery'>
      <div className='jk'>
      <div className='content'>
        <h1><i>...lets explore more...</i></h1>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ex vel aut, soluta adipisci delectus dolore. Consequuntur aperiam necessitatibus quas omnis rem aliquid harum laudantium nemo dicta error..
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut earum omnis neque quod accusantium nisi hic sint labore, atque porro maxime repudiandae at eaque fugiat alias, aperiam, minima perferendis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam veniam nihil omnis optio odio ratione, quibusdam officia quae iste vel nemo quisquam unde obcaecati voluptas illo quam .
      </p>
      </div>
      
      <br />
      <h1 className='h'>Places To Visit</h1>
      <Carousel 
        indicators={false} 
        nextIcon={<i className="fas fa-chevron-right fa-2x"></i>} 
        prevIcon={<i className="fas fa-chevron-left fa-2x"></i>}
      >
        {groupedItems.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around">
              {group.map((item, idx) => (
                <Card key={idx} className="carousel-card">
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body className="card-body">
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default CustomCarousel;
