import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import './CustomCarousel.css';

const CustomCarousel = () => {
  const items = [
    { img: './image1.jpg', description: 'Nani lake ' },
    { img: './image2.jpg', description: 'Nanda Devi temple' },
    { img: './image3.jpg', description: 'Nanital at Night' },
    { img: './image4.jpg', description: 'Tea Plantation' },
    { img: './image5.jpg', description: 'ZOO' },
    { img: './image6.jpg', description: '' },
    // Add more items as needed
  ];

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <section id='gallery'>
    <Carousel indicators={false} nextIcon={<Button>Next</Button>} prevIcon={<Button>Prev</Button>}>
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
