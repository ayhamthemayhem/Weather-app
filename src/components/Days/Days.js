import React from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Day from './Day';

const DaysWrapper = styled(Row)`
  border: 1px solid rgba(255, 255, 255, 0.4);
  margin: 2% 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Days = ({ weekDays }) => <DaysWrapper>{weekDays.map(day => <Day key={day.name} day={day} />)}</DaysWrapper>;

Days.propTypes = {
  weekDays: PropTypes.array,
};

Days.defaultProps = {
  weekDays: [],
};
export default Days;
