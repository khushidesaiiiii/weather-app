import { useMemo } from "react";

export default function WeatherBackground({ theme }) {

  const particles = useMemo(() => {
    return new Array(80).fill(0);
  }, []);

  if (theme === "rain") {
    return (
      <div className="weather-bg rain-bg">
        {particles.map((_, i) => (
          <span key={i} className="rain-drop"></span>
        ))}
      </div>
    );
  }

  if (theme === "snow") {
    return (
      <div className="weather-bg snow-bg">
        {particles.map((_, i) => (
          <span key={i} className="snow-flake"></span>
        ))}
      </div>
    );
  }

  if (theme === "night") {
    return (
      <div className="weather-bg night-bg">
        {particles.map((_, i) => (
          <span key={i} className="star"></span>
        ))}
      </div>
    );
  }

  if (theme === "sunset") {
    return (
      <div className="weather-bg sunset-bg">
        <div className="sun-glow"></div>
      </div>
    );
  }

  if (theme === "cloudy") {
    return (
      <div className="weather-bg cloudy-bg">
        <div className="cloud"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>
    );
  }

  return (
    <div className="weather-bg sunny-bg">
      <div className="sun"></div>
    </div>
  );
}