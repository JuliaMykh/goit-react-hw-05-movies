export async function getSearchMovie(query) {
  const key = '73f6ff20fa414d222403a4af56220c3d';
  const url = 'https://api.themoviedb.org/3/search/movie';
  const filter = `?api_key=${key}&query=${query}&language=en-US&page=1&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

