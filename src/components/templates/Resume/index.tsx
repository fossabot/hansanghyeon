import React, { useState } from 'react';
// Components
import Profile from '@molecule/Profile';
import Career from '@molecule/Career';
import Alert from '@atom/Alert';
import DimSpan from '@atom/DimSpan';
import { Container, Row, Col } from './style';

const Resume: React.FC = () => {
  const [notice, setNotice] = useState(true);
  const handleNotice = () => {
    setNotice(false);
  };
  return (
    <Container>
      <Row.Header />
      {notice && (
        <>
          <Row>
            <Col col>
              <Alert onClick={handleNotice}>
                리메이크되거나 제거된 페이지는 기제하지 않았습니다.{' '}
                <DimSpan style={{ fontSize: '0.6rem' }}>(2020-09-16)</DimSpan>
              </Alert>
            </Col>
          </Row>
          <Row.Header />
        </>
      )}
      <Row>
        <Col col>
          <Profile />
        </Col>
      </Row>
      <Row>
        <Col col>
          <Career />
        </Col>
      </Row>
      <Row.Footer />
    </Container>
  );
};

export default Resume;
