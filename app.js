import { Analytics } from "@vercel/analytics/react"

const apiKey = "ebbf3e3171e8c1e0bf1a5fe7abe76e04";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCard = document.getElementById("weatherCard");

// funcion con todo que tienen que ver con la interfaz de usuario
function weatherUI(data) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherState = data.weather[0].main;

    // iconos de clima
    weatherIcon.src = "images/" + data.weather[0].main.toLowerCase() + ".png";

    // colores de fondo dependiendo del clima
    weatherCard.classList.remove("cloudy", "sunny", "rainy", "drizzle", "misty", "snowy", "default");
    const weatherClass = { Clouds: "cloudy", Clear: "sunny", Rain: "rainy", Drizzle: "drizzle", Mist: "misty", Snow: "snowy" };
    weatherCard.classList.add(weatherClass[weatherState] || "default");

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}

//para poder buscar el clima de la ciudad
async function checkWeather(city) {
    const weatherResponse = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (weatherResponse.status == 404) {
        return document.querySelector(".error").style.display = "block";
    }
    const data = await weatherResponse.json();
    weatherUI(data);
}

// para poder buscar el clima por coordenadas
async function checkWeatherByCoords(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    weatherUI(data);
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});

searchBox.addEventListener("keypress", (e) => {
    e.key === "Enter" && checkWeather(searchBox.value.trim());
});

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        ({ coords }) => checkWeatherByCoords(coords.latitude, coords.longitude),
        () => checkWeather("Santo Domingo"),
        {timeout: 500000}
    );
} else {
    checkWeather("Santo Domingo");
}

