import SearchBar from "../SearchBar";

export default function Navbar({ setCity }) {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Weather</h2>
      </div>
      <SearchBar setCity={setCity} />
    </div>
  );
}
