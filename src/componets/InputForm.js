import React, { useState, useContext } from "react";

import { Form, Button, Row, Col } from "react-bootstrap";

import WeatherDataContext from "../context/WeatherDataContext";

const InputForm = () => {
  const [cityName, setCityName] = useState("");
  const [unitType, setUnitType] = useState("metric");

  const { getWeatherData } = useContext(WeatherDataContext);

  const onFormSubmit = async e => {
    e.preventDefault();
    await getWeatherData(cityName, unitType);
  };

  return (
    <Form className="mb-5 d-flex align-items-center" onSubmit={onFormSubmit}>
      <Row className="full-width">
        <Col md={8}>
          <Form.Control
            className="mt-1"
            placeholder="city"
            value={cityName}
            onChange={e => setCityName(e.target.value)}
            type="text"
          />
        </Col>
        <Col md={2}>
          <Form.Control
            className="mt-1"
            onChange={e => setUnitType(e.target.value)}
            as="select"
          >
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </Form.Control>
        </Col>
        <Col md={2}>
          <Button className="mt-1" variant="outline-light" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default InputForm;
