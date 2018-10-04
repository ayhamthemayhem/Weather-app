import { observable, computed, action } from 'mobx';
import moment from 'moment';
import axios from 'axios';
import uniqBy from 'lodash/uniqBy';

class Store {
  @observable cityName = '';

  @observable _cityData = null;

  @observable _citiesArray = [];

  @observable unitType = 'metric';

  @computed
  get cityData() {
    return this._cityData;
  }

  @computed
  get weekDays() {
    if (!this.cityData) return null;
    const allDays = this.cityData.data.list.map(day => ({
      name: moment(day.dt_txt).format('dddd'),
      temp: `${Math.round(day.main.temp)}`,
      icon: day.weather[0].icon,
    }));

    return uniqBy(allDays, 'name');
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
    if (this.unitType === 'metric') {
      this.unitType = 'imperial';
    } else if (this.unitType === 'imperial') {
      this.unitType = 'metric';
    }
  }
}

export default Store;
