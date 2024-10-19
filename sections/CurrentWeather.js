const currentWeatherSection = document.querySelector(".current-weather");

const currentWeatherEndpoint = getCurrentWeatherEndpoint("București");
console.log(currentWeatherEndpoint);

fetch(currentWeatherEndpoint)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    const { dt, name, main, weather, wind } = json;
    const day = getWeekDay(dt);
    const time = getTime(dt);
    const temperature = Math.round(main.temp);
    const realFeel = Math.round(main.feels_like);
    const iconCode = weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const description = weather[0].description;
    const windSpeed = Math.round(wind.speed * 3.6);

    currentWeatherSection.innerHTML = `
      <strong>${name}</strong>
      <div><strong>${day}</strong>, ${time}</div>
      <strong>${temperature}°C</strong>
      <img src="${iconUrl}" alt="" />
      <div>Real feel: <strong>${realFeel}°C</strong></div>
      <div>${description}</div>
      <div>Vant: <strong>${windSpeed} km/h</strong></div>
    `;
  });
