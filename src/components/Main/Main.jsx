import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Result from './Result';

const Main = ({ cityData, weekDays, nextSixHours }) => (
  <ReactCSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionName="example">
    {cityData ? <Result nextSixHours={nextSixHours} weatherData={cityData.data} weekDays={weekDays} /> : null}
  </ReactCSSTransitionGroup>
);

Main.propTypes = {
  cityData: PropTypes.object,
  nextSixHours: PropTypes.array,
  weekDays: PropTypes.array,
};

Main.defaultProps = {
  cityData: {},
  nextSixHours: [],
  weekDays: [],
};

export default Main;
