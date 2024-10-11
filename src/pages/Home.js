import React, { useEffect } from 'react';
import './Home.css'; // Custom styles for this section
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Button, Image, Row, Col } from 'react-bootstrap';
import Footer from '../compoents/Footer';
import Header from '../compoents/Header';
import PureCounter from '@srexi/purecounterjs'; // Import PureCounter
import Courses from '../compoents/CourseTile';
import TrainersIndex from '../compoents/Trainers';

const Home = () => {
  // Initialize AOS for animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Initialize PureCounter
    new PureCounter(); // Initialize PureCounter here

    return () => {
      // Clean up (if needed)
    };
  }, []);
  const features = [
    { icon: 'bi-book', color: '#ffbb2c', title: 'Educational Modules' },
    { icon: 'bi-play-circle', color: '#5578ff', title: 'Interactive Videos' },
    { icon: 'bi-graph-up', color: '#e80368', title: 'Progress Tracking' },
    { icon: 'bi-chat-dots', color: '#e361ff', title: 'Discussion Forums' },
    { icon: 'bi-bell', color: '#47aeff', title: 'Real-Time Updates' },
    { icon: 'bi-award', color: '#ffa76e', title: 'Certifications' },
    { icon: 'bi-person-check', color: '#11dbcf', title: 'Expert Guidance' },
    { icon: 'bi-calendar-event', color: '#4233ff', title: 'Workshops & Events' },
    { icon: 'bi-bar-chart', color: '#b2904f', title: 'Analytics' },
    { icon: 'bi-newspaper', color: '#b20969', title: 'Latest News' },
    { icon: 'bi-question-circle', color: '#ff5828', title: 'FAQs' },
    { icon: 'bi-envelope', color: '#29cc61', title: 'Contact Support' },
  ];

  

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background d-flex align-items-center">
        <img
          src="https://cdn.pixabay.com/photo/2023/12/19/22/46/man-8458549_1280.jpg"
          alt="Empowering Athletes"
          className="hero-img"
          data-aos="fade-in"
        />
        <Container className="text-center text-white">
          <h2 data-aos="fade-up" data-aos-delay="100">
            Promoting Clean Sport, <br /> Empowering Athletes
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Join us in our mission to educate and raise awareness about anti-doping practices.
          </p>
          <div className="d-flex justify-content-center mt-4" data-aos="fade-up" data-aos-delay="300">
            <Button href="/courses" className="btn-get-started btn-success">
              Get Started
            </Button>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <Container>
          <div className="row gy-4">
            {/* Image Column */}
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
              <Image
                src="https://www.mykhel.com/img/1200x60x675/2022/06/neeraj-chopra-javelin-1655878245.jpg"
                className="img-fluid"
                alt="Neeraj Chopra"
              />
            </div>

            {/* Text Content Column */}
            <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
              <h3>About Our Mission</h3>
              <p className="fst-italic">
                Our mission is to promote clean sport through comprehensive anti-doping education and awareness.
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> Providing accessible anti-doping information to all athletes and stakeholders.</li>
                <li><i className="bi bi-check-circle"></i> Creating engaging and interactive educational content.</li>
                <li><i className="bi bi-check-circle"></i> Ensuring the retention and application of anti-doping knowledge through periodic assessments and interactive elements.</li>
              </ul>
              <a href="/about" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </Container>
      </section>

      {/* COUNTS Section */}
      <section id="counts" className="section counts light-background">
        <Container data-aos="fade-up" data-aos-delay="100">
          <Row className="gy-4">
            <Col lg={3} md={6} className="d-flex justify-content-center">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" className="purecounter">
                  1232
                </span>
                <p>Athletes Educated</p>
              </div>
            </Col>

            <Col lg={3} md={6} className="d-flex justify-content-center">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" className="purecounter">
                  64
                </span>
                <p>Educational Modules</p>
              </div>
            </Col>

            <Col lg={3} md={6} className="d-flex justify-content-center">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter">
                  42
                </span>
                <p>Workshops Conducted</p>
              </div>
            </Col>

            <Col lg={3} md={6} className="d-flex justify-content-center">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter">
                  24
                </span>
                <p>Certified Trainers</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="section why-us">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="why-box">
                <h3>Why Choose Our Platform?</h3>
                <p>
                  Our platform is dedicated to promoting clean sport through comprehensive and engaging anti-doping education. We provide accessible courses and interactive content to ensure athletes and stakeholders are well-informed.
                </p>
                <div className="text-center">
                  <a href="about.html" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
            {/* End Why Box */}

            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
                <div className="col-xl-4">
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-clipboard-data"></i>
                    <h4>Comprehensive Courses</h4>
                    <p>Access a wide range of educational materials, including videos, infographics, and interactive modules.</p>
                  </div>
                </div>
                {/* End Icon Box */}

                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-gem"></i>
                    <h4>Engaging Content</h4>
                    <p>Our content is designed to be engaging and interactive, ensuring better retention and understanding.</p>
                  </div>
                </div>
                {/* End Icon Box */}

                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-inboxes"></i>
                    <h4>Expert Guidance</h4>
                    <p>Learn from certified trainers and experts in the field of anti-doping education.</p>
                  </div>
                </div>
                {/* End Icon Box */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featurs*/}
      <section id="features" className="features section">
      <Container>
        <Row className="gy-4">
          {features.map((feature, index) => (
            <Col lg={3} md={4} key={index} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
              <div className="features-item">
                <i className={`bi ${feature.icon}`} style={{ color: feature.color }}></i>
                <h3><a href="" className="stretched-link">{feature.title}</a></h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    {/* Course*/ }
    <Courses/>
    <TrainersIndex/>
      <Footer />
    </div>
  );
};

export default Home;
