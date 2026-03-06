export const getCoordinates = async (city) => {
  const GeoApi = import.meta.env.VITE_GEOAPI;
  try {
    const geoRes = await fetch(`${GeoApi}?name=${city}&count=1`);

    const geoData = await geoRes.json();

    const lat = geoData?.results?.[0]?.latitude;
    const lon = geoData?.results?.[0]?.longitude;

    console.log("Helper: ", lat, lon);

    return { lat, lon };
  } catch (err) {
    console.error(err);
  }
};
