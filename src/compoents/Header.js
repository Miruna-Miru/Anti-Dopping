import React from 'react';
import './Header.css'; // Optional CSS file for custom styles if needed
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className="sticky-top bg-white shadow-sm">
      <Container>
        {/* Site logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          {/* Uncomment below if you want to use an image logo */}
          {/* <img src="/assets/img/logo.png" alt="logo" className="logo" /> */}
          <h1 className="sitename text-success">Anti-Doping Education</h1>
        </Navbar.Brand>

        {/* Mobile menu toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar menu */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-success active">Home</Nav.Link>
            <Nav.Link href="/about" className="text-dark">About</Nav.Link>
            <Nav.Link href="/courses" className="text-dark">Courses</Nav.Link>
            <Nav.Link href="/trainers" className="text-dark">Trainers</Nav.Link>
            <Nav.Link href="/events" className="text-dark">Events</Nav.Link>
            <Nav.Link href="/contact" className="text-dark">Contact</Nav.Link>
          </Nav>

          {/* Get Started button */}
          <Button href="/courses" className="btn-success rounded-pill ms-3">
            Get Started
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
