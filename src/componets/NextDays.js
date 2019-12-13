import React from "react";
import uniqBy from "lodash/uniqBy";
import moment from "moment";
import Icons from "./Icons";

const NextDays = ({ data }) => {
  const { list } = data;
  const daysToRender = uniqBy(
    list.map(day => ({
      name: moment(day.dt_txt).format("dddd"),
      temp: `${Math.round(day.main.temp)}°`,
      icon: day.weather[0].icon
    })),
    "name"
  );
  return (
    <div className="d-flex justify-content-around flex-wrap align-items-center">
      {daysToRender.map(x => {
        const Icon = Icons[x.icon];
        return (
          <div
            key={`${x.temp}/${x.name}`}
            style={{ minWidth: 150 }}
            className=" mt-2  mr-1 d-flex flex-column align-items-center"
          >
            <Icon className="secondary-icon" />
            <h3>{x.temp}</h3>
            <h5 className="font-weight-light">{x.name}</h5>
          </div>
        );
      })}
    </div>
  );
};
export default NextDays;
