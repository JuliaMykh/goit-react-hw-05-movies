async function getSearchMovie(query, page = 1) {
  const key = '73f6ff20fa414d222403a4af56220c3d';
  const url = 'https://api.themoviedb.org/3/search/movie';
  const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getSearchMovie;