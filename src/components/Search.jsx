import { useState } from "react";
import { searchPodcastsByTitleStart } from "../utils/searchfunction";
import PodcastCard from "./PodcastCard";

/**
 * Returns the podcast card object that matches the given title.
 * @param {Array} podcasts - Array of podcast objects.
 * @param {string} title - The title to search for.
 * @returns {Object|null} The matching podcast object or null if not found.
 */

export default function Searchsection({ podcasts = [], genres = [] }) {
  const [search, setSearch] = useState("");
  const filteredPodcasts = searchPodcastsByTitleStart(podcasts, search);

  return (
    <>
      <div className="Header-search">
        <input
          className="Header-search-input"
          type="text"
          placeholder="Search podcasts..."
          aria-label="Search podcasts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          className="Header-search-icon"
          alt="Search Icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&s"
        />
      </div>
      <div className="grid">
        {filteredPodcasts.length > 0 ? (
          filteredPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
          ))
        ) : (
          <div className="no-results">
            <p>No podcasts found matching "{search}"</p>
          </div>
        )}
      </div>
    </>
  );
}
