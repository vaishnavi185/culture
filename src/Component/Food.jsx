import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './f.css'

export default function Food() {
  return (
   <section id='religion'>
 <Container>
     
      <Row>
        <Col xs={4}><img src='./food.jpeg'></img></Col>
        <Col xs={4}><span><h1>Culture </h1></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tempora consequatur nihil sequi architecto ab accusantium tenetur fuga facilis sunt facere libero aperiam delectus placeat, consectetur ullam saepe. Omnis, reiciendis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dolorum voluptatibus laborum illum nesciunt vero, eligendi aut alias voluptatem minima sunt facere facilis sequi hic nulla expedita non eveniet eius.</Col>
        <Col xs={4}><img src='./p.jpg'></img></Col>
      </Row>
    </Container>

   </section>
  )
}
