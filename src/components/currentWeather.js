import React from "react";
import { dayNowComplete } from "../helpers/date";
import { iconsWhather } from "../helpers/iconWather";
import { mathRoundTemp } from "../helpers/temp";
import "./currentWeather.css";

export const CurrentWeather = (props) => {
  console.log(props);
  const DateWeather = () => {
    const date = new Date();
    return dayNowComplete(date);
  };

  return (
    <div>
      {Object.keys(props).length !== 0 ? (
        <div>
          <h1 className="title">{props?.name}</h1>
          <h3 className="temp">{DateWeather()}</h3>
          <div className="content_temp">
            <img
              className="iconWhater"
              src={iconsWhather(props?.weather[0]?.icon)}
              alt="icon"
            />
            <h1> {mathRoundTemp(props?.main?.temp)}°</h1>
          </div>

          <div>
            <p>
              {Math.round(props?.main?.temp_max)}°/
              {Math.round(props?.main?.temp_min)}° | Sencación térmica:
              {Math.round(props?.main?.feels_like)}°
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
