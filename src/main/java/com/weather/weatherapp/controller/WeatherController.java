package com.weather.weatherapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.http.*;

@RestController
@RequestMapping("/api")
public class WeatherController {

    private final String API_KEY = "29920fdbf72d862073949c891d66bbac"; // Replace with your real API key

    @GetMapping("/weather")
    public ResponseEntity<String> getWeather(@RequestParam String city) {
        String url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=metric";

        try {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder().uri(URI.create(url)).build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            return ResponseEntity.ok(response.body());

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching weather: " + e.getMessage());
        }
    }
}
