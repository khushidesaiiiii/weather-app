import { useEffect, useState } from "react";
import { getTheme } from "../utils/ThemeMapper";

const WEATHER_API = "https://api.open-meteo.com";
const GEO_API = "https://geocoding-api.open-meteo.com/v1/search";

function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [daily, setDaily] = useState(null);
  const [theme, setTheme] = useState("sunny");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (lat, lon, cityName = "My Location") => {
    try {
      const url =
        `${WEATHER_API}/v1/forecast?latitude=${lat}&longitude=${lon}` +
        `&timezone=auto` +
        `&current=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,weather_code,wind_speed_10m,visibility` +
        `&hourly=temperature_2m,precipitation,rain,snowfall,weather_code` +
        `&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_hours,daylight_duration,wind_speed_10m_max` +
        `&forecast_days=1`;

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Weather API request failed");
      }

      const data = await res.json();

      if (!data?.current) {
        throw new Error("Invalid weather data");
      }

      const weatherCode = data.current.weather_code;
      const hour = new Date().getHours();
      const themeName = getTheme(weatherCode, hour);

      setTheme(themeName);

      // CURRENT WEATHER
      setWeather({
        city: cityName,
        temp: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        dewPoint: data.current.dew_point_2m,
        wind: data.current.wind_speed_10m,
        visibility: data.current.visibility,
        code: weatherCode,
      });

      // HOURLY WEATHER
      setHourly({
        time: data?.hourly?.time || [],
        temp: data?.hourly?.temperature_2m || [],
        rain: data?.hourly?.rain || [],
        snow: data?.hourly?.snowfall || [],
      });

      // DAILY WEATHER
      setDaily({
        maxTemp: data?.daily?.temperature_2m_max?.[0],
        minTemp: data?.daily?.temperature_2m_min?.[0],
        sunrise: data?.daily?.sunrise?.[0],
        sunset: data?.daily?.sunset?.[0],
        uvIndex: data?.daily?.uv_index_max?.[0],
        precipitationHours: data?.daily?.precipitation_hours?.[0],
        daylightDuration: data?.daily?.daylight_duration?.[0],
        maxWind: data?.daily?.wind_speed_10m_max?.[0],
      });
    } catch (err) {
      console.error("Weather fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCityWeather = async (cityName) => {
    try {
      const geoRes = await fetch(`${GEO_API}?name=${cityName}&count=1`);

      if (!geoRes.ok) {
        throw new Error("Geocoding API failed");
      }

      const geoData = await geoRes.json();

      if (!geoData?.results?.length) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name } = geoData.results[0];

      await fetchWeather(latitude, longitude, name);
    } catch (err) {
      console.error("City search error:", err);
      setError(err.message);
      setLoading(false);
    }
  };
  const fetchCityNameFromCoordinates = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
        { headers: { Accept: "application/json" } },
      );
      if (!res.ok) {
        return "Current Location";
      }
      const data = await res.json();
      return (
        data?.address?.city ||
        data?.address?.town ||
        data?.address?.village ||
        "Current Location"
      );
    } catch (err) {
      console.error("Reverse geocode error:", err);
      return "Current Location";
    }
  };

  const fetchUserLocationWeather = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const cityName = await fetchCityNameFromCoordinates(lat, lon);
        fetchWeather(lat, lon, cityName);
      },
      () => {
        setError("Location permission denied");
        setLoading(false);
      },
    );
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (city && city.trim() !== "") {
      fetchCityWeather(city);
    } else {
      fetchUserLocationWeather();
    }
  }, [city]);

  return {
    weather,
    hourly,
    daily,
    theme,
    loading,
    error,
  };
}

export default useWeather;
