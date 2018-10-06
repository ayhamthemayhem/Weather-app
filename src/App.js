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
  changeUnit = () => {
    const { store } = this.props;
    store.setUnitType();
  };

  handleGetWeatherData = (e) => {
    e.preventDefault();
    const { store } = this.props;
    store.getWeatherData();
  };

  handleTextInput = (event) => {
    const { store } = this.props;
    const { value } = event.target;
    store.setCityName(value);
  };

  render() {
    const {
      store: { cityData, weekDays, unitType, nextSixHours },
    } = this.props;
    console.log(nextSixHours);
    return (
      <Router>
        <Container fluid className="App">
          <Search
            changeUnit={this.changeUnit}
            onGetWeatherData={this.handleGetWeatherData}
            onTextInput={this.handleTextInput}
            unitType={unitType}
          />
          <Main cityData={cityData} nextSixHours={nextSixHours} unitType={unitType} weekDays={weekDays} />
        </Container>
      </Router>
    );
  }
}

App.wrappedComponent.propTypes = {
  store: MobxPropTypes.observableObject.isRequired,
};

export default App;
