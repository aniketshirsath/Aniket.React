import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
  return (
    <Container fluid className="d-flex align-items-center banner-container mt-5 pt-5" style={{height:"500px", width:"100%"}}>
      <Row className="w-100 mt-4 pt-2">
        <Col md={7} className="d-flex flex-column justify-content-center text-md-left text-center mb-4 mb-md-0">
          <h1 className='pb-3'>Hi, I'm John Deo.</h1>
          <p>A freelance Web developer from London. I convert custom web designs to bootstrap templates.</p>
          <p className="pb-4">I make YouTube videos and write Blogs.</p>
          <div className='w-100'>
            <Button className="mt-3 primary rounded-pill w-50">I'M AVAILABLE</Button>
            </div>
          <div className="social-icons mt-3">
            <i className='bi bi-facebook mx-2'></i>
            <i className="bi bi-twitter mx-2"></i>
            <i className="bi bi-github mx-2"></i>
            <i className="bi bi-linkedin mx-2"></i>
          </div>
        </Col>
        <Col md={5} className="d-flex justify-content-center align-items-center">
          <img src="https://bootstraplily.com/demo/detto-ui-kit/img/portrait-photo.png" alt="John Deo" className="img-fluid"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
