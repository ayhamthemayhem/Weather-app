import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import styled from 'styled-components';

const Switch = styled(Button)`
  height: 45px;
  background-color: inherit;
  border-radius: 0px;
  .c {
    color: ${props => (props.unitType === 'metric' ? '#fff' : 'grey')};
  }

  .f {
    color: ${props => (props.unitType !== 'metric' ? '#fff' : 'grey')};
  }
`;

const UnitSwitch = ({ onSetUnitType }) => (
  <Switch onClick={onSetUnitType}>
    <span className="c">C°</span>

    <span className="f"> F° </span>
  </Switch>
);

UnitSwitch.propTypes = {
  onSetUnitType: PropTypes.func,
  unitType: PropTypes.string,
};

UnitSwitch.defaultProps = {
  onSetUnitType: () => null,
  unitType: 'metric',
};

export default UnitSwitch;
