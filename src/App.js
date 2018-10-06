import React from 'react';
import { Container } from 'reactstrap';
import { observer, inject, PropTypes as MobxPropTypes } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './components/Main/Main';
import Search from './components/Search/Search';

import './App.css';

@inject('store')
@observer
class App extends React.Component {
  handleSetUnitType = () => {
    const { store } = this.props;
    store.setUnitType();
  };

  handleGetWeatherData = (e) => {
    e.preventDefault();
    const { store } = this.props;
    store.getWeatherData();
  };

  handleInputChange = (event) => {
    const { store } = this.props;
    const { value } = event.target;
    store.setCityName(value);
  };

  render() {
    const {
      store: {
        cityData, weekDays, unitType, nextSixHours, mainInfo,
      },
    } = this.props;
    return (
      <Router>
        <Container fluid className="App">
          <Search
            onGetWeatherData={this.handleGetWeatherData}
            onInputChange={this.handleInputChange}
            onSetUnitType={this.handleSetUnitType}
            unitType={unitType}
          />
          <Main
            cityData={cityData}
            mainInfo={mainInfo}
            nextSixHours={nextSixHours}
            unitType={unitType}
            weekDays={weekDays}
          />
        </Container>
      </Router>
    );
  }
}

App.wrappedComponent.propTypes = {
  store: MobxPropTypes.observableObject.isRequired,
};

export default App;
