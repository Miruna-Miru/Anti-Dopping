import React from 'react';
import './Footer.css';  // Import custom CSS for further styling if needed

const Footer = () => {
  return (
    <footer className="bg-light text-muted pt-5">
      <div className="container">
        <div className="row">
          {/* Address and Contact Info */}
          <div className="col-md-3 col-lg-3 mb-4">
            <h5 className="text-uppercase">Anti-Doping Education</h5>
            <p>
              123 Thiruparankundram<br />
              Madurai, India 625010
            </p>
            <p><strong>Phone:</strong> +91 12345 67890</p>
            <p><strong>Email:</strong> anti-doping@gururaja.in</p>
            <div className="social-icons mt-3">
              <a href="#" className="text-muted me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 col-lg-2 mb-4">
            <h5 className="text-uppercase">Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted">Home</a></li>
              <li><a href="/about" className="text-muted">About Us</a></li>
              <li><a href="/courses" className="text-muted">Courses</a></li>
              <li><a href="/terms" className="text-muted">Terms of Service</a></li>
              <li><a href="/privacy" className="text-muted">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-md-3 col-lg-2 mb-4">
            <h5 className="text-uppercase">Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted">Anti-Doping Education</a></li>
              <li><a href="/" className="text-muted">Workshops</a></li>
              <li><a href="/" className="text-muted">Consultations</a></li>
              <li><a href="/" className="text-muted">Support</a></li>
              <li><a href="/" className="text-muted">Certifications</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 col-lg-3 mb-4">
            <h5 className="text-uppercase">Our Newsletter</h5>
            <p>
              Subscribe to our newsletter and receive the latest updates on anti-doping education and clean sport initiatives!
            </p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Your email" aria-label="Your email" />
              <button className="btn btn-success" type="button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-4">
          <p className="mb-0">
            © Copyright <strong>Anti-Doping Education</strong> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
