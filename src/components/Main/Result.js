import React from 'react';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Hour from '../Hours/Hour';
import MainInfo from './MainInfo';
import Days from '../Days/Days';

const Result = ({ weatherData, weekDays, nextSixHours, mainInfo }) => {
  const { list, city } = weatherData;
  if (list === undefined) return <div />;

  return (
    <Container>
      <MainInfo cityName={city.name} mainInfo={mainInfo} />
      <Row className="hours">
        {nextSixHours.map(({ temp, icon, time }) => <Hour key={time} icon={icon} temp={temp} time={time} />)}
      </Row>
      <Days weekDays={weekDays} />
    </Container>
  );
};

Result.propTypes = {
  mainInfo: PropTypes.object,
  nextSixHours: PropTypes.array,
  weatherData: PropTypes.object,
  weekDays: PropTypes.array,
};

Result.defaultProps = {
  mainInfo: {},
  nextSixHours: [],
  weatherData: {},
  weekDays: [],
};

export default Result;
