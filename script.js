
const apiKey = '23ee4ca69d95d4b227e092f7dbcee2f2';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const locationInput = document.getElementById('locationInput'); 
const locationButton = document.getElementById('locationButton'); 
const locationElement = document.getElementById('location'); 
const temperatureElement = document.getElementById('temperature'); 
const descriptiveElement = document.getElementById('description');


locationButton.addEventListener('click', () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      descriptiveElement.textContent = data.weather[0].description;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

