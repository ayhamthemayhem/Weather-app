import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import styled from 'styled-components';

import icons from '../../media/iconsLookupTable';

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

const Temp = styled.h5`
  margin-bottom: 0px;
`;

const Name = styled.h6`
  margin-bottom: 0px;
`;

const Day = ({ day: { name, icon, temp } }) => (
  <Col md="2" sm="4" xs="4">
    <DayWrapper>
      <img alt="weather info icon" className="img-fluid" src={icons[icon]} />
      <Name>{name}</Name>
      <Temp>{temp}</Temp>
    </DayWrapper>
  </Col>
);

Day.propTypes = {
  day: PropTypes.object,
};
Day.defaultProps = {
  day: {},
};
export default Day;
