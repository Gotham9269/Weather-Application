function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city name");

  fetch(`/api/weather?city=${city}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("weatherResult").style.display = "block";
      document.getElementById("city").innerText = data.name;
      document.getElementById("temp").innerText = `${data.main.temp} °C`;
      document.getElementById("desc").innerText = data.weather[0].description;

      const iconCode = data.weather[0].icon;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    })
    .catch(err => {
      alert("Weather not found! Please try a different city.");
      document.getElementById("weatherResult").style.display = "none";
    });
}
