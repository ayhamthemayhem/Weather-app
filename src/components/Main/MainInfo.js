import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import icons from '../../media/iconsLookupTable';

const MainInfo = ({ mainInfo }) => {
  const {
    description, temp, cityName, humidity, pressure, windSpeed, winDeg, icon,
  } = mainInfo;
  return (
    <div className="MainInfo">
      <Row>
        <Col md="6" xs="12">
          <img alt={description} className="img-fluid" id="bigIcon" src={icons[icon]} />
          <h1>{cityName}</h1>
          <h4>{description}</h4>
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
              <span>
                {humidity}
                %
              </span>
            </ListGroupItem>
            <ListGroupItem>
              pressure :
              {' '}
              <span>
                {' '}
                {pressure}
                {' '}
hPa
              </span>
            </ListGroupItem>
            <ListGroupItem>
              Wind speed :
              {' '}
              <span>
                {' '}
                {windSpeed}
                {' '}
m/s
              </span>
            </ListGroupItem>
            <ListGroupItem>
              Wind direction :
              {' '}
              <span>
                {' '}
                {winDeg}
              </span>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

MainInfo.propTypes = {
  mainInfo: PropTypes.object,
};

MainInfo.defaultProps = {
  mainInfo: {},
};
export default MainInfo;
