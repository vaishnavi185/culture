import React from 'react';
import './A.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>123 Main Street<br />New York, NY 10001<br />contact@example.com</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div> 
          <div className="col-md-4">
            <h3>Subscribe</h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
