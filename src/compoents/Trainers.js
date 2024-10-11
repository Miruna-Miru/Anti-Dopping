import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Trainers.css'; // Assuming the CSS is saved in this file

const TrainersIndex = () => {
  return (
    <section id="trainers-index" className="section trainers-index">
      <Container>
        <Row>
          <Col lg={4} md={6} className="d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <img src="https://c.ndtvimg.com/2024-06/b028fft_gautam-gambhir_640x480_03_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" className="img-fluid trainer-img" alt="Gautam Gambhir" />
              <div className="member-content">
                <h4>Dr. Gautam Gambhir</h4>
                <span>Anti-Doping Specialist</span>
                <p>
                  Expert in anti-doping regulations and practices, dedicated to promoting clean sport and educating athletes.
                </p>
                <div className="social">
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <img src="https://pragativadi.com/core/uploads/2021/08/ravi-shastri.jpg" className="img-fluid trainer-img" alt="Ravi Shastri" />
              <div className="member-content">
                <h4>Coach Ravi Shastri</h4>
                <span>Nutrition Expert</span>
                <p>
                  Specializes in sports nutrition and supplements, ensuring athletes maintain a healthy and clean diet.
                </p>
                <div className="social">
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <img src="https://www.aljazeera.com/wp-content/uploads/2023/11/2023-11-19T163119Z_954882799_UP1EJBJ19W4UF_RTRMADP_3_CRICKET-WORLDCUP-IND-AUS-1-1701250140.jpg?resize=1800%2C1800" className="img-fluid trainer-img" alt="Rahul Dravid" />
              <div className="member-content">
                <h4>Prof. Rahul Dravid</h4>
                <span>Ethics in Sports</span>
                <p>
                  Focuses on the ethical aspects of sports, promoting integrity and fair play among athletes.
                </p>
                <div className="social">
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TrainersIndex;
