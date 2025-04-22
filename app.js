
const apiKey = "ebbf3e3171e8c1e0bf1a5fe7abe76e04";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCard = document.getElementById("weatherCard");

async function checkWeather(city) {
    const weatherResponse = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if (weatherResponse.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        var data = await weatherResponse.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherState = data.weather[0].main;

        if (weatherState == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (weatherState == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (weatherState == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (weatherState == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (weatherState == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (weatherState == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        weatherCard.classList.remove("cloudy", "sunny", "rainy", "drizzle", "misty", "snowy", "default");

        let weatherClass = "default";
        switch (weatherState) {
            case "Clouds":
                weatherClass = "cloudy";
                break;
            case "Clear":
                weatherClass = "sunny";
                break;
            case "Rain":
                weatherClass = "rainy";
                break;
            case "Drizzle":
                weatherClass = "drizzle";
                break;
            case "Mist":
                weatherClass = "misty";
                break;
            case "Snow":
                weatherClass = "snowy";
                break;
        }

        weatherCard.classList.add(weatherClass);

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
        checkWeather(searchBox.value);
    }
});