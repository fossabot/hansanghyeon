import React from 'react';
// Components
import Profile from '@molecule/Profile';
import { Container, Row, Col } from './style';

const Resume = () => {
  return (
    <Container>
      <Row.Header />
      <Row>
        <Col col>
          <Profile />
        </Col>
      </Row>
      <Row.Footer />
    </Container>
  );
};

export default Resume;
