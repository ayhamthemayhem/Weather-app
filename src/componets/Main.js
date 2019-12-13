import React, { useContext } from "react";
import { Row, Col, Spinner } from "react-bootstrap";

import WeatherDataContext from "../context/WeatherDataContext";
import Content from "./Content";
import TodayTimes from "./TodayTimes";
import NextDays from "./NextDays";

const Main = () => {
  const { data, loading, error } = useContext(WeatherDataContext);

  if (loading)
    return (
      <div className="d-flex full-width justify-content-center">
        <Spinner animation="border" variant="light">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );

  if (error) return <div>{error.message}</div>;

  if (data) {
    return (
      <div className="bordered-box">
        <Row className="mt-3">
          <Col md={12}>
            <Content data={data} />
          </Col>
        </Row>
        {/* <Row className="mt-3">
          <Col md={12}>
            <hr className="bg-light" />
          </Col>
        </Row> */}
        <Row className="mt-3">
          <Col md={12}>
            <TodayTimes data={data} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12}>
            <hr className="bg-light" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12}>
            <NextDays data={data} />
          </Col>
        </Row>
      </div>
    );
  } else {
    return null;
  }
};

export default Main;
