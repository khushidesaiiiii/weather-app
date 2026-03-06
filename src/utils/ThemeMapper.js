export const getTheme = (code, hour) => {
  if (code >= 61 && code <= 67) return "rain";

  if (code >= 71 && code <= 77) return "snow";

  if (hour >= 18 || hour <= 5) return "night";
  if (code >= 1 && code <= 3) return "cloudy";

  if (hour >= 16 && hour < 18) return "sunset";

  return "sunny";
};
