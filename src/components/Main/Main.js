import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Result from './Result';

const Main = ({ cityData, weekDays, nextSixHours, mainInfo }) => (
  <ReactCSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionName="example">
    {cityData ? (
      <Result mainInfo={mainInfo} nextSixHours={nextSixHours} weatherData={cityData.data} weekDays={weekDays} />
    ) : null}
  </ReactCSSTransitionGroup>
);

Main.propTypes = {
  cityData: PropTypes.object,
  mainInfo: PropTypes.object,
  nextSixHours: PropTypes.array,
  weekDays: PropTypes.array,
};

Main.defaultProps = {
  cityData: {},
  mainInfo: {},
  nextSixHours: [],
  weekDays: [],
};

export default Main;
