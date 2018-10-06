import React from 'react';
import { Container, Col } from 'reactstrap';
import icons from '../../media/iconsLookupTable';

const Hour = ({ temp, icon, time }) => (
  <Col lg="2" md="4" sm="6" xs="12">
    <Container className="hour">
      <h4>{temp}</h4>
      <img alt="sunny" className="houricon img-fluid" src={icons[icon]} />
      <h5>{time}</h5>
    </Container>
  </Col>
);
export default Hour;
