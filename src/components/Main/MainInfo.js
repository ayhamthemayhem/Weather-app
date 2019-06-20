import React from "react";
import PropTypes from "prop-types";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";

import icons from "../../media/iconsLookupTable";

const MainInfoWrapper = styled(Row)`
  padding: 2%;
  display: flex;
  align-items: center;
  margin: 2% 0px;
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

const ListItem = styled(ListGroupItem)`
  background-color: inherit;
  padding: 0px 15px;
  display: flex;
  height: 65px;
  justify-content: center;
  align-items: center;
  color: $fff;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ImageWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Temp = styled.h3`
  margin-bottom: 0px;
`;

const MainImage = styled.img`
  width: 256px;
  height: 256px;
`;

const MainInfo = ({ mainInfo }) => {
  const {
    description,
    temp,
    cityName,
    humidity,
    pressure,
    windSpeed,
    winDeg,
    icon
  } = mainInfo;

  return (
    <MainInfoWrapper>
      <ImageWrapper md="6" xs="12">
        <MainImage alt={description} className="img-fluid" src={icons[icon]} />
        <h1>{cityName}</h1>
        <h4>{description}</h4>
      </ImageWrapper>
      <Col md="6" xs="12">
        <ListGroup>
          <ListItem>
            <Temp>{temp}</Temp>
          </ListItem>
          <ListItem>Humidity :{humidity}</ListItem>
          <ListItem>Pressure :{pressure}</ListItem>
          <ListItem>Wind speed :{windSpeed}</ListItem>
          <ListItem>Wind direction :{winDeg}</ListItem>
        </ListGroup>
      </Col>
    </MainInfoWrapper>
  );
};

MainInfo.propTypes = {
  mainInfo: PropTypes.object
};

MainInfo.defaultProps = {
  mainInfo: {}
};
export default MainInfo;
