import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const UnitSwitch = ({ changeUnit, unitType }) => {
  if (unitType === 'metric') {
    return (
      <Button className="switcher" onClick={changeUnit}>
        <span>C°</span>
        {' '}
/
        <span className="off"> F° </span>
      </Button>
    );
  }
  return (
    <Button className="switcher" onClick={changeUnit}>
      <span className="off">C°</span>
      {' '}
/
      <span> F° </span>
    </Button>
  );
};

UnitSwitch.propTypes = {
  changeUnit: PropTypes.func,
  unitType: PropTypes.string,
};

UnitSwitch.defaultProps = {
  changeUnit: () => null,
  unitType: 'metric',
};

export default UnitSwitch;
