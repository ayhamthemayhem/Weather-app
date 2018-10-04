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
  constructor(props) {
    super(props);
    this.state = {
      unitType: 'metric',
    };
  }

  changeUnit = () => {
    const { unitType } = this.state;
    if (unitType === 'metric') {
      this.setState({ unitType: 'imperial' });
    } else if (unitType === 'imperial') {
      this.setState({ unitType: 'metric' });
    }
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
    const { unitType } = this.state;
    const {
      store: { cityData, weekDays },
    } = this.props;
    console.log(weekDays);
    return (
      <Router>
        <Container fluid className="App">
          <Search
            changeUnit={this.changeUnit}
            onGetWeatherData={this.handleGetWeatherData}
            onTextInput={this.handleTextInput}
            unitType={unitType}
          />
          <Main cityData={cityData} unitType={unitType} weekDays={weekDays} />
        </Container>
      </Router>
    );
  }
}

App.wrappedComponent.propTypes = {
  store: MobxPropTypes.observableObject.isRequired,
};

export default App;
