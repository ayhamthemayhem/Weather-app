import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Form, Input } from 'reactstrap';
import styled from 'styled-components';

import UnitSwitch from '../UnitSwitcher/UnitSwitcher';
import searchIcon from '../../media/icons/search.svg';

const SearchIcon = styled.img`
  width: 16px;
  height: auto;
`;

const SearchInput = styled(Input)`
  border-radius: 0px;
  background-color: inherit;
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: border 1s ease;
  color: #fff;
  margin-right: 2%;
  height: 45px;
  &:hover {
    background-color: inherit;
    border: 1px solid rgba(255, 255, 255, 0.8);
  }
  &:focus {
    outline: none;
    color: #fff;
    background-color: inherit;
    border: 1px solid rgba(255, 255, 255, 0.8);
  }
  &:active {
    outline: none;
  }
`;

const SearchButton = styled(Button)`
  height: 45px;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.8);
    background-color: inherit;
  }
`;

const SearchForm = styled(Form)`
  display: flex;
  justify-content: space-around;
`;

const Search = ({ onSetUnitType, unitType, onInputChange, onGetWeatherData }) => (
  <Container>
    <Row>
      <Col md="1" xs="3">
        <UnitSwitch onSetUnitType={onSetUnitType} unitType={unitType} />
      </Col>
      <Col md="11" xs="6">
        <SearchForm>
          <SearchInput aria-label="Search" onChange={onInputChange} placeholder="City Name" type="text" />
          <SearchButton type="submit" onClick={onGetWeatherData}>
            <SearchIcon alt="search icon" src={searchIcon} />
          </SearchButton>
        </SearchForm>
      </Col>
    </Row>
  </Container>
);

Search.propTypes = {
  cityName: PropTypes.string,
  onGetWeatherData: PropTypes.func,
  onInputChange: PropTypes.func,
  onSetUnitType: PropTypes.func,
  unitType: PropTypes.string,
};

Search.defaultProps = {
  cityName: '',
  onGetWeatherData: () => null,
  onInputChange: () => null,
  onSetUnitType: () => null,
  unitType: 'metric',
};
export default Search;
