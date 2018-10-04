import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Result from './Result';

const Main = ({ citys, units }) => (
  <Switch>
    <ReactCSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionName="example">
      {citys.map(city => (
        <Route
          key={`${city.data.city.name}`}
          path={`/${city.name}`}
          render={() => <Result units={units} weatherData={city.data} />}
        />
      ))}
    </ReactCSSTransitionGroup>
  </Switch>
);

Main.propTypes = {
  citys: PropTypes.array,
  units: PropTypes.array,
};

Main.defaultProps = {
  citys: [],
  units: [],
};

export default Main;
