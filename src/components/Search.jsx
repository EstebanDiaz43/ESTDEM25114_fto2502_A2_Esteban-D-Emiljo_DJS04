export default function Searchsection() {
  return (
    <>
      <div className="Header-search">
        <input
          className="Header-search-input"
          type="text"
          placeholder="Search podcasts..."
          aria-label="Search podcasts"
        />
        <img
          className="Header-search-icon"
          alt="Search Icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&s"
        />
      </div>
    </>
  );
}
