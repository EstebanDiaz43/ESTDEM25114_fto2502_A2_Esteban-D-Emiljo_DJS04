import { genres } from "../data";
import { filterAndSortByGenre } from "../utils/filtergenres";

export default function Filtersection({ selectedGenre, setSelectedGenre }) {
  // Handle dropdown change and filter podcasts
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
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

        <select className="dropdown" id="updateddropdown">
          <option value="">Recently Updated</option>
          <option value="1"></option>
        </select>
      </div>
    </div>
  );
}
