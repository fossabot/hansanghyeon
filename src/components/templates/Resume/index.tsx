import React from 'react';
// Components
import { Container, Row, Col } from './style';

const Resume = () => {
  return (
    <Container>
      <Row.Header />
      <Row>
        <Col col>Resume</Col>
      </Row>
      <Row.Footer />
    </Container>
  );
};

export default Resume;
