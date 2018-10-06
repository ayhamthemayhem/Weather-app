import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import MainInfo from './MainInfo';
import Days from '../Days/Days';
import Hours from '../Hours/Hours';

const Result = ({ weatherData, weekDays, nextSixHours, mainInfo }) => {
  const { list, city } = weatherData;
  if (list === undefined) return <div />;

  return (
    <Container>
      <MainInfo cityName={city.name} mainInfo={mainInfo} />
      <Hours nextSixHours={nextSixHours} />
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
