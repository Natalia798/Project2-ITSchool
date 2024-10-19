const API_KEY = "911d408533fe6d60163293dd548f0f10";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

function getCurrentWeatherEndpoint(city) {
  const queryParams = `?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
  const currentWeatherEndpoint = baseUrl + queryParams; // url-ul final - "endpoint"
  return currentWeatherEndpoint;
}
