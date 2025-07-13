/**
 * Filters and sorts podcasts by selected genre.
 * @param {Array} podcasts - Array of podcast objects with a 'genres' property (array of genre ids).
 * @param {string} selectedGenre - The genre id to filter by. If empty, returns all podcasts.
 * @returns {Array} Filtered and sorted podcasts.
 */
export function filterAndSortByGenre(podcasts, selectedGenre) {
  if (!Array.isArray(podcasts)) return [];
  if (!selectedGenre) {
    // No genre selected, return all sorted by title
    return podcasts.slice().sort((a, b) => a.title.localeCompare(b.title));
  }

  const lowerGenre = selectedGenre.toLowerCase();

  const filtered = podcasts.filter(
    (podcast) =>
      Array.isArray(podcast.genres) &&
      podcast.genres.some(
        (genreId) => String(genreId).toLowerCase() === lowerGenre
      )
  );

  return filtered.slice().sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Sorts podcasts by most recently updated.
 * @param {Array} podcasts - Array of podcast objects with an 'updated' property (date string).
 * @returns {Array} Sorted podcasts (most recent first).
 */
export function sortByMostRecentlyUpdated(podcasts) {
  if (!Array.isArray(podcasts)) return [];
  return podcasts.slice().sort((a, b) => {
    const dateA = new Date(a.updated);
    const dateB = new Date(b.updated);
    return dateB - dateA; // Most recent first
  });
}
