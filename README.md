# 🌦 Animated Weather App

A modern **React + Vite weather application** with dynamic themes and animated backgrounds that change based on real-time weather conditions and time of day.

The app automatically detects the user's location or allows searching for any city worldwide. It then displays detailed weather information along with visually immersive weather animations like rain, snow, stars, clouds, and sunset glow.

---

## ✨ Features

### 🌍 Location Support

* Detects **user's current location automatically**
* Search for **any city worldwide**
* **Autocomplete city search** using geocoding API

### 🌤 Weather Information

* Current temperature
* Humidity
* Wind speed
* Visibility
* Dew point
* Daily max / min temperature
* UV index
* Sunrise & sunset
* Precipitation hours
* Hourly temperature forecast

### 🎨 Dynamic Weather Themes

The UI theme changes automatically depending on weather conditions and time.

| Condition   | Theme                      |
| ----------- | -------------------------- |
| ☀ Clear Day | Sunny sky with glowing sun |
| 🌇 Evening  | Sunset gradient            |
| 🌙 Night    | Starry sky                 |
| 🌧 Rain     | Rain particle animation    |
| ❄ Snow      | Snow particle animation    |
| ☁ Cloudy    | Moving clouds              |

### 🎬 Animated Weather Backgrounds

Custom background animations make the UI feel alive.

* Twinkling night stars
* Falling rain particles
* Snowfall particles
* Moving clouds
* Sun glow animation
* Sunset glow effect

### 💎 Modern UI

* Glassmorphism weather cards
* Gradient temperature display
* Smooth scrolling hourly forecast
* Responsive design
* Smooth theme transitions

---

## 🖥 Tech Stack

* **React**
* **Vite**
* **CSS3 Animations**
* **React Icons**
* **Open-Meteo Weather API**

---

## 🌐 APIs Used

### Weather Data

Open Meteo API

```
https://api.open-meteo.com
```

Provides:

* Current weather
* Hourly forecast
* Daily forecast
* Sunrise & sunset
* Wind & precipitation data

### Geocoding API

Open Meteo Geocoding

```
https://geocoding-api.open-meteo.com
```

Used for:

* City search
* Autocomplete suggestions
* Latitude / longitude lookup

### Reverse Geocoding

OpenStreetMap Nominatim

Used to detect user's current city from GPS coordinates.

---

## 📂 Project Structure

```
src
│
├── components
│   ├── Navbar
│   ├── SearchBar
│   ├── WeatherCard
│   ├── Loader
│   └── WeatherBackground
│
├── hooks
│   └── useWeather.js
│
├── utils
│   └── ThemeMapper.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/weather-app.git
```

Go into the project folder:

```bash
cd weather-app
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

App will start at:

```
http://localhost:5173
```

---

## 📸 Screenshots

### Sunset Theme

<img width="1352" height="607" alt="image" src="https://github.com/user-attachments/assets/140efa7a-65ae-4f38-a78d-f457bddf1d69" />


### Rain Theme

<img width="1352" height="607" alt="image" src="https://github.com/user-attachments/assets/ca2397cb-8d1e-4bff-a177-85a2c078fc60" />


### Night Theme

<img width="1354" height="596" alt="image" src="https://github.com/user-attachments/assets/550ba941-30aa-436b-bb62-d6b928c171c6" />


### Snow Theme

<img width="1354" height="596" alt="image" src="https://github.com/user-attachments/assets/14643893-3212-47d2-9861-c4e0bd717c67" />


---

## ⚡ Performance Optimizations

* Debounced city search requests
* Lazy loaded navbar component
* Memoized particle animations
* Minimal API calls

---

## 📱 Responsive Design

The application is optimized for:

* Desktop
* Tablet
* Mobile devices

---

## 🧠 Future Improvements

Possible enhancements:

* Weather radar map
* Temperature graphs
* Weekly forecast view
* Air quality data
* PWA support
* Animated lightning storms
* Weather sound effects

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

Developed by **Khushi**

If you like the project, consider giving it a ⭐ on GitHub!
