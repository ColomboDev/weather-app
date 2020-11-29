import React from "react";
import { filterDate, dayNowSimple, dayHours } from ".././helpers/date";
import { Forecast } from "./forecast";
import "./listForecast.css";
export const ListForecast = (props) => {
  const { forecast } = props;
  const nowDay = forecast && filterDate(forecast?.list, 0, 5);
  const firstDay = forecast && filterDate(forecast?.list, 5, 13);
  const secondDay = forecast && filterDate(forecast?.list, 13, 21);
  const thirdDay = forecast && filterDate(forecast?.list, 21, 29);
  const fourthDay = forecast && filterDate(forecast?.list, 29, 37);
  return (
    <section>
      <h1 className="title_listForecast">Diario</h1>
      <div className="grid">
        <div className="now_day">
          {nowDay ? <Forecast title="Hoy" listForecast={nowDay} /> : ""}
        </div>
        <div className="first_day">
          {firstDay ? (
            <Forecast
              title={dayNowSimple(new Date(firstDay[0]?.dt_txt))}
              listForecast={firstDay}
            />
          ) : (
            ""
          )}
        </div>
        <div className="second_day">
          {secondDay ? (
            <Forecast
              title={dayNowSimple(new Date(secondDay[0]?.dt_txt))}
              listForecast={secondDay}
            />
          ) : (
            ""
          )}
        </div>
        <div className="third_day">
          {thirdDay ? (
            <Forecast
              title={dayNowSimple(new Date(thirdDay[0]?.dt_txt))}
              listForecast={thirdDay}
            />
          ) : (
            ""
          )}
        </div>
        <div className="fourth_day">
          {fourthDay ? (
            <Forecast
              title={dayNowSimple(new Date(fourthDay[0]?.dt_txt))}
              listForecast={fourthDay}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};
