/**
 * Filters and sorts podcasts by selected genre.
 * @param {Array} podcasts - Array of podcast objects with a 'genres' property (array of genre ids).
 * @param {string} selectedGenre - The genre id to filter by. If empty, returns all podcasts.
 * @returns {Array} Filtered and sorted podcasts.
 */
export function filterAndSortByGenre(podcasts, selectedGenre) {
  if (!Array.isArray(podcasts)) return [];
  if (!selectedGenre) {
    // No genre selected, return all sorted
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
