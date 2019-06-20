import React, { FunctionComponent } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Result from "./Result";
type Props = {
  cityData: any;
  mainInfo: any;
  nextSixHours: any[];
  weekDays: any[];
};

const Main: FunctionComponent<Props> = ({
  cityData,
  weekDays,
  nextSixHours,
  mainInfo
}) => (
  <ReactCSSTransitionGroup
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}
    transitionName="example"
  >
    {cityData ? (
      <Result
        mainInfo={mainInfo}
        nextSixHours={nextSixHours}
        weatherData={cityData.data}
        weekDays={weekDays}
      />
    ) : null}
  </ReactCSSTransitionGroup>
);

Main.defaultProps = {
  cityData: {},
  mainInfo: {},
  nextSixHours: [],
  weekDays: []
};

export default Main;
