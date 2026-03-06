import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar({ setCity }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input);
      setInput("");
    }
  };

  return (
    <div className="search-bar">
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search City..."
      />
      <button onClick={handleSubmit}>
        <IoSearchSharp />   
      </button>
    </div>
  );
}
