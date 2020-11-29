import React from "react";
import { dayHours } from ".././helpers/date";
import { iconsWhather } from ".././helpers/iconWather";
import "./forecast.css";

export const Forecast = (props) => {
  const { title, listForecast } = props;
  return (
    <div>
      <p className="day_forecast">{title}</p>
      {listForecast.map((day, index) => {
        return (
          <div key={index} className={"contet_list_forecast"}>
            <p className="hours_forecast">{dayHours(new Date(day.dt_txt))}</p>
            <img
              src={iconsWhather(day.weather[0].icon)}
              className="img_forecast"
              alt="icon"
            />
            <p>{Math.round(day?.main?.temp)}°</p>
          </div>
        );
      })}
    </div>
  );
};
