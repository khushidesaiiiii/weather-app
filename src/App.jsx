import { lazy, Suspense, useState } from "react";

import useWeather from "./hooks/useWeather";

import Loader from "./components/Loader";
import WeatherCard from "./components/WeatherCard";
import WeatherBackground from "./components/WeatherBackground";
const Navbar = lazy(() => import("./components/Navbar/Navbar"));

function App() {
  const [city, setCity] = useState("");

  const { loading, weather, theme, hourly, daily } = useWeather(city);

  console.log("weather", weather);
  console.log("hour", hourly);
  console.log("daily", daily);

  return (
    <Suspense fallback={<Loader />}>
      <div className={"night"}>
        <WeatherBackground theme={"night"} />
      {/* <div className={theme}>
        <WeatherBackground theme={theme} /> */}
        <Navbar setCity={setCity} />
        {loading && <Loader />}
        <WeatherCard hourly={hourly} weather={weather} daily={daily} />
      </div>
    </Suspense>
  );
}

export default App;
