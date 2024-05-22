import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Correct import for Link component
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Home from './Home.jsx'
import CustomCarousel from './Explore.jsx'; // Import CustomCarousel


export default function NavBar() {
  return (
    <>
    <Navbar bg="transparent" expand="lg" className='N'>
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <img src='./mount.png' className='im-1' alt='Mount' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* No changes needed here */}
        </Navbar.Collapse>
        <Nav className="ml-auto"> {/* Moved Nav outside Collapse */}
          <Nav.Link as={Link} to='/'>Home</Nav.Link> {/* Using Link component */}
          <NavDropdown title="Gallery" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Nainital Lake</NavDropdown.Item>
            <NavDropdown.Item href="#">Mukteshwar Temple</NavDropdown.Item>
            <NavDropdown.Item href="#">High Altitude Zoo</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">More</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to='/religion'>Religion</Nav.Link> {/* Using Link component */}
          <Nav.Link as={Link} to='/about-us'>About us</Nav.Link> {/* Using Link component */}
        </Nav>
      </div>
    </Navbar>
    {/* <Home></Home>
    <br></br>
    <br></br>
    <br></br>
    <CustomCarousel></CustomCarousel> */}
    </>
  );
}
