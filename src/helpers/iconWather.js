import nightCloudy from ".././assets/wi-night-alt-cloudy.svg";
import nightClear from ".././assets/wi-night-clear.svg";
import nightHail from ".././assets/wi-night-alt-hail.svg";
import nightLightning from ".././assets/wi-night-alt-lightning.svg";
import nightSnow from ".././assets/wi-night-alt-snow.svg";
import nightFog from ".././assets/wi-night-fog.svg";
import daysunny from ".././assets/wi-day-sunny.svg";
import dayCloudy from ".././assets/wi-day-cloudy.svg";
import dayHail from ".././assets/wi-day-hail.svg";
import dayLightning from ".././assets/wi-day-lightning.svg";
import daySnow from ".././assets/wi-day-snow.svg";
import dayFog from ".././assets/wi-day-fog.svg";

export const iconsWhather = (icon) => {
  switch (icon) {
    case "01n":
      return nightClear;
    case "01d":
      return daysunny;
    case "02n":
      return nightCloudy;
    case "02d":
      return dayCloudy;
    case "03n":
      return nightCloudy;
    case "03d":
      return dayCloudy;
    case "04n":
      return dayCloudy;
    case "04d":
      return dayCloudy;
    case "09n":
      return nightHail;
    case "09d":
      return dayHail;
    case "10n":
      return nightHail;
    case "10d":
      return dayHail;
    case "11n":
      return nightLightning;
    case "11d":
      return dayLightning;
    case "13n":
      return nightSnow;
    case "13d":
      return daySnow;
    case "50n":
      return nightFog;
    case "50d":
      return dayFog;
    default:
      return "";
  }
};
