export async function getTrends() {
  const key = '73f6ff20fa414d222403a4af56220c3d';
  const url = 'https://api.themoviedb.org/3/trending/movie/day';
  const filter = `?api_key=${key}`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data.results;

};

