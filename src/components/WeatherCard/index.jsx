import { MdWaterDrop, MdOutlineVisibility } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { WiRainMix, WiSunrise } from "react-icons/wi";
import { FaRegSnowflake } from "react-icons/fa";
import { TbSunset2Filled, TbUvIndex } from "react-icons/tb";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import { MdDewPoint } from "react-icons/md";
import { WiHot } from "react-icons/wi";

export default function WeatherCard({ weather, hourly, daily }) {
  if (!weather) return null;

  const formatHour = (time) => {
    const date = new Date(time);
    return date.getHours().toString().padStart(2, "0") + ":00";
  };

  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="weather-card">
      <section className="current-weather-card">
        <div className="current-left">
          <h2 className="city">{weather.city}</h2>

          <div className="temperature-main">
            <h1>{Math.round(weather.temp)}°C</h1>
            <div className="temp-range">
              <span>H: {daily?.maxTemp}°</span>
              <span> L: {daily?.minTemp}°</span>
            </div>
          </div>
        </div>

        <div className="current-right">
          <Stat
            icon={<MdWaterDrop />}
            label="Humidity"
            value={`${weather.humidity}%`}
          />
          <Stat icon={<FaWind />} label="Wind" value={`${weather.wind} km/h`} />
          <Stat
            icon={<MdOutlineVisibility />}
            label="Visibility"
            value={`${Math.round(weather.visibility / 1000)} km`}
          />
          <Stat
            icon={<MdDewPoint />}
            label="Dew Point"
            value={`${weather.dewPoint}°C`}
          />
        </div>
      </section>

      <section className="hourly-section">
        <h3 className="section-title">Hourly Forecast</h3>

        <div className="hourly-container">
          {hourly?.time?.map((time, index) => (
            <div key={index} className="hour-card">
              <p className="hour">{formatHour(time)}</p>

              <p className="hour-temp">{Math.round(hourly.temp?.[index])}°</p>

              <div className="precip">
                {hourly.rain?.[index] > 0 ? (
                  <span >
                    <WiRainMix /> {hourly.rain[index]}mm
                  </span>
                ) : hourly.snow?.[index] > 0 ? (
                  <span>
                    <FaRegSnowflake /> {hourly.snow[index]}mm
                  </span>
                ) : (
                  <span className="clear"></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sun-cycle">
        <Stat
          icon={<WiSunrise />}
          label="Sunrise"
          value={formatTime(daily?.sunrise)}
        />

        <Stat
          icon={<TbSunset2Filled />}
          label="Sunset"
          value={formatTime(daily?.sunset)}
        />
      </section>

      <section className="daily-weather-grid">
        <Stat
          icon={<FaTemperatureArrowUp />}
          label="Max Temperature"
          value={`${daily?.maxTemp}°C`}
        />

        <Stat
          icon={<FaTemperatureArrowDown />}
          label="Min Temperature"
          value={`${daily?.minTemp}°C`}
        />

        <Stat icon={<TbUvIndex />} label="UV Index" value={daily?.uvIndex} />

        <Stat
          icon={<WiHot />}
          label="Precipitation Hours"
          value={`${daily?.precipitationHours} hrs`}
        />
      </section>
    </div>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="weather-data-card">
      <div className="icon">{icon}</div>
      <div className="stat-info">
        <span className="label">{label}</span>
        <h3 className="value">{value}</h3>
      </div>
    </div>
  );
}
