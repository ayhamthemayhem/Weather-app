import React from 'react';
import { Container, Row } from 'reactstrap';

import Hour from '../Hours/Hour';
import MainInfo from './MainInfo';
import Days from '../Days/Days';

const Result = ({ units, weatherData }) => {
  const { list, city } = weatherData;
  if (list === undefined) return <div />;

  const hoursInfo = list.slice(0, 6);
  const hours = hoursInfo.map((hour, index) => <Hour key={index} units={units} weatherData={list[index]} />);
  return (
    <Container>
      <MainInfo key={1} cityName={city.name} units={units} weatherData={list[0]} />
      <Row className="hours">{hours}</Row>
      <Days units={units} weatherData={weatherData} />
    </Container>
  );
};

export default Result;
