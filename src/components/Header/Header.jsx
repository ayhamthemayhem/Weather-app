import React from 'react';
import { Row, Col } from 'reactstrap';

const Header = () => (
  <Row className="header">
    <Col md="3" />
    <Col md="6">
      <h1>The Weather Hat</h1>
    </Col>
    <Col md="3" />
  </Row>
);

export default Header;
