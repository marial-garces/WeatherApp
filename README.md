# Weather App 🌤️

A simple **vanilla JavaScript** project that shows the current weather for any city — and automatically for the user’s current location — using the [OpenWeatherMap](https://openweathermap.org/) API. It’s the perfect starter project if you want to practise DOM manipulation, asynchronous requests, and a bit of modern CSS.

---

## Features

| Feature | Details |
|---------|---------|
| 🔍 **Search by city** | Type a city name and press **Enter** *or* click the search button. |
| 📍 **Auto‑detect location** | On first load the app asks permission to read your geolocation and displays your local weather. |
| 🎨 **Dynamic gradients** | The background of the weather card changes with a 132° gradient according to the weather state (sunny, cloudy, rainy, etc.). |
| ⌨️ **Keyboard friendly** | Full operation with the **Enter** key, no mouse needed. |
| 📱 **Responsive** | Works on desktop, tablets, and mobile screens. |

---

## Tech stack

- **HTML5** – semantic structure  
- **CSS3** – Flexbox layout + custom gradients  
- **JavaScript (ES6)** – Fetch API, `async/await`, Geolocation API  
- **OpenWeatherMap** – free REST API for weather data  

No frameworks, no build tools — just open the file in a browser or serve it with any static server.

---

## Live demo

You can try a live version here → **<https://weather-app-ivory-nine-94.vercel.app/>**  

---

## Getting started

1. **Clone** the repository:

   ```bash
   git clone https://github.com/your‑username/weather‑app.git
   cd weather‑app
   ```

2. **Install Dependencies** - none required! But you do need an API key.
3. **Create a `.env` file** (or just put it in `app.js` while testing):

    ```bash
    OPENWEATHER_API_KEY=YOUR_KEY_HERE
    ```
    Then replace the placeholder in `app.js`:

    ```js
    const apiKey = "YOUR_KEY_HERE";
    ```

---

## Folder structure
```bash
weather-app/
├── images/               # PNG icons for each weather state
├── app.js                # main JavaScript logic
├── style.css             # all styles
├── index.html            # entry point
└── README.md             # you’re here 🤓
```

---

## Credits

* Base source code from **GreatStack** and **Avinash**.
* Weather data powered by **OpenWeatherMap**.
* Sun/cloud/rain icons based on the free set from **FreeP!k**.

---

## License

This project is released under the **MIT License** — see the [`LICENSE`] file for details.



