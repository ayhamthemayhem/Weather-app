import React from 'react';
import { Col } from 'reactstrap';

const Day = ({ units, weatherData }) => {
  const { main, weather, dt, dt_txt } = weatherData;
  let temp;
  if (units === 'metric') {
    temp = `${Math.round(main.temp)}°`;
  } else if (units === 'imperial') {
    temp = `${Math.round(main.temp * (9 / 5) + 32)}°`;
  }
  const weatherInfo = {
    icon: `./media/icons/${weather[0].icon}.svg`,
    date: dt_txt,
    description: weather[0].description,
  };
  const daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const date = new Date(dt * 1000);
  const day = date.getDay();
  return (
    <Col md="2" xs="12">
      <div className="day">
        <img alt="weather info icon" className="dayicon img-fluid" src={weatherInfo.icon} />
        <h6 className="dayName">{daysNames[day]}</h6>
        <h5 className="dayName">
          <span>{temp}</span>
        </h5>
      </div>
    </Col>
  );
};
export default Day;
