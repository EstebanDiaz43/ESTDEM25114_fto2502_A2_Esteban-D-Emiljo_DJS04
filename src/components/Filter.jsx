import { genres } from "../data";
import { filterAndSortByGenre } from "../utils/filterall";

export default function Filtersection({
  selectedGenre,
  setSelectedGenre,
  sortByUpdated,
  setSortByUpdated,
}) {
  // Handle dropdown change and filter podcasts
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleUpdatedChange = (e) => {
    setSortByUpdated(e.target.value === "1");
  };

  return (
    <div className="filter-header">
      <h3>Filter by:</h3>
      <div className="filter-options">
        <select
          className="dropdown"
          id="genredropdown"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.title}
            </option>
          ))}
        </select>

        <select
          className="dropdown"
          id="updateddropdown"
          value={sortByUpdated ? "1" : ""}
          onChange={handleUpdatedChange}
        >
          <option value="">A-Z</option>
          <option value="1">Most Recently Updated</option>
        </select>
      </div>
    </div>
  );
}
