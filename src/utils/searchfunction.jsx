export function selectPodcastByTitle(podcasts, title) {
  return (
    podcasts.find(
      (podcast) => podcast.title.toLowerCase() === title.toLowerCase()
    ) || null
  );
}
