import { useEffect, useState } from "react";
import PodcastGrid from "./components/PodcastGrid";
import { genres } from "./data";
import { fetchPodcasts } from "./api/fetchPodcasts";
import Header from "./components/Header";
import Filtersection from "./components/Filter";
import Searchsection from "./components/Search";
import {
  filterAndSortByGenre,
  sortByMostRecentlyUpdated,
} from "./utils/filterall";
import { searchPodcastsByTitleStart } from "./utils/searchfunction";

/**
 * App - The root component of the Podcast Explorer application. It handles:
 * - Fetching podcast data from a remote API
 * - Managing loading and error states
 * - Rendering the podcast grid once data is successfully fetched
 * - Displaying a header and fallback UI during loading or error
 * @returns {JSX.Element} The rendered application interface
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortByUpdated, setSortByUpdated] = useState(false); // <-- Add this

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  // Filter by genre first
  let genreFilteredPodcasts = filterAndSortByGenre(podcasts, selectedGenre);
  // Then filter by search
  let filteredPodcasts = searchPodcastsByTitleStart(
    genreFilteredPodcasts,
    search
  );

  // Sort by most recently updated if filter is active
  if (sortByUpdated) {
    filteredPodcasts = sortByMostRecentlyUpdated(filteredPodcasts);
  }

  return (
    <>
      <Header />
      <Filtersection
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        sortByUpdated={sortByUpdated}
        setSortByUpdated={setSortByUpdated}
      />
      <main>
        {loading && (
          <div className="message-container">
            <div className="spinner"></div>
            <p>Loading podcasts...</p>
          </div>
        )}
        {error && (
          <div className="message-container">
            <div className="error">
              Error occurred while tyring fetching podcasts: {error}
            </div>
          </div>
        )}
        {!loading && !error && (
          <Searchsection
            podcasts={filteredPodcasts}
            genres={genres}
            search={search}
            setSearch={setSearch}
          />
        )}
      </main>
    </>
  );
}
