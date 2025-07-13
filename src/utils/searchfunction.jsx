/**
 * Filters podcasts by title starting with the search string.
 * @param {Array} podcasts - Array of podcast objects with a 'title' property.
 * @param {string} search - The search string.
 * @returns {Array} Filtered podcasts.
 */
export function searchPodcastsByTitleStart(podcasts, search) {
  if (!search) return podcasts;
  const lowerSearch = search.toLowerCase();
  return podcasts.filter((podcast) =>
    podcast.title.toLowerCase().startsWith(lowerSearch)
  );
}
