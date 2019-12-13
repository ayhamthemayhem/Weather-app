import React from "react";
import moment from "moment";
import Icons from "./Icons";

const TodayTimes = ({ data }) => {
  const { list } = data;

  return (
    <div className="d-flex justify-content-around flex-wrap align-items-center">
      {list.slice(0, 6).map(hour => {
        const temp = `${Math.round(hour.main.temp)}°`;
        const Icon = Icons[hour.weather[0].icon];
        const time = moment(hour.dt_txt).format("LT");

        return (
          <div
            key={`${temp}/${time}`}
            style={{ minWidth: 150 }}
            className="bordered-box mt-2  mr-1 d-flex flex-column align-items-center"
          >
            <Icon className="secondary-icon" />
            <h3>{temp}</h3>
            <h5 className="font-weight-light">{time}</h5>
          </div>
        );
      })}
    </div>
  );
};
export default TodayTimes;
