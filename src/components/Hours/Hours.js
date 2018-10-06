import React from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';

import Hour from './Hour';

const Hours = ({ nextSixHours }) => (
  <Row>{nextSixHours.map(({ temp, icon, time }) => <Hour key={time} icon={icon} temp={temp} time={time} />)}</Row>
);

Hours.propTypes = {
  nextSixHours: PropTypes.array,
};

Hours.defaultProps = {
  nextSixHours: [],
};

export default Hours;
