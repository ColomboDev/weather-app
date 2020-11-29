import React, { useEffect, useState } from "react";
import {
  getForecastByLonAndLat,
  getWeatherByLonAndLat,
  getWeatherByCity,
  getForecastByCity,
} from "./services/services";
import "./App.css";
import { CurrentWeather } from "./components/currentWeather";
import { ListForecast } from "./components/listForecast";
import { SearchCity } from "./components/searchCity";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  useEffect(() => {
    getGeolocation();
  }, []);

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setCurrentWeather(await getWeatherByLonAndLat(position.coords));
      setForecast(await getForecastByLonAndLat(position.coords));
    });
  };

  const searchCity = async (event) => {
    event.preventDefault();
    if (event.target.city.value) {
      try {
        const whaterCity = await getWeatherByCity(event.target.city.value);
        const forecastCity = await getForecastByCity(event.target.city.value);

        if (
          whaterCity.hasOwnProperty("name") &&
          forecastCity.hasOwnProperty("city")
        ) {
          setCurrentWeather(whaterCity);
          setForecast(forecastCity);
        }
      } catch (error) {}
    } else {
      setError({
        isError: true,
        message: "Ingrese una Ciudad",
      });
    }
  };
  const onChangeError = () => {
    setError({
      isError: false,
      message: "",
    });
  };
  return (
    <div className="App">
      <div className="content_currentWeather">
        <SearchCity
          handleSubmit={searchCity}
          error={error}
          onChangeError={onChangeError}
        />
        <CurrentWeather {...currentWeather} />
      </div>
      <hr className="separator" />
      <ListForecast forecast={forecast} />
    </div>
  );
}

export default App;
