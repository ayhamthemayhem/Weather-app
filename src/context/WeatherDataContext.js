import React, { useState } from "react";
import axios from "axios";

const WeatherDataContext = React.createContext({
  data: null,
  setData: () => null,
  error: null,
  setError: () => null,
  loading: false,
  setLoading: () => null,
  getWeatherData: () => null
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeatherData = async (cityName, unitType) => {
    try {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unitType}&appid=${process.env.REACT_APP_API_KEY}`;
      const { data } = await axios.get(url);
      setData(data);
      if (error) {
        setError(null);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherDataContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        loading,
        setLoading,
        getWeatherData
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContext;
