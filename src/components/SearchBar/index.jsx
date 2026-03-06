import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";

const GEO_API = "https://geocoding-api.open-meteo.com/v1/search";

export default function SearchBar({ setCity }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!input || input.length < 2) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(`${GEO_API}?name=${input}&count=5`);

        const data = await res.json();

        setSuggestions(data?.results || []);
      } catch (err) {
        console.error(err);
      }
    }, 300); // debounce

    return () => clearTimeout(timeout);
  }, [input]);

  const handleSelect = (city) => {
    setCity(city.name);
    setInput(city.name);
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setCity(input);
    setSuggestions([]);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search City..."
        />

        <button onClick={handleSubmit}>
          <IoSearchSharp />
        </button>
      </div>

      {suggestions.length > 0 && (
        <div className="autocomplete">
          {suggestions.map((city, index) => (
            <div
              key={index}
              className="suggestion"
              onClick={() => handleSelect(city)}
            >
              {city.name}, {city.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
