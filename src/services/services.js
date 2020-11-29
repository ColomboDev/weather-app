const apiKey = "ed9819bef3054d5058875dd1237d46bd";

export const getForecastByCity = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`,
    { mode: "cors" }
  );
  const data = await response.json();
  return await data;
};

export const getForecastByLonAndLat = async (coords) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=metric`,
    { mode: "cors" }
  );
  const data = await response.json();
  return await data;
};

export const getWeatherByLonAndLat = async (coords) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=metric`,
    { mode: "cors" }
  );
  const data = await response.json();
  return await data;
};

export const getWeatherByCity = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    { mode: "cors" }
  );
  const data = await response.json();
  return await data;
};
