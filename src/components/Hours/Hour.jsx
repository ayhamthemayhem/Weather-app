import React from 'react';
import { Container, Col } from 'reactstrap';
import icons from '../../media/iconsLookupTable';

const Hour = (props) => {
  const { dt, main, weather, dt_txt } = props.weatherData;
  const { units } = props;

  const timeStamp = dt;
  const date = new Date(timeStamp * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;
  const formattedTime = `${hours}:${minutes.substr(-2)}`;

  const weatherInfo = {
    icon: icons[weather[0].icon],
    date: dt_txt,
    description: weather[0].description,
  };
  let temp;
  if (units === 'metric') {
    temp = `${Math.round(main.temp)}°`;
  } else if (units === 'imperial') {
    temp = `${Math.round(main.temp * (9 / 5) + 32)}°`;
  }
  return (
    <Col lg="2" md="4" sm="6" xs="12">
      <Container className="hour">
        <h4>{temp}</h4>
        <img alt="sunny" className="houricon img-fluid" src={weatherInfo.icon} />
        <h5 className="ct">{formattedTime}</h5>
      </Container>
    </Col>
  );
};
export default Hour;
