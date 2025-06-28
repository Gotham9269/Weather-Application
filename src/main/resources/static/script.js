function getWeather() {
    const city = document.getElementById("cityInput").value;

    fetch(`/api/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.main) {
                const temp = data.main.temp;
                const desc = data.weather[0].description;
                document.getElementById("result").innerHTML =
                    `🌡️ Temperature in ${city}: ${temp}°C<br>🌥️ Condition: ${desc}`;
            } else {
                document.getElementById("result").innerHTML = "City not found.";
            }
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Error fetching weather data.";
            console.error(error);
        });
}
