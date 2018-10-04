import React from 'react';
import { Col, Row } from 'reactstrap';
import Day from './Day';

class Days extends React.Component {
  render() {
    const daysInfo = this.props.weatherData.list;
    const days = daysInfo.map((day, index) => {
      const date = new Date(day.dt * 1000);
      const timeInDay = date.getHours();
      if (timeInDay === 13) {
        return <Day key={index} units={this.props.units} weatherData={this.props.weatherData.list[index]} />;
      }
      return '';
    });

    return (
      <Row className=" days">
        <Col md="1" />
        {days}
        <Col md="1" />
      </Row>
    );
  }
}
export default Days;
