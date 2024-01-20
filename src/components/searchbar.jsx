import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchPlayers } from "../components/playerSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchPlayers(searchQuery));
  };

  return (
    <div className="search-bar">
      <div className="search-container">
      <div></div>
      <input
      className="search-input"
        type="text"
        placeholder="Search players..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  </div>
  );
};

export default SearchBar;