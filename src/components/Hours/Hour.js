import React from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";
import styled from "styled-components";

import icons from "../../media/iconsLookupTable";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 15%;
`;

const Text = styled.h5`
  margin-bottom: 0px;
`;

const Hour = ({ temp, icon, time }) => (
  <Col lg="2" md="4" sm="4" xs="4">
    <InfoWrapper>
      <Text>{temp}</Text>
      <img alt="sunny" className="img-fluid" src={icons[icon]} />
      <Text>{time}</Text>
    </InfoWrapper>
  </Col>
);

Hour.propTypes = {
  icon: PropTypes.string,
  temp: PropTypes.string,
  time: PropTypes.string
};

Hour.defaultProps = {
  icon: "",
  temp: "",
  time: ""
};
export default Hour;
