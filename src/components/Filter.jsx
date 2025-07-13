export default function Filtersection() {
  return (
    <div className="filter-header">
      <h3>Filter by:</h3>
      <div className="filter-options">
        <select className="dropdown" id="genredropdown">
          <option value="">All Genres</option>
          <option value="podcast1">Podcast 1</option>
          <option value="podcast2">Podcast 2</option>
          <option value="podcast3">Podcast 3</option>
        </select>

        <select className="dropdown" id="updateddropdown">
          <option value="">Recently Updated</option>
          <option value="1">1 Season</option>
          <option value="2">2 Seasons</option>
          <option value="3">3 Seasons</option>
        </select>
      </div>
    </div>
  );
}
