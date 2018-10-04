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

  handleGetWeatherData = () => {
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
      store: { cities, cityName },
    } = this.props;

    return (
      <Router>
        <Container fluid className="App">
          {/* <Navi citys={citys} fetchDevInfo={this.fetchDevInfo} /> */}
          <Search
            changeUnit={this.changeUnit}
            cityName={cityName}
            onGetWeatherData={this.handleGetWeatherData}
            onTextInput={this.handleTextInput}
            unitType={unitType}
          />
          <Main citys={cities} unitType={unitType} />
        </Container>
      </Router>
    );
  }
}

App.wrappedComponent.propTypes = {
  store: MobxPropTypes.observableObject.isRequired,
};

export default App;
