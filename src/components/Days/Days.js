import React from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import Day from './Day';

const Days = ({ weekDays }) => (
  <Row className=" days">
    <Col md="1" />
    {weekDays.map(day => <Day key={day.name} day={day} />)}
    <Col md="1" />
  </Row>
);

Days.propTypes = {
  weekDays: PropTypes.array,
};

Days.defaultProps = {
  weekDays: [],
};
export default Days;
