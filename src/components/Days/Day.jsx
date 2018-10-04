import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import icons from '../../media/iconsLookupTable';

const Day = ({ day: { name, icon, temp } }) => (
  <Col md="2" xs="12">
    <div className="day">
      <img alt="weather info icon" className="dayicon img-fluid" src={icons[icon]} />
      <h6 className="dayName">{name}</h6>
      <h5 className="dayName">
        <span>{temp}</span>
      </h5>
    </div>
  </Col>
);

Day.propTypes = {
  day: PropTypes.object,
};
Day.defaultProps = {
  day: {},
};
export default Day;
