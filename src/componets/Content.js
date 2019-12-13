import React from "react";
import { Row, Col } from "react-bootstrap";
import moment from "moment";

const Content = ({ data }) => {
  const { city, list } = data;
  const { weather, main, wind } = list[0];

  const desc = weather[0].description || "";

  const humidity = main.humidity || "";
  const pressure = main.pressure || "";
  const feelsLike = main.feels_like || "";
  const temp = main.temp || "";
  const maxTemp = main.temp_max || "";
  const sunset = city.sunset ? moment.unix(city.sunset).calendar() : null;
  const windSpeed = wind.speed || "";

  return (
    <Row className="mb-5">
      <Col className="mb-3" md={6}>
        <div className="d-flex flex-column align-items-center position-relative">
          <h1 className="display-1 font-weight-bold mb-0">{`${Math.ceil(
            temp
          )}°`}</h1>
          <h2 className="text-capitalize mb-0">{desc}</h2>
          <h4 className="text-capitalize font-weight-lighter">{city.name}</h4>
        </div>
      </Col>
      <Col className="weather-secondary-info" md={6}>
        <h5 className="text-capitalize font-weight-light">
          {feelsLike && `feels Like: ${Math.ceil(feelsLike)}°`}
        </h5>
        <h5 className="text-capitalize font-weight-light">
          {humidity && `Humidity: ${humidity}`}
        </h5>
        <h5 className="text-capitalize font-weight-light">
          {pressure && `pressure: ${pressure}`}
        </h5>
        <h5 className="text-capitalize font-weight-light">
          {maxTemp && `Max temp: ${Math.ceil(maxTemp)}°`}
        </h5>
        <h5 className="font-weight-light">
          {windSpeed && `Wind Speed: ${windSpeed}`}
        </h5>
        <h5 className="font-weight-light">{sunset && `Sunset: ${sunset}`}</h5>
      </Col>
    </Row>
  );
};
export default Content;
