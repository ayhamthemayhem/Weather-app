import React from 'react';
import { Col, Row } from 'reactstrap';

import Day from './Day';

const Days = ({ weekDays }) => (
  <Row className=" days">
    <Col md="1" />
    {weekDays.map(day => <Day key={day.name} day={day} />)}
    <Col md="1" />
  </Row>
);
export default Days;
