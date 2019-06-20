import { observable, computed, action } from 'mobx';
import moment from 'moment';
import axios from 'axios';
import uniqBy from 'lodash/uniqBy';

class Store {
  @observable cityName = '';

  @observable _cityData = null;

  @observable _citiesArray = [];

  @observable _unitType = 'metric';

  @computed
  get cityData() {
    return this._cityData;
  }

  @computed
  get mainInfo() {
    if (!this.cityData) return {};
    const currentInfo = this.cityData.data.list[0];
    return {
      cityName: this.cityData.name,
      humidity: currentInfo.main.humidity,
      pressure: currentInfo.main.pressure,
      temp: Math.round(this.cityData.temp),
      icon: currentInfo.weather[0].icon,
      windSpeed: currentInfo.wind.speed,
      winDeg: currentInfo.wind.deg,
      description: currentInfo.weather[0].description,
    };
  }

  @computed
  get unitType() {
    return this._unitType;
  }

  @computed
  get nextSixHours() {
    if (!this.cityData) return [];
    return this.cityData.data.list.slice(0, 6).map(hour => ({
      time: moment(hour.dt_txt).format('LT'),
      icon: hour.weather[0].icon,
      temp: Math.round(hour.main.temp),
    }));
  }

  @computed
  get weekDays() {
    if (!this.cityData) return null;
    const allDays = this.cityData.data.list.map(day => ({
      name: moment(day.dt_txt).format('dddd'),
      temp: `${Math.round(day.main.temp)}`,
      icon: day.weather[0].icon,
    }));

    const fliterdDays = uniqBy(allDays, 'name');
    return fliterdDays.length === 5 ? fliterdDays : fliterdDays.slice(0, -1);
  }

  @action
  async getWeatherData() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&units=metric&appid=${
      process.env.REACT_APP_API_KEY
    }`;
    try {
      const { data } = await axios.get(url);
      const city = {
        name: data.city.name,
        data,
        temp: data.list[0].main.temp,
      };

      this._cityData = city;

      return data;
    } catch (e) {
      throw e;
    }
  }

  @action
  setCityName(input) {
    this.cityName = input;
  }

  @action
  setUnitType() {
    if (this._unitType === 'metric') {
      this._unitType = 'imperial';
    } else if (this._unitType === 'imperial') {
      this._unitType = 'metric';
    }
  }
}

export default Store;
