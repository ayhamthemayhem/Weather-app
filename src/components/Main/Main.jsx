import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Result from './Result';

const Main = ({ units, cityData, weekDays }) => (
  <ReactCSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionName="example">
    {cityData ? <Result units={units} weatherData={cityData.data} weekDays={weekDays} /> : null}
  </ReactCSSTransitionGroup>
);

Main.propTypes = {
  cityData: PropTypes.object,
  units: PropTypes.array,
};

Main.defaultProps = {
  cityData: {},
  units: [],
};

export default Main;
