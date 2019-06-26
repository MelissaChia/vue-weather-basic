const apiKey = "9fd7a449d055dba26a982a3220f32aa2";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

function getForecast(location) {
  return fetch(`${weatherUrl}${location}&appid=${apiKey}`).then(response => response.json());
}

export default {
  getForecast
};
