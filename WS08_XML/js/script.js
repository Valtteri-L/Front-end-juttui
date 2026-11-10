// Store your OpenWeatherMap API key.
const apiKey = "YOUR_API_KEY";

function onChange(){
    const city = document.getElementById('city').value;
    return city;
}

document.getElementById("fetchWeatherRaw").addEventListener("click", async () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + onChange() + '&units=metric&appid=' + apiKey;
    try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    const result = await response.text();
    document.getElementById("weatherdata").innerHTML = result;
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById("fetchWeather").addEventListener("click", async () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + onChange() + '&units=metric&mode=html&appid=' + apiKey;
    try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    const result = await response.text();
    document.getElementById("weatherdata").innerHTML = result;
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById("search").addEventListener("click", async () => {
    const searchCity = document.getElementById('citysearch').value;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&units=metric&mode=html&appid=' + apiKey;
    try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    const result = await response.text();
    document.getElementById("weatherdata").innerHTML = result;
  } catch (error) {
    alert(error.message);
  }
});
