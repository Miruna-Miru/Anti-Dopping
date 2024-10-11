import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CourseTile.css'; // Make sure to import your CSS file

const Courses = () => {
    const courses = [
        {
          imgSrc: '../assets/ITA-Intri-1.webp',
          category: 'Anti-Doping',
          price: 'Free',
          title: 'Introduction to Anti-Doping',
          description: 'Learn the basics of anti-doping, including rules, regulations, and the importance of clean sport.',
          trainer: {
            name: 'Dr. Tamil Selvi',
            imgSrc: '../assets/trainer-1.png',
            users: 150,
            hearts: 200,
          },
        },
        {
          imgSrc: 'https://drbest.in/wp-content/uploads/2019/07/001.jpg',
          category: 'Health & Safety',
          price: 'Free',
          title: 'Nutrition and Supplements',
          description: 'Understand the role of nutrition and supplements in sports.',
          trainer: {
            name: 'Prabhakaran JP',
            imgSrc: './assets/trainer-2.png',
            users: 120,
            hearts: 180,
          },
        },
        {
          imgSrc: 'https://cdn.thewire.in/wp-content/uploads/2022/01/31133448/722946-dutee-chand-second-pti.jpg',
          category: 'Ethics',
          price: 'Free',
          title: 'Ethics in Sports',
          description: 'Explore the ethical considerations in sports and the importance of maintaining integrity.',
          trainer: {
            name: 'Prof. Nancy',
            imgSrc: './assets/trainer-3.png',
            users: 100,
            hearts: 150,
          },
        },
      ];
    

  return (
    <section id="courses" className="courses section">
      {/* Section Title */}
      <Container className="section-title" data-aos="fade-up">
        <h2>Courses</h2>
        <p>Popular Courses</p>
      </Container>
      {/* End Section Title */}

      <Container>
        <Row>
          {courses.map((course, index) => (
            <Col lg={4} md={6} className="d-flex align-items-stretch mt-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="course-item">
                <img src={course.imgSrc} className="img-fluid course-img" alt={course.title} />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="category">{course.category}</p>
                    <p className="price">{course.price}</p>
                  </div>
                  <h3><a href="course-details.html">{course.title}</a></h3>
                  <p className="description">{course.description}</p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img src={course.trainer.imgSrc} className="img-fluid" alt={course.trainer.name} />
                      <a href="" className="trainer-link">{course.trainer.name}</a>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bi bi-person user-icon"></i>&nbsp;{course.trainer.users}
                      &nbsp;&nbsp;
                      <i className="bi bi-heart heart-icon"></i>&nbsp;{course.trainer.hearts}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
