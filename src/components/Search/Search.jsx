import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Form, Input } from 'reactstrap';
import UnitSwitch from '../UnitSwitcher/UnitSwitcher';
import searchIcon from '../../media/icons/search.svg';

const Search = ({ changeUnit, unitType, onTextInput, onGetWeatherData }) => (
  <Container className="mb-5 mt-5">
    <Row className="searchContainer">
      <Col className="unitSwitch" md="3" xs="3">
        <UnitSwitch changeUnit={changeUnit} unitType={unitType} />
      </Col>
      <Col md="6" xs="6">
        <Form className="form-inline  searchButton">
          <Input
            aria-label="Search"
            className="mr-sm-2 "
            id="searchBar"
            onChange={onTextInput}
            placeholder="City Name"
            type="text"
          />
          <Button className="my-2 my-sm-0" type="submit" onClick={onGetWeatherData}>
            <span>
              <img alt="search icon" className="searchIcon" src={searchIcon} />
            </span>
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

Search.propTypes = {
  changeUnit: PropTypes.func,
  cityName: PropTypes.string,
  onGetWeatherData: PropTypes.func,
  onTextInput: PropTypes.func,
  unitType: PropTypes.string,
};

Search.defaultProps = {
  changeUnit: () => null,
  cityName: '',
  onGetWeatherData: () => null,
  onTextInput: () => null,
  unitType: 'metric',
};
export default Search;
