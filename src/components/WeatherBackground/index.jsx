import { useMemo } from "react";

export default function WeatherBackground({ theme }) {
  const particles = useMemo(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 3 + Math.random() * 5,
      size: Math.random() * 5 + 1,
    }));
  }, [theme]);

  return (
    <div className="weather-bg">
      {theme === "rain" &&
        particles.map((p) => (
          <span
            key={p.id}
            className="rain-drop"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}

      {theme === "snow" &&
        particles.map((p) => (
          <span
            key={p.id}
            className="snow-flake"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration + 4}s`,
            }}
          />
        ))}

      {theme === "night" &&
        particles.map((p) => (
          <span
            key={p.id}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

      {theme === "sunny" && <div className="sun"></div>}

      {theme === "sunset" && <div className="sunset-sun"></div>}

      {theme === "cloudy" && (
        <>
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="cloud cloud3"></div>
        </>
      )}
    </div>
  );
}
