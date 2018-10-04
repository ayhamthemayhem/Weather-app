import { observable, computed, action } from 'mobx';
import axios from 'axios';

class Store {
  @observable cityName = '';

  @observable _weatherData = null;

  @observable _citiesArray = [];

  @computed
  get cities() {
    return this._citiesArray;
  }

  @action
  async getWeatherData() {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&units=metric&appid=${
      process.env.REACT_APP_API_KEY
    }`;
    try {
      const { data } = await axios.get(url);
      const city = {
        name: data.city.name,
        data,
        temp: data.list[0].main.temp,
      };
      const cities = [...this._citiesArray, city];
      this._citiesArray = cities;

      return data;
    } catch (e) {
      throw e;
    }
  }

  @action
  setCityName(input) {
    this.cityName = input;
  }
}

export default Store;
