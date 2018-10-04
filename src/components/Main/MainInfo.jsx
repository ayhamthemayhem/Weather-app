import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import icons from '../../media/iconsLookupTable';

const MainInfo = ({ weatherData, units, cityName }) => {
  const { weather, main, wind } = weatherData;
  const info = {
    description: weather[0].description,
    dayIcon: icons[weather[0].icon],
    humidity: `${main.humidity}`,
    pressure: `${main.pressure}`,
    windSpeed: `${wind.speed}`,
    windDirection: `${wind.deg}`,
  };
  let temp;
  if (units === 'metric') {
    temp = `${Math.round(main.temp)}°`;
  } else if (units === 'imperial') {
    temp = `${Math.round(main.temp * (9 / 5) + 32)}°`;
  }

  return (
    <div className="MainInfo">
      <Row>
        <Col md="6" xs="12">
          <img alt={info.description} className="img-fluid" id="bigIcon" src={info.dayIcon} />
          <h1>{cityName}</h1>
          <h4>{info.description}</h4>
        </Col>
        <Col md="6" xs="12">
          <ListGroup>
            <ListGroupItem>
              <h3>
                <span>{temp}</span>
              </h3>
            </ListGroupItem>
            <ListGroupItem>
              Humidity :
              {' '}
              <span>
                {' '}
                {info.humidity}
                %
              </span>
            </ListGroupItem>
            <ListGroupItem>
              Pressur :
              {' '}
              <span>
                {' '}
                {info.pressure}
                {' '}
hPa
              </span>
            </ListGroupItem>
            <ListGroupItem>
              Wind speed :
              {' '}
              <span>
                {' '}
                {info.windSpeed}
                {' '}
m/s
              </span>
            </ListGroupItem>
            <ListGroupItem>
              Wind direction :
              {' '}
              <span>
                {' '}
                {info.windDirection}
              </span>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};
export default MainInfo;
